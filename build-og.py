#!/usr/bin/env python3
"""Rysuje kartę linku i favikony z krojów i tokenów sklepu.

Karta wklejonego linku jest obrazkiem, więc nie może czytać arkusza stylów tak
jak dokumentacja. Zamiast przepisywać wartości z pamięci, ten skrypt wyjmuje je
z `css/styles.css` i przewraca się, kiedy któregoś nie znajdzie: karta, która
po zmianie palety pokazuje starą czerń, jest gorsza niż brak karty.

    python3 build-og.py

Wynik: assets/og.png (1200x630), assets/favicon-32.png, assets/favicon-180.png,
assets/favicon-512.png.
"""

import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    sys.exit("Potrzebny jest Pillow: pip3 install Pillow")

KORZEN = Path(__file__).parent
ARKUSZ = (KORZEN / "css" / "styles.css").read_text(encoding="utf-8")
FONTY = KORZEN / "assets" / "fonts"

# --- wartości z arkusza, nie z pamięci -------------------------------------

def token(nazwa):
    """Wartość prymitywu z bloku :root. Prymitywy trzymają gotowe barwy, więc
       nie trzeba rozwijać light-dark() ani color-mix()."""
    m = re.search(rf"{re.escape(nazwa)}\s*:\s*([^;]+);", ARKUSZ)
    if not m:
        sys.exit(f"Nie ma {nazwa} w css/styles.css - karta nie powstanie.")
    return m.group(1).strip()

BIALY = token("--nu-white")
GRAF = token("--nu-grey-900")
SZARY = token("--nu-grey-600")

# --- kroje ------------------------------------------------------------------

def krój(plik, px):
    sciezka = FONTY / plik
    if not sciezka.exists():
        sys.exit(f"Brakuje {sciezka}. Kroje pobiera się z fonts.google.com.")
    return ImageFont.truetype(str(sciezka), px)

serif = lambda px: krój("DMSerifDisplay-Regular.ttf", px)
sans = lambda px: krój("Archivo-Regular.ttf", px)

# --- treść ------------------------------------------------------------------

# Claim żyje tylko tutaj i w znacznikach strony. Do samego sklepu nie wchodzi:
# pod znakiem stoi dalej „novels on women & gender". To jest decyzja, a nie
# niedokończona zmiana - karta zachęca, nagłówek nazywa. Zapisane, żeby nikt
# nie „naprawiał" tej różnicy.
CLAIM = ("Books, by what", "they are about.")
MOTYWY = ("the madwoman  ·  the angel in the house  ·  passing  ·",
          "who is looking  ·  a room of one's own  ·  doing gender")

SZER, WYS, MARGINES = 1200, 630, 96

def znak(d, x, linia_pisma, px, kolor=GRAF):
    """Znak marki z kropką. Proporcje jak w nagłówku sklepu: średnica .2em,
       odstęp .09em, kropka siedzi na linii pisma."""
    f = serif(px)
    d.text((x, linia_pisma), "nubook", font=f, fill=kolor, anchor="ls")
    szer = d.textlength("nubook", font=f)
    r = px * 0.2 / 2
    cx = x + szer + px * 0.09 + r
    d.ellipse([cx - r, linia_pisma - 2 * r, cx + r, linia_pisma], fill=kolor)

def karta():
    im = Image.new("RGB", (SZER, WYS), BIALY)
    d = ImageDraw.Draw(im)
    znak(d, MARGINES, 196, 64)
    f = serif(68)
    d.text((MARGINES, 236), CLAIM[0], font=f, fill=GRAF, anchor="la")
    d.text((MARGINES, 318), CLAIM[1], font=f, fill=GRAF, anchor="la")
    fm = sans(24)
    d.text((MARGINES, 452), MOTYWY[0], font=fm, fill=SZARY, anchor="la")
    d.text((MARGINES, 490), MOTYWY[1], font=fm, fill=SZARY, anchor="la")

    # Blok motywów stoi świadomie szerzej niż claim - warstwa motywów rozciąga
    # kompozycję w prawo, zamiast chować się pod zdaniem. Odstęp jest wybrany,
    # więc pilnujemy go: gdyby urósł albo zniknął, znaczy to, że ktoś zmienił
    # treść i nie spojrzał na wynik.
    claim_szer = max(d.textlength(w, font=f) for w in CLAIM)
    for wiersz in MOTYWY:
        odchyl = d.textlength(wiersz, font=fm) - claim_szer
        if not 70 <= odchyl <= 130:
            print(f"  uwaga: wiersz motywów wychodzi poza claim o {odchyl:.0f} px,"
                  f" a ma o 70-130")
    # Oba wiersze claimu są tej samej szerokości co do piksela i stąd bierze się
    # zwartość tego bloku. Zmiana treści łatwo to psuje.
    rozjazd = abs(d.textlength(CLAIM[0], font=f) - d.textlength(CLAIM[1], font=f))
    if rozjazd > 12:
        print(f"  uwaga: wiersze claimu różnią się o {rozjazd:.0f} px")
    return im

def favikona(px):
    """Sama kropka w kwadracie. Litera w tym rozmiarze i tak się nie przeczyta,
       a kropka jest tym, co odróżnia ten znak od dowolnego innego szeryfu."""
    im = Image.new("RGB", (px, px), BIALY)
    d = ImageDraw.Draw(im)
    r = px * 0.22
    s = px / 2
    d.ellipse([s - r, s - r, s + r, s + r], fill=GRAF)
    return im

if __name__ == "__main__":
    wyjscie = KORZEN / "assets"
    karta().save(wyjscie / "og.png")
    print(f"assets/og.png  {SZER}x{WYS}")
    for px in (32, 180, 512):
        favikona(px).save(wyjscie / f"favicon-{px}.png")
        print(f"assets/favicon-{px}.png")
