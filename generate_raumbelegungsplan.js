#!/usr/bin/env node
/**
 * generate_raumbelegungsplan.js
 * ------------------------------------------------------------------
 * Erzeugt die Raumbelegungspläne (Word + PDF, einer pro Tag) direkt
 * aus dem aktuellen app-data.js / app.js der DGL-2026-Tagungsführer-App.
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node generate_raumbelegungsplan.js
 *
 * Erwartet standardmäßig, dass diese Dateien im selben Ordner liegen:
 *   - app-data.js
 *   - app.js
 *   - Tagungslogo_kurz_transparent.png
 *
 * Optional lassen sich die Pfade überschreiben:
 *   node generate_raumbelegungsplan.js [app-data.js] [app.js] [logo.png] [outputDir]
 *
 * Ausgabe: Raumbelegungsplan_<tag>.docx (+ .pdf, falls LibreOffice
 * installiert ist) im gewählten Ausgabeordner.
 *
 * Voraussetzung: `npm install docx` im selben Ordner (einmalig).
 * Für die PDF-Erzeugung zusätzlich LibreOffice (Kommando `soffice`)
 * installiert — falls nicht vorhanden, werden nur die .docx-Dateien
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

// ---------------------------------------------------------------- config --
const ARG = process.argv.slice(2);
const HERE = __dirname;
const APP_DATA_PATH = path.resolve(ARG[0] || path.join(HERE, 'app-data.js'));
const APP_JS_PATH   = path.resolve(ARG[1] || path.join(HERE, 'app.js'));
const LOGO_PATH      = path.resolve(ARG[2] || path.join(HERE, 'Tagungslogo_kurz_transparent.png'));
const OUTPUT_DIR     = path.resolve(ARG[3] || HERE);

const ROOM_ORDER = ['HS 0/115', 'HS 0/110', 'HS 0/307', 'HS 0/310', 'HS 0/311', 'HS 0/313', 'SR 1/304', 'SR 1/305', 'SR 1/306'];
const EXCLUDED_ROOMS = new Set(['Foyer']);
const DAY_FILE_SUFFIX = { 'Montag': 'montag', 'Dienstag': 'dienstag', 'Mittwoch': 'mittwoch', 'Donnerstag': 'donnerstag' };

const FONT = 'Poppins';
const BRAND_BLUE = '003F75';
const WSA_RED = 'A4283F';
const ACCENT_TEAL = '1D6F5C';
const MUTED = '5C6570';
const BORDER_LIGHT = 'E4E4E4';
const PAGE_W = 12240, PAGE_H = 15840; // US Letter, portrait, DXA
const MARGIN = 900;
const TABLE_WIDTH = PAGE_W - MARGIN * 2;
const COL_WIDTHS = [1200, 2200, TABLE_WIDTH - 1200 - 2200];

// ------------------------------------------------------------- load data --
function loadAppData(filePath){
  const raw = fs.readFileSync(filePath, 'utf8');
  const jsonStr = raw.replace(/^\s*const\s+DATA\s*=\s*/, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

// Reads the workshop-code list straight out of app.js's
// SESSION_CATEGORY_OVERRIDE, so this script never drifts out of sync with
// how the app itself decides what counts as a "workshop" (red highlight).
function loadWorkshopCodes(appJsPath){
  const raw = fs.readFileSync(appJsPath, 'utf8');
  const m = raw.match(/SESSION_CATEGORY_OVERRIDE\s*=\s*(\{[^}]*\})/);
  if(!m){
    console.warn('WARNUNG: SESSION_CATEGORY_OVERRIDE nicht in app.js gefunden — Workshop-Rotmarkierung verwendet nur isWSA.');
    return new Set();
  }
  const obj = Function('"use strict"; return (' + m[1] + ')')();
  return new Set(Object.keys(obj).filter(k => obj[k] === 'workshop'));
}

// --------------------------------------------------------- extract rooms --
function abbrevFirstAuthor(raw, isFullName){
  if(!raw) return '';
  const first = raw.split(' — ')[0].split(',')[0].trim();
  const words = first.split(/\s+/);
  if(!words.length) return '';
  if(isFullName) return words[0][0] + '. ' + words.slice(1).join(' ');
  return first;
}

// Splits a combined room string ("SR 1/305+306", "HS 0/110, SR 1/305, SR 1/304")
// into individual, fully-qualified room names.
function splitRooms(roomStr){
  const commaParts = roomStr.split(',').map(s => s.trim());
  const result = [];
  for(const part of commaParts){
    if(part.includes('+')){
      const plusParts = part.split('+').map(s => s.trim());
      const first = plusParts[0];
      const m = first.match(/^(SR|HS)\s+(\S+)\/(\S+)$/);
      result.push(first);
      for(const extra of plusParts.slice(1)){
        if(/^(SR|HS)\s/.test(extra)) result.push(extra);
        else if(m) result.push(extra.includes('/') ? m[1] + ' ' + extra : m[1] + ' ' + m[2] + '/' + extra);
        else result.push(extra);
      }
    } else {
      result.push(part);
    }
  }
  return result.filter(Boolean);
}

