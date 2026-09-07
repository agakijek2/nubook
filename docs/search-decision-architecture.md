# Step 01 — Catalogue search

Decision architecture, written after the fact. Each node is one question the build
had to answer, the option that was on the table, and what was chosen.
Box text for FigJam is in **bold**; the paragraph under it is the note.

---

## The bet

**Search is table stakes in an online shop.**
A reader who arrives with a title in mind should not have to browse for it. The
hypothesis is that a shop which answers a typed title starts more carts, and that
those carts are worth more, because the reader who names a book is closer to
buying than the reader who is looking around. That the header carried a magnifier
that did nothing was not a reason to build anything — it was an artefact of the
mockup, and it was removed rather than justified.

---

## 01 · Does a nineteen-title catalogue need search?

**On the table:** no. The whole shop fits on a screen and a half, and filters
already narrow it by genre, tag and edition language.

**Chosen: build it.**
Not for this catalogue but for the behaviour it establishes. Every later step of
the roadmap — a title the shop does not stock, a pasted quotation, a theme — is
a field the reader types into. Step 01 is the field; the steps after it change
what happens to what was typed.

---

## 02 · Where does the field live?

**On the table:** a magnifier in the header that opens an overlay, beside
favourites, account and cart. Or a visible field in the bar over the grid.

**Chosen: in the bar, next to filters and sorting.**
Those two controls do exactly what search does — narrow the same list. The header
holds controls about the reader: who they are, what they saved, what they are
buying. Search is not about the reader, so it does not belong there.

**Consequence:** the magnifier left the header. Three icons instead of four, and
the glyph moved inside the field, where it names what the field is for instead of
hiding it behind a click.

---

## 03 · What does the field look like?

**On the table:** the boxed field the checkout already uses — four borders, own
ground, square corners.

**Chosen: the lower edge only, and no ground.**
A full box in that bar reads as a form set down over the products. One hairline
reads as one more control in a row of controls. The resting colour was matched to
the underline the chips carry, so the bar speaks in a single hairline language
rather than two.

**Consequence:** `.input` gained a second variant, `.in-bar`, and the design system
now documents the field as two variants separated by where it stands — a box
inside a form, a hairline on a bar.

---

## 04 · How wide?

**On the table:** the full width left over in the bar.

**Chosen: a fixed resting width that opens while the field holds the focus.**
An empty field taking the whole bar reads as the bar's main subject, which it is
not until someone types in it. But a query is longer than a resting width that
looks right empty, so the field opens on focus and closes again. On a phone the
bar has no width to share, so the field takes a row of its own.

---

## 05 · How does focus show itself?

**On the table:** the system focus ring; then a 2px ring in the brand colour.

**Chosen: the existing border goes to full strength.**
A ring drawn inside a box that already has a border reads as a second border. The
mark appears on a click as well as on arriving by keyboard, because entering a
field is followed by typing — unlike a button, where a click needs no aftermath.

---

## 06 · How does the reader get out of a query?

**On the table:** nothing. A query would simply persist.

**Chosen: a tertiary cross inside the field, plus the Escape key.**
The cross appears only when there is something to clear and leaves the tab order
when there is not, so nobody tabs onto a control with no work to do. Escape
empties the field and stops there: the same key closes the sort menu, the filter
sheet, both drawers and the product view, and a reader clearing a query is not
asking for any of that.

---

## 07 · What counts as a match?

**On the table:** exact substring matching on the title.

**Chosen: title, subtitle and author, insensitive to Polish diacritics, live from
the second character.**
A shop that sells Polish editions cannot ask the reader to type `ł` and `ó`
correctly to find a book. There is no debounce: at nineteen titles there is
nothing to wait for, and a delay would be a solution to a problem this catalogue
does not have.

---

## Built, then removed

The placeholder typed itself out through three phrases — *search by title*,
*search by author*, *search by title or author* — and settled on the last. It
demonstrated the field's range to a reader who had not asked, and it forced the
accessible name to stay still while the visible text moved, so the field had two
names for a few seconds. Removed. The field now says the true thing from the
first frame.

---

## Deliberately not built

A suggestion dropdown. A results page. Recent searches. Fuzzy matching. A result
count beside the field.

Every one of them is an answer to a catalogue that does not fit on a screen. Built
here they would be decoration, and each would need documenting, maintaining and
keeping in step with the rest of the system.

---

## What would say it worked

- Share of sessions that use the field at all.
- Carts started after a search, against carts started after browsing.
- Average value of the two kinds of cart.
- **Queries that return nothing** — the most useful of the four, because it is a
  shortlist of what readers came for and the shop does not stock.
