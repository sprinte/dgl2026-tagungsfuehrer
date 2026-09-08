#!/usr/bin/env node
/**
 * check_schedule_conflicts.js
 * ------------------------------------------------------------------
 * Prüft app-data.js auf Terminkonflikte: Personen, die innerhalb
 * desselben parallelen Zeitblocks (gleicher Tag, gleiche Blockzeit,
 * z.B. "13:30 – 15:00") in ZWEI verschiedenen Sessions als Vortragende
 * oder Moderator:in eingetragen sind — was physisch unmöglich ist, da
 * die Sessions gleichzeitig in unterschiedlichen Räumen stattfinden.
 *
 * Umfang / Einschränkungen:
 *  - Geprüft werden mündliche Vorträge (talks[], anhand presenter bzw.
 *    dem/der erstgenannten Autor:in) und Moderationen (mod-Feld).
 *  - Poster-Beitragende werden NICHT geprüft (zu viele Ko-Autor:innen,
 *    zu hohe Falsch-Positiv-Rate, da meist nur eine Person präsentiert).
 *  - Moderator:innen stehen in den Daten nur als Nachname (z.B.
 *    "Wollrab, Feld"). Der Moderations-Check vergleicht daher nur
 *    Nachnamen und kann bei häufigen Nachnamen falsch-positiv sein —
 *    im Bericht als "Hinweis" statt als harter Konflikt markiert.
 *  - Fortsetzungen derselben Session (z.B. "A01" Teil 1/3, 2/3, 3/3)
 *    liegen in unterschiedlichen Zeitblöcken und werden NICHT als
 *    Konflikt gewertet — das ist so vorgesehen.
 *
 * WIRD NIE AUTOMATISCH AUSGEFÜHRT — nur wenn du es manuell startest:
 *
 *   node check_schedule_conflicts.js
 *
 * Erwartet app-data.js im selben Ordner. Optional überschreibbar:
 *   node check_schedule_conflicts.js [outputDir] [app-data.js]
 *
 * Schreibt DGL2026_Terminkonflikte.md in einen Unterordner "output"
 * direkt im selben Ordner wie dieses Skript (wird automatisch angelegt,
 * falls nicht vorhanden) und gibt den Bericht zusätzlich auf der
 * Konsole aus.
 * ------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

const ARG = process.argv.slice(2);
const HERE = __dirname;
const OUTPUT_DIR = path.resolve(ARG[0] || path.join(HERE, 'output'));
const APP_DATA_PATH = path.resolve(ARG[1] || path.join(HERE, 'app-data.js'));

function loadAppData(filePath){
  const raw = fs.readFileSync(filePath, 'utf8');
  const jsonStr = raw.replace(/^\s*const\s+DATA\s*=\s*/, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function firstAuthor(authorsStr){
  return (authorsStr || '').split(' — ')[0].split(',')[0].trim();
}

function surnameOf(name){
  let n = (name || '').trim();
  n = n.replace(/^(Prof\.\s*|Dr\.\s*|PD\s*|Priv\.-Doz\.\s*)+/i, '').trim();
  const parts = n.split(/\s+/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : '';
}

function initialsKey(name){
  let n = (name || '').trim();
  n = n.replace(/^(Prof\.\s*|Dr\.\s*|PD\s*|Priv\.-Doz\.\s*)+/i, '').trim();
  const parts = n.split(/\s+/).filter(Boolean);
  if(!parts.length) return '';
  const surname = parts[parts.length - 1].toUpperCase();
  const given = parts.slice(0, -1).map(w => (w.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '').charAt(0) || '').toUpperCase());
  return surname + '|' + given.join('');
}

function findConflicts(DATA){
  const speakerConflicts = [];
  const modConflicts = [];

  for(const day of (DATA.programm || [])){
    for(const block of (day.blocks || [])){
      if(block.type !== 'parallel') continue;
      const blockLabel = `${day.label}, ${block.time}`;

      // speaker: key -> Map(sessionLabel -> displayName)
      const speakerMap = new Map();
      // moderator: surname -> Set(sessionLabel)
      const modMap = new Map();

      for(const session of (block.sessions || [])){
        const sessionLabel = (session.code || session.title || '?') +
          (session.room ? ` (${session.room})` : '');

        for(const talk of (session.talks || [])){
          const speaker = talk.presenter || firstAuthor(talk.authors);
          if(!speaker) continue;
          const key = initialsKey(speaker);
          if(!key) continue;
          if(!speakerMap.has(key)) speakerMap.set(key, new Map());
          speakerMap.get(key).set(sessionLabel, speaker);
        }

        if(session.mod){
          const mods = session.mod.split(',').map(s => s.trim()).filter(Boolean);
          for(const modName of mods){
            const surname = surnameOf(modName);
            if(!surname) continue;
            if(!modMap.has(surname)) modMap.set(surname, new Set());
            modMap.get(surname).add(sessionLabel);
          }
        }
      }

      for(const [, sessionsMap] of speakerMap){
        if(sessionsMap.size > 1){
          const sessions = [...sessionsMap.keys()];
          const displayName = [...sessionsMap.values()][0];
          speakerConflicts.push({ blockLabel, name: displayName, sessions });
        }
      }

      for(const [surname, sessionsSet] of modMap){
        if(sessionsSet.size > 1){
          modConflicts.push({ blockLabel, surname, sessions: [...sessionsSet] });
        }
      }
    }
  }

  return { speakerConflicts, modConflicts };
}

function buildReport({ speakerConflicts, modConflicts }){
  const lines = [];
  lines.push('# DGL 2026 – Terminkonflikt-Check');
  lines.push('');
  lines.push(`Stand: ${new Date().toLocaleString('de-DE')}`);
  lines.push('');
  lines.push('Geprüft: mündliche Vorträge (Sprecher:innen) und Moderationen innerhalb desselben parallelen Zeitblocks. Poster-Beitragende sind nicht enthalten.');
  lines.push('');

  lines.push('## Sprecher:innen-Konflikte (harte Konflikte)');
  lines.push('');
  if(speakerConflicts.length === 0){
    lines.push('Keine gefunden. ✅');
  } else {
    for(const c of speakerConflicts){
      lines.push(`- **${c.name}** — ${c.blockLabel}`);
      for(const s of c.sessions) lines.push(`  - ${s}`);
    }
  }
  lines.push('');

  lines.push('## Moderations-Hinweise (Namensgleichheit, ggf. falsch-positiv)');
  lines.push('');
  if(modConflicts.length === 0){
    lines.push('Keine gefunden. ✅');
  } else {
    for(const c of modConflicts){
      lines.push(`- **${c.surname}** — ${c.blockLabel}`);
      for(const s of c.sessions) lines.push(`  - ${s}`);
    }
  }
  lines.push('');

  return lines.join('\n');
}

function main(){
  console.log('Lese Programmdaten aus', APP_DATA_PATH);
  const DATA = loadAppData(APP_DATA_PATH);
  const result = findConflicts(DATA);
  const report = buildReport(result);

  console.log('');
  console.log(report);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = path.join(OUTPUT_DIR, 'DGL2026_Terminkonflikte.md');
  fs.writeFileSync(outPath, report, 'utf8');
  console.log('\n-> Bericht geschrieben:', outPath);
  console.log(`\n${result.speakerConflicts.length} Sprecher:innen-Konflikt(e), ${result.modConflicts.length} Moderations-Hinweis(e).`);
}

main();
