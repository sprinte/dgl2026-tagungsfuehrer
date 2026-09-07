#!/usr/bin/env node
/**
 * generate_announcements_pdf.js
 * ------------------------------------------------------------------
 * Erzeugt eine übersichtliche, nach Tag gruppierte Übersicht (Word +
 * PDF) aller aktiven In-App-Ankündigungen direkt aus announcement.json
 * der DGL-2026-Tagungsführer-App.
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node generate_announcements_pdf.js
 *
 * Erwartet standardmäßig, dass diese Dateien im selben Ordner liegen:
 *   - announcement.json
 *   - Tagungslogo_9x22_trans.png
 *
 * Standardmäßig landet die Ausgabe eine Ordnerebene ÜBER dem Ordner, in dem
 * dieses Skript liegt (wie beim Raumbelegungsplan-Generator) — z.B. wenn das
 * Skript in .../dgl2026-tagungsfuehrer/announcements-pdf-generator/ liegt,
 * entstehen die Dateien in .../dgl2026-tagungsfuehrer/.
 *
 * Optional lassen sich die Pfade überschreiben:
 *   node generate_announcements_pdf.js [outputDir] [announcement.json] [logo.png] [soffice.exe]
 *
 * Ausgabe: DGL2026_Ankündigungen_App.docx (+ .pdf, falls LibreOffice
 * installiert ist) im Ausgabeordner.
 *
 * Voraussetzung: `npm install docx` im selben Ordner (einmalig).
 * Für die PDF-Erzeugung zusätzlich LibreOffice (Kommando `soffice`)
 * installiert — falls nicht vorhanden, wird nur die .docx-Datei
 * erzeugt, das Skript bricht deswegen nicht ab.
 * ------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, VerticalAlign, ImageRun,
  Footer, PageNumber
} = require('docx');

function loadJSZip(){
  try { return require('jszip'); } catch (e) { /* fall through */ }
  const candidates = [
    path.join(require.resolve('docx'), '..', '..', '..', 'jszip'),
  ];
  for(const candidate of candidates){
    try { if(fs.existsSync(candidate)) return require(candidate); } catch (e) { /* ignore */ }
  }
  return null;
}

// -------------------------------------------------------------- paths --
const ARG = process.argv.slice(2);
const HERE = __dirname;
// Default output folder: one level ABOVE the folder this script lives in
// (i.e. dirname() of the script's own folder) — same convention as
// generate_raumbelegungsplan.js, e.g. if the script sits in
// .../dgl2026-tagungsfuehrer/announcements-pdf-generator/, the .docx/.pdf
// files land in .../dgl2026-tagungsfuehrer/ by default.
const OUTPUT_DIR   = path.resolve(ARG[0] || path.dirname(HERE));
const DATA_PATH    = path.resolve(ARG[1] || path.join(HERE, 'announcement.json'));
const LOGO_PATH     = path.resolve(ARG[2] || path.join(HERE, 'Tagungslogo_9x22_trans.png'));

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
const OUTPUT_BASENAME = 'DGL2026_Ankündigungen_App';

const WEEKDAY_DE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

// ------------------------------------------------------------- load data --
function loadAnnouncements(filePath){
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  return data.filter(a => a.enabled);
}

function groupByDay(items){
  const byDay = new Map();
  for(const a of items){
    const begins = new Date(a.begins);
    const dayKey = begins.toISOString().slice(0, 10); // YYYY-MM-DD
    if(!byDay.has(dayKey)) byDay.set(dayKey, []);
    byDay.get(dayKey).push(a);
  }
  for(const [, arr] of byDay){
    arr.sort((x, y) => new Date(x.begins) - new Date(y.begins));
  }
  return new Map([...byDay.entries()].sort());
}

