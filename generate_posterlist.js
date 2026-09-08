#!/usr/bin/env node
/**
 * generate_posterboards.js
 * ------------------------------------------------------------------
 * Erzeugt eine Posterliste (Word + PDF) aus app-data.js:
 * pro Postersession (1 und 2) eine Liste aller Poster, sortiert nach
 * Boardnummer (nicht alphabetisch) — gedacht als Aufbau-/Aushänge-
 * Hilfe fürs Team.
 *
 * Quelle: die "Postersession 1"/"Postersession 2"-Infoblöcke in
 * app-data.js (Tag/Zeit der eigentlichen Postersession, nicht der
 * Speed Talks), jeweils mit deren posters[]-Array (board, title,
 * authorsDisplay, institutions).
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node generate_posterboards.js
 *
 * Erwartet im selben Ordner: app-data.js, Tagungslogo_9x22_trans.png
 * Standardmäßig landet die Ausgabe in einem Unterordner "output" direkt im
 * selben Ordner wie dieses Skript (wird automatisch angelegt, falls nicht
 * vorhanden).
 *
 * Optional überschreibbar:
 *   node generate_posterboards.js [outputDir] [app-data.js] [logo.png] [soffice.exe]
 *
 * Ausgabe: DGL2026_Posterboards.docx (+ .pdf, falls LibreOffice
 * installiert ist). Die .docx wird nach erfolgreicher PDF-Erzeugung
 * automatisch gelöscht.
 * ------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, VerticalAlign, ImageRun,
  Footer, PageNumber, PageBreak
} = require('docx');

function loadJSZip(){
  try { return require('jszip'); } catch (e) { return null; }
}

// -------------------------------------------------------------- paths --
const ARG = process.argv.slice(2);
const HERE = __dirname;
const OUTPUT_DIR    = path.resolve(ARG[0] || path.join(HERE, 'output'));
const APP_DATA_PATH = path.resolve(ARG[1] || path.join(HERE, 'app-data.js'));
const LOGO_PATH      = path.resolve(ARG[2] || path.join(HERE, 'Tagungslogo_9x22_trans.png'));

const SOFFICE_CANDIDATES = ARG[3] ? [ARG[3]] : [
  'soffice',
  'C:\\Users\\aoprei\\LibreOfficePortable\\App\\libreoffice\\program\\soffice.exe'
];

// -------------------------------------------------------------- style --
const FONT = 'Poppins';
const BRAND_BLUE = '003F75';
const MUTED = '5C6570';
const BORDER_LIGHT = 'E4E4E4';
const PAGE_W = 11907, PAGE_H = 16840; // A4, portrait, DXA
const MARGIN = 900;
const TABLE_WIDTH = PAGE_W - MARGIN * 2;
const OUTPUT_BASENAME = 'DGL2026_Posterliste';

const STAND_DATE = (() => {
  const now = new Date();
  return String(now.getDate()).padStart(2, '0') + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + now.getFullYear();
})();

// ------------------------------------------------------------- load data --
function loadAppData(filePath){
  const raw = fs.readFileSync(filePath, 'utf8');
  const jsonStr = raw.replace(/^\s*const\s+DATA\s*=\s*/, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function boardSortKey(board){
  const m = (board || '').match(/(\d+)/);
  const num = m ? parseInt(m[1], 10) : 999999;
  return { num, raw: board || '' };
}

function extractPosterSessions(DATA){
  const sessions = []; // { title, dayLabel, time, posters: [...] }
  for(const day of (DATA.programm || [])){
    for(const block of (day.blocks || [])){
      if(block.type === 'info' && Array.isArray(block.posters) && block.posters.length){
        sessions.push({
          title: block.title,
          dayLabel: day.label,
          time: block.time,
          posters: [...block.posters].sort((a, b) => {
            const ka = boardSortKey(a.board), kb = boardSortKey(b.board);
            if(ka.num !== kb.num) return ka.num - kb.num;
            return ka.raw.localeCompare(kb.raw, 'de');
          })
        });
      }
    }
  }
  return sessions;
}

