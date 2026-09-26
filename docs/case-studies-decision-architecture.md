# Step 09 – The case studies

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

This step was the last rung of the ladder and it ran out of order: both
documents were written during step 07, before the addresses they describe
existed. That was not impatience. The shop needed something to link out to, and
writing the case studies turned out to be the fastest way to find out which
figures in this project were wrong.

**Nine of them were.** Token counts, tab counts, the number of decision records,
the number of test suites. Every one had been true when it was written and had
quietly stopped being true. Writing a document that stakes a claim on a number
is an audit with a deadline.

---

## What the board asked for

**Two case studies for a product designer's portfolio: one about the shop, one
about the design system, each linking to the other.**

Written in English, for readers who arrive from a portfolio rather than from
the repository.

---

# Part one · The decisions, in the order they were taken

---

## 01 · One document or two?

**On the table:** one case study about the project, with the design system as a
section inside it. Or two, cross-linked.

**Chosen: two, each complete on its own, each linking to the other twice – once
in the header and once where the other subject comes up.**

They answer different questions and a reader wants one of them. Somebody hiring
for product design wants the motif layer, the browsing model, the states nobody
demos. Somebody hiring for design systems wants tokens read from a stylesheet
and documentation covered by tests. One document serving both would bury each
half under the other.

The cost is that some material appears twice – how the project was built, the
figures, the open contrast pairs. That repetition is accepted: a reader who
opens one of them should not have to open the other to understand it.

---

## 02 · What does the shop's case study open with?

**On the table:** the problem – online bookshops sort by what is easy to count.
Or the origin.

**Chosen: the origin, and the fact that it is a personal project.**

It did not start as a shop. It started as a tool for recommending books and
connecting the dots between them, and the shop grew out of it once the obvious
question became what somebody does with a connection. Opening there does two
things a problem statement cannot: it explains why the recommendation layer is
the core rather than a feature bolted on, and it lets the document say plainly
that this is a shop its author would like to open one day.

The problem statement follows immediately. It is stronger *after* the origin,
because by then the reader knows the author is not describing a market
opportunity she read about.

---

## 03 · One sentence at the top of each

**Chosen: a standfirst in italics under the title, phrased as what happened.**

*How a private reading habit became a tool for connecting novels to one another
– and then the bookshop I would like to open.*

*How auditing my own documentation – and finding it describing a component that
no longer existed – turned a design system into a set of tested procedures for
keeping itself true.*

Both name a turn rather than a subject. A portfolio reader scanning a list needs
one line that says what changed, not one line that says what the project is.

---

## 04 · The same four sections in both

**Chosen: Context, Goal, Process, Outcomes.**

Unremarkable on purpose. Two documents in one portfolio that are organised
differently make the reader learn a layout twice, and the layout is the one part
of a case study that should cost nothing. The shop's case study adds a fifth,
*What comes next*, because it is the one with an unfinished ladder in it.

---

## 05 · Does an unfinished project admit it?

**On the table:** describe the finished parts and say nothing about the rest.
Or name the ladder, the closed steps and the open ones.

**Chosen: name them, and link to the roadmap in the shop.**

A roadmap a stranger can read is a more honest artefact than a project that only
appears once it is perfect. It also converts the obvious objection – *this is
not finished* – into evidence of method, because every closed step has a written
record of what was decided and what was turned down.

This decision is why the roadmap became a tab in the documentation at all. The
case study needed something to point at.

---

## 06 · How much do they say about the model?

**On the table:** leave it out, since the design decisions are the author's. Say
it once, plainly. Or make it the subject.

**Chosen: one paragraph in each, inside *Process*, under its own heading, with
the division of labour stated and the consequence attached.**

Leaving it out would be a lie of omission in a document whose whole argument is
that this project does not lie. Making it the subject would let the tool stand
in front of the work. A paragraph in the middle says it without either.

The consequence is the part that matters and it is stated in both: the
discipline visible in the repository exists *because* the implementer is fast.
A fast implementer with no constraints produces drift, so the system needs rules
a machine can be held to and tests that hold it there. That sentence turns a
disclosure into an argument about method.

---

## 07 · Every figure read from the running code

**Chosen: no number goes into either document until it has been counted from the
code.**

This is the rule the whole project runs on, applied to the documents about it.
It caught, in order: 135 tokens where there are 137; nine decision documents
where there were six; nineteen documentation tabs where there were twenty, then
twenty-one, then twenty-two; nine test suites where there are twelve; six
decision records where there are now eight.

**The figures drift because the project moves, not because anybody was careless.**
That is exactly why they cannot be quoted from memory. Two of the counts above
were corrected twice inside one week.

---

## 08 · English, in a bilingual project

**Chosen: English only, with no Polish counterpart.**

Everything else in this project exists in both languages, written from the thing
rather than translated. The case studies do not, because they address a specific
reader: somebody looking at a portfolio, often not Polish-speaking, who will
decide in a minute whether to open the shop.

**This decision pulled two others behind it.** `README.md` became English with
`README.pl.md` beside it, because case studies in English that lead to a Polish
front page make the reader stop at the door. And the code's comments were
unified on English for the same reason – a stranger who follows the link reads
the code the same way she reads the README.

Those two are recorded in step 07's own decision architecture. They are noted
here because they were consequences of this step, not of that one.

---

## 09 · What the Outcomes section is allowed to claim

**Chosen: outcomes stated as things that exist, each one checkable by opening
the shop, and one section naming what is not achieved.**

Both documents end their Outcomes with the two colour pairs below AA – named in
the Accessibility tab as open items rather than quietly dropped from the contrast
table. A case study that lists only successes tells the reader nothing about how
the author behaves when something does not work.

---

# Part two · How the decisions were made

**The documents were written, then audited against the code, then corrected.**
Not drafted from notes: drafted from the repository, with the figures counted
during writing rather than after.

**The audit ran the same three passes as a documentation audit.** Does the text
match the code; does it contradict the other document; is the language plain.
The second pass is the one that earns its place here – two documents describing
one project drift apart at the first correction, and the cross-links make the
drift visible to a reader who follows them.

**One structural claim was wrong and stayed wrong for a day.** The design
system's case study said the roadmap tab was the newest thing in the
documentation. By the time anybody read it there were two new tabs, because the
list of documents had become its own. Corrected when the tab split happened,
which is the pattern this project keeps repeating: the document is true until
the next change, and the next change is what finds it.

---

# Part three · What exists now

**Two documents in `docs/`, about 1,500 and 1,700 words**, each with a
standfirst, four or five sections, the role and the type stated at the top, and
live addresses for the shop, the design system and the source.

**Cross-linked four ways:** header to header, and in the body where each
mentions the other's subject.

**Every figure in them counted from the running code**, and a test that keeps
the project's own documents honest about their lengths.

## What is deliberately still open

**They are not published anywhere yet.** They live in the repository, which is
where a stranger arriving from the source will find them, but the portfolio they
were written for does not exist as a page. That is not part of this ladder.

**Neither has a Polish version.** If the shop ever needs one – for a Polish
reader who arrives at the repository rather than the portfolio – it would be
written from the thing, not translated.

## Where it goes next

With this step closed, eight of nine rungs are behind and the ladder has one
subject left: **the model behind the bookseller**. Her recommendations are
written by hand against a catalogue of nineteen titles, which is honest and does
not scale. The case studies say so in as many words, which means the next step
is now promised in public.
