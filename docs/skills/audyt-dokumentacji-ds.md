---
name: "audyt-dokumentacji-ds"
description: "Sprawdza zakładkę lub sekcję dokumentacji design systemu: czy opisy zgadzają się z kodem, czy nie kłócą się z pozostałymi zakładkami i czy język jest rzeczowy. Używaj zawsze, gdy użytkowniczka prosi o \"przejrzenie\", \"sprawdzenie\", \"weryfikację\", \"audyt\" albo \"testy\" dokumentacji, zakładki, komponentu lub sekcji design systemu — także wtedy, gdy mówi po prostu \"zobacz, czy tam wszystko się zgadza\" albo \"idziemy do kolejnej zakładki\". Używaj też po dodaniu nowego widoku lub komponentu, żeby sprawdzić, czy dokumentacja nadal opisuje rzeczywistość."
---

# Audyt dokumentacji design systemu

Dokumentacja design systemu psuje się w jeden sposób: kod idzie dalej, tekst zostaje. Zdanie prawdziwe w dniu, w którym powstało, staje się fałszywe po refaktorze — a nikt tego nie zauważa, bo dokumentacja nie ma testów. Ten audyt jest takim testem.

Prowadź go **trzema przebiegami, w tej kolejności**. Nie mieszaj ich: szukanie nieprawdy i redagowanie stylu naraz kończy się tym, że jedno zjada drugie.

## Zanim zaczniesz

Ustal, gdzie jest kod, który dana zakładka opisuje. Zwykle są to trzy warstwy naraz i **żadnej nie wolno pominąć**:

- **markup** — pliki HTML: jakim elementem jest kontrolka, jakie ma atrybuty, w jakiej kolejności stoją dzieci
- **arkusz stylów** — CSS: wartości, tokeny, selektory, wagi, media queries, komentarze
- **skrypt** — JS: co jest generowane w locie, jakie klasy dokłada kod, jakie napisy przechodzą przez słownik tłumaczeń, co nadpisuje wartości z arkusza po wyrenderowaniu

Twierdzenie z dokumentacji potrafi być zgodne z arkuszem i sprzeczne ze skryptem. Przykład z życia: token wysokości belki jest zadeklarowany ze skali odstępów, ale skrypt nadpisuje go zmierzoną wartością — dokumentacja mówiąca „pochodna skali" jest wtedy prawdziwa przez pierwszą sekundę życia strony.

Jeśli dokumentacja jest generowana z tych samych plików co produkt, zbuduj ją i **czytaj wyrenderowany DOM**, nie źródło. Część treści powstaje dopiero w przeglądarce.

## Przebieg 1 — czy tekst oddaje rzeczywistość

Wypisz sobie każde **weryfikowalne twierdzenie** z zakładki. Weryfikowalne znaczy: da się je obalić patrząc w kod. „Odznaka podaje jeden fakt o tytule" — nie. „Wypełnienie to 4px w pionie i 8px w poziomie" — tak.

Sprawdzaj **skryptem, nie wzrokiem**, wszystko, co da się policzyć: parzystość tokenów między kodem a tabelą, wartości poza skalą, selektory bez reguły fokusu, geometrię mieszczącą się w polu bezpiecznym, wystąpienia klasy w markupie. Skrypt przejrzy sto miejsc, ty przejrzysz pięć i się zmęczysz.

**Zacznij od zdań z kwantyfikatorem.** „Każdy", „wszystkie", „jedyne", „nigdy", „zawsze", „tylko" — to są zdania, które najczęściej okazują się fałszywe, bo wystarczy jeden wyjątek. Zdanie opisowe bez kwantyfikatora rzadko kłamie.

Wzorce, które powtarzają się najczęściej — szukaj ich celowo:

- **Opis stanu sprzed zmiany.** Najczęściej sprzed zmiany zrobionej tego samego dnia. Jeśli w tej samej sesji coś przenoszono, przemianowano albo zamieniano na inny komponent, sprawdź, czy dokumentacja o tym wie.
- **Wiersz wspólny opisujący jeden przypadek.** Tabela ma cztery warianty, a wiersz „Obramowanie" opisuje tylko pierwszy — bez zastrzeżenia, że pozostałe go nie mają.
- **Wyliczenie miejsc, które się skurczyło albo urosło.** „Widok produktu, koszyk, kasa, potwierdzenie i dokumentacja" — a dwa pierwsze już nie należą.
- **Odwołanie do nieistniejącego sąsiada.** Przypis mówiący „ta para", gdy pary już nie ma, bo komponent wyniesiono do osobnej zakładki.
- **Martwy kod udający źródło prawdy.** Napisy, stałe albo klasy, które wyglądają na używane, a nie są. Ktoś je poprawi i nie zobaczy efektu.

