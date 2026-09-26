# nubook.

*English · [polski](README.pl.md)*

An online bookshop for novels about women and gender, where books can be
browsed by **what they are about** rather than by genre, price or
publication date. A design system grows alongside it, documented inside the
shop itself and checked against the code by tests.

Bilingual (Polish / English), two currencies (PLN / EUR), no frameworks:
plain HTML, CSS and JavaScript.

| | |
|---|---|
| **The shop** | `https://nubook.eu/` |
| **The design system** | `https://nubook.eu/#design` |
| **Roadmap and documents** | `https://nubook.eu/#design/roadmap` |

## What the shop is

Online bookshops sort books by what is easy to count. None of it answers the
question a reader actually arrives with: is this book about the thing I care
about?

nubook answers it with a **motif layer**. A motif is not a tag: it makes a
claim about a book, so it has to cite someone. Fifteen motifs – *the
madwoman*, *the angel in the house*, *passing*, *the social clock*, *who is
looking* – each with a short explanation, a named source and a year. A book
carries two to four. The same motif is a filter in the shop, a badge on a
product page and a short essay in a drawer.

The shop works end to end: search, filters, sort, product view, cart,
checkout with validation and confirmation. In the corner stands the
**bookseller**, who speaks only when she has something specific to say –
most visibly when a title is unavailable, where she offers two alternatives
and explains the connection in the motifs' own terms.

## What the design system is

It does not sit beside the shop – it is part of it: the same stylesheet, the
same tokens, one address (`#design`). Twenty-two tabs cover colour,
typography, spacing, iconography, ten components, motion and editorial
rules.

The documentation **reads the live stylesheet**. The token inventory, the
specimens, the scales and the contrast table are generated from what
actually stands in `:root`, not from numbers retyped by hand. A token added
to the stylesheet appears in the inventory on its own; one whose prefix
matches no category lands in a visible "not sorted yet" group rather than
disappearing.

