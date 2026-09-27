# nubook.

*[English](README.md) · polski*

Księgarnia internetowa z powieściami o kobietach i płci, w której można
przeglądać książki według tego, **o czym są** – a nie według gatunku, ceny
czy daty wydania. Razem z nią powstaje system projektowy, którego
dokumentacja mieszka wewnątrz sklepu i jest sprawdzana testami wobec kodu.

Dwujęzyczna (PL / EN), dwuwalutowa (PLN / EUR), bez frameworków: czysty
HTML, CSS i JavaScript.

| | |
|---|---|
| **Sklep** | `https://nubook.eu/` |
| **System projektowy** | `https://nubook.eu/#design` |
| **Roadmapa i dokumenty** | `https://nubook.eu/#design/roadmap` |

## Czym jest sklep

Sklepy internetowe porządkują książki według tego, co łatwo policzyć. Żadna
z tych rzeczy nie odpowiada na pytanie, z którym czytelniczka naprawdę
przychodzi: czy ta książka jest o tym, co mnie obchodzi.

nubook odpowiada na nie **warstwą motywów**. Motyw to nie tag: to teza o
książce, więc musi kogoś cytować. Piętnaście motywów – *wariatka na
strychu*, *anioł domu*, *passing*, *zegar społeczny*, *kto patrzy* – każdy z
krótkim wyjaśnieniem, nazwanym źródłem i rokiem. Książka niesie od dwóch do
czterech. Ten sam motyw jest filtrem w sklepie, odznaką przy książce i
krótkim esejem w szufladzie.

Sklep działa od początku do końca: wyszukiwarka, filtry, sortowanie, widok
produktu, koszyk, kasa z walidacją i potwierdzenie. W rogu stoi
**księgarka**, która odzywa się tylko wtedy, gdy ma co powiedzieć –
najwyraźniej przy tytule niedostępnym, gdzie proponuje dwie alternatywy i
tłumaczy związek w języku samych motywów.

## Czym jest system projektowy

Nie leży obok sklepu – jest jego częścią: ten sam arkusz stylów, te same
tokeny, jeden adres (`#design`). Dwadzieścia dwie zakładki opisują kolor,
typografię, odstępy, ikonografię, dziesięć komponentów, ruch i zasady
redakcyjne.

Dokumentacja **czyta żywy arkusz stylów**. Tabela tokenów, próbki, skale i
tabela kontrastu powstają z tego, co naprawdę stoi w `:root`, a nie z liczb
przepisanych ręcznie. Token dodany do arkusza pojawia się w spisie sam;
taki, którego przedrostek do niczego nie pasuje, ląduje w widocznej grupie
„nieposortowane", zamiast zniknąć.