// ------------------------------------------------------------ document --
function titleBlock(logoBuf){
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH - 5000, 5000],
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 16, color: BRAND_BLUE, space: 8 },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
    },
    rows: [ new TableRow({ children: [
      new TableCell({
        width: { size: TABLE_WIDTH - 5000, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { bottom: 200 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
        children: [
          new Paragraph({ children: [new TextRun({ text: 'Posterliste', bold: true, size: 52, color: BRAND_BLUE, font: FONT })] }),
          new Paragraph({ spacing: { before: 60 }, children: [new TextRun({ text: 'Stand: ' + STAND_DATE, size: 20, color: MUTED, font: FONT })] })
        ]
      }),
      new TableCell({
        width: { size: 5000, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { bottom: 200 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: logoBuf ? [new ImageRun({ data: logoBuf, transformation: { width: 306, height: 125 }, type: 'png' })] : [] })]
      })
    ] }) ]
  });
}

function sessionHeading(sess){
  return new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: BRAND_BLUE },
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text: `  ${sess.title} — ${sess.dayLabel}, ${sess.time}`, bold: true, size: 24, color: 'FFFFFF', font: FONT })]
  });
}

function parseBoard(board){
  const b = (board || '').trim();
  const m = b.match(/^(\d+)\s*(?:\(([^)]+)\))?$/);
  if(!m) return { num: b || '—', loc: '' };
  return { num: m[1], loc: m[2] || '' };
}

const COL_NUM = 900, COL_LOC = 2000;

function posterRow(poster){
  const { num, loc } = parseBoard(poster.board);
  const numCell = new TableCell({
    width: { size: COL_NUM, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 120, bottom: 160, right: 120 },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [new Paragraph({ children: [new TextRun({ text: num, bold: true, size: 20, color: BRAND_BLUE, font: FONT })] })]
  });
  const locCell = new TableCell({
    width: { size: COL_LOC, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 120, bottom: 160, right: 160 },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [new Paragraph({ children: [new TextRun({ text: loc, size: 18, color: MUTED, font: FONT })] })]
  });
  const contentCell = new TableCell({
    width: { size: TABLE_WIDTH - COL_NUM - COL_LOC, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 120, bottom: 160 },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [
      new Paragraph({ children: [new TextRun({ text: poster.title || '', bold: true, size: 20, color: '1A1A18', font: FONT })] }),
      new Paragraph({ spacing: { before: 40 }, children: [new TextRun({ text: poster.authorsDisplay || poster.authors || '', size: 18, color: MUTED, font: FONT })] })
    ]
  });
  return new TableRow({ children: [numCell, locCell, contentCell] });
}

function footerBlock(){
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'DGL 2026 · Posterliste · Seite ', size: 16, color: MUTED, font: FONT }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: FONT })
    ]
  })] });
}

function tableHeaderRow(){
  const cellStyle = (text, width) => new TableCell({
    width: { size: width, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
    margins: { top: 60, bottom: 60, right: 120 },
    borders: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BRAND_BLUE } },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 16, color: MUTED, font: FONT })] })]
  });
  return new TableRow({
    tableHeader: true,
    children: [
      cellStyle('Nr.', COL_NUM),
      cellStyle('Ort', COL_LOC),
      cellStyle('Titel', TABLE_WIDTH - COL_NUM - COL_LOC)
    ]
  });
}

function buildDoc(posterSessions, logoBuf){
  const children = [ titleBlock(logoBuf) ];
  posterSessions.forEach((sess, idx) => {
    if(idx > 0) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(sessionHeading(sess));
    children.push(new Table({
      width: { size: TABLE_WIDTH, type: WidthType.DXA },
      columnWidths: [COL_NUM, COL_LOC, TABLE_WIDTH - COL_NUM - COL_LOC],
      borders: {
        top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
      },
      rows: [ tableHeaderRow(), ...sess.posters.map(posterRow) ]
    }));
  });

  return new Document({
    styles: { default: { document: { run: { font: FONT, size: 20 } } } },
    sections: [ {
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 900, bottom: 900, left: MARGIN, right: MARGIN }, pageNumbers: { start: 1 } } },
      footers: { default: footerBlock() },
      children
    } ]
  });
}

