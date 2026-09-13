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

Częsty przypadek szczególny: zdanie prawdziwe, które **zgubiło warunek przy skracaniu**. „Kontrolka niosąca ikonę ma `aria-label`" jest fałszywe, bo kontrolka z widocznym tekstem go nie ma i mieć nie powinna — a dłuższa wersja tej samej reguły, stojąca w innej zakładce, brzmi poprawnie. Gdy znajdziesz takie zdanie, sprawdź, czy gdzie indziej nie żyje jego pełna wersja: wtedy poprawka polega na dopasowaniu do niej, nie na wymyślaniu od nowa.

Wzorce, które powtarzają się najczęściej — szukaj ich celowo:

- **Opis stanu sprzed zmiany.** Najczęściej sprzed zmiany zrobionej tego samego dnia. Jeśli w tej samej sesji coś przenoszono, przemianowano albo zamieniano na inny komponent, sprawdź, czy dokumentacja o tym wie.
- **Wiersz wspólny opisujący jeden przypadek.** Tabela ma cztery warianty, a wiersz „Obramowanie" opisuje tylko pierwszy — bez zastrzeżenia, że pozostałe go nie mają.
- **Wyliczenie miejsc zamiast zasady.** „Widok produktu, koszyk, kasa, potwierdzenie i dokumentacja" — a dwa pierwsze już nie należą. Poprawka nie polega na uzupełnieniu listy, tylko na jej usunięciu: dokumentacja ma mówić, **na jakich zasadach** się z czegoś korzysta, a nie gdzie akurat tego użyto. Lista dezaktualizuje się przy każdym nowym widoku i tak czy inaczej nie odpowiada na pytanie, czy przypadek czytelniczki do niej należy.
- **Odwołanie do nieistniejącego sąsiada.** Przypis mówiący „ta para", gdy pary już nie ma, bo komponent wyniesiono do osobnej zakładki.
- **Martwy kod udający źródło prawdy.** Napisy, stałe albo klasy, które wyglądają na używane, a nie są. Ktoś je poprawi i nie zobaczy efektu. Ta sama pułapka w jednej deklaracji: skrót nazywający token, po którym stoi druga deklaracja nadpisująca tę samą właściwość wartością wpisaną na sztywno — token jest tam martwy, choć widać go w kodzie.
- **Token bez użycia, który opisuje istniejącą rolę.** Zanim zgłosisz go jako martwy, poszukaj w sklepie miejsca, które tę rolę pełni. Jeśli takie miejsce jest, a składa się ręcznie, to nie jest martwy kod, tylko luka — i decyzja brzmi „wprowadzić token do użycia", a nie „skasować".
- **Napis, którego brak niczego nie wywala.** W projekcie dwujęzycznym brakujący klucz słownika nie kończy się błędem — kontrolka pokazuje puste miejsce albo `undefined`, i to tylko w tym języku, którego nikt akurat nie ogląda. Sprawdź skryptem, czy oba słowniki mają dokładnie ten sam zbiór kluczy i czy żadne odwołanie w kodzie nie wskazuje na klucz, którego nie ma. Dwie pułapki: klucze sięgane dynamicznie (`t.shipNames[s.id]`, `T()[rule.err]`) wyglądają na nieużywane, a wywołania metod na zmiennej o nazwie `t` (`t.replace`, `t.localeCompare`) wyglądają na klucze.
- **Milczenie zamiast nieprawdy.** Zakładka opisuje komponent w jednym kontekście, choć w kodzie występuje w trzech — i wszystko, co mówi, jest prawdą. Sprawdź nie tylko, czy twierdzenia są prawdziwe, ale czy obejmują wszystkie miejsca, w których rzecz żyje. Wyszukaj funkcję albo klasę komponentu w całym kodzie i policz konteksty.
- **Termin, który pada raz i nie jest wyjaśniony.** Policz wystąpienia nazwy fachowej w całej dokumentacji. Jedno oznacza zwykle, że termin jest niepotrzebny: konstrukcję da się nazwać tak, jak nazywa ją kod.

### Nie ufaj własnemu skryptowi

