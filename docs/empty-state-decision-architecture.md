# Step 02 – An honest empty state

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

---

## What the board asked for

**"We do not have that one." Said plainly, with a way back to the full shelf.**

One sentence, one exit. That is the whole of the original scope.

---

## 01 · What actually empties the grid?

**On the table:** two causes – a filter combination that returns nothing, or a
query that matches nothing.

**Chosen: only a query can do it.**
A chip whose count reaches zero disables itself, so no combination of filters can
empty the shelf. Verified by clicking every clickable chip in turn: the grid never
drops below a full page. That makes the empty state a single, knowable situation
rather than two overlapping ones – and it means the message can be specific,
because the shop always knows why the grid is empty.

**Consequence:** the message that had been standing there, *no novels match these
filters*, was blaming the one thing that could not have caused it.

---

## 02 · Is one sentence enough?

**On the table:** the board's sentence – *we do not have that one*.

**Chosen: two sentences, because there are two truths.**
With nineteen titles the shop can afford to ask a second question before it
answers: would this query find something if the genre and status chips were off?
If not, the title is genuinely not stocked. If so, the shop has it and its own
filters are covering it – and *we do not have that one* would then be a lie the
reader could catch by clearing a chip.

- **Not stocked:** *We do not have "X".*
- **Covered:** *We have "X", but not among the filters you have set.*

A third message survives for an empty grid with nothing typed. It is unreachable
today and kept anyway, because the day a filter can empty the grid is the day
nobody will remember this sentence existed.

---

## 03 · Does the reader see what she typed?

**On the table:** a message that never names the query.

**Chosen: quote it back.**
Between typing and reading the answer the reader may not remember exactly what
reached the field – a stray letter, an autocorrect. Quoting it turns a dead end
into something she can act on.

Two constraints came with the decision. The query is escaped before it reaches the
page, because a typed bracket would otherwise stop being text. And it is capped at
32 characters, because a long query would set the width of both the message and
the button under it.

---

## 04 · What is the way back to the full shelf?

**On the table:** the button already there, labelled *clear all filters*.

**Chosen: two exits, one per message, and the label names the destination.**
The existing button cleared genre, status and edition language – but not the query.
Since a query is the only thing that can empty the grid, the button did nothing at
all in the one state it ever appeared in. It had been dead since the search field
was built.

- **Not stocked** → *Show the whole shelf.* Clears the filters and the query.
- **Covered** → *Show "X" on the whole shelf.* Clears the filters, keeps the query.

The second is the one that matters: the reader keeps what she asked for and loses
only what was standing in its way.

---

## 05 · Is the edition language a filter?

**On the table:** it sits in the filter column, it looks like a chip, and the
clearing button reset it along with the rest.

**Chosen: it is a preference, and the way out leaves it alone.**
Genre and status narrow the shelf. Edition language says which language the reader
reads in – resetting it would not widen her view, it would switch her to a
different one. The old button set it back to English, so a reader on Polish
editions would have been moved without asking.

**Consequence:** the check behind the two messages runs inside the current edition
language, not across the whole catalogue. Otherwise the button could promise a
title it would not deliver: it would drop genre and status, and the edition would
still hide the book.

---

## 06 · What about a title held only in another edition?

**On the table:** a third case – the shop has the book, but in the language the
reader is not reading in.

**Chosen: not built.**
There are no Polish editions in the catalogue today, so the case cannot be
reached. Building a message nobody can see means writing it, translating it,
documenting it and keeping it in step for no reader. The condition is marked in
the code where the branch would go.

---

## How far the scope moved

| | Board | Built |
|---|---|---|
| Messages | 1 | 3 (2 reachable, 1 fallback) |
| Ways out | 1 | 2, with different labels and behaviour |
| Concepts | – | filter vs preference |
| Bugs found | – | the way back had never worked |

The step did not grow because more was wanted. It grew because the sentence the
board asked for would have been false in a case the shop can detect – and a shop
that says *we do not have that one* about a book on its own shelf is worse than a
shop that says nothing.

## Where the work came from

Not from the roadmap. The empty state came up during a documentation audit of the
Button tab, as the place where the ghost button is used – and the audit found that
the control described there did nothing. Three quarters of this step was delivered
as a side effect of checking whether the documentation was telling the truth.