// ------------------------------------------------------------------ pdf --
let workingSofficePath = null;

async function fixPageNumberFont(docxBuffer){
  const JSZip = loadJSZip();
  if(!JSZip) return docxBuffer;
  const zip = await JSZip.loadAsync(docxBuffer);
  const footerFiles = Object.keys(zip.files).filter(name => /^word\/footer\d+\.xml$/.test(name));
  let changed = false;
  for(const name of footerFiles){
    const original = await zip.file(name).async('string');
    let xml = original.replace(
      /<w:instrText xml:space="preserve">PAGE<\/w:instrText>/g,
      '<w:instrText xml:space="preserve">PAGE \\* MERGEFORMAT</w:instrText>'
    );
    xml = xml.replace(
      /(<w:r>(?:(?!<\/w:r>).)*?<w:rPr>((?:(?!<\/w:rPr>).)*?)<\/w:rPr>(?:(?!<\/w:r>).)*?<w:fldChar w:fldCharType="separate"\/>)(<w:fldChar w:fldCharType="end"\/>)/g,
      (match, before, rPrInner, endPart) => `${before}<w:t>1</w:t></w:r><w:r><w:rPr>${rPrInner}</w:rPr>${endPart}`
    );
    if(xml !== original){ zip.file(name, xml); changed = true; }
  }
  if(!changed) return docxBuffer;
  return zip.generateAsync({ type: 'nodebuffer' });
}

function tryConvertToPdf(docxPath, outDir){
  const candidates = workingSofficePath ? [workingSofficePath] : SOFFICE_CANDIDATES;
  for(const candidate of candidates){
    try {
      execFileSync(candidate, [
        '--headless', '--norestore', '--nologo', '--nofirststartwizard',
        '--convert-to', 'pdf:writer_pdf_Export', '--outdir', outDir, docxPath
      ], { stdio: 'pipe', timeout: 60000 });
      workingSofficePath = candidate;
      return true;
    } catch (err) { /* try next */ }
  }
  return false;
}

// ------------------------------------------------------------------ main --
async function main(){
  console.log('Lese Programmdaten aus', APP_DATA_PATH);
  console.log('Zielordner:', OUTPUT_DIR);

  const DATA = loadAppData(APP_DATA_PATH);
  const posterSessions = extractPosterSessions(DATA);
  const totalPosters = posterSessions.reduce((sum, s) => sum + s.posters.length, 0);
  console.log(`${posterSessions.length} Postersession(en), ${totalPosters} Poster gefunden.`);

  let logoBuf = null;
  if(fs.existsSync(LOGO_PATH)){
    logoBuf = fs.readFileSync(LOGO_PATH);
  } else {
    console.warn('WARNUNG: Logo nicht gefunden unter', LOGO_PATH, '— Dokument wird ohne Logo erzeugt.');
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const doc = buildDoc(posterSessions, logoBuf);
  const buf = await fixPageNumberFont(await Packer.toBuffer(doc));
  const docxPath = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}.docx`);
  fs.writeFileSync(docxPath, buf);
  console.log(`-> ${path.basename(docxPath)} (${buf.length} Bytes)`);

  const ok = tryConvertToPdf(docxPath, OUTPUT_DIR);
  if(ok){
    console.log(`-> PDF erzeugt: ${OUTPUT_BASENAME}.pdf`);
    fs.unlinkSync(docxPath);
  } else {
    console.warn(`\nHinweis: LibreOffice wurde unter keinem der bekannten Pfade gefunden (${SOFFICE_CANDIDATES.join(', ')}) — es wurde nur die .docx-Datei erzeugt, kein PDF.\nFalls LibreOffice woanders liegt, gib den vollen Pfad zu soffice.exe als 4. Argument mit (siehe Kommentar im Skript-Kopf).`);
  }
  console.log('\nFertig.');
}

main().catch(err => { console.error('Fehler:', err); process.exit(1); });
