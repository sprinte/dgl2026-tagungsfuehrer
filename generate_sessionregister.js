#!/usr/bin/env node
/**
 * generate_sessionregister.js
 * ------------------------------------------------------------------
 * Erzeugt ein kompaktes Session-Code-Register (Word + PDF) aus
 * app-data.js: eine Tabelle Code → Titel → Raum → Tag, Zeit, sortiert
 * nach Code (alphanumerisch, z.B. A01, A02, ... A10, S01, ... WRHC).
 * Gedacht als schnelles Nachschlagewerk, ergänzend zum vollen
 * Raumbelegungsplan.
 *
 * Sessions, die aus mehreren Teilen bestehen (z.B. "A01" Teil 1/3,
 * 2/3, 3/3, weil die Session über mehrere Zeitblöcke läuft), erhalten
 * jeweils eine eigene Zeile mit ihrem individuellen Tag/Zeit/Raum,
 * direkt untereinander sortiert.
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node generate_sessionregister.js
 *
 * Erwartet im selben Ordner: app-data.js, Tagungslogo_9x22_trans.png
 * Standardmäßig landet die Ausgabe in einem Unterordner "output" direkt im
 * selben Ordner wie dieses Skript (wird automatisch angelegt, falls nicht
 * vorhanden).
 *
 * Optional überschreibbar:
 *   node generate_sessionregister.js [outputDir] [app-data.js] [logo.png] [soffice.exe]
 *
 * Ausgabe: DGL2026_Session-Register.docx (+ .pdf, falls LibreOffice
 * installiert ist). Die .docx wird nach erfolgreicher PDF-Erzeugung
 * automatisch gelöscht.
 * ------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, VerticalAlign, ImageRun,
  Footer, PageNumber
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
const OUTPUT_BASENAME = 'DGL2026_Session-Register';

const DAY_ORDER = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

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

function codeSortKey(code){
  const m = (code || '').match(/^([A-Za-zÀ-ÖØ-öø-ÿ]+)(\d*)/);
  const letters = m ? m[1].toUpperCase() : (code || '').toUpperCase();
  const num = m && m[2] ? parseInt(m[2], 10) : -1;
  return { letters, num };
}

function extractRegister(DATA){
  const rows = [];
  DATA.programm.forEach((day, dayIdx) => {
    for(const block of (day.blocks || [])){
      if(block.type !== 'parallel') continue;
      for(const session of (block.sessions || [])){
        if(!session.code && !session.title) continue;
        rows.push({
          code: session.code || '—',
          title: session.title || '',
          room: session.room || '',
          dayLabel: day.label,
          dayIdx,
          time: block.time || ''
        });
      }
    }
  });

  rows.sort((a, b) => {
    const ka = codeSortKey(a.code), kb = codeSortKey(b.code);
    if(ka.letters !== kb.letters) return ka.letters.localeCompare(kb.letters, 'de');
    if(ka.num !== kb.num) return ka.num - kb.num;
    if(a.dayIdx !== b.dayIdx) return a.dayIdx - b.dayIdx;
    return (a.time || '').localeCompare(b.time || '');
  });

  return rows;
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
          new Paragraph({ children: [new TextRun({ text: 'Session-Code-Register', bold: true, size: 48, color: BRAND_BLUE, font: FONT })] }),
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

function headerRow(){
  const cellStyle = (text, width) => new TableCell({
    width: { size: width, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
    shading: { fill: BRAND_BLUE },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 18, color: 'FFFFFF', font: FONT })] })]
  });
  return new TableRow({
    tableHeader: true,
    children: [
      cellStyle('Code', 1300),
      cellStyle('Titel', TABLE_WIDTH - 1300 - 2600 - 2600),
      cellStyle('Raum', 2600),
      cellStyle('Tag, Zeit', 2600)
    ]
  });
}

function dataRow(r){
  const cellStyle = (text, width, bold) => new TableCell({
    width: { size: width, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP,
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    borders: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT } },
    children: [new Paragraph({ children: [new TextRun({ text, bold: !!bold, size: 18, color: bold ? BRAND_BLUE : '1A1A18', font: FONT })] })]
  });
  return new TableRow({
    children: [
      cellStyle(r.code, 1300, true),
      cellStyle(r.title, TABLE_WIDTH - 1300 - 2600 - 2600, false),
      cellStyle(r.room, 2600, false),
      cellStyle(`${r.dayLabel}, ${r.time}`, 2600, false)
    ]
  });
}

function footerBlock(){
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'DGL 2026 · Session-Code-Register · Seite ', size: 16, color: MUTED, font: FONT }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: FONT })
    ]
  })] });
}

function buildDoc(rows, logoBuf){
  const table = new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [1300, TABLE_WIDTH - 1300 - 2600 - 2600, 2600, 2600],
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
    },
    rows: [ headerRow(), ...rows.map(dataRow) ]
  });

  return new Document({
    styles: { default: { document: { run: { font: FONT, size: 18 } } } },
    sections: [ {
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 900, bottom: 900, left: MARGIN, right: MARGIN }, pageNumbers: { start: 1 } } },
      footers: { default: footerBlock() },
      children: [ titleBlock(logoBuf), new Paragraph({ spacing: { after: 160 }, children: [] }), table ]
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
  const rows = extractRegister(DATA);
  console.log(`${rows.length} Session-Zeilen gefunden.`);

  let logoBuf = null;
  if(fs.existsSync(LOGO_PATH)){
    logoBuf = fs.readFileSync(LOGO_PATH);
  } else {
    console.warn('WARNUNG: Logo nicht gefunden unter', LOGO_PATH, '— Dokument wird ohne Logo erzeugt.');
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const doc = buildDoc(rows, logoBuf);
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
