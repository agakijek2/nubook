# Step 06 – The bookseller in the shop

> **The shape decided here has been replaced.** What this document argues for is
> a floating widget: a mark in the corner of every view, an offer raised beside
> it, an opened state, a way to dismiss it and a way to call it back. The
> bookseller is now a section in the product column, at the foot of it, with no
> corner, no delay and nothing to open. The reasoning is in
> [`bookseller-brief-decision-architecture.md`](bookseller-brief-decision-architecture.md),
> section 14, and the brief describes the shape that exists.
>
> This file stands as it was written. A decision record says what was decided at
> the time it was decided; editing it until it agrees with today would leave a
> document that has never been wrong and therefore says nothing about how the
> work went. Several of the decisions below outlived the box they were made for -
> two proposals and never three, the reason kept behind a control of its own, the
> answer arriving a line at a time - and those are still in the shop.

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

Step 05 ended by saying what this step would be: *build layers 2 to 5 and find
out which parts of this were optimistic.* What it actually built is layers 0, 1
and 2 – the data, the written answers and the trigger – plus the thing step 05
had filed under *deliberately still open*: the widget as a component. Layers 3 to
5, the ones with a model in them, were not built and are now step 08.

That is not a shortfall. It is the finding: **the half of the product that needs
no model at all turned out to be a component problem, and a component problem is
where the design system either holds or does not.**

---

## What the board asked for

**A bookseller who speaks when the shop cannot sell you the book you came for,
and says what she would put beside it instead.**

Two titles out of nineteen are out of stock. Each has two proposals written in
advance, in both languages – four answers, read before they ship. No model runs
at any point in what was built.

---

# Part one · The decisions, in the order they were taken

---

## 01 · When does she speak at all?

**On the table:** a helper available everywhere, the way a chat bubble usually
is. Or silence with two named exceptions.

**Chosen: silence, written as a rule of the code rather than a rule of conduct.**
She appears on the product page of an out-of-stock title, once a visit, and
never proposes a title the shop also cannot sell. Everything else is a silence
that no instruction has to maintain, because there is no path to it.

**The reason is the same one that shaped step 05's architecture.** A behaviour
that can only be trusted is a behaviour that fails invisibly. A trigger that is
two conditions in a function is a behaviour that cannot fail at all.

---

## 02 · What does the widget owe the page around it?

**On the table:** a dialogue, which is what a floating panel usually becomes.
Or something the reader can ignore and go on working past.

**Chosen: never modal. No scrim, no `inert`, no focus trap.**
The panel is announced as `role="status"`, politely, because nothing in it has
to be read before anything else. It sits on layer 75 – over the sort menu and
the checkout bar, under the filter sheet, the shop bar and the drawers.

**An offer is not a question.** A shop that dims the page to tell you what else
it has has mistaken a suggestion for a transaction.

---

## 03 · Does the shop speak first, and how soon?

**On the table:** open with the view, so the offer is where the eye already is.
Or leave the reader alone for a moment first.

**Chosen: the mark arrives at once, the offer waits `--nu-motion-hold`.**
The clock is cleared when the view changes, so leaving the page before she
speaks means she never does.

**The pause is not politeness, it is order of business.** The reader came to
look at a book. An offer that arrives before she has read the page is answering
a question she has not finished asking.

---

## 04 · Is dismissing her the same as removing her?

**Raised by the first build, which conflated the two.**

**Chosen: the cross collapses the panel, the mark stays on the page.**
Pressing the mark brings the offer back. That makes the avatar a control rather
than a decoration – a `button`, with `aria-expanded`, a name from the dictionary
and the shop's focus ring. The once-a-visit rule now governs self-opening, not
presence.

**Two different acts had been one.** *I have read this* and *go away* are not
the same sentence, and a shop that treats them as one takes the second meaning
every time.

---

## 05 · What does a proposal lead to?

**Chosen: the cover and the title are one link; the reason is a separate
button.**
Going somewhere and reading more are two acts, so they are two controls. The
link has an address, so it is an `a`; the reason opens in place, so it is the
lightest button variant.