What cannot be generated – the sentences describing the rules – is guarded
by [tests](#tests) and a repeatable audit. Both procedures live in
[`docs/skills/en/`](docs/skills/en/).

## How it was made

This project is built in collaboration with a model (Claude), and that is
part of what it is.

The division of labour: the design decisions, the token architecture, the
audit procedure and all the copy – in both languages – are mine. The model
writes the code under those decisions. Two case studies describe it at
length: [the shop](docs/case-study-shop.md) and [the design
system](docs/case-study-design-system.md).

Every bit of discipline visible in this repository exists for that reason.
An implementer working at that pace will happily add a fifth heading style
and a hand-typed pixel value, so the system needs rules a machine can be
held to – and tests that hold it there. Twelve test suites and four written
procedures are not decoration around the process; they are what makes it
possible to move fast without losing coherence.

Every closed roadmap step leaves a document naming what was decided, why,
and **which options were rejected**. The rejected half is the one that
usually goes missing, and the one that stops the same idea being tried again
a month later. Seven such records sit in [`docs/`](docs/); the plan for the
remaining steps is in [`docs/roadmap.md`](docs/roadmap.md).

## Running it

Open `index.html` in a browser. That is all – there is no build step and
nothing to install.

If the browser blocks local files, serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
nubook/
├── index.html          page skeleton and views
├── css/styles.css      styles + every token (in the :root block)
├── js/app.js           catalogue data, routing, cart, documentation
├── assets/covers/      book covers and one author portrait
├── assets/fonts/       the two typefaces, for drawing the link card
├── assets/og.png       the link card (generated)
├── docs/               motifs, sources, decision records, roadmap
├── docs/skills/        procedures for working on the project
├── tests/              regression tests
├── build.py            assembles preview.html from the above
├── build-og.py         draws the link card and the favicons
├── 404.html            what an unknown address gets (open it over http)
├── LICENSE.md          what is reserved, what is free to take
└── preview.html        build output (do not edit)
```

The whole appearance follows from the tokens gathered at the top of
`css/styles.css`. Changing the palette or the type scale means editing that
one block – components never hold hard-coded values.

## Tests

```bash
sh tests/uruchom.sh
```

Needs node and npm; jsdom installs itself on the first run. The run prints
one line per suite. When one goes red, the detail is in its own output:
`node tests/rozmycie.mjs`.

Twelve suites, each guarding something that breaks quietly:

| Suite | What it guards |
|---|---|
| `arkusz` | the stylesheet is syntactically whole – a badly closed comment fails silently and eats the rule standing after it |
| `tokeny` | every token has its place in the documentation tables, none sits in the "not sorted yet" group, and the values in the prose match the stylesheet |
| `ikony` | icons fit the safe area, take one of two permitted sizes and follow one fill rule |
| `zakladki` | every tab renders in both languages, opens with a title and a lede, loses no dictionary string and smuggles in no em-dash |
| `ksiegarka` | the bookseller speaks only when she has something to say, and never recommends a book the shop does not stock |
| `ksiegarka-zwykla` | the same without the hints: silence is silent |
| `dostepnosc` | focus is visible everywhere but the two recorded exceptions, the drawers are dialogs, and anything that appears unasked is announced |
| `rozmycie` | no blur strength is typed by hand, and the components' entrances match the rules that actually run |
| `karta` | the link card has every meta tag, its addresses are absolute, the image matches the dimensions it declares, and the claim on the picture is the claim in the tags |
| `blad404` | the 404 page links from the root, not relatively – it is served at any depth, so a relative path gives a page with no styles – and its English half is complete |
| `mobil` | the cart keeps a way forward on a phone, and the filter sheet sits on the bar's real height rather than the rounded one |
| `roadmapa` | the ladder of steps in the script and in `docs/roadmap.md` is the same ladder, every closed step has a decision record that exists, and the lengths in the documents list match the files |

Each check was written **after** the defect it is for was found, and each
has a negative control: the code is broken deliberately in exactly that way
and the test has to go red. A test that passes while unable to catch the
thing it was written for is worse than no test.

## Single-file preview

`preview.html` is a generated version of the whole shop in one file –
styles, script and covers inlined. Useful for a quick look, for sending as
one attachment, or for opening without a server. Rebuild it after every
change:

```bash
python3 build.py
```

Do not edit `preview.html` by hand – it is always a result, never a source.

## Fonts and the link card

The shop loads DM Serif Display and Archivo from Google Fonts, so the first
opening needs a connection. The same two typefaces also sit in
`assets/fonts/`, because the link card is a picture and cannot ask the
browser for a font:

```bash
python3 build-og.py
```

That redraws `assets/og.png` and the favicons, reading its colours from
`css/styles.css` rather than holding its own copies – a card that
survives a palette change and still shows the old black is worse than no
card. Rerun it after changing the claim or the palette.

Having the files locally also means the shop could stop depending on Google
Fonts: replace the `<link>` in `index.html` with `@font-face` rules pointing
at `assets/fonts/`. Not done yet.

## History

**One commit per approved decision**, not one per session. That way a single
change can be reverted without losing the rest. The message says what it
concerns and what changed – in Polish, in the indicative, like the
documentation:

```
kolor: token --nu-border-hover zamiast wpisanego #bdbdbd
dostępność: fokus wchodzi do koszyka przy obu sposobach otwarcia
ikonografia: filtry, plus, krzyżyk i strzałka selecta jako SVG
```

## Licence

Not one licence but four kinds of thing, set out in
[`LICENSE.md`](LICENSE.md). In short: the shop, its writing and its
documentation are **all rights reserved** – readable here, not reusable. The
four procedures in [`docs/skills/`](docs/skills/) are **CC BY 4.0**: take
them, adapt them, use them at work, credit the source. The covers and the
quotations belong to their publishers, and the two typefaces to their authors
under the OFL.

## Notes

The shop is a prototype: the cart and the order live in browser memory,
there is no payment and no server. Discount codes for testing: `ROOM5`,
`ROOM10`, `SIOSTRA15`.

Two colour pairs fall below AA. They stand in the contrast table with a
failing verdict and are named in the Accessibility tab as an open item,
rather than quietly dropping out of the table.

The covers and the portrait belong to their publishers and rights holders.
