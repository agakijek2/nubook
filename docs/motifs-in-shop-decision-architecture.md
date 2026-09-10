# Step 04 – Motifs on the shelf

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

Step 03 produced the vocabulary. This step is the question of what a reader
actually sees, and it was answered almost entirely by refusing to build things.

---

## What the board asked for

**The motifs visible on a product page, so a reader can see what a book is
about before she buys it.**

No component named, no placement named. Everything below was decided during the
build.

---

## 01 · A block of its own, or a row of the list already there?

**On the table:** a section under the description with a heading – *Motifs* –
and the terms set out beneath it. That is what a new kind of content usually
gets.

**Chosen: the first row of the details list that was already on the page.**
The product page ends with a two-row list: *Genre* and *Edition language*, each
a term on the left and its answer on the right, separated by hairlines. A motif
is the same shape of fact – a question about the book and its answer – so it
became a third row of that list rather than a fourth region of the page.

**What that saved:** no heading style to choose, no spacing decision, no new
block to describe in the documentation. The row inherits the rules the list
already has.

**Where it sits:** first, above genre and edition. What the book is about
outranks how it is catalogued.

---

## 02 · Which control carries a motif?

**On the table:** the chip. It looks exactly right – a short word in a small
box, in a row of others.

**Chosen: the ghost button.**
The chip is defined in this design system as a toggle over a set: it carries
`aria-pressed`, it has a count, and pressing it narrows the shelf. A motif does
none of that – step 03 had already ruled that motifs never become a filter. A
chip that filters nothing would announce a state it does not have, and the Chip
tab would have to be rewritten to accommodate one exception.

The ghost button was already doing this exact job three lines higher up: the
author's name is a ghost that opens a drawer with an explanation behind it. Same
act, same control.

**Rule that came out of it:** a control is chosen by what it does, not by what
it looks like. The chip looked right and was wrong.

---

## 03 · One drawer, or a second one?

**On the table:** a second drawer for motifs, beside the author's and the cart's.

**Chosen: one drawer, two contents.**
Two state variables that exclude each other – a book or a motif, never both –
and the drawer fills itself from whichever is set. Everything around the
content is shared and was already tested: the focus moves to the close button on
opening, `aria-modal` and `inert` seal the page behind it, Escape closes, the
backdrop closes, the language switch refills it in place.

**What a third drawer would have cost:** its own markup, its own focus trap, its
own entry in the motion table, its own row under Accessibility. None of it
different from what exists.

---

## 04 · What stands in the drawer?

**On the table:** the expansion text, which is what the reader came for.

**Chosen: four fields, in a fixed order.**

> a label saying what kind of thing this is → the name → a one-line lead →
> the expansion → **the origin, below a rule**

The lead exists because the chip name is deliberately plain – *the madwoman*,
*growing up*, *passing*. Plain names read well beside a title and say almost
nothing on their own, so the first line after the click has to carry the thesis.

The origin – who coined the term, when, in what work – was asked for after the
rest was built, and it is the field that makes the difference between a
vocabulary and a set of opinions. It stands below a hairline because it answers
a different question from everything above it: not *what is this motif* but
*who says so*.

---

## 05 · How many typographic registers?

**On the table:** three – the expansion at full strength, the origin smaller and
quieter, as a footnote would be.

**Chosen: two registers, and the origin is not a footnote.**
The origin text takes the same size as the expansion above it and only the
quieter colour. Shrinking it as well would have said it is an aside, and it is
not: an attributable source is the thing that separates this vocabulary from
invention. Size says *how important*; colour says *what kind of statement*. Only
the second one needed to change.

---

## 06 · What the origin block is called

**First written as:** *Where the term comes from.*

**Chosen: *Geneza motywu*.**
The first version described the block's function to the reader, which is the
kind of caption that appears when a thing has not been named yet. The section
has a name in the language of criticism, and using it costs the reader nothing –
she is already reading a page about literary motifs.

---

## 07 · Where does the vocabulary live?

**On the table:** the fifteen motifs written straight into the code, since that
is where they are read from.

**Chosen: a document, with the code generated from it.**
`docs/motifs.md` holds all fifteen in both languages with all four fields. The
`MOTIFS` structure in the shop is parsed out of that file, and the two were
checked field by field – 15 of 15 identical.

**Why it matters more than it looks:** this vocabulary has two more readers
coming. Step 05 writes a bookseller's brief around it and the agent after that
matches against it. A vocabulary that lives inside a render function is one
nobody can review; a vocabulary in prose is one that can be argued with.

---

## 08 · The prose had to be rewritten

**Found during review:** ten sentences in the Polish expansions that were
English underneath – a phrase like *samo nazwanie robi robotę*, which is not
something anyone says in Polish. One was spotted by reading; the other nine came
out of checking the remaining fourteen motifs on purpose once the first was
found.

**Rule adopted:** where a defect shows up in one item of a set written in a
single sitting, the whole set is checked rather than the one item fixed. Bad
sentences arrive in batches, because that is how they were written.

---

## What it cost elsewhere

Two sentences in the design system documentation became false the moment this
shipped, and both are still open:

- **Chip:** *the row is also the unit of meaning: it carries `role="group"` and
  takes its name from the heading above it.* The motif row reuses `.chip-row`
  for its layout, inside a `dd`, with no group role and no heading. The rule as
  written is now false about the class in general.
- **Motion:** *both drawers – the author's and the cart's.* The first drawer is
  no longer only the author's.

Neither is a defect in the shop. Both are the ordinary cost of a component being
used in a place its documentation did not anticipate, and the reason the
documentation gets audited after a build rather than before.

---

## Deliberately not built

**A motif on the tile.** Nineteen covers in a grid, each with two or three terms
under it, is a wall of words over a wall of pictures. The grid's job is to let a
reader recognise a book; the motif is for after she has stopped at one.

**A motif as a filter.** Ruled out in step 03 and worth restating: a fourth axis
of narrowing over nineteen titles makes the filter column heavier than the shelf.

**An index of motifs.** A page listing all fifteen with the books under each is
the natural next thing to build and the wrong one – it is a browsing interface
for a catalogue that fits on a screen and a half. The vocabulary is going to be
reached through a typed question instead, which is step 06.

---

## What would say it worked

- Share of product-page visits that open a motif drawer at all.
- Whether a reader who opens one opens a second – the test of whether the terms
  read as a vocabulary or as decoration.
- Carts started after a drawer was opened, against carts started without.
- Which motifs are never opened. That is the shortlist of names that do not say
  enough from the outside, and it is a naming problem, not a data problem.

---

## Where it goes next

The vocabulary is now visible, attributable and in two languages. Step 05 is the
bookseller's brief – who she is, what she may never say, how she refuses –
which is the last thing written down before the first model call.
