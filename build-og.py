#!/usr/bin/env python3
"""Draws the link card and the favicons from the shop's own typefaces and tokens.

The card is a picture, so it cannot read the stylesheet the way the
documentation does. Rather than retyping values from memory, this script pulls
them out of `css/styles.css` and refuses to run when one is missing: a card that
still shows the old black after a palette change is worse than no card.

    python3 build-og.py

Output: assets/og.png (1200x630), assets/favicon-32.png, assets/favicon-180.png,
assets/favicon-512.png.
"""

import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    sys.exit("Pillow is required: pip3 install Pillow")

ROOT = Path(__file__).parent
SHEET = (ROOT / "css" / "styles.css").read_text(encoding="utf-8")
FONTS = ROOT / "assets" / "fonts"

# --- values from the stylesheet, not from memory ----------------------------

def token(name):
    """A primitive's value from the :root block. Primitives hold finished
       colours, so neither light-dark() nor color-mix() has to be resolved."""
    m = re.search(rf"{re.escape(name)}\s*:\s*([^;]+);", SHEET)
    if not m:
        sys.exit(f"{name} is not in css/styles.css - the card will not be drawn.")
    return m.group(1).strip()

WHITE = token("--nu-white")
INK = token("--nu-grey-900")
GREY = token("--nu-grey-600")

# --- typefaces --------------------------------------------------------------

def face(file, px):
    path = FONTS / file
    if not path.exists():
        sys.exit(f"{path} is missing. Both typefaces come from fonts.google.com.")
    return ImageFont.truetype(str(path), px)

serif = lambda px: face("DMSerifDisplay-Regular.ttf", px)
# The 18pt cut, not the 24 or 28: those are optical sizes, and the sans on this
# card sets the two motif lines at 24px on a 1200x630 picture that a feed shows
# at around 500px wide. That is small type, whatever the number says.
sans = lambda px: face("Inter_18pt-Regular.ttf", px)

# --- content ----------------------------------------------------------------

# The claim lives here and in the page's meta tags, and nowhere else. It does
# not go into the shop itself: the strapline under the wordmark still reads
# "novels on women & gender". That is a decision rather than an unfinished
# change - the card invites, the masthead names. Written down so that nobody
# "fixes" the difference.
CLAIM = ("Books, by what", "they are about.")
MOTIFS = ("the madwoman  ·  the angel in the house  ·  passing  ·",
          "who is looking  ·  a room of one's own  ·  doing gender")

WIDTH, HEIGHT, MARGIN = 1200, 630, 96

def wordmark(d, x, baseline, px, colour=INK):
    """The wordmark with its dot. Same proportions as in the shop's masthead:
       .2em across, .09em of space before it, sitting on the baseline."""
    f = serif(px)
    d.text((x, baseline), "nubook", font=f, fill=colour, anchor="ls")
    width = d.textlength("nubook", font=f)
    r = px * 0.2 / 2
    cx = x + width + px * 0.09 + r
    d.ellipse([cx - r, baseline - 2 * r, cx + r, baseline], fill=colour)

def card():
    im = Image.new("RGB", (WIDTH, HEIGHT), WHITE)
    d = ImageDraw.Draw(im)
    wordmark(d, MARGIN, 196, 64)
    f = serif(68)
    d.text((MARGIN, 236), CLAIM[0], font=f, fill=INK, anchor="la")
    d.text((MARGIN, 318), CLAIM[1], font=f, fill=INK, anchor="la")
    # 23, not the 24 this was drawn at while the sans was Archivo: Inter sets
    # these two lines wider, and at 24 the block overhung the claim by 131 and
    # 142 px, outside the band below. The overhang is the composition; the size
    # is what gives way to it.
    fm = sans(23)
    d.text((MARGIN, 452), MOTIFS[0], font=fm, fill=GREY, anchor="la")
    d.text((MARGIN, 490), MOTIFS[1], font=fm, fill=GREY, anchor="la")

    # The block of motifs deliberately runs wider than the claim - the motif
    # layer stretches the composition to the right instead of hiding under the
    # sentence. The overhang is chosen, so it is watched: if it grew or vanished,
    # somebody changed the text and did not look at the result.
    claim_width = max(d.textlength(line, font=f) for line in CLAIM)
    for line in MOTIFS:
        over = d.textlength(line, font=fm) - claim_width
        if not 70 <= over <= 130:
            print(f"  warning: the motif line overhangs the claim by {over:.0f} px,"
                  f" and should by 70-130")
    # Both lines of the claim are the same width to the pixel, and that is where
    # this block's tightness comes from. Changing the text breaks it easily.
    drift = abs(d.textlength(CLAIM[0], font=f) - d.textlength(CLAIM[1], font=f))
    if drift > 12:
        print(f"  warning: the claim's two lines differ by {drift:.0f} px")
    return im

def favicon(px):
    """The dot alone, in a square. A letter at this size cannot be read anyway,
       and the dot is what tells this wordmark from any other serif."""
    im = Image.new("RGB", (px, px), WHITE)
    d = ImageDraw.Draw(im)
    r = px * 0.22
    s = px / 2
    d.ellipse([s - r, s - r, s + r, s + r], fill=INK)
    return im

if __name__ == "__main__":
    out = ROOT / "assets"
    card().save(out / "og.png")
    print(f"assets/og.png  {WIDTH}x{HEIGHT}")
    for px in (32, 180, 512):
        favicon(px).save(out / f"favicon-{px}.png")
        print(f"assets/favicon-{px}.png")
