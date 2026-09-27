# Step 07 – Publish what exists

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

This step began as *deploy* – a technical errand at the end of the ladder – and
was renamed before it started. A deploy only has to work. A publish has to
survive being opened by a stranger who arrives from a portfolio link, looks at
the repository, and forms an opinion in a minute.

That rename is the whole step. Everything below follows from it: the README, the
tests, the licence, the link card and the error page were all *later* until the
work stopped being about servers and started being about what a stranger sees.

---

## What the board asked for

**Three addresses that exist and each survive being opened by someone who has
never seen the project:** the shop, the design system, and the source.

The shop was finished enough to publish months of work earlier. What was not
finished was everything around it that a public address implies.

---

# Part one · The decisions, in the order they were taken

---

## 01 · Where does the plan live – in the shop or in the documentation?

**On the table:** a roadmap linked from the shop's footer as a page of its own,
or a tab inside the design system documentation.

**Chosen: a tab in the documentation, reached from the footer.**

A shop's footer is where a reader looks for delivery and returns, not for a
project plan. The documentation is already backstage – it is the part of this
address that admits to being a project rather than a business – so the plan
belongs in it. The footer link is labelled *About this project*, which is the
phrase a reader would use, rather than *Roadmap*, which is the phrase we use.

The ladder has one source, in the code. The copy in `docs/roadmap.md` exists for
anyone reading the repository rather than the shop, and a test compares the two
rather than trusting that they will be kept in step.

---

## 02 · Is the list of documents part of the roadmap?

**On the table:** a short section at the foot of the Roadmap tab, or a tab of
its own.

**Chosen: its own tab, standing second, with Roadmap first.**

It began as a section. It grew into three four-column tables with an
introduction of its own, and at that size it had stopped being an addendum to
the plan and become a second subject. Both tabs then moved to the front of the
documentation, straight after the overview: a reader who arrives from the
footer should see what the project is and how far it has got before she meets
the token inventory.

Each entry carries its reason and its length, and a test checks the lengths
against the files – because a figure nobody verifies quietly stops being true,
and a reader who opens four thousand words believing it is a paragraph does not
come back.

---

## 03 · Which language does the README open in?

**On the table:** Polish, as everywhere else in this project. Or English, with
Polish beside it.

**Chosen: `README.md` in English, `README.pl.md` in Polish, each linking to the
other in its first line.**

Everywhere else in this project Polish comes first and English stands beside it.
`README.md` is the exception, because it is the one file GitHub renders on its
own: its language is not a matter of convention but of who will see it. Both
case studies are in English and both lead here, so a reader who has just read
about the project in English should not arrive at a front page she cannot read.

The English version is written from the thing rather than translated from the
Polish, like every other pair of texts here.

---

## 04 · How much does the README say about how this was made?

**On the table:** a footnote at the bottom; a section of its own; or the opening
sentence.

**Chosen: a section of its own, high on the page, after what the shop is and
what the design system is.**

That the shop was built in collaboration with a model is either the most
interesting thing on the page or a footnote, and putting it first risks a reader
taking *the model built this* from a page that says *a designer built this and
held a model to it*. A section, placed third, says the same thing without
letting the tool stand in front of the work.

The section does not stop at the division of labour. It states why the
discipline in this repository exists at all: an implementer working at that pace
will add a fifth heading style and a hand-typed pixel value, so the system needs
rules a machine can be held to, and tests that hold it there.

---

## 05 · Does the shop get a claim?

**On the table:** no claim – the strapline *novels on women & gender* does the
work. A claim about connection (*we connect the dots, then we name them*). A
claim about the way in.

**Chosen: "Books, by what they are about."**

Verbless on purpose. *Browse* and *discover* are instructions given to a reader
who does not yet know where she is; *search* would collide with the control of
that name in the shop; *find* assumes she already knows the title, which is the
premise the whole shop denies. Dropping the verb also survives Polish, where the
imperative version is long and stiff – a claim that works in one language and
limps in the other is not a claim this project can use.

**And it does not go into the shop.** The masthead still reads *novels on women
& gender*. The card invites, the masthead names; a strapline is a label and a
claim is a promise, and they do different jobs. This is written into
`build-og.py` beside the claim itself, so that the difference reads as a
decision rather than an unfinished change.

---

## 06 · What does a pasted link look like?

**On the table:** nothing – the page had a title and no description, no image,
no favicon, so a link dropped into a message showed a bare URL.

**Chosen: a card drawn from the shop's own typefaces and tokens, and generated
rather than authored.**

`build-og.py` reads its colours out of `css/styles.css` and refuses to run when
one is missing. A card is a picture and cannot read a stylesheet the way the
documentation does, so the alternative was retyping values – and a card that
still shows the old black after a palette change is worse than no card.

