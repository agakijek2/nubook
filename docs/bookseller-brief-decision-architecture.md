# Step 05 – The bookseller's brief

Decision architecture, written after the fact. Box text for FigJam is in **bold**;
the paragraph under it is the note.

This step produced no interface and no code. It produced a document, and the
document is what the next two steps get built against.

---

## What the board asked for

**The rules the shop's bookseller answers by: never invent a title, never claim
to have read one, never recommend off this shelf. Written before any code.**

Three prohibitions. What came out is a document of ten sections and nineteen test
cases, and the growth is the whole story of this step.

---

# Part one · The decisions, in the order they were taken

---

## 01 · Who is she, when she speaks?

**On the table:** the shop with no persona, saying *we have* and *we do not have*
in the same voice as the empty state. Or a full character with a name, a length
of service and favourite books.

**Chosen: a person with a position, and no biography at all.**
She may say *I'd start with this one* and *that is not a book for this request* –
judgement about fit is the whole job, and a bookseller with no opinion is a search
box with better manners. But she has no name, no age and no reading history.

**The reason is not restraint, it is mechanics.** Every invented detail is a
thread a model will pull. A bookseller who once had a favourite novel will, four
exchanges later, remember the summer she read it.

---

## 02 · What happens when we do not have it?

**On the table:** move straight to what the shop does have, which reads more
fluently. Or refuse and stop.

**Chosen: the plain fact first, the offer second.**
*We do not have that one* is the first sentence, standing alone; only then the
title's motifs, then one book from the shelf, then why. A shop that slides past
the missing title has answered a question nobody asked.

**This is not a new decision – it is step 02's decision applied again.** The
empty search state was built on the same order: the truth about what is missing,
then the way out. Reusing it meant no argument and no second pattern.

---

## 03 · What language is the brief itself in?

**On the table:** Polish, because Aga edits it sentence by sentence. Or bilingual,
like the motif vocabulary.

**Chosen: English, with a rule inside it about answering in both.**
It sits beside the three other decision documents and can be shown as it stands.
The bilingual option was rejected on maintenance: two copies of a document that
changes every session is two copies that drift.

---

## 04 · What does the brief cover beyond the three prohibitions?

**On the table:** what she may know, the shape of an answer, what she does not
comment on, how she is tested.

**Chosen: all four – and a fifth that reshaped the document.**

> *"Nie wchodzi w nic poza motywem podanego tytułu i jak to się ma do
> zaproponowanej książki. To jest bardzo ważne, żeby granice konwersacji były
> jasno nakreślone."*

That sentence moved the boundary from a section near the end to **section 2, in
front of the prohibitions**. A narrow scope is a stronger constraint than a list
of things not to say: it does not enumerate the failures, it removes the room for
them.

**Consequence:** the section on what falls outside gained its own rule about
*how* she declines – by returning to the shelf, never by describing her own
limits. A model asked for something out of scope will, left alone, deliver a
paragraph about what it is and cannot do, which is exactly the exit from
character that the persona decision was protecting.

---

## 05 · Should the sources be a closed list?

**Raised by Aga, not by the brief:**

> *"nie widzę w dokumencie linków do konkretnych podstron… Wydaje mi się, że
> warto dać jej kilka źródeł, do których może zaglądać wyłącznie."*

The brief said *the web* and left it at that. That is a gap, and the same gap the
motif vocabulary had closed two steps earlier: the argument of step 03 was that a
closed list beats free prose, and the source list had been left open by
inattention.

**Chosen: three sources, each with one job.** Identity, what the book is about,
and a fallback for books with no encyclopaedia article.

---

## 06 · Is the list a request or a rule?

**On the table:** the model gets a search tool and an instruction to stay on the
list. Cheap, and the way this is usually built.

**Chosen: the list lives in the code, and the model has no search of its own.**
Our own fetcher retrieves; the model receives text it did not choose and cannot
add to.

**The difference is not obedience, it is reach.** With a search tool, *she stayed
on the list* is a behaviour to be trusted and tested, and a departure from it is
invisible. Without one, it is a property of the plumbing and there is nothing to
test.