**Price and availability travel together.** A recommendation that hides a
preorder sends the reader to a page she cannot buy from, which is the same
failure the shop was apologising for.

---

## 06 · How does the mark answer?

**On the table:** the dot grows and shrinks, which is the ordinary way to say
*working*. Or it lights up, the way the accent beside the wordmark does.

**Chosen: light, not size.**
One shape covers both states, and the states are its multiple: **one breath
means something happened, breathing means something is happening.** Under the
pointer it holds at half strength – ready, not working.

**The mark keeps its own tokens even though they carry the same two values as
the wordmark's.** A shared token would mean a change to the logo reaching into
the corner of the screen, and the second dot would read as a logo that had slid
off the header.

**Cost, recorded honestly:** those tokens hold plain colours rather than
`light-dark()`, because a keyframe resolves `light-dark()` once and against the
scheme that is not in force. The alternative was a dot that stayed the previous
scheme's colour after a switch – which is exactly the bug that appeared, and was
fixed by making nothing scheme-dependent transition.

---

## 07 · Where do the glow's colours live?

**Found, not decided:** the same five values were written out literally in two
sets of keyframes, the wordmark's and the bookseller's.

**Chosen: five palette primitives and five semantic tokens named by
temperature** – `warm`, `bright`, `fresh`, `cool`, `dusk`, in order from the core
outwards.

**A colour kept in two places is a colour that will end as two colours.** The
naming is by character rather than by hue, so a change of shade does not make
the name a lie. The red got its own step rather than borrowing the error red: an
accent that has to hold its own beside four other colours is lighter than a
message on white.

---

## 08 · Does she wait?

**On the table:** no waiting state at all, since the answers are written in
advance and arrive instantly. Or build the state now, for the model that comes
in step 08.

**Chosen: the waiting state is built, the waiting is not.**
Skeleton, `aria-busy`, the mark in its working state, the text setting itself
down – all real, all tested. The wait itself is zero, so no reader sees it.
`index.html?bs=slow` turns it on; that is a tool, not a behaviour.

**Making a reader wait for text that is already here would be the shop acting
out work it is not doing.** When step 08 puts a real call behind it, the state
switches on by itself, with nothing to redesign.

---

## 09 · Does she repeat herself?

**Chosen: an answer arrives once a visit.** Opening the same row again puts the
text down whole – no skeleton, no breath, no arriving.

The key is the pair of books *and* the language, because the other language is a
different answer rather than the same one again. The memory lives in memory, so
it lasts exactly as long as the page does and nothing reaches the browser
permanently.

**The same structure will stop the model being asked twice about the same book**
when there is a real call behind it.

---

## 10 · Is the offer behind a button?

**On the table:** keep the *See both* toggle, so the bubble opens small. Or make
the comment and the books one default state.

**Chosen: no toggle at all.**
The button went entirely – its two dictionary strings, its function, its
`aria-expanded` and `aria-controls`, its class and its rules.

**She opens her mouth to show you the books.** A control between the sentence
and what the sentence names is a step the reader has to take to get what she was
already being offered.

**It paid for itself in the stylesheet.** The panel had two widths chosen by
`:has()` on the hidden list; with the list always there, one width remained.

---

## 11 · How does the text arrive?

**First built: a word at a time.** Each word out of blur, the next setting off
before the last had landed, so the line resolved as a wave.

**Chosen instead: a line at a time.**
A line is what the eye takes in at once, so it is what arrives at once. A line
every `--nu-motion-quick`, each over `--nu-motion-slower`, on `--nu-ease-zoom`,
out of a 12px blur and settling the last step of the way up.

**Where the text breaks is the browser's decision, not the markup's**, so the
lines are read off the finished layout: every word holds its place from the
moment the answer is written, and words sharing a top edge share a line.

**The list marker had to be taken off the list.** A marker is drawn by the item,
not by the words, so it stood there in full while its own line was still on its
way. The item draws its own instead, in the room the list already leaves for it,
and it arrives with the first line it belongs to.

---

