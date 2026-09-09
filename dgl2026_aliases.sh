# DGL 2026 Tagungsführer – Aliase und Hilfsfunktionen
# Diese Datei liegt im Projektordner (nicht im Windows-Profil), damit sie
# von einem Roaming-Profil-Reset nicht betroffen ist.

alias roomplan='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/generate_roomplan.js"'
alias announcements='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/generate_announcements.js"'
alias speakerlist='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/generate_speakerlist.js"'
alias posterlist='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/generate_posterlist.js"'
alias sessionlist='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/generate_sessionlist.js"'
alias conflicts='/c/Users/aoprei/node/node.exe "/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer/check_conflicts.js"'

buildall() {
  local failed=()

  echo "=== roomplan ==="
  roomplan || failed+=("roomplan")

  echo "=== announcements ==="
  announcements || failed+=("announcements")

  echo "=== speakerlist ==="
  speakerlist || failed+=("speakerlist")

  echo "=== posterlist ==="
  posterlist || failed+=("posterlist")

  echo "=== sessionlist ==="
  sessionlist || failed+=("sessionlist")

  echo "=== conflicts ==="
  conflicts || failed+=("conflicts")

  echo ""
  if [ ${#failed[@]} -eq 0 ]; then
    echo "Alle Skripte erfolgreich durchgelaufen."
  else
    echo "WARNUNG: Fehler bei: ${failed[*]}"
    echo "Alle anderen Skripte sind trotzdem durchgelaufen."
  fi

  # --- Alle erzeugten PDFs (ohne .md) in ein ZIP packen ---
  local basedir="/c/Users/aoprei/Documents/Gremien/DGL-Tagung 2026/dgl2026-tagungsfuehrer"
  local outdir="$basedir/output"
  local zipfile="$outdir/DGL2026_Info.zip"

  echo ""
  echo "=== Packe PDFs in DGL2026_Info.zip ==="
  rm -f "$zipfile"

  if command -v zip >/dev/null 2>&1; then
    (cd "$outdir" && zip -j "$zipfile" *.pdf)
  else
    local win_outdir win_zipfile
    win_outdir=$(cygpath -w "$outdir")
    win_zipfile=$(cygpath -w "$zipfile")
    powershell.exe -NoProfile -Command "Compress-Archive -Path '$win_outdir\*.pdf' -DestinationPath '$win_zipfile' -Force"
  fi

  if [ -f "$zipfile" ]; then
    echo "-> DGL2026_Info.zip erstellt in $outdir"
  else
    echo "WARNUNG: ZIP-Erstellung fehlgeschlagen."
  fi
}
