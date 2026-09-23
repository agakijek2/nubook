#!/bin/sh
# Uruchamia wszystkie testy. Wymaga node i npm; jsdom dociąga sam przy
# pierwszym wywołaniu, bo testy renderują stronę w jsdom.
cd "$(dirname "$0")" || exit 1
[ -d node_modules/jsdom ] || npm install --silent >/dev/null 2>&1 || {
  echo "Nie udało się zainstalować jsdom. Sprawdź, czy npm jest dostępny."; exit 1; }

bad=0
for t in arkusz tokeny ikony zakladki ksiegarka ksiegarka-zwykla dostepnosc rozmycie roadmapa karta blad404; do
  printf "%-17s " "$t"
  if node "$t.mjs" >/dev/null 2>&1; then echo "OK"; else echo "BŁĄD"; bad=1; fi
done

# Test, który zapalił się na czerwono, mówi tylko tyle, że coś jest nie tak.
# Co dokładnie, widać dopiero w jego własnym wypisie.
[ "$bad" = 1 ] && echo "\nSzczegóły: node tests/<nazwa>.mjs"
exit $bad
