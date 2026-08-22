# Skille — jak powstaje i jak jest sprawdzany ten projekt

Ten sklep i jego design system powstają we współpracy z Claude. Trzy pliki
w tym katalogu opisują sposób pracy, który się przy tym wypracował:
powtarzalne procedury, spisane po to, żeby przy każdym kolejnym komponencie
wychodziło to samo, a nie za każdym razem trochę co innego.

W terminologii Claude taki plik nazywa się **skillem** — to instrukcja, po
którą model sięga, gdy trafi na zadanie danego rodzaju. Żywe wersje są
zapisane na koncie i to one działają w rozmowie; te pliki są ich kopią,
umieszczoną w repozytorium, żeby konwencja jechała razem z kodem i wchodziła
do historii zmian.

## Trzy skille i podział pracy między nimi

| plik | kiedy działa |
|---|---|
| [`nowy-widok-w-sklepie.md`](nowy-widok-w-sklepie.md) | coś powstaje w sklepie |
| [`zakladka-dokumentacji-ds.md`](zakladka-dokumentacji-ds.md) | coś zostaje opisane w dokumentacji |
| [`audyt-dokumentacji-ds.md`](audyt-dokumentacji-ds.md) | opis zostaje sprawdzony względem kodu |

Kolejność nie jest przypadkowa i wynika z jednej obserwacji: **dokumentacja
design systemu psuje się w jeden sposób — kod idzie dalej, tekst zostaje.**
Zdanie prawdziwe w dniu, w którym powstało, staje się fałszywe po refaktorze
i nikt tego nie zauważa, bo dokumentacja nie ma testów.

Pierwszy skill pilnuje, żeby nowy widok powstawał z tokenów i istniejących
komponentów, zamiast wprowadzać wartości wpisane na sztywno. Drugi pilnuje,
żeby każda zakładka miała ten sam kształt. Trzeci jest testem: przechodzi
zakładkę trzema przebiegami — zgodność z kodem, zgodność z pozostałymi
zakładkami, język — i weryfikuje twierdzenia skryptem, a nie wzrokiem.

## Co się przy tym sprawdziło

**Zdania z kwantyfikatorem kłamią najczęściej.** „Każdy", „wszystkie",
„jedyne", „nigdy" — wystarczy jeden wyjątek, żeby przestały być prawdziwe,
i zwykle taki wyjątek jest. Zdania opisowe bez kwantyfikatora psują się
rzadziej.

**Wiersz wspólny dla kilku wariantów opisuje jeden z nich.** Tabela ma cztery
typy przycisku, a wiersz „Obramowanie" opisuje pierwszy — bez zastrzeżenia,
że dwa pozostałe obramowania nie mają. Milczenie robi z tego nieprawdę.

**Skrypt sprawdzający też potrafi skłamać.** Przechodzi, bo szuka nie tam:
dopasowanie po tekście nie trafia przez wcięcie, wyrażenie regularne łapie
`border-bottom`, kiedy szukało `bottom`. Cichy fałszywy sukces jest gorszy
niż brak testu, więc skrypt, który mówi „wszystko w porządku", trzeba
sprawdzić na przypadku znanym jako zły.

**Trzeba czytać wszystkie trzy warstwy naraz.** Twierdzenie bywa zgodne
z arkuszem stylów i sprzeczne ze skryptem — na przykład token wysokości
belki jest zadeklarowany ze skali odstępów, ale skrypt nadpisuje go zmierzoną
wartością po wyrenderowaniu.

## Uwaga o kopiach

Pliki w tym katalogu nie są tym samym, co skille działające w rozmowie.
Zmiana tutaj nie zmienia zachowania modelu, a zmiana skilla nie aktualizuje
tych plików — przy poprawce trzeba ruszyć oba miejsca.
