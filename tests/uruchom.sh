#!/bin/sh
# Runs every suite. Needs node and npm; jsdom installs itself on the first
# call, because the tests render the page in jsdom.
cd "$(dirname "$0")" || exit 1
[ -d node_modules/jsdom ] || npm install --silent >/dev/null 2>&1 || {
  echo "Could not install jsdom. Check that npm is available."; exit 1; }

bad=0
for t in arkusz tokeny ikony zakladki ksiegarka ksiegarka-zwykla dostepnosc rozmycie roadmapa karta blad404 mobil okladki; do
  printf "%-17s " "$t"
  if node "$t.mjs" >/dev/null 2>&1; then echo "OK"; else echo "FAILED"; bad=1; fi
done

# A suite that went red says only that something is wrong. What exactly shows
# up in its own output.
[ "$bad" = 1 ] && echo "\nDetail: node tests/<name>.mjs"
exit $bad