function formatDayHeading(dayKey){
  const d = new Date(dayKey + 'T00:00:00');
  const weekday = WEEKDAY_DE[d.getDay()];
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${weekday}, ${dd}.${mm}.${yyyy}`;
}

function formatTimeRange(a){
  const b = new Date(a.begins);
  const e = new Date(a.expires);
  const fmt = (dt) => String(dt.getHours()).padStart(2, '0') + ':' + String(dt.getMinutes()).padStart(2, '0');
  return `${fmt(b)}–${fmt(e)}`;
}

// ------------------------------------------------------------ document --
function titleBlock(logoBuf){
  const now = new Date();
  const stand = String(now.getDate()).padStart(2, '0') + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + now.getFullYear();
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
          new Paragraph({ children: [new TextRun({ text: 'In-App-Ankündigungen', bold: true, size: 56, color: BRAND_BLUE, font: FONT })] }),
          new Paragraph({ spacing: { before: 60 }, children: [new TextRun({ text: 'Stand: ' + stand, size: 20, color: MUTED, font: FONT })] })
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

function dayHeading(dayKey){
  return new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: BRAND_BLUE },
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text: '  ' + formatDayHeading(dayKey), bold: true, size: 26, color: 'FFFFFF', font: FONT })]
  });
}

function announcementRow(a){
  const timeCell = new TableCell({
    width: { size: 1600, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 120, bottom: 160, right: 160 },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [new Paragraph({ children: [new TextRun({ text: formatTimeRange(a), bold: true, size: 20, color: BRAND_BLUE, font: FONT })] })]
  });
  const contentCell = new TableCell({
    width: { size: TABLE_WIDTH - 1600, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 120, bottom: 160 },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_LIGHT }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    children: [
      new Paragraph({ children: [new TextRun({ text: a.title_de, bold: true, size: 22, color: '1A1A18', font: FONT })] }),
      new Paragraph({ spacing: { before: 40 }, children: [new TextRun({ text: a.message_de, size: 20, color: '333331', font: FONT })] })
    ]
  });
  return new TableRow({ children: [timeCell, contentCell] });
}

function footerBlock(){
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'DGL 2026 · In-App-Ankündigungen · Seite ', size: 16, color: MUTED, font: FONT }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: FONT })
    ]
  })] });
}

function buildDoc(byDay, logoBuf){
  const children = [ titleBlock(logoBuf) ];
  for(const [dayKey, items] of byDay){
    children.push(dayHeading(dayKey));
    children.push(new Table({
      width: { size: TABLE_WIDTH, type: WidthType.DXA },
      columnWidths: [1600, TABLE_WIDTH - 1600],
      borders: {
        top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
      },
      rows: items.map(announcementRow)
    }));
  }
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
    if(xml !== original){
      zip.file(name, xml);
      changed = true;
    }
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
    } catch (err) {
      // try next candidate
    }
  }
  return false;
}

// ------------------------------------------------------------------ main --
async function main(){
  console.log('Lese Ankündigungen aus', DATA_PATH);
  console.log('Zielordner:', OUTPUT_DIR);

  const items = loadAnnouncements(DATA_PATH);
  const byDay = groupByDay(items);
  console.log(`${items.length} aktive Ankündigungen an ${byDay.size} Tagen gefunden.`);

  let logoBuf = null;
  if(fs.existsSync(LOGO_PATH)){
    logoBuf = fs.readFileSync(LOGO_PATH);
  } else {
    console.warn('WARNUNG: Logo nicht gefunden unter', LOGO_PATH, '— Dokument wird ohne Logo erzeugt.');
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const doc = buildDoc(byDay, logoBuf);
  const buf = await fixPageNumberFont(await Packer.toBuffer(doc));
  const docxPath = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}.docx`);
  fs.writeFileSync(docxPath, buf);
  console.log(`-> ${path.basename(docxPath)} (${buf.length} Bytes)`);

  const ok = tryConvertToPdf(docxPath, OUTPUT_DIR);
  if(ok){
    console.log(`-> PDF erzeugt: ${OUTPUT_BASENAME}.pdf`);
  } else {
    console.warn(`\nHinweis: LibreOffice wurde unter keinem der bekannten Pfade gefunden (${SOFFICE_CANDIDATES.join(', ')}) — es wurde nur die .docx-Datei erzeugt, kein PDF.\nFalls LibreOffice woanders liegt, gib den vollen Pfad zu soffice.exe als 4. Argument mit (siehe Kommentar im Skript-Kopf).`);
  }
  console.log('\nFertig.');
}

main().catch(err => { console.error('Fehler:', err); process.exit(1); });
