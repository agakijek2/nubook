---
name: "zakladka-dokumentacji-ds"
description: "Pisze albo przebudowuje zakładkę dokumentacji design systemu tak, żeby trzymała tę samą strukturę, te same sekcje i te same konwencje co pozostałe. Używaj zawsze, gdy użytkowniczka prosi o dodanie, napisanie, przebudowanie albo uporządkowanie zakładki, strony lub sekcji w dokumentacji design systemu — także wtedy, gdy mówi zadaniowo (\"opisz stepper\", \"dodaj zakładkę dla modala\", \"uporządkuj Ruch\"). Używaj również, gdy w sklepie powstał nowy komponent i trzeba go udokumentować."
---

# Zakładka dokumentacji design systemu

Zakładki, które różnią się strukturą, zmuszają czytelniczkę do uczenia się układu od nowa przy każdej stronie. Ta sama informacja ma stać w tym samym miejscu — wtedy porównanie dwóch komponentów jest kwestią spojrzenia, a nie czytania.

Zanim zaczniesz pisać, **przeczytaj dwie istniejące zakładki tego samego rodzaju**. Ten opis podaje kształt, ale to kod jest źródłem prawdy i mógł się od czasu jego powstania zmienić.

Tekst polski pisz razem ze skillem `polszczyzna`: zakładka opisana poprawną angielszczyzną w polskich wyrazach czyta się gorzej niż zakładka o gorszej strukturze.

## Dwa rodzaje zakładek

**Komponent** — konkretna rzecz na ekranie: odznaka, przycisk, chip, link, kafel, stepper, pole. Opisuje się ją przez warianty albo stany.

**Fundament** — warstwa przenikająca wszystko: kolor, typografia, odstępy, ikonografia. Opisuje się ją przez skalę i zasady.

Nadanie komponentowi struktury fundamentu (albo odwrotnie) jest najczęstszym błędem. Pytanie rozstrzygające: czy da się to wskazać palcem na ekranie? Jeśli tak — komponent.

## Struktura zakładki komponentu

W tej kolejności:

1. **`<h1>`** — nazwa komponentu, jedno słowo.

2. **Wstęp** w `p.ds-lede` — jedno, najwyżej dwa zdania: czym rzecz jest i do czego służy. Nie jak wygląda i nie z czego jest zbudowana. To ma być zdanie, które rozstrzyga, czy sięgnąć po ten komponent, czy po sąsiedni.

3. **Okaz** — działający przykład na tle strony. Dwie formy:
   - jeden rząd w `div.demo.on-page` z kilkoma egzemplarzami obok siebie, gdy warto pokazać je razem albo dać się poklikać
   - siatka `div.ds-specimens` z figurami i podpisami, gdy wariantów jest kilka i każdy potrzebuje nazwy
   
   Okaz jest zbudowany z **klas sklepu**, nie z kopii stylów. Dzięki temu zmiana komponentu zmienia okaz.

4. **Tabela wariantów albo stanów.** Trzy kolumny: nazwa, znaczenie, tokeny. W pierwszej kolumnie **nazwa po ludzku, a pod nią selektor** w `<code>`, oddzielony `<br>`:
   ```
   Zaznaczony
   [aria-pressed="true"]
   ```
   Tabela dostaje `id`, bo czyta ją podgląd na żywo.

5. **`<h3>Specyfikacja</h3>`** — tabela właściwości: typografia, wypełnienie, obramowanie, ikona, element, fokus. Wiersz opisujący nie wszystkie warianty **musi powiedzieć, których dotyczy**. „Główny i drugorzędny: 1px…" zamiast „1px…", bo dwa niższe stopnie obramowania nie mają i milczenie czyni z tego nieprawdę.

6. **Sekcje własne komponentu** — tylko wtedy, gdy naprawdę są. Stany rozpisane w tabeli krzyżowej, zachowanie sekwencyjne, wyjątek godny nazwy.

7. **`<h3>Podgląd na żywo</h3>`** — blok `div.ds-play` z atrybutami `data-`, mówiącymi, z której tabeli wziąć opcje i z którego okazu treść. Nad nim jedno zdanie o tym, skąd bierze się to, co widać.

8. **`p.note`** — tylko gdy zostało coś marginalnego, co nie zmieściło się w żadnej tabeli. Brak przypisu jest lepszy niż przypis z ciekawostką.

## Struktura zakładki fundamentu

1. **`<h1>`** i **wstęp** — czym warstwa jest, jedno zdanie.
2. **`<h3>Parametry</h3>` albo `<h3>Skala</h3>`** — reguły i wartości, w tabeli generowanej z arkusza tam, gdzie się da.
3. **Tabele tokenów** — każdy token warstwy ma swój wiersz. Parzystość z kodem jest twardym wymogiem, patrz niżej.
4. **`<h3>Zasady</h3>`** — decyzje, które nie wynikają z samych wartości: co jest zakazane, co jest wyjątkiem i dlaczego.
5. **`<h3>Poza skalą</h3>`** — miejsca celowo nieobjęte regułą, nazwane wprost. To sekcja, która ratuje wiarygodność całej zakładki: bez niej pierwszy napotkany wyjątek podważa wszystko.