function timeKey(t){
  const m = (t || '').match(/(\d{1,2}):(\d{2})/);
  return m ? parseInt(m[1]) * 60 + parseInt(m[2]) : 0;
}

function extractRoomsByDay(DATA, workshopCodes){
  const roomsByDay = {};

  function addSession(dayLabel, roomStr, dayDate, sessionLabel, rows, sharedIn, isRed, mod){
    if(!roomStr || EXCLUDED_ROOMS.has(roomStr)) return;
    const split = splitRooms(roomStr);
    const isShared = sharedIn || split.length > 1;
    roomsByDay[dayLabel] = roomsByDay[dayLabel] || {};
    for(const room of split){
      roomsByDay[dayLabel][room] = roomsByDay[dayLabel][room] || [];
      roomsByDay[dayLabel][room].push({ day: dayLabel, date: dayDate, sessionLabel, rows, sharedRoom: isShared, isRed: !!isRed, mod: mod || null });
    }
  }

  for(const day of DATA.programm){
    for(const block of day.blocks){
      if(block.type === 'parallel'){
        for(const s of (block.sessions || [])){
          const room = s.room;
          if(!room) continue;
          const code = s.code || '';
          const title = s.title || '';
          let sessionLabel = code ? (code + ' – ' + title) : title;
          const isFullName = (code === 'Preisvortrag' || code === 'Plenarvortrag');
          const isWrhcNoTimes = (code === 'WRHC');
          const isRed = !!s.isWSA || workshopCodes.has(code);
          let rows = [];
          for(const talk of (s.talks || [])){
            const author = abbrevFirstAuthor(talk.authors || '', isFullName);
            const talkTime = isWrhcNoTimes ? '' : (talk.time || '');
            rows.push([talkTime, author, talk.title || '']);
          }
          if(!rows.length) rows.push([block.time || '', '', title]);
          if(isWrhcNoTimes) sessionLabel += '  (' + (block.time || '') + ')';
          addSession(day.label, room, day.date, sessionLabel, rows, false, isRed, s.mod);
        }
      } else if(block.type === 'info'){
        const room = block.room;
        if(!room) continue;
        const title = block.title || '';
        if(block.isPlenary && block.tag === 'Plenarvortrag'){
          const author = abbrevFirstAuthor(title, true);
          const realTitle = ((block.subtitle || '').split(' — ')[0] || '').trim() || title;
          addSession(day.label, room, day.date, 'Plenarvortrag – ' + title, [[block.time || '', author, realTitle]], false, false, block.mod);
        } else {
          addSession(day.label, room, day.date, title, [[block.time || '', '', title]], false, false, block.mod);
        }
      }
    }
  }

  for(const dayLabel in roomsByDay){
    for(const room in roomsByDay[dayLabel]){
      roomsByDay[dayLabel][room].sort((a, b) => (timeKey(a.rows[0][0]) || timeKey(a.sessionLabel)) - (timeKey(b.rows[0][0]) || timeKey(b.sessionLabel)));
    }
  }
  return roomsByDay;
}

// ----------------------------------------------------------- docx build --
function headerCell(text, width, color){
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: color || BRAND_BLUE },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 20, color: 'FFFFFF', font: FONT })] })]
  });
}
function bodyCell(text, width, opts){
  opts = opts || {};
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 70, bottom: 70, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text: text || '', size: 20, italics: !!opts.italics, font: FONT })] })]
  });
}

function roomHeadingBlock(room, logoBuf){
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH - 2400, 2400],
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.SINGLE, size: 16, color: BRAND_BLUE, space: 8 },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
    },
    rows: [ new TableRow({ children: [
      new TableCell({
        width: { size: TABLE_WIDTH - 2400, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { bottom: 200 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
        children: [new Paragraph({ children: [new TextRun({ text: room, bold: true, size: 64, color: BRAND_BLUE, font: FONT })] })]
      }),
      new TableCell({
        width: { size: 2400, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { bottom: 200 },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: logoBuf ? [new ImageRun({ data: logoBuf, transformation: { width: 190, height: 63 }, type: 'png' })] : [] })]
      })
    ] }) ]
  });
}

function footerFor(){
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: '41. DGL-Jahrestagung und 16. WRHC   ·   Seite ', size: 16, color: MUTED, font: FONT }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: FONT })
    ]
  })] });
}