**Gdy skrypt audytu mówi „wszystko w porządku", sprawdź, czy złapałby przypadek, o którym wiesz, że jest zły.** Skrypty potrafią przechodzić, bo szukają nie tam: dopasowanie po tekście nie trafia, bo wcięcie się nie zgadza, albo wyrażenie regularne łapie `border-bottom` przy szukaniu `bottom`. Cichy fałszywy sukces jest gorszy niż brak testu.

**Gdy skrypt zgłasza lawinę naruszeń, najpierw podejrzewaj skrypt.** Dwadzieścia naruszeń w kodzie, który wygląda na zadbany, to zwykle błąd metody, nie kodu. Zanim zaczniesz raportować, sprawdź jedno naruszenie ręcznie w źródle.

**Gdy skrypt zgłasza jedno naruszenie, też najpierw podejrzewaj skrypt.** Najczęstszy fałszywy alarm to zła liczba oczekiwana: policzyłaś cztery akapity, a są trzy, bo czwarty należy do sąsiedniej sekcji. Drugi w kolejności to dopasowanie, które trafiło w komentarz albo w inną nazwę zawierającą szukaną (`f-count` w `f-country`). Zanim zgłosisz, wypisz to, co skrypt faktycznie znalazł, i policz ręcznie.

Dwie pułapki przy czytaniu arkusza wyrażeniem regularnym, obie dające fałszywy wynik w przeciwnych kierunkach. **Selektor rozpisany na kilka linii** (`.a,` w jednej, `.b{` w następnej) nie zostanie dopasowany wzorcem szukającym selektora i klamry w tej samej linii — audyt zgłosi wtedy jako nieobsłużone reguły, które są obsłużone. **Komentarz stojący przed regułą** wchodzi w dopasowanie selektora, jeśli wzorzec nie wycina komentarzy najpierw — audyt zwróci wtedy listę „selektorów" będących zdaniami z komentarza. Wycinaj komentarze przed parsowaniem i dopasowuj selektor jako wszystko do klamry, bez względu na łamanie linii.

Trzecia, gdy sprawdzasz zawartość media query: **ten sam próg potrafi mieć kilka bloków**. Wzorzec, który znajduje pierwszy i na nim poprzestaje, zgłosi brak reguły, która stoi w trzecim. Zbierz wszystkie bloki, zanim orzekniesz.

Konkretna pułapka środowiska testowego: **wyliczone style dla SVG są niewiarygodne**. `fill`, `stroke`, `stroke-width` to atrybuty prezentacyjne i silnik testowy potrafi zwracać dla nich wartości niezgodne z arkuszem — audyt zgłosi wtedy, że każda ikona ma wypełnienie, choć reguła wspólna ustawia `fill:none`. Twierdzenia o wyglądzie SVG weryfikuj **czytając arkusz**, a nie odpytując wyliczony styl. Geometrię ścieżek licz z atrybutu `d`, nie z wymiarów renderowanego elementu.

## Przebieg 2 — zgodność z pozostałymi zakładkami

Ta sama rzecz opisana dwa razy rozjeżdża się zawsze. Porównaj zakładkę z resztą dokumentacji i szukaj:

- **sprzeczności** — jedna zakładka mówi, że kontrolka jest przyciskiem, druga że linkiem
- **różnych słów na to samo** — jedna mówi „kontener", druga „pudełko"; jedna „wariant", druga „typ"
- **liczby wobec machnięcia ręką** — jedna zakładka mówi „czterokrotnie", druga „kilkakrotnie" o tej samej rzeczy. Wygrywa liczba.
- **różnej struktury dla tego samego rodzaju treści** — jedna zakładka komponentu ma siatkę okazów z podpisami, druga goły rząd; jedna podaje klasę w pierwszej kolumnie tabeli, druga chowa ją w nawiasie na końcu akapitu
- **powtórzeń** — to samo zdanie techniczne w dwóch zakładkach; wybierz miejsce, gdzie należy, i w drugim zostaw samą zasadę
- **obietnic ogólnych, których szczegóły nie dotrzymują** — wstęp obiecuje cztery miejsca zastosowania, a specyfikacja opisuje jedno
- **zakładki, która wie więcej o cudzym komponencie niż on sam** — jeśli tabela kolorów wymienia zastosowanie, o którym milczy zakładka komponentu, to ta druga ma lukę
- **sprzeczności wewnątrz jednej zakładki** — wstęp mówiący o jednym wyjątku, gdy sekcja na końcu wymienia dwa rodzaje. Zakładkę czyta się w całości, więc porównuj ją także z nią samą.
- **odesłania do zasad, których pod wskazanym adresem nie ma** — wiersz mówiący „na zasadach opisanych w Ruchu", gdy zakładka Ruch o tym komponencie milczy. Sprawdzaj każde odesłanie, czytając to, do czego odsyła.

