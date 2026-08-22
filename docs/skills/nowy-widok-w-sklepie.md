---
name: "nowy-widok-w-sklepie"
description: "Projektuje i buduje nowy widok, podstronę albo komponent w sklepie nubook, opierając się wyłącznie na design systemie. Używaj zawsze, gdy użytkowniczka prosi o dodanie, zaprojektowanie albo zbudowanie czegokolwiek nowego w sklepie — nowej podstrony, sekcji, ekranu, formularza, modalu, kontrolki czy komponentu — także wtedy, gdy formułuje to zadaniowo (\"dodaj stronę z ulubionymi\", \"zrób ekran logowania\", \"potrzebujemy widoku wyszukiwania\"). Skill nakazuje przeczytać dokumentację i tokeny przed napisaniem pierwszej linijki, użyć istniejących komponentów zamiast wymyślać nowe, a po skończeniu zaproponować audyt dokumentacji."
---

# Nowy widok w sklepie

Sklep ma design system i to on jest źródłem prawdy — nie twoja pamięć o tym, jak wyglądał w poprzedniej rozmowie. Nowy widok, który omija system, kosztuje potem dwa razy: raz przy naprawie, drugi raz przy prostowaniu dokumentacji, która przestała opisywać rzeczywistość.

Dlatego kolejność jest odwrotna niż podpowiada odruch: **najpierw czytasz, potem projektujesz, na końcu piszesz.**

## Krok 1 — przeczytaj system, zanim cokolwiek napiszesz

Zajrzyj do dwóch miejsc i nie skracaj tego kroku, nawet jeśli zadanie wygląda na drobne:

- **blok tokenów w arkuszu stylów** (`:root`) — kolor, typografia, odstępy, ikony, układ. To jedyne miejsce, gdzie żyją wartości.
- **dokumentacja design systemu** — zakładki komponentów opisują, czym każdy z nich jest, kiedy się go używa i jakich tokenów wymaga. Wstęp i Dostępność opisują zasady obowiązujące wszystko.

Czytaj **wyrenderowaną dokumentację**, nie tylko źródło: część tabel powstaje w locie z arkusza, więc źródło pokazuje szablon, a nie wartości.

Zapamiętaj z tego trzy rzeczy: jakie komponenty już istnieją, jakie tokeny są dostępne i jakie zasady obowiązują niezależnie od komponentu.

## Krok 2 — zbuduj widok z tego, co już jest

Zanim wymyślisz cokolwiek nowego, sprawdź, czy system tego nie ma. Nowy komponent jest kosztem: trzeba go opisać, utrzymać i pilnować, żeby nie rozjechał się z resztą.

Zasady, które obowiązują zawsze:

- **Kolor i odstęp wyłącznie z tokenów.** Żadnej wartości heks, żadnego `rgba`, żadnego piksela odstępu spoza skali. Jeżeli nie ma pasującego tokenu — patrz krok 3.
- **Element przed atrybutem.** Kontrolka jest tym elementem HTML, który już znaczy to, co ona robi. Coś, co prowadzi pod adres, jest `<a href>`. Coś, co wykonuje akcję na miejscu, jest `<button type="button">`. ARIA dokłada wyłącznie to, na co HTML nie ma elementu.
- **Każdy napis przez słownik tłumaczeń.** Łącznie z tekstami alternatywnymi obrazków i etykietami, do których dociera wyłącznie czytnik ekranu. Napis wpisany wprost w markup działa do pierwszego przełączenia języka.
- **Ikona z zestawu, w jednym z dwóch rozmiarów**, z `aria-hidden`, a nazwa na kontrolce, która ją niesie.
- **Widoczny fokus na każdym elemencie interaktywnym**, w wartościach, których używa reszta systemu.
- **Ruch objaśnia albo go nie ma** — a każda animacja ustępuje przy `prefers-reduced-motion`.

## Krok 3 — gdy system czegoś nie ma

To nie jest wypadek, tylko normalna sytuacja: nowy widok odsłania lukę. **Nie łataj jej wartością wpisaną na sztywno.** Wpisany kolor przeżyje w arkuszu latami, bo żaden audyt tokenów go nie zobaczy — leży poza deklaracją tokenu.

Zamiast tego zatrzymaj się i przedstaw sprawę: czego brakuje, jakie są drogi wyjścia i co polecasz. Zwykle są trzy:

1. **użyć istniejącego tokenu albo komponentu**, przyjmując drobną różnicę wyglądu
2. **dodać token semantyczny** wskazujący na istniejący prymityw — tanie, bo paleta nie rośnie
3. **dodać nowy prymityw albo komponent** — najdroższe, uzasadnione tylko wtedy, gdy dwa pierwsze naprawdę nie działają

Decyzję podejmuje użytkowniczka. Ty masz pokazać koszt każdej drogi.

## Krok 4 — sprawdź, zanim powiesz, że gotowe

Zbuduj projekt i przejdź nowy widok tak, jak przejdzie go czytelniczka: wejście, wszystkie stany kontrolek, powrót. Sprawdź w obu językach i w obu walutach, jeżeli widok pokazuje ceny.

Sprawdź też programowo to, co da się policzyć: czy nie pojawiła się wartość spoza skali, czy każda kontrolka ma regułę fokusu, czy każdy napis przechodzi przez słownik, czy każda ikona ma `aria-hidden`, czy nowy element nie zepsuł istniejących widoków.

## Krok 5 — zapytaj o audyt dokumentacji

Nowy widok prawie zawsze unieważnia jakieś zdanie w dokumentacji, nawet jeśli nie dodałaś ani jednego komponentu. Kolumny „Zastosowanie" wymieniają miejsca, w których komponent występuje — a właśnie doszło nowe. Wstęp mówi „cztery miejsca", a jest pięć.

Dlatego **po każdym skończonym widoku zapytaj wprost**, czy przeprowadzić audyt dokumentacji zakładek, których zmiana dotknęła. Wymień je z nazwy, żeby pytanie było konkretne — na przykład: „Doszedł nowy widok z chipami i przyciskiem drugorzędnym. Przejrzeć zakładki Chip i Przycisk pod kątem zgodności z tym, co teraz jest?"

Nie rób audytu bez pytania: to osobna, dłuższa praca i użytkowniczka może chcieć ją odłożyć.

## Na koniec

Podaj gotowy opis commita — jeden na jedną zatwierdzoną decyzję, w trybie oznajmującym, z obszarem na początku. Na przykład: `ulubione: nowy widok listy z chipami filtrów i pustym stanem`.