Two proportions of the composition are watched by the script itself: the block
of motifs overhangs the claim by a chosen amount, and the two lines of the claim
are the same width to the pixel. Both were chosen by eye and both are fragile to
a change of wording, so the script says so rather than leaving it to be noticed.

**The motifs on the card are set as prose, not as chips.** A chip is the shape
of a control; on a picture nothing is clickable, and a row of pill shapes would
read as tags – which is the exact mistake the claim above them denies.

---

## 07 · What does a wrong address get?

**On the table:** GitHub's own error page. Or one of ours.

**Chosen: ours, wearing the shop's header and footer.**

A wrong address on GitHub Pages lands in somebody else's shop. The replacement
names what happened in the shop's own voice – no "404", no joke about being lost
– and offers one button back.

**The switchers are deliberately absent.** Language, currency and scheme live in
the shop's script; a control that does nothing is worse than no control. What
the page does instead is read the same preferences key the shop writes, so it
answers in the language and the scheme already chosen. The reader has decided
once; an error page is no reason to ask again.

---

## 08 · Relative paths, except in one file

**On the table:** relative paths everywhere, as in the rest of the project. Or
root-absolute paths on the error page.

**Chosen: root-absolute on `404.html`, and nowhere else, with the cost written
down.**

GitHub serves the error page at any depth, so `css/styles.css` would find the
stylesheet at the root and nowhere else. The price is that the page cannot be
opened by double-clicking it – under `file://` the root is the root of the disk
– and that under a `/nubook/` subpath it renders unstyled. Both are recorded: in
a comment at the top of the file, in the README, and in a test that fails if a
relative path ever returns.

Everything else in the project stays relative, and that was verified rather than
assumed: the shop was served twice, from a domain root and from a subpath, and
every resource was requested at both – the stylesheet, the script, the three
favicons, the card, all twenty covers and the two deep links. Every one answered
200.

---

## 09 · What may somebody take?

**On the table:** no licence, which reserves everything by silence. MIT on all
of it. Or a split.

**Chosen: the shop reserved, the four procedures released under CC BY 4.0.**

The motif layer is what this shop has. It is not going out under a licence that
lets somebody else open a bookshop on it. The code, the writing, the
documentation and the decision records are readable here – that is what a public
repository is for and why this one is public – and not reusable.

**The procedures in `docs/skills/` are the exception, and releasing them is a
claim rather than a concession.** They describe a way of working rather than
this shop, so they are the part that travels; a licence that says *take this*
asserts that it is finished enough to be worth taking. CC BY rather than BY-NC
because "for my own needs" usually means "at work", and rather than BY-SA
because a share-alike clause keeps a procedure out of exactly the internal
handbooks it is useful in.

**The rule is the kind of content, not the file it sits in.** The design system
documentation and the texts about books live inside `js/app.js`, as strings. The
licence says so, because otherwise nobody could tell which half of that file
they were reading.

**And a section naming what is nobody's to license here:** the covers and the
author portrait, which belong to their publishers, and the quotations from the
novels. A licence that quietly implies rights it does not hold is worse than one
that admits the gap.

---

## 10 · Novela, taken and put back

**On the table:** a commercial display face, bought under a webfont licence, in
place of DM Serif Display.

**Rejected, after it was already in.**

Two things came out of the attempt and both are worth keeping.

**The licence question is real and it is about hosting, not about the font.**
The licence permits embedding on one website. GitHub Pages serves only from the
repository, and the repository is public, so serving the font and distributing
the file are the same act – there is no way to do one without the other. The
licence says nothing about repositories either way. That is not obviously
forbidden and not obviously fine, and the cheap way to settle it is an email to
the foundry, not an assumption.

**The typographic question answered itself.** The face did not suit the shop,
and that verdict took one look at the rendered card, which is the right way to
answer it.

What the attempt left behind: the wordmark briefly got a token of its own,
`--nu-font-mark`, on the argument that a wordmark is a drawing rather than a
step in a scale, so changing its face changes the identity and not the
hierarchy. That argument is sound and the token went away with the font only
because there is no longer a difference to express. It is recorded here so that
the next display face does not have to rediscover it.

---

## 11 · The tests move into the repository

**On the table:** leave them in the working folder, where they were written.

**Chosen: `tests/` in the repository, with a runner, a `package.json` and a
table in the README saying what each suite guards.**

The repository a stranger opens had no tests in it – in a project whose whole
argument is that documentation is checked against the code. Moving them meant
giving each suite a project path computed from its own location instead of an
absolute one, and making jsdom an ordinary dependency instead of something
loaded from a fixed place. Verified on a fresh copy with an empty
`node_modules`, which is the only way to know.

