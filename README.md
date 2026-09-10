# nubook.

Niezależna księgarnia internetowa z powieściami o kobietach i płci.
Dwujęzyczna (PL / EN), dwuwalutowa (PLN / EUR), bez frameworków –
czysty HTML, CSS i JavaScript.

## Uruchomienie

Otwórz `index.html` w przeglądarce. To wystarczy – nie ma kroku budowania
ani zależności do zainstalowania.

Jeśli przeglądarka blokuje wczytywanie plików lokalnych, uruchom serwer:

```bash
python3 -m http.server 8000
# potem otwórz http://localhost:8000
```

## Podgląd jednoplikowy

`preview.html` to wygenerowana wersja całego sklepu w jednym pliku – style,
skrypt i okładki wklejone do środka. Przydaje się do szybkiego podglądu,
wysłania komuś jednym załącznikiem albo otwarcia bez serwera. Odtwarza się
go po każdej zmianie:

```bash
python3 build.py
```

Nie edytuj `preview.html` ręcznie – jest zawsze wynikiem, a nie źródłem.

## Struktura

```
nubook/
├── index.html          szkielet strony i widoki
├── css/styles.css      style + wszystkie tokeny (w bloku :root)
├── js/app.js           dane katalogu, routing, koszyk, dokumentacja
├── assets/covers/      okładki książek i portret autorki
├── docs/skills/        procedury pracy nad projektem (patrz niżej)
├── build.py            składa preview.html z powyższych
└── preview.html        wynik budowania (nie edytować)
```

Cały wygląd wynika z tokenów zebranych na górze `css/styles.css`.
Zmiana palety czy skali typograficznej to edycja tego jednego bloku –
komponenty nigdy nie zawierają wartości wpisanych na sztywno.

## Design system

Dokumentacja systemu projektowego jest częścią sklepu: link „Design system"
w stopce albo adres `index.html#design`. Opisuje kolor, typografię, odstępy,
ikonografię, komponenty, ruch i zasady redakcyjne. Próbki i wartości są
odczytywane z żywego arkusza stylów, więc dokumentacja nie może rozjechać
się z kodem.

## Jak powstaje ten projekt

Sklep i design system powstają we współpracy z Claude. Katalog
[`docs/skills/`](docs/skills/) opisuje sposób pracy, który się przy tym
wypracował: jak buduje się nowy widok, jak pisze się zakładkę dokumentacji
i jak sprawdza się, czy dokumentacja nadal opisuje rzeczywistość.

## Fonty

Kroje DM Serif Display i Archivo wczytywane są z Google Fonts, więc przy
pierwszym otwarciu potrzebne jest połączenie z siecią. Aby sklep działał
w pełni offline, pobierz oba kroje, umieść je w `assets/fonts/`, zastąp
odnośnik `<link>` w `index.html` regułami `@font-face` i zaktualizuj
tokeny `--nu-font-display` i `--nu-font-text`.

## Historia zmian

Repozytorium jest założone i pierwszy commit obejmuje cały projekt.
Zasada na dalej: **jeden commit na jedną zatwierdzoną decyzję**, nie jeden
na sesję. Dzięki temu da się cofnąć pojedynczą zmianę, nie tracąc reszty.

Opis commita mówi, czego dotyczy i co się zmieniło – po polsku, w trybie
oznajmującym, tak samo jak dokumentacja:

```
kolor: token --nu-border-hover zamiast wpisanego #bdbdbd
dostępność: fokus wchodzi do koszyka przy obu sposobach otwarcia
ikonografia: filtry, plus, krzyżyk i strzałka selecta jako SVG
```

Commity trzeba wykonywać z Terminala – środowisko, w którym Claude pracuje
na tym folderze, potrafi pliki zapisywać, ale nie potrafi ich usuwać, a git
kasuje własne pliki blokady po każdym zapisie. Claude może przygotować treść
opisu; wykonanie należy do Ciebie:

```bash
git add -A
git commit -m "opis decyzji"
```

Jeśli git odmawia z komunikatem `index.lock: File exists`, usuń zostawione
blokady i powtórz:

```bash
rm -f .git/index.lock .git/HEAD.lock .git/objects/maintenance.lock
find .git -name "tmp_obj_*" -delete
```

## GitHub

```bash
git branch -M main
git branch -M main
git remote add origin git@github.com:UZYTKOWNICZKA/nubook.git
git push -u origin main
```

Publikacja przez GitHub Pages: Settings → Pages → Source: `main`, katalog `/`.
Strona zadziała bez zmian, bo wszystkie ścieżki są względne.

## Uwagi

Sklep jest prototypem: koszyk i zamówienie żyją w pamięci przeglądarki,
nie ma płatności ani serwera. Kody rabatowe do testów: `ROOM5`, `ROOM10`,
`SIOSTRA15`.

Okładki i portret pochodzą od wydawców i posiadaczy praw – przed
publicznym wdrożeniem zastąp je materiałami, do których masz licencję.