Rozbieżność zgłaszaj **z obu stron**: która zakładka ma rację, zależy od kodu, nie od tego, którą właśnie czytasz.

## Przebieg 3 — język

Kryteria: rzeczowo, fachowo, oznajmująco, naturalnie.

- **Tryb oznajmujący, nie rozkazujący.** „Token dobiera się według roli", nie „Dobieraj według roli". Dokumentacja opisuje system, nie wydaje poleceń.
- **Pisz, jak jest, nie jak nie jest.** „Ikona ma dwa rozmiary" zamiast „Dwa rozmiary i żadnych innych". Zdania przez zaprzeczenie brzmią jak obrona przed zarzutem.
- **Bez kroniki.** „Teraz", „już nie", „zostaje przy" w znaczeniu historycznym opisują przebudowę, a nie stan. Czytelniczka nie zna poprzedniej wersji.
- **Bez ozdobników.** „Obraca się o pół kąta prostego" to 45°. Ozdobnik kosztuje uwagę i nic nie wnosi.
- **Bez tłumaczenia się z decyzji.** Wiersz opisujący, jak wyglądałby komponent bez podjętej decyzji, mówi o stanie, którego nie ma. Napisz, co jest zdjęte i co jest w zamian, a nie jak byłoby, gdyby.
- **Jedno słowo, jedno znaczenie w obrębie strony.** Jeśli „etykieta" znaczy raz styl typograficzny, a raz napis kontrolki, jedno z nich musi ustąpić.

### Naturalna polszczyzna

Najtrudniejsze do wyłapania, bo tekst wygląda poprawnie. **Ten fragment przebiegu prowadź razem ze skillem `polszczyzna`** — tam stoją testy, lista konstrukcji przeniesionych z angielskiego i reguły szyku. Tutaj zostaje to, co dotyczy samej dokumentacji.

Trzy odmiany problemu wracają w zakładkach najczęściej:

**Kalki słownikowe.** „Stan mieszka w atrybucie", „pudełko" na `box`, „token unosi cztery właściwości" na *carry*. Osobne słowo brzmi znajomo, całość nie jest polszczyzną.

**Konstrukcje, których się nie używa.** Wszystkie słowa polskie, składnia z angielskiego: „dwa poziomy jednej rzeczy", „pole, w którym staje okładka", „okładka to to, co w nim stoi", „wartość kończy się na sumie wypełnienia i ikony". Zdanie da się zrozumieć i nikt tak nie mówi.

**Personifikacja rzeczy bez sprawczości.** „Okładka potrafi chodzić sama", „miniatura rzuca cień, bo stoi na liście", „pole czeka na odpowiedź". Metafora ruchu wciska się w opis układu i brzmi jak literatura, nie jak specyfikacja.

Dwa testy ze skilla `polszczyzna` wystarczają na większość znalezisk. **Przeczytaj zdanie na głos** i sprawdź, czy powiedziałabyś je tak w rozmowie o pracy. Potem **przełóż je z powrotem na angielski, słowo po słowie**: jeśli wraca jako płynna angielszczyzna, było angielskim zdaniem w polskim przebraniu. Gdy któryś test wypadnie źle, przepisz najprostszym możliwym szykiem: co jest czym, co gdzie stoi, co się dzieje. „Kafel to szare pole 4:5 z okładką w środku" zamiast „pole, w którym staje okładka".

Wyciągaj zdania **skryptem, nie wzrokiem**. Wypisz wszystkie napisy zakładki i przejdź je po kolei: przeglądanie wzrokiem daje za każdym razem inny podzbiór, a lista daje ten sam.

W dokumentacji dwujęzycznej sprawdź dodatkowo, **czy wersja polska nie jest przekładem angielskiej**. Objaw widać od razu: oba zdania mają tę samą budowę, tyle samo członów i ten sam szyk. Oba języki rozwiązują to samo inaczej — angielski częściej rzeczownikiem odczasownikowym, polski zdaniem podrzędnym — więc identyczna budowa oznacza, że jedno zdanie powstało z drugiego. Poprawka polega na napisaniu wersji polskiej od faktu, a nie na przestawianiu wyrazów w przekładzie. Treść ma się zgadzać, budowa nie musi i zwykle nie powinna.

