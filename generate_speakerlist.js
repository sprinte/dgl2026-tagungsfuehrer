#!/usr/bin/env node
/**
 * generate_speakerlist.js
 * ------------------------------------------------------------------
 * Erzeugt eine alphabetisch sortierte Rednerliste (Word + PDF) aus
 * dem aktuellen app-data.js der DGL-2026-Tagungsführer-App.
 *
 * Erzeugt zwei alphabetisch sortierte Listen (Word + PDF) aus dem
 * aktuellen app-data.js der DGL-2026-Tagungsführer-App: eine
 * Rednerliste und eine Posterliste, im selben PDF hintereinander.
 *
 * Rednerliste: Vortragende in parallelen Sessions (talks[], anhand
 * von talk.presenter bzw. dem/der erstgenannten Autor:in), sowie
 * Plenarvortragende (Blöcke mit Kurzbiografie). Podiumsteilnehmer:innen
 * aus speakerGroups[] (z.B. Karriere-Session, Podiumsdiskussionen)
 * sind NICHT enthalten, da sie keinen eigenen Vortragsslot haben.
 *
 * Posterliste: nur die/der Erstautor:in pro Poster (wie bei
 * Vortragenden — die übrigen Ko-Autor:innen werden nicht separat
 * aufgeführt, auch wenn sie am Poster mitgewirkt haben).
 *
 * Hinweis zur Sortierung: Der Nachname wird vereinfachend als letztes
 * Wort des Namens (nach Entfernen von Titeln wie "Dr."/"Prof.")
 * angenommen. Bei mehrteiligen Nachnamen (z.B. "von Elert",
 * "Madge Pimentel") kann das im Einzelfall ungenau sein.
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node generate_speakerlist.js
 *
 * Erwartet standardmäßig, dass diese Dateien im selben Ordner liegen:
 *   - app-data.js
 *   - Tagungslogo_9x22_trans.png
 *
 * Standardmäßig landet die Ausgabe eine Ordnerebene ÜBER dem Ordner,
 * in dem dieses Skript liegt (wie bei den anderen Generatoren).
 *
 * Optional lassen sich die Pfade überschreiben:
 *   node generate_speakerlist.js [outputDir] [app-data.js] [logo.png] [soffice.exe]
 *
 * Ausgabe: DGL2026_Rednerliste.docx (+ .pdf, falls LibreOffice
 * installiert ist) im Ausgabeordner. Die .docx wird nach erfolgreicher
 * PDF-Erzeugung automatisch gelöscht.
 *
 * Voraussetzung: `npm install docx` im selben Ordner (einmalig).
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
  try { return require('jszip'); } catch (e) { /* fall through */ }
  return null;
}

// -------------------------------------------------------------- paths --
const ARG = process.argv.slice(2);
const HERE = __dirname;
const OUTPUT_DIR   = path.resolve(ARG[0] || path.dirname(HERE));
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
const OUTPUT_BASENAME = 'DGL2026_Rednerliste';

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

function firstAuthor(authorsStr){
  return (authorsStr || '').split(' — ')[0].split(',')[0].trim();
}

const TITLE_RE = /^((?:Prof\.\s*|Dr\.\s*|PD\s*|Priv\.-Doz\.\s*)+)/i;

function parseName(name){
  let n = (name || '').trim();
  const titleMatch = n.match(TITLE_RE);
  const titlePrefix = titleMatch ? titleMatch[1].trim() : '';
  const rest = titleMatch ? n.slice(titleMatch[0].length).trim() : n;
  const parts = rest.split(/\s+/).filter(Boolean);
  const surname = parts.length ? parts[parts.length - 1] : '';
  const given = parts.slice(0, -1);
  return { titlePrefix, given, surname };
}

function surnameKey(name){
  return parseName(name).surname.toUpperCase();
}

// Reduces given-name tokens to initials, e.g. "Iris" -> "I.", already-
// abbreviated tokens like "I." or "M.-T." are left effectively unchanged.
function abbreviateGivenTokens(tokens){
  return tokens.map(w => {
    const letter = w.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '').charAt(0);
    return letter ? letter.toUpperCase() + '.' : w;
  });
}

function formatDisplayName(name){
  const { given, surname } = parseName(name);
  if(!surname) return name;
  if(given.length === 0) return name; // single-word name, nothing to reorder
  const abbrev = abbreviateGivenTokens(given).join(' ');
  return `${surname}, ${abbrev}`;
}

// Dedupe key: same surname + same initials should be treated as the same
// person, regardless of whether a given name was spelled out in full
// ("Iris") or already abbreviated ("I.") in the source data.
function dedupeKey(name){
  const { given, surname } = parseName(name);
  const abbrev = abbreviateGivenTokens(given).join('').toLowerCase();
  return surname.toUpperCase() + '|' + abbrev;
}

function makePeopleCollector(){
  const people = new Map(); // canonical key -> { name, sessions: Set }

  function addPerson(rawName, sessionLabel){
    const name = (rawName || '').trim();
    if(!name) return;
    const key = dedupeKey(name);
    if(!people.has(key)) people.set(key, { name, sessions: new Set() });
    if(sessionLabel) people.get(key).sessions.add(sessionLabel);
  }

  function finish(){
    return [...people.values()].sort((a, b) => {
      const ka = surnameKey(a.name), kb = surnameKey(b.name);
      const cmp = ka.localeCompare(kb, 'de');
      if(cmp !== 0) return cmp;
      return a.name.localeCompare(b.name, 'de');
    });
  }

  return { addPerson, finish };
}