This was the largest gain in the step for what it cost.

---

## 12 · One language for the code

**On the table:** Polish comments, as in the newer files. English, as in the
older ones. Or a boundary between the code and the tests.

**Chosen: English in everything a stranger reads as code.**

The split had no reason behind it – it ran by date, not by sense: the older
files were English and the newer ones Polish, because the conversation they were
written in is Polish. The boundary between "the code" and "the workshop" sounds
principled right up until somebody opens `tests/`, which the README invites her
to do.

Polish stays where Polish is the content: the shop's texts, the documentation,
the error page and this file's siblings.

---

## 13 · The order of the last mile

**Corrected mid-step.** An earlier version of the plan in `docs/roadmap.md`
said the DNS could be started first, in parallel, because the certificate is the
slow part.

That is wrong, and GitHub's documentation says so: the custom domain goes into
the repository settings *before* it is pointed at anything, or there is a window
in which somebody else can host a site at that address. The repository is
therefore the prerequisite for the slowest part, not something that can wait for
it.

The correction is written into the roadmap as a correction rather than a silent
edit, because a plan that quietly rewrites its own mistakes teaches nothing.

---

# Part two · How the decisions were made

**Three things in this step were settled by looking rather than by reasoning,
and the same three would have been settled wrongly by reasoning.**

**A search field's legibility over a moving page.** Inverting, a see-through
rule, a bed of its own – each looked right in the cascade and none of them was
legible. The field ended up answering nothing, and the bar it sits in left the
pinned block entirely.

**A card's typeface.** One rendered picture ended a conversation that a
description would have kept going.

**Two defects that only a phone could find.** On mobile the cart had no way
forward, and the filter sheet left a four-pixel strip of page under it. Neither
was visible to any of the eleven suites, because jsdom computes no layout and
knows no screen width. Both were caused by the same kind of mistake: **a rule
written for one view applied to two, and a value good for one purpose used for
another.** A twelfth suite now reads those rules rather than those pixels.

**Two tests caught their own author.** The check that the English half of the
error page is complete went silent when a helper was renamed – it had been
written to fail on zero matches precisely because it had once passed vacuously,
and it did fail. The tab suite caught a half-finished rename that would have
emptied a documentation table on the live site. Both are the argument for
negative controls, made by the tests themselves.

**Four defects appeared the day the shop went to a public address, and no test
could have caught any of them.** The blur ramp rendering as a plain white wash
in Chrome; the cart with no way forward on a phone; four pixels of page under
the filter sheet; a button growing taller mid-animation. The suites run in
jsdom, which computes no layout and is not a browser, so this whole class is
invisible to them by construction. Each has a check now, and each check reads
the rule rather than the pixels, which is the honest thing a check can promise.
**The conclusion is not that the tests were inadequate.** It is that looking has
to be a scheduled step rather than a thing that happens when somebody notices -
on the devices and in the browsers the work will actually meet, and before the
address goes anywhere near a portfolio rather than after.

**One claim in this project was false and a test now prevents it.** The card's
composition was praised here for an alignment it did not have: the motif block
was said to match the claim's width, and it does not – the two *claim lines*
match each other, which is the real reason the block reads as tight. The
measurement was taken from the parameter passed to the script rather than from
the rendered text. `build-og.py` now measures both and complains about either.

---

# Part three · What exists now

**Three addresses, all live:** the shop at `nubook.eu`, the design system at
`nubook.eu/#design`, the source at `github.com/agakijek2/nubook`. HTTPS enforced,
`www` redirecting to the apex.

**A repository holding the project and nothing else.** Seventeen diagnostic
files and one working file that had been tracked by oversight are gone.

**Twelve test suites**, each with a negative control, run by one command.

**A README that opens with what the project is**, in English, with Polish beside
it; a licence that separates four kinds of thing; an error page in the shop's
voice; a link card generated from the stylesheet; and a roadmap that describes
the state rather than the intention.

## What is deliberately still open

**Two colour pairs below AA.** Named in the Accessibility tab as open items
rather than quietly dropped from the table.

**The font files of a typeface no longer in use** sit in the history of one
commit. Removing them from the current state is one command; removing them from
the history is a rewrite, and the risk did not justify it.

**The case studies were written ahead of their place in the ladder**, because
the shop needed something to link to and because writing them turned out to be
the fastest way to find which figures in this project were wrong. Step 09 stays
open: what closes it is not the text but its own decision record.

## Where it goes next

**Step 08 · the model behind the bookseller.** Her recommendations are written
against the catalogue by hand, which is honest and does not scale past nineteen
titles. What step 05 filed under layers 3 to 5 is now the next step, and the
question it has to answer is the same one this project keeps asking: how does a
shop that makes interpretive claims stay accountable for them.