Ta wada bierze się z pisania kilku zdań jednym oddechem, więc **gdy znajdziesz jedno takie zdanie, przejrzyj sąsiednie** — zwykle są z tej samej partii.

## Jak raportować

**Nie zmieniaj niczego, dopóki nie usłyszysz decyzji.** Autorka dokumentacji zna intencje, których w kodzie nie widać — czasem to opis jest do poprawy, a czasem kod.

Dla każdego znaleziska podaj:

1. **czego dotyczy** — cytat spornego zdania
2. **dlaczego jest nie tak** — dowód z kodu: nazwa selektora, wartość, liczba wystąpień. Konkret, nie wrażenie. W przebiegu 3 dowodem jest nazwana wada: kalka składniowa, personifikacja, ciąg rzeczownikowy, zły zakres partykuły. Nazwana wada uczy, „brzmi nienaturalnie" nie.
3. **propozycję** — gotowe brzmienie do zatwierdzenia, a nie kierunek zmiany

Napisz też, **co sprawdziłaś i wyszło dobrze**. Audyt, który wymienia same usterki, nie mówi, jak szeroko sięgnął — a zakładka bez znalezisk to wynik, nie brak wyniku.

Gdy niezgodność da się usunąć z dwóch stron, **przedstaw obie drogi**: poprawić kod czy poprawić opis. Napisz, którą polecasz i dlaczego, ale zostaw wybór.

**Zanim uznasz coś za błąd w kodzie, sprawdź, czy nie jest zamierzone.** Zachowanie, które wygląda na niedopatrzenie, bywa decyzją projektową, której nikt nie zapisał — okładka nieprzygaszona na stronie produktu wygląda jak zapomniana reguła, a jest świadomym wyborem, bo czytelniczka przyszła obejrzeć właśnie tę okładkę. Opisz, co widzisz, i zapytaj o intencję. Gdy intencja się potwierdzi, praca polega na **zapisaniu jej** — komentarzem przy regule i wierszem w dokumentacji — oraz na usunięciu tego, co ją podważa: martwej klasy, nieużywanego selektora, przełącznika bez reguły.

**Zanim zgłosisz, że czegoś brakuje, sprawdź historię.** Zdanie poprawione wczoraj wygląda tak samo jak zdanie sprzed roku. Jeśli zgłaszasz brak opisu albo błąd w opisie, zajrzyj w `git log` i `git blame` na ten fragment: zdarza się, że zgłaszany brak został uzupełniony poprzedniego dnia i to ty go uzupełniałaś. Ta sama zasada przy mówieniu o stanie repozytorium: sprawdź `git log`, zamiast zgadywać, co zostało zatwierdzone.

Niektóre niezgodności to za to okazja, żeby domknąć prawdziwą lukę: brak reguły fokusu, brak tokenu, wartość powtórzona w pięciu miejscach zamiast jednej.

Grupuj raport trzema przebiegami, w ich kolejności. Na końcu zapytaj wprost, co wprowadzasz.

## Po wprowadzeniu poprawek

Zbuduj projekt i **uruchom cały zestaw testów regresyjnych**, nie tylko sprawdzenie zmienionego zdania. Poprawka w dokumentacji potrafi zepsuć sklep, jeśli dokumentacja jest częścią tego samego pliku.

Sprawdź też, czy poprawka nie unieważniła zdania **gdzie indziej**: zawężenie reguły w jednej zakładce często czyni fałszywym podsumowanie we wstępie.

Na koniec podaj gotowy opis commita — jeden na jedną zatwierdzoną decyzję. Jeśli zatwierdzone decyzje przeplatają się w tych samych plikach i rozdzielenie ich wymagałoby wybierania fragment po fragmencie, podaj jeden commit z rozpisanym uzasadnieniem i powiedz wprost, dlaczego nie jest ich kilka. Gdy poprawiasz coś po uwadze do już podanego commita, podaj **następny, krótki commit**, a nie ten sam opis od nowa: dwa commity o identycznej treści i różnej zawartości to historia, która kłamie.