To, czego nie da się wygenerować – zdania opisujące zasady – jest pilnowane
[testami](#testy) i powtarzalnym audytem. Procedury obu leżą w
[`docs/skills/`](docs/skills/).

## Jak to powstało

Ten projekt powstaje we współpracy z modelem (Claude), i to jest część tego,
czym jest.

Podział pracy: decyzje projektowe, architektura tokenów, procedura audytu i
wszystkie teksty – w obu językach – są moje. Model pisze kod pod tymi
decyzjami. Case studies opisują to samo po angielsku: o
[sklepie](docs/case-study-shop.md) i o [systemie
projektowym](docs/case-study-design-system.md).

Cała dyscyplina widoczna w tym repozytorium istnieje właśnie z tego powodu.
Implementer pracujący w tym tempie chętnie dołoży piąty styl nagłówka i
wartość wpisaną z ręki, więc system potrzebuje zasad, do których da się go
przymusić – i testów, które go przy nich trzymają. Dwanaście zestawów testów
i cztery spisane procedury nie są ozdobą procesu; są tym, co pozwala
pracować szybko i nie stracić spójności.

Każdy zamknięty krok roadmapy zostawia dokument mówiący, co zostało
postanowione, dlaczego i **które możliwości odpadły**. To ta odrzucona
połowa zwykle ginie, i to ona powstrzymuje przed sięganiem po ten sam pomysł
miesiąc później. Osiem takich zapisów leży w [`docs/`](docs/), plan dalszych
kroków w [`docs/roadmap.md`](docs/roadmap.md).

## Uruchomienie

Otwórz `index.html` w przeglądarce. To wystarczy – nie ma kroku budowania
ani zależności do zainstalowania.

Jeśli przeglądarka blokuje wczytywanie plików lokalnych, uruchom serwer:

```bash
python3 -m http.server 8000
# potem otwórz http://localhost:8000
```

## Struktura

```
nubook/
├── index.html          szkielet strony i widoki
├── css/styles.css      style + wszystkie tokeny (w bloku :root)
├── js/app.js           dane katalogu, routing, koszyk, dokumentacja
├── assets/covers/      okładki książek i portret autorki
├── assets/fonts/       oba kroje, do rysowania karty linku
├── assets/og.png       karta linku (wynik budowania)
├── docs/               motywy, źródła, zapisy decyzji, roadmapa
├── docs/skills/        procedury pracy nad projektem
├── tests/              testy regresyjne
├── build.py            składa preview.html z powyższych
├── build-og.py         rysuje kartę linku i favikony
├── 404.html            co dostaje nieznany adres (oglądać przez serwer)
├── LICENSE.md          co zastrzeżone, co wolno wziąć
└── preview.html        wynik budowania (nie edytować)
```

Cały wygląd wynika z tokenów zebranych na górze `css/styles.css`. Zmiana
palety czy skali typograficznej to edycja tego jednego bloku – komponenty
nigdy nie zawierają wartości wpisanych na sztywno.

## Testy

```bash
sh tests/uruchom.sh
```

Wymaga node i npm; jsdom dociąga się sam przy pierwszym uruchomieniu.
Przebieg wypisuje jedną linię na zestaw. Kiedy któryś zapali się na
czerwono, szczegółów szuka się w jego własnym wypisie: `node
tests/rozmycie.mjs`.

Dwanaście zestawów, każdy pilnuje czegoś, co psuje się po cichu:

| Zestaw | Czego pilnuje |
|---|---|
| `arkusz` | arkusz jest składniowo cały – źle zamknięty komentarz nie wywala niczego głośno, tylko zjada regułę, która stoi po nim |
| `tokeny` | każdy token ma swoje miejsce w tabelach dokumentacji, żaden nie leży w grupie „nieposortowane", a wartości w opisach zgadzają się z arkuszem |
| `ikony` | ikony mieszczą się w polu bezpiecznym, mają dwa dopuszczone rozmiary i jedną regułę wypełnienia |
| `zakladki` | każda zakładka renderuje się w obu językach, zaczyna się tytułem i akapitem wprowadzającym, nie gubi napisu w słowniku i nie przemyca długiego myślnika |
| `ksiegarka` | księgarka mówi tylko wtedy, gdy ma co powiedzieć, i nie poleca książki, której sklep nie ma |
| `ksiegarka-zwykla` | to samo w trybie bez podpowiedzi: cisza jest cicha |
| `dostepnosc` | fokus jest widoczny wszędzie poza dwoma zapisanymi wyjątkami, szuflady są dialogami, a to, co pojawia się nieproszone, jest ogłaszane |
| `rozmycie` | żadna siła rozmycia nie jest wpisana z ręki, a wejścia komponentów zgadzają się z regułami, które naprawdę działają |
| `karta` | karta linku ma komplet znaczników, adresy są pełne, obrazek ma wymiary, które deklaruje, a claim z rysunku to ten sam claim co w znacznikach |
| `blad404` | strona 404 linkuje od korzenia, a nie względnie – podaje się ją pod dowolnie głębokim adresem, więc ścieżka względna daje stronę bez stylów – a jej angielska połowa jest kompletna |
| `mobil` | koszyk na telefonie ma czym przejść dalej, a arkusz filtrów siada na prawdziwej wysokości belki, nie na zaokrąglonej |
| `roadmapa` | drabina kroków w skrypcie i w `docs/roadmap.md` to ta sama drabina, każdy zamknięty krok ma istniejący zapis decyzji, a objętości w spisie dokumentów zgadzają się z plikami |

Każde sprawdzenie powstało **po** znalezieniu usterki, której dotyczy, i ma
kontrolę negatywną: kod psuje się celowo dokładnie w ten sposób i test musi
się zapalić. Test, który przechodzi, choć nie potrafi złapać tego, do czego
został napisany, jest gorszy niż brak testu.

## Podgląd jednoplikowy

`preview.html` to wygenerowana wersja całego sklepu w jednym pliku – style,
skrypt i okładki wklejone do środka. Przydaje się do szybkiego podglądu,
wysłania komuś jednym załącznikiem albo otwarcia bez serwera. Odtwarza się
go po każdej zmianie:

```bash
python3 build.py
```

Nie edytuj `preview.html` ręcznie – jest zawsze wynikiem, a nie źródłem.

## Fonty i karta linku

Sklep wczytuje DM Serif Display i Inter z Google Fonts, więc przy pierwszym
otwarciu potrzebne jest połączenie z siecią. Te same dwa kroje leżą też w
`assets/fonts/`, bo karta linku jest obrazkiem i nie może poprosić
przeglądarki o font. Inter jest tam w odmianie 18pt: ma oś rozmiaru
optycznego, przeglądarka sama wybiera na niej punkt, a plik musi jeden
wskazać — a karta składa bezszeryfową drobno:

```bash
python3 build-og.py
```

Skrypt przerysowuje `assets/og.png` i favikony, biorąc barwy z
`css/styles.css`, a nie ze swojej kopii – karta, która przeżyje zmianę
palety i pokaże starą czerń, jest gorsza niż brak karty. Uruchamia się go po
zmianie claimu albo palety.

Skoro pliki są na miejscu, sklep mógłby przestać zależeć od Google Fonts:
wystarczy zastąpić `<link>` w `index.html` regułami `@font-face`
wskazującymi na `assets/fonts/`. Jeszcze nie zrobione.

## Historia zmian

**Jeden commit na jedną zatwierdzoną decyzję**, nie jeden na sesję. Dzięki
temu da się cofnąć pojedynczą zmianę, nie tracąc reszty. Opis mówi, czego
dotyczy i co się zmieniło – po polsku, w trybie oznajmującym, tak samo jak
dokumentacja:

```
kolor: token --nu-border-hover zamiast wpisanego #bdbdbd
dostępność: fokus wchodzi do koszyka przy obu sposobach otwarcia
ikonografia: filtry, plus, krzyżyk i strzałka selecta jako SVG
```

## Licencja

Nie jedna licencja, tylko cztery rodzaje rzeczy – rozpisane w
[`LICENSE.md`](LICENSE.md). W skrócie: sklep, jego teksty i dokumentacja mają
**wszelkie prawa zastrzeżone** – wolno czytać, nie wolno używać. Cztery
procedury w [`docs/skills/`](docs/skills/) są na **CC BY 4.0**: bierz,
przerabiaj, używaj w pracy, podaj źródło. Okładki i cytaty należą do
wydawców, a oba kroje do ich autorów, na OFL.

## Uwagi

Sklep jest prototypem: koszyk i zamówienie żyją w pamięci przeglądarki, nie
ma płatności ani serwera. Kody rabatowe do testów: `ROOM5`, `ROOM10`,
`SIOSTRA15`.

Dwie pary kolorów nie spełniają AA. Stoją w tabeli kontrastu z wynikiem
negatywnym i są nazwane w zakładce Dostępność jako sprawa otwarta, zamiast
po cichu wypaść z tabeli.

Okładki i portret pochodzą od wydawców i posiadaczy praw.