Cost stated honestly at the time: the search-tool version is an afternoon, this
is a few days. That is the price of the difference between a rule and a wish.

---

## 07 · Which sources – and the one decision the evidence overturned

**Chosen first:** two or three open review outlets, alongside the encyclopaedia
and an identity source. More coverage of contemporary fiction.

**Then measured.** Four review outlets were fetched on 7 September 2026:

| Source | Result |
|---|---|
| The Guardian, books | blocked |
| NPR Books | timed out, twice |
| Los Angeles Review of Books | timed out |
| Kirkus Reviews | empty response |
| Wikidata search API | timed out |
| Open Library `search.json` | empty |
| **Wikipedia article pages** | **answered, on both a 1985 and a 2023 novel** |

**Chosen instead: the encyclopaedia already carries the reviews.** A Wikipedia
article on a current novel quotes Kirkus, the Guardian, the New York Times, NPR,
the Chicago Review of Books and the Washington Post – each attributed, each in one
sentence. The outlets we wanted to add were inside the source we already had, and
reachable on a day when the outlets themselves were not.

**The third source became the publisher's page for the edition**, which always
exists and is honest about subject matter if not about worth.

**Rule adopted: the list carries a date and a note of what failed.** A short list
with no date cannot be told apart from a lazy one.

---

## 08 · Which sections of a source does she read?

**Found while testing, not while planning.** The Wikipedia article that answered
so well is 95% plot summary, cast, sales figures and thirty-nine footnotes. The
useful part is one section.

**Chosen: themes and reception. The plot summary is stripped before the model
sees it.**
A plot summary is a scene-by-scene account of a book written by someone who read
it. Handing that to a model is handing it the exact material it needs to sound
like a reader – and *never claim to have read one* is prohibition number two.
Nearly every rule in the brief fails at that one page and only there.

---

## 09 · Two kinds of rule

**Noticed after 06, and it changed how the whole document reads.** Once the source
list moved into the code, the brief held two species of rule side by side and did
not say which was which.

**Chosen: every rule is marked *structure* or *behaviour*.**

- **Structure** – the code makes it true; the model cannot break it; there is
  nothing to test, only something to keep from being dismantled.
- **Behaviour** – breaking it means writing a sentence; it needs a test case and
  the case is re-run after every change of prompt, model or fetcher.

**What the marking exposed:** section 4 – all six prohibitions, including all
three from the board – is **entirely behaviour**. The plumbing decides what she
can reach and when she appears. Nothing in the plumbing decides what she says.

**And a third category fell out:** some behavioural rules can be **promoted** by
a cheap check on the finished answer. *Never invent a title* is one: scan the
output for titles, confirm each is in the shop's data or is the title the reader
typed. Three of the six are promotable, and that is work for step 06.

---

## 10 · Who starts the conversation?

**Raised by Aga, and it inverted the document:**

> *"chciałabym, żeby była jako floating widget w prawym dolnym rogu i rozumiala
> na jakiej podstronie jestem i reagowala na konkretne eventy."*

Section 2 had said there is one shape of exchange and the reader begins it. A
widget that notices and speaks first is a different product.

**Chosen: the shop may begin, on two events and no others.**

The shape did not actually change – what changed is **who supplies the title**.
The reader types it, or the page she is standing on provides it. Everything after
that is identical, which is why one document still covers both.

---

## 11 · When does she stay silent?

> Section 15 reopened one of the four silences below and closed it the other way.
> This section stands as it was decided; what changed is recorded there.

**Missing from the proposal, and the most important rule in the step.** Three
triggers across three views means being approached four times in one visit. The
brief had a section on how she refuses and not a line on restraint.

**Chosen: two triggers, four named silences.** And the silences are decisions,
not omissions:

- **A search emptied by the filters, not by the shelf.** The shop has the book;
  the empty state's button already clears the way to it, instantly and with no
  model call.
- **A product page for a book we can sell.** The motif row and its drawer say
  what that book is about, twenty pixels away.
- **A query under two characters.** Nothing there to guess from.
- **The same event twice in one visit.** An assistant that repeats an offer is not
  attentive, it is stuck.

