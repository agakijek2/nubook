# nubook – a bookshop that knows what its books are about

> *How a private reading habit became a tool for connecting novels to one
> another – and then the bookshop I would like to open.*

**Role:** product designer – research, IA, interaction design, UI, content design, QA
**Type:** self-directed project
**Live:** `https://nubook.eu/` · **Source:** `https://github.com/agakijek2/nubook`
**Companion case study:** [the design system behind it](./case-study-design-system.md)

---

## Context

This is a personal project, and it comes out of something I actually read for.
I am interested in how novels keep returning to the same questions about women
and gender – and in the fact that the books answering one of those questions are
almost never shelved together anywhere.

**It did not start as a shop.** It started as a tool for recommending books and
connecting the dots between them: a way to say *this novel and that one are
doing the same thing, and here is what that thing is called*. The shop grew out
of it. Once the connections existed, the obvious next question was what someone
does with them – and the honest answer was: buys the book. So nubook became a
bookshop, and one I would like to open for real one day.

That origin is still visible in the design. The recommendation layer is not a
feature bolted onto a shop; the shop is what got built around it.

**The problem it answers.** Online bookshops sort by what is easy to count:
genre, price, publication date, bestseller rank. None of those answer the
question a reader actually arrives with – *is this book about the thing I care
about?* A reader interested in how fiction handles madness, or motherhood, or
passing, has no way in. She either already knows the titles, or she browses
genre shelves hoping to recognise something.

nubook is a bilingual (Polish/English) bookshop for novels about women and
gender, built to test one proposition: that the most useful thing a specialist
bookshop can offer is not a better filter, but a better **unit of meaning**.

The shop holds 19 titles, each carrying its price, availability, edition
language and description in both languages, plus a quotation from the book
itself. It runs as a single page with hash routing, a light and a dark scheme,
and no back end.

**It is in progress, and deliberately so.** The work runs on a written roadmap
of numbered steps – nine of them, six closed, one in progress, the rest named
rather than vague. The roadmap is not a private planning document: it is
[a tab in the shop's own documentation](https://nubook.eu/#design/roadmap),
reachable from the footer, with each closed step linking to the record of what
was decided and what was turned down. I am
publishing before it is finished on purpose – a roadmap someone can read is a
more honest artefact than a project that only appears once it is perfect.

## Goal

**Make what a book is *about* into something a reader can browse, filter and
trust – without turning the shop into a database.**

Three constraints I set at the start and held to:

1. **The shop has to work as a shop.** Search, filters, sort, cart, checkout and
   confirmation all had to be real, not sketched. A novel browsing idea that
   only works in a hero section proves nothing.
2. **Nothing invented.** Every interpretive claim the shop makes has to be
   traceable to a named source. A shop that assigns meaning to books has to be
   accountable for the meaning it assigns.
3. **Bilingual from the first line, not translated at the end.** Both languages
   are written from the fact, not one from the other.

## Process

**Every step ends in a written decision record.** The work runs as a numbered
ladder of steps; each completed step closes with a decision-architecture
document – what was decided, why, and which options were rejected. Six of these
now sit in `docs/`. They are the reason the shop is
internally consistent: a decision made in step 03 is still findable in step 08,
so later work extends earlier work instead of quietly contradicting it.

**The motif layer.** The core of the project. I defined 15 motifs – *the
madwoman*, *the angel in the house*, *passing*, *the social clock*, *who is
looking* – each one an idea that recurs across the catalogue. Each motif carries
a short explanation, a named origin (Gilbert & Gubar, Spivak, Creed, Butler,
Freeman) and the year. Books carry two to four motifs. The motif is a filter, a
chip on a product page, and a short essay in a drawer – the same object seen at
three magnifications.

The constraint that shaped it: **a motif is not a tag.** A tag labels; a motif
makes a claim about a book and therefore has to cite someone. Writing the
sources took longer than building the filtering.

**The bookseller.** A small assistant in the corner of the shop who speaks only
when she has something specific to say – most visibly when a title is
unavailable, where she names two alternatives and explains the connection in the
motif's own terms. She is deliberately narrow: she does not chat, does not greet,
and stays silent on views where she would have nothing to add. Her copy is
written against the catalogue data, so she cannot recommend a book the shop does
not have.

**Designing the exceptions, not the happy path.** Most of the interesting work
was in states that a demo usually skips: an empty result that says *which*
nothing it found and offers the right way out; a chip that disables itself when
it would return zero results, but never when it is the filter currently applied;
a mobile filter sheet that keeps the control that opened it visible.

**How it was built.** I worked with an AI assistant as the implementer. Every
design decision, every rejection, every piece of copy is mine; the assistant
wrote the code under those decisions and was held to them by a regression suite
(twelve test files) and by documentation audits that check the written
documentation against the actual stylesheet. That division let me move at a pace
where a design decision could be seen running within minutes – and it made
discipline mandatory, because a fast implementer with no constraints produces
drift, not progress.

## Outcomes

**A shop that is actually usable end to end.** Grid, search, motif and genre
filters, sort, product page, author drawer, cart, checkout with validation, and
confirmation – in two languages and two colour schemes, at every breakpoint.

**A browsing model that holds up.** The motif layer works as a way in: a reader
who knows she cares about *the madwoman* finds five books and an explanation of
why those five. The same layer makes the out-of-stock case useful instead of
apologetic, because the bookseller has a real basis for the alternative she
offers.

**A documented design system,** built alongside the shop and shipped with it –
22 documentation tabs, 137 tokens, generated from the same stylesheet the shop
runs on. That is a case study of its own:
[read it here](./case-study-design-system.md).

**Accessibility treated as a design constraint, not a pass at the end.** Every
interactive element has a visible focus ring with a stated rule for the two
exceptions; both drawers are proper dialogs with `inert` behind them; anything
that appears unasked is announced in a live region. The contrast table in the
documentation is computed from the tokens themselves, so a colour change updates
the verdict rather than leaving a number someone typed once.

**Where it is honest about itself.** Two contrast pairs currently sit below AA.
They are named in the Accessibility tab as open items rather than quietly
excluded from the table – the shop documents its own gaps.

## What comes next

The roadmap is published with the shop – a tab in the documentation, linked
from the footer – and mirrored in the repository as `docs/roadmap.md`, with a
test comparing the two so they cannot quietly part. Six steps are closed, each
with its own decision record. Two are named and waiting:

- **08 · The model behind the bookseller.** Right now her recommendations are
  written against the catalogue by hand, which is honest but does not scale
  past 19 titles. The next step is the model that produces them – and a written
  account of how it does, because a shop that makes interpretive claims owes its
  reader an explanation of where they come from.
- **09 · The case studies.** This document and its companion.

Beyond the ladder, the open items are named rather than forgotten: the two
contrast pairs, and the question of what the motif layer does when the catalogue
is ten times bigger.

The long version of the ambition is a shop I would actually like to open. The
short version is the one being tested here: that a reader deserves to browse by
what a book is *about*.