## Konwencje obowiązujące w obu rodzajach

**Wartość, którą da się odczytać z arkusza, musi być odczytana.** Do tego służą pomocnicze funkcje dokumentacji — token z wartością, sama wartość, deklaracja źródłowa, kroki skali, kroki typografii, wiersze kolorów, komórki mierzone na wyrenderowanym okazie. Wpisana ręcznie liczba jest fałszem czekającym na swój refaktor. Sprawdź w kodzie, jak te funkcje się nazywają — nie zgaduj.

**Każdy token z kodu ma swój wiersz.** Po dopisaniu tokenu do arkusza dopisz go do tabeli w tej samej chwili. Parzystość da się sprawdzić skryptem: policz tokeny w bloku `:root` i w tabelach, porównaj listy. Rozjazd znajdziesz w sekundę, oko nie znajdzie go wcale.

**Obie wersje językowe.** Każdy napis przez funkcję tłumaczącą, także podpisy okazów, nagłówki tabel i przypisy. Pisz każdą wersję od faktu, nie jedną z drugiej: jeśli obie mają tę samą budowę i tyle samo członów, jedna jest przekładem.

**Te same nazwy w różnych zakładkach.** Jeśli gdzieś stoi wiersz „Ta sama wartość, inna rola", to w innej zakładce ten sam problem nazywa się tak samo. Nagłówki „Specyfikacja", „Zasady", „Podgląd na żywo", „Poza skalą" są wspólne. Nowa nazwa dla znanego zjawiska to koszt dla czytelniczki.

**Język — oznajmujący, rzeczowy, naturalny.** Opisuj, jak jest, a nie jak nie jest. Bez trybu rozkazującego: dokumentacja opisuje system, nie wydaje poleceń. Bez kroniki zmian: „teraz", „już nie", „zostaje przy", „dziś" mówią o przebudowie, której czytelniczka nie widziała. Bez ozdobników: „45°", a nie „pół kąta prostego". Jedno słowo w jednym znaczeniu na stronie.

**Zasada użycia, nie spis miejsc.** Dokumentacja mówi, **na jakich zasadach** się z czegoś korzysta, a nie gdzie akurat tego użyto. Wyliczenie miejsc dezaktualizuje się przy każdym nowym widoku, a czytelniczka i tak nie dowiaduje się z niego, czy jej przypadek do nich należy. „Kontrolka, która podkreśla słowo, potrzebuje powietrza między literami a kreską" zamiast „link w tekście, przycisk ghost, wciśnięty chip i opcja w menu sortowania". Konkretny przykład wolno podać, gdy sama zasada byłaby niejasna — ale jako przykład, nie jako listę zastosowań.

**Termin wprowadzony to termin wyjaśniony.** Jeśli nazwa fachowa pada w całej dokumentacji raz, zwykle nie musi paść wcale: nazwij konstrukcję tak, jak nazywa ją kod, w `<code>`. A jeśli termin jest potrzebny, ma zostać wyjaśniony tam, gdzie pada pierwszy raz.

**Uzasadnienie tam, gdzie decyzja może wyglądać na przypadek.** Nie przy każdej wartości — przy tych, które ktoś kiedyś zechce „poprawić". Dlaczego pole kodu ma wersaliki, dlaczego jedna ikona jest mniejsza, dlaczego dwa tokeny o tej samej wartości zostają osobno.

**Mechanizm i skutek.** Zdanie, które wyjaśnia, dlaczego coś jest zrobione tak, a nie inaczej, ma powiedzieć, **co się psuło** w wersji odrzuconej. „Wartość z `light-dark()` odczytana wewnątrz `@keyframes` wychodzi po niewłaściwej stronie: kropka na jasnej stronie dostawała kolor przeznaczony na ciemną" zamiast samego opisu mechanizmu. Bez objawu czytelniczka nie wie, czy jej przypadek jest tym przypadkiem.

## Po napisaniu

Zbuduj projekt i sprawdź zakładkę **w obu językach**: czy renderuje się bez błędu, czy wszystkie tabele mają komplet wierszy, czy podgląd na żywo działa i generuje sensowny kod, czy wartości generowane z arkusza faktycznie się podstawiły, zamiast zostać pustym miejscem.

Uruchom też cały zestaw testów regresyjnych, nie tylko sprawdzenie nowej zakładki — dokumentacja żyje w tym samym pliku co sklep.

Na koniec przejdź nową zakładkę audytem dokumentacji, tak jak każdą inną. Świeżo napisany tekst też potrafi nie zgadzać się z kodem: najczęściej dlatego, że opisuje zamiar, a nie to, co ostatecznie powstało.