**The best property of this: the model never decides to speak.** Our code decides,
on two conditions. So the most dangerous quality of an assistant that interrupts
is *entirely structural* – the one thing nobody has to police.

**Four test cases were written anyway, and they pass by producing nothing.** A
silence is easy to lose: someone widens a trigger condition and the shop starts
talking on every page without a single rule having been rewritten.

---

## 12 · The empty state and the bookseller say the same thing

**On the table:** let her carry the whole message and shrink the empty state.
Fluent, and it makes the assistant feel central.

**Chosen: the page keeps the bad news, she keeps the offer.**
The empty state goes on saying *we do not have "X"* on its own, before any model
has answered and whether or not one ever does. On an empty search she never
repeats it – she opens at the guess, *looking for Gone Girl?*, which is the one
thing the page cannot work out for itself.

**Why not the fluent version:** the message about a missing book would then depend
on a model call. When that call fails, the reader would not learn even that the
title is absent.

---

## 13 · Where do the answers about our own books come from?

**On the table:** a live model call on every trigger. One path in the code instead
of two.

**Chosen: everything about the nineteen books is written in advance, read, and
stored beside the motifs.**
It is all derivable from data already in the repo – description, motifs,
expansions, status. Pre-written, those answers are instant, cost nothing to serve,
and cannot invent a fact about a book we described ourselves.

**Consequence, and it is the largest simplification in the step: only one of the
two triggers ever reaches a model.** A title the shop does not stock is the sole
case where anything is fetched and anything is generated.

---

# Part two · How the decisions were made

**Not a process, but a pattern that repeated, and it is worth naming because it
is what made the document survive contact with reality.**

**Options with a recommendation, not a proposal.** Every fork was put as two or
three named options with the trade-off stated and one marked as recommended. Six
were taken as recommended; two were overruled; one was overruled and then
overturned again by measurement.

**Two constraints from Aga reshaped the document rather than adding to it.** The
boundary (04) moved a section to the front and made the prohibitions secondary.
The widget (10) inverted who starts the conversation. Neither was a request for
more text; both changed what the text was organised around.

**One question exposed a gap nobody had noticed.** *Where are the links to the
sources?* – the brief had said *the web* and stopped, in a project whose whole
argument two steps earlier had been that a closed list beats free prose.

**Measurement overruled a decision, and it was said out loud.** Aga chose two or
three review outlets. The outlets did not answer. The right move was to report
that plainly and propose the change, not to quietly build the version that
worked – and not to build the version that had been chosen knowing it would fail.

**A settled decision was re-litigated once, and caught.** During the button-tab
audit in the same session, a sentence written the previous day was reported as a
defect. Aga asked whether the interface had changed since. It had not. The
finding was withdrawn.

**Nothing was written into the document without being checked against the data.**
Nineteen books, fifteen motifs, two out of stock, one preorder, all English
editions – every one of those numbers in the brief was verified by script, and one
test case was rewritten when the shelf turned out not to support it.

---

# Part three · How the agent is built, in theory

**The model sits in the middle of five layers of our own code, with no tools and
no memory. Everything before it is ours; everything after it is ours.**

---

**Layer 0 · The shop's data.**
Nineteen books with title, author, description, two prices, status, edition
language and two to four motifs. Fifteen motifs with a definition, a lead, an
expansion and an attribution. Static, in the repository, reviewed by hand.

**Layer 1 · Pre-written answers.**
For each of the nineteen, what she would say about it, generated once from layer 0
and read before it ships. No model at runtime, no latency, no invention.

**Layer 2 · The trigger.**
Pure logic, no model. Two conditions: a search that empties because the shelf does
not hold the title, and a product page for a book that is out of stock. Everything
else is a silence. This layer also holds the once-per-visit rule.

**Layer 3 · The lookup.**
Only for a title the shop does not stock. Our server fetches from three
hard-coded domains, takes themes and reception, drops the plot summary, and
returns a small structured result. The model never sees a URL.

**Layer 4 · The model call.**
No tools. It receives the brief as its instruction, the shelf, the vocabulary and
the text layer 3 returned. It returns one or two sentences for the section, four
to six for the reason behind one proposal. One turn. Nothing carried forward.