function extractSpeakers(DATA){
  const { addPerson, finish } = makePeopleCollector();

  for(const day of (DATA.programm || [])){
    for(const block of (day.blocks || [])){
      if(block.type === 'parallel'){
        for(const session of (block.sessions || [])){
          const sessionLabel = session.code || session.title || '';
          for(const talk of (session.talks || [])){
            const speaker = talk.presenter || firstAuthor(talk.authors);
            addPerson(speaker, sessionLabel);
          }
          // Note: session.speakerGroups (panel/discussion participants, e.g.
          // S19 "(K)ein Wunschkonzert" or S21 "Karriere in der Limnologie")
          // are intentionally NOT included — they aren't oral presenters
          // with a talk slot, and greetings (e.g. Eröffnung) are likewise
          // never collected here.
        }
      } else if(block.type === 'info'){
        // Standalone plenary/keynote blocks: identified by having a short
        // biography (bio_de), which only single-person keynote blocks carry.
        if(block.bio_de && block.title){
          addPerson(block.title, block.tag || 'Plenarvortrag');
        }
      }
    }
  }

  return finish();
}

// Poster presenters: every co-author listed on a poster, taken from the
// "posters" arrays inside parallel-block sessions (Poster Speed Talks
// PS1/PS2). Standalone "Postersession 1/2" info blocks are skipped since
// they list the exact same posters again and would only create duplicate
// session labels for the same people.
function extractPosterPeople(DATA){
  const { addPerson, finish } = makePeopleCollector();

  for(const day of (DATA.programm || [])){
    for(const block of (day.blocks || [])){
      if(block.type !== 'parallel') continue;
      for(const session of (block.sessions || [])){
        if(!session.posters || !session.posters.length) continue;
        const sessionLabel = session.code || session.title || '';
        for(const poster of session.posters){
          const displayStr = poster.authorsDisplay || poster.authors || '';
          const boardMatch = (poster.board || '').match(/\d+/);
          const label = boardMatch ? `${sessionLabel} (Nr. ${boardMatch[0]})` : sessionLabel;
          addPerson(firstAuthor(displayStr), label);
        }
      }
    }
  }

  return finish();
}

// ------------------------------------------------------------ document --
function titleBlock(logoBuf, titleText){
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
          new Paragraph({ children: [new TextRun({ text: titleText, bold: true, size: 56, color: BRAND_BLUE, font: FONT })] }),
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

function letterHeading(letter){
  return new Paragraph({
    spacing: { before: 320, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND_BLUE, space: 4 } },
    children: [new TextRun({ text: letter, bold: true, size: 40, color: BRAND_BLUE, font: FONT })]
  });
}

function speakerEntry(entry){
  const sessions = [...entry.sessions].filter(Boolean).sort().join(', ');
  const displayName = formatDisplayName(entry.name);
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: displayName, size: 21, color: '1A1A18', font: FONT }),
      sessions ? new TextRun({ text: '   ' + sessions, size: 18, color: MUTED, font: FONT }) : new TextRun({ text: '' })
    ]
  });
}

// Appends a lexicon-style, letter-grouped list of people to `children`.
function appendPeopleList(children, peopleList){
  let lastLetter = null;
  for(const entry of peopleList){
    const letter = surnameKey(entry.name).charAt(0) || '#';
    if(letter !== lastLetter){
      children.push(letterHeading(letter));
      lastLetter = letter;
    }
    children.push(speakerEntry(entry));
  }
}

function footerBlock(){
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'DGL 2026 · Redner- und Posterliste · Seite ', size: 16, color: MUTED, font: FONT }),
      new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: FONT })
    ]
  })] });
}

function buildDoc(speakerList, posterList, logoBuf){
  const children = [ titleBlock(logoBuf, 'Rednerliste') ];
  appendPeopleList(children, speakerList);

  children.push(new Paragraph({ children: [new PageBreak()] }));
  children.push(titleBlock(logoBuf, 'Posterliste'));
  appendPeopleList(children, posterList);

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
  console.log('Lese Programmdaten aus', APP_DATA_PATH);
  console.log('Zielordner:', OUTPUT_DIR);

  const DATA = loadAppData(APP_DATA_PATH);
  const speakerList = extractSpeakers(DATA);
  const posterList = extractPosterPeople(DATA);
  console.log(`${speakerList.length} Rednerinnen und Redner gefunden.`);
  console.log(`${posterList.length} Poster-Erstautor:innen gefunden.`);

  let logoBuf = null;
  if(fs.existsSync(LOGO_PATH)){
    logoBuf = fs.readFileSync(LOGO_PATH);
  } else {
    console.warn('WARNUNG: Logo nicht gefunden unter', LOGO_PATH, '— Dokument wird ohne Logo erzeugt.');
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const doc = buildDoc(speakerList, posterList, logoBuf);
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