function buildRoomSection(room, sessions, logoBuf){
  const children = [ roomHeadingBlock(room, logoBuf) ];
  let lastDay = null;
  for(const sess of sessions){
    if(sess.day !== lastDay){
      children.push(new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: 'EAF1EE' },
        spacing: { before: 100, after: 160 },
        children: [new TextRun({ text: '  ' + sess.day + ', ' + sess.date, bold: true, size: 30, color: ACCENT_TEAL, font: FONT })]
      }));
      lastDay = sess.day;
    }
    let sessLabel = sess.sessionLabel;
    if(sess.sharedRoom) sessLabel += '  (geteilter Raum)';
    const labelRuns = [new TextRun({ text: sessLabel, bold: true, size: 22, font: FONT, color: '1C2530' })];
    if(sess.mod) labelRuns.push(new TextRun({ text: '   ·   Chair: ' + sess.mod, italics: true, size: 19, font: FONT, color: MUTED }));
    children.push(new Paragraph({ children: labelRuns, spacing: { before: 180, after: 70 } }));

    const headerColor = sess.isRed ? WSA_RED : BRAND_BLUE;
    const rows = [ new TableRow({ tableHeader: true, children: [
      headerCell('Zeit', COL_WIDTHS[0], headerColor), headerCell('Erstautor', COL_WIDTHS[1], headerColor), headerCell('Titel', COL_WIDTHS[2], headerColor)
    ] }) ];
    for(const [time, author, title] of sess.rows){
      rows.push(new TableRow({ children: [
        bodyCell(time, COL_WIDTHS[0]), bodyCell(author, COL_WIDTHS[1], { italics: !author }), bodyCell(title, COL_WIDTHS[2])
      ] }));
    }
    children.push(new Table({
      width: { size: TABLE_WIDTH, type: WidthType.DXA }, columnWidths: COL_WIDTHS, rows,
      borders: {
        top: { style: BorderStyle.SINGLE, size: 2, color: headerColor }, bottom: { style: BorderStyle.SINGLE, size: 2, color: headerColor },
        left: { style: BorderStyle.SINGLE, size: 2, color: headerColor }, right: { style: BorderStyle.SINGLE, size: 2, color: headerColor },
        insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: BORDER_LIGHT }, insideVertical: { style: BorderStyle.SINGLE, size: 2, color: BORDER_LIGHT }
      }
    }));
  }
  return {
    properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: 900, bottom: 900, left: MARGIN, right: MARGIN }, pageNumbers: { start: 1 } } },
    footers: { default: footerFor() },
    children
  };
}

function buildDocForDay(rooms, logoBuf){
  const roomNames = Object.keys(rooms).sort((a, b) => {
    const ia = ROOM_ORDER.indexOf(a), ib = ROOM_ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  return new Document({ sections: roomNames.map(room => buildRoomSection(room, rooms[room], logoBuf)) });
}

// ------------------------------------------------------------------ pdf --
function tryConvertToPdf(docxPath, outDir){
  try {
    execFileSync('soffice', ['--headless', '--convert-to', 'pdf', '--outdir', outDir, docxPath], { stdio: 'pipe' });
    return true;
  } catch (err) {
    return false;
  }
}

// ------------------------------------------------------------------ main --
async function main(){
  console.log('Lese Programmdaten aus', APP_DATA_PATH);
  const DATA = loadAppData(APP_DATA_PATH);
  const workshopCodes = loadWorkshopCodes(APP_JS_PATH);
  console.log('Workshop-Codes (rot markiert):', [...workshopCodes].join(', ') || '(keine gefunden)');

  let logoBuf = null;
  if(fs.existsSync(LOGO_PATH)){
    logoBuf = fs.readFileSync(LOGO_PATH);
  } else {
    console.warn('WARNUNG: Logo nicht gefunden unter', LOGO_PATH, '— Dokumente werden ohne Logo erzeugt.');
  }

  const roomsByDay = extractRoomsByDay(DATA, workshopCodes);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let pdfAvailable = null; // lazily determined on first attempt
  for(const dayLabel of Object.keys(roomsByDay)){
    const rooms = roomsByDay[dayLabel];
    const roomCount = Object.keys(rooms).length;
    const sessionCount = Object.values(rooms).reduce((sum, arr) => sum + arr.length, 0);
    const doc = buildDocForDay(rooms, logoBuf);
    const buf = await Packer.toBuffer(doc);
    const suffix = DAY_FILE_SUFFIX[dayLabel] || dayLabel.toLowerCase();
    const docxPath = path.join(OUTPUT_DIR, `Raumbelegungsplan_${suffix}.docx`);
    fs.writeFileSync(docxPath, buf);
    console.log(`${dayLabel}: ${roomCount} Räume, ${sessionCount} Sessions -> ${path.basename(docxPath)} (${buf.length} Bytes)`);

    const ok = tryConvertToPdf(docxPath, OUTPUT_DIR);
    if(pdfAvailable === null) pdfAvailable = ok;
    if(ok) console.log(`  -> PDF erzeugt: Raumbelegungsplan_${suffix}.pdf`);
  }

  if(pdfAvailable === false){
    console.warn('\nHinweis: LibreOffice (Kommando "soffice") wurde nicht gefunden — es wurden nur .docx-Dateien erzeugt, keine PDFs.');
  }
  console.log('\nFertig.');
}

main().catch(err => { console.error('Fehler:', err); process.exit(1); });