**Layer 5 · The check on the way out.**
Every title named must resolve to layer 0 or to what the reader typed. Where the
answer names a book with a status, the status must appear in the answer. This is
where three behavioural rules get promoted into things that cannot fail unnoticed.

---

**What the shape buys, stated as the ledger it is:**

| | Kept by |
|---|---|
| Stays on the source list | the code – no search tool exists |
| Never follows a link | the code – no fetching exists |
| Never reads a plot summary | the code – stripped at layer 3 |
| Speaks only on two events | the code – layer 2 |
| Never invents a title | the model, checked at layer 5 |
| Never recommends off the shelf | the model, checked at layer 5 |
| Never softens a status | the model, checked at layer 5 |
| Never claims to have read one | **the model alone** |
| Ignores instructions found on a page | **the model alone** |
| Stays inside the boundary | **the model alone** |

**The last three are the honest ones.** Nothing in the architecture protects
them, and they are the reason the test set exists and gets re-run.

---

## 14 · Where she stands, and what that decided

Both of these were left open here to be taken while drawing rather than while
specifying, and drawing them closed both at once.

**On the table:** a floating element in the corner with an avatar, a raised
offer and an opened state, appearing after a delay - four hundred milliseconds
reading as a hint, two seconds as someone who noticed.

**Chosen: a section in the product column, at the foot of it, with no delay.**
What she says is about one title on two pages out of nineteen, and a corner of
every view promised somebody who follows the reader through the shop. The place
carries the argument too: she offers two books about the same motifs, so she
stands after the description and the list of motifs, where the reader has been
brought to the reason before the offer.

**What it cost, and what it saved:** the delay went, and with it the one thing
the floating version had - an offer that arrives by itself and is therefore hard
to miss. A section waits to be reached. Against that, the whole apparatus of
keeping a box on screen went with it: a ceiling under what is pinned at the top,
a floor measured against the footer on every scroll, a height in dvh for the
address bar, a z-index against six other layers and a walk between two sizes
whenever an answer opened.

**What is now a component:** the section, a two-level mark, and a reason that
opens under a proposal. The timing question never arrived - nothing appears late,
so nothing has a moment to be judged by.

---

## 15 · Speaking about a book we can sell

Section 11 closed this the other way, and the shape it was closed for was a
floating widget. What reopened it is section 14: a block in the product column
costs a reader nothing until she reaches it, and the argument against speaking
here was an argument against interrupting.

**On the table:** leave it. The motif row names what this book is about and its
drawer explains each motif, twenty pixels away, so a second voice on the same
page is a second route to knowledge the reader already has.

**Chosen: she speaks about a title on the shelf as well, and what she adds is
about the shelf rather than about the book.**
The motif row says which motifs this book carries. The drawer says what each of
them is. Neither says **which other books here carry the same one, or what those
books do with it** - and that is the one claim on the page a reader cannot work
out for herself, because it needs the whole shelf to answer.

**What decides she speaks is the writing, not the status.** A title with a set
written for it gets a section; a title without one gets nothing, whether it is in
stock or not. Nineteen titles is small enough for that to be a list somebody
chose rather than a gap somebody left.

**What it cost:** the four silences of section 11 became three. The one that went
was the strongest of them, and it went because it answered a question about
interruption that a section in the flow does not raise.

**Why not the fluent version:** letting her speak on every product page with
something generated from the motifs would put a paragraph under every book, and a
paragraph under every book is wallpaper. The writing is the limit, deliberately:
it is what makes her silence mean something.

---

## What is deliberately still open

**The prompt.** The brief is not a prompt and says so in its first line. Writing
one from it is step 06, and where the two disagree the brief is right.

**Cost and latency budgets.** An event-triggered call is billed per pause in
typing, not per question asked. Layer 1 removes most of that, and what remains
needs a number.

---

## Where it goes next

Step 06 builds layers 2 to 5 and finds out which parts of this were optimistic.
The first thing it should produce is not the agent but layer 1 – nineteen short
texts, read and approved – because that is the half of the product that needs no
model at all.