**Gdy skrypt audytu mówi „wszystko w porządku", nie ufaj mu od razu.** Sprawdź, czy złapałby przypadek, o którym wiesz, że jest zły. Skrypty potrafią przechodzić, bo szukają nie tam — na przykład dopasowanie po tekście nie trafia, bo wcięcie się nie zgadza, albo wyrażenie regularne łapie `border-bottom` przy szukaniu `bottom`. Cichy fałszywy sukces jest gorszy niż brak testu.

## Przebieg 2 — zgodność z pozostałymi zakładkami

Ta sama rzecz opisana dwa razy rozjeżdża się zawsze. Porównaj zakładkę z resztą dokumentacji i szukaj:

- **sprzeczności** — jedna zakładka mówi, że kontrolka jest przyciskiem, druga że linkiem
- **różnych słów na to samo** — jedna mówi „kontener", druga „pudełko"; jedna „wariant", druga „typ"
- **różnej struktury dla tego samego rodzaju treści** — jedna zakładka komponentu ma siatkę okazów z podpisami, druga goły rząd; jedna podaje klasę w pierwszej kolumnie tabeli, druga chowa ją w nawiasie na końcu akapitu
- **powtórzeń** — to samo zdanie techniczne w dwóch zakładkach; wybierz miejsce, gdzie należy, i w drugim zostaw samą zasadę
- **obietnic ogólnych, których szczegóły nie dotrzymują** — wstęp obiecuje cztery miejsca zastosowania, a specyfikacja opisuje jedno

Rozbieżność zgłaszaj **z obu stron**: która zakładka ma rację, zależy od kodu, nie od tego, którą właśnie czytasz.

## Przebieg 3 — język

Kryteria: rzeczowo, fachowo, oznajmująco, naturalnie.

- **Tryb oznajmujący, nie rozkazujący.** „Token dobiera się według roli", nie „Dobieraj według roli". Dokumentacja opisuje system, nie wydaje poleceń.
- **Pisz, jak jest, nie jak nie jest.** „Ikona ma dwa rozmiary" zamiast „Dwa rozmiary i żadnych innych". „Kontrolka niosąca ikonę ma `aria-label`" zamiast „sam kształt nigdy nie jest jedyną etykietą". Zdania przez zaprzeczenie brzmią jak obrona przed zarzutem.
- **Bez kroniki.** „Teraz", „już nie", „zostaje przy" w znaczeniu historycznym opisują przebudowę, a nie stan. Czytelniczka nie zna poprzedniej wersji.
- **Bez ozdobników.** „Obraca się o pół kąta prostego" to 45°. Ozdobnik kosztuje uwagę i nic nie wnosi.
- **Jedno słowo, jedno znaczenie w obrębie strony.** Jeśli „etykieta" znaczy raz styl typograficzny, a raz napis kontrolki, jedno z nich musi ustąpić.
- **Naturalna polszczyzna.** Kalki z angielskiego przechodzą niezauważone w tekście o kodzie: „stan mieszka w atrybucie", „pudełko" na `box`. Przeczytaj zdanie na głos — jeśli tak się nie mówi, przepisz.

## Jak raportować

**Nie zmieniaj niczego, dopóki nie usłyszysz decyzji.** Autorka dokumentacji zna intencje, których w kodzie nie widać — czasem to opis jest do poprawy, a czasem kod.

Dla każdego znaleziska podaj:

1. **czego dotyczy** — cytat spornego zdania
2. **dlaczego jest nie tak** — dowód z kodu: nazwa selektora, wartość, liczba wystąpień. Konkret, nie wrażenie.
3. **propozycję** — gotowe brzmienie do zatwierdzenia, a nie kierunek zmiany

Gdy niezgodność da się usunąć z dwóch stron, **przedstaw obie drogi**: poprawić kod czy poprawić opis. Napisz, którą polecasz i dlaczego, ale zostaw wybór. Niektóre niezgodności to okazja, żeby domknąć prawdziwą lukę — brak reguły fokusu, brak tokenu, brak przeniesienia fokusu do okna modalnego.

Grupuj raport trzema przebiegami, w ich kolejności. Na końcu zapytaj wprost, co wprowadzasz.

## Po wprowadzeniu poprawek

Zbuduj projekt i **uruchom cały zestaw testów regresyjnych**, nie tylko sprawdzenie zmienionego zdania. Poprawka w dokumentacji potrafi zepsuć sklep, jeśli dokumentacja jest częścią tego samego pliku.

Sprawdź też, czy poprawka nie unieważniła zdania **gdzie indziej**: zawężenie reguły w jednej zakładce często czyni fałszywym podsumowanie we wstępie.

Na koniec podaj gotowy opis commita — jeden na jedną zatwierdzoną decyzję.

