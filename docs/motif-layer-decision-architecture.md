# Step 03 – The motif layer

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

---

## What the board asked for

**A dozen motifs written out, and every book in the shop carrying two or three
of them.**

A data deliverable, with no interface implied and no source named.

---

## 01 · Visible layer, or plumbing?

**On the table:** a data field and nothing else – cheapest, since the motifs
exist to feed the steps after this one.

**Chosen: visible, in the product detail, and never in the filter column.**
A layer nobody can see cannot be checked by looking, and the product page had
nothing on it that said what a book is *about* beyond the description. But a
fourth row of chips in the filter column would make the filters heavier than the
shelf they filter – nineteen titles behind four axes of narrowing.

---

## 02 · Whose vocabulary – invented here, or established?

**On the table:** open subject vocabularies with working APIs. FAST from OCLC,
published as linked data. Wikidata's *main subject*. Open Library's subject
endpoints, which answer without a key.

**Chosen: named literary criticism, with an attribution on every term. The
catalogue data is a check, not a source.**

The test that settled it: Open Library was asked for *mothers and daughters*, a
motif at least three of our books carry. It returned *Little Women*, *Dubliners*,
*Lady Susan*, *The Cherry Orchard* and two Victorian novels – not one title from
our shelf. A single book's subject list from that answer included *Coloring
books*, *Reading Level-Grade 5*, *Large type books* and *Agricultural
Bacteriology*.

Those are cataloguing headings: built to shelve a book, mixed with format and
reading level, and ranked by edition count so the answer is a century-old canon
rather than this shop. What was needed instead was the vocabulary of feminist
literary criticism, where the terms have authors and dates – Gilbert and Gubar
1979, Rich 1976 and 1980, Spivak 1985, Butler 1990, Freeman 2010.

**Rule adopted:** a term with no attributable source does not enter the
vocabulary. Where an established term is being stretched to reach one of our
books, the file says so.

---

## 03 · How many?

**On the table:** the dozen from the board.

**Chosen: fifteen.**
Seventeen candidates were generated deliberately, so there would be something to
cut rather than something to accept. Coverage was then counted at each depth:

| | motifs | books left on two motifs |
|---|---|---|
| no cut | 17 | 1 |
| **cut two** | **15** | **3** |
| cut three | 14 | 4 |
| cut to the dozen | 12 | **10 of 19** |

Twelve would have described more than half the shelf with two motifs each, which
is thin enough to make a recommendation arbitrary. The dozen was a number guessed
before the vocabulary existed; the count replaced the guess.

**Cut:** *rememory* (two books only) and *double consciousness* (on this shelf it
selected almost the same books as intersectionality – two terms, one distinction).

---

## 04 · One name, or two registers?

**On the table:** a single name per motif, which then has to be both short enough
for a tag and rich enough to say something.

**Chosen: a chip, an expansion, a term and an origin note.**
The chip goes beside the title and carries no thesis, because the thesis is one
click away. That freed the names to be plain – *mother and daughter*, *growing
up*, *passing* – where a set of fifteen aphorisms beside a book title would be
exhausting to read.

The Polish and English names are not translations of each other. Each was chosen
for its own ear, and in four places the two languages land on a phrase the other
does not have: *własny pokój* and *the social clock* are the originals in their
own language, and *doing gender* turned out to be a sociological term of its own
from 1987, three years before Butler.

---

## 05 · Which component carries a motif?

**On the table:** the chip, since it looks like one.

**Chosen: the ghost button, opening the drawer that already exists.**
A chip toggles a facet of a set and carries `aria-pressed`; a motif never filters
anything, so using the chip class would break the definition the documentation
gives it. A control that opens an explanation is the pattern the product page
already uses for the author's name: a ghost button raising a drawer. Nothing new
to build, nothing new to test for accessibility.

---

## 06 · Who reads the expansion text?

**Two readers, and they want different things.** In the sidebar the text is shown
exactly as written. In search it is read by the agent and paraphrased, so the shop
can say why it recommends what it recommends.

**Three rules followed from that:**

- **No titles from the shelf inside the text.** The agent picks books from the
  data, by motif overlap. If titles also sat in the prose, the model would repeat
  them regardless of the query, and the recommendation would come from parroting
  rather than from counting.
- **Every sentence true on its own.** The agent lifts fragments; a sentence that
  needs the one before it comes back as nonsense.
- **The attribution is a separate field.** The sidebar shows it; the agent gets
  the prose alone and cites the source only when it wants to. Otherwise a
  recommendation reads like a footnote.

---

## 07 · Is a live agent better than a vocabulary?

**Raised during the work:** a search agent that looks up any title on the web and
answers in the moment is more current, and more like a bookseller who knows the
trade, than a fixed list of motifs.

**Chosen: both, with the vocabulary underneath.**
The agent covers the long tail no vocabulary can anticipate. But an agent with no
description of *this* shelf recommends from its own memory – inventing stock, or
matching by vibe. The vocabulary is what it matches against.

The resulting shape is the point:

> typed title → the web says what that book is about → mapped onto **fifteen
> motifs, a closed list rather than free prose** → books chosen by overlap, which
> is arithmetic and checkable → the reason assembled from definitions someone
> signed

Knowing what not to hand to the model is a stronger thing to show than knowing
how to call one.

---

## What was cut

Two motifs, for the reasons above. One assignment: *Convenience Store Woman*
had been filed under compulsory heterosexuality and the monstrous feminine, and
neither was what the book does – the pressure on its heroine is to be a legible
adult, not to desire anyone in particular. It now carries the social clock,
passing and the angel.

One name: the fifteenth motif was first called *rola kobiety* – the woman's role.
It was a bucket. It did not say the motif was about *timing*, and it overlapped
with two others, so an agent given a closed list would have reached for it
whenever it could not name something. Replaced by *zegar społeczny*, the social
clock, which turned out to be a sociological term from 1965 – giving that motif
two independent groundings, forty-five years apart.

## Where it goes next

The `MOTIFS` structure, an `m:[…]` field on each of the nineteen books, a row of
ghost buttons in the product detail and the drawer behind them. Then the
bookseller's brief, which is the first piece of step 04.