## 12 · Who does the opening – the panel or the words?

**First built: the panel grew a line at a time**, clipped to what had arrived,
opening at a steady rate.

**Chosen instead: the panel takes its full size at once, and the text arrives
into room that is already there.**

**A box creeping open reads as the panel doing the work, and the work belongs to
the words.** The empty space under the arriving text is the point, not a defect.

**But it does not land there in one frame.** The panel walks to its new size in
both directions over `--nu-motion-base` on `--nu-ease-slide`; arriving instantly
read as a second panel replacing the first. The same move takes it back when the
answer is put away.

---

# Part two · How the decisions were made

**Two kinds of change, and telling them apart is most of the story.** Six of the
twelve above were taken once and stood. Four were taken, built, looked at, and
replaced by their opposite – the reveal unit, the panel's growth, the toggle,
the breath's scope. That ratio is not a failure of specification. It is what
*decide while drawing it* costs and buys, and step 05 had already said the
bubble's timing was a decision of that kind.

**Every reversal came from looking, not from arguing.** Word-by-word was
defensible in prose and wrong on screen. The growing panel was the more
considered mechanism and the less natural one. Nothing was settled by which
description sounded better.

**Five defects in this step were mine, and four of them were invisible to the
tests that existed.** The worst: the answer was blank for every reader for two
days, because `bsDeliver` had two paths and the tests only ever ran the one
behind `?bs=slow`. Another: I measured line positions with `offsetTop`, which
answers from the nearest positioned ancestor – the panel, not the text box – so
the box opened far past its own foot and the whole answer appeared at once.

**The response to each was a test that fails on the old code, not a fix.** The
suite grew from four files to six: the shop's ordinary path, the contrast table,
the reduced-motion contract, the line grouping, the once-a-visit rule. Each new
check was run twice – once on the repaired code to see it pass, once on the
broken code to see it fail. A test that does not fail on the defect it was
written for is not a test.

**Twice I diagnosed from the cascade instead of looking, and was wrong twice.**
The standing rule in this project – build a comparison file and let the designer
look – exists because of the first time. The second time cost a round trip that
a rendered page would have settled.

---

# Part three · What exists now, against the five layers step 05 drew

| | Step 05 said | Step 06 built |
|---|---|---|
| Layer 0 · the shop's data | nineteen books, fifteen motifs | unchanged |
| Layer 1 · pre-written answers | *the first thing this step should produce* | four answers, two titles, two languages, read before shipping |
| Layer 2 · the trigger | pure logic, two conditions, once per visit | built, plus the widget it speaks through |
| Layer 3 · the lookup | our fetcher, three domains | not built |
| Layer 4 · the model call | no tools, one turn | not built |
| Layer 5 · the check on the way out | every title must resolve | not built |

**The component that step 05 could not name now exists.** A floating element, an
avatar, a bubble, an opened answer – all of it built from parts already in the
system: the cart's thumbnail row, the drawer's close button, the ghost variant,
the slide curve. The two genuinely new things are the avatar, which became its
own documentation tab, and the mark's light, which became five palette
primitives.

**Two tools ship with it, both named as tools:** `?bs=slow` turns the wait on,
`?bs=all` makes every title behave as out of stock, because two out of nineteen
are hard to reach by ordinary clicking.

---

## What is deliberately still open

**The blur radius is a plain 12px, outside the token scale.** So is the glass
blur on the primary button. Either that is a named boundary – some optical
values do not belong on a spacing scale – or it is two pieces of drift. It has
not been decided, only noticed.

**The answers are written by hand.** Four of them is a morning. Nineteen titles
against a shelf that changes is the argument for layers 3 to 5, and the point at
which step 08 stops being optional.

**Nothing has been measured with a reader.** Every timing above is a judgement
made while looking at it, which is the right way to take it and not the same as
knowing.

---

## Where it goes next

Step 07 deploys what exists. Step 08 puts the model behind layers 3 to 5, into a
waiting state that is already built, a once-a-visit rule that already holds, and
a check on the way out that step 05 specified and nothing yet enforces.
