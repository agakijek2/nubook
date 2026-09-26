# The nubook design system – documentation that cannot lie

> *How auditing my own documentation – and finding it describing a component
> that no longer existed – turned a design system into a set of tested
> procedures for keeping itself true.*

**Role:** product designer – token architecture, component specification, documentation, QA
**Type:** self-directed project
**Live:** `https://nubook.eu/#design` · **Source:** `https://github.com/agakijek2/nubook`
**Companion case study:** [the shop it was built for](./case-study-shop.md)

---

## Context

Design systems rot in a specific way: the code moves and the documentation stays.
A sentence that was true the day it was written becomes false after a refactor,
and nobody notices, because documentation has no tests. The result is a system
everyone stops trusting – and a team that checks the code instead, which is the
thing the system was supposed to save them from.

This system was built alongside [a working bookshop](./case-study-shop.md), not
as a deliverable next to it. Every rule in it had to earn its place by being
needed in the shop first. It ships *inside* the shop: the same page, the same
stylesheet, reachable at `#design`.

## Goal

**Build documentation that cannot drift out of step with the product, prove it
by testing the documentation the way you test code, and turn what the tests
protect into procedures anyone could follow.**

Underneath that, three positions I took and had to defend repeatedly:

1. **Values that can be read from the stylesheet must be read, never retyped.**
   A number typed into a documentation page is a falsehood waiting for its
   refactor.
2. **A token without a use is either a gap or dead code** – and the system has to
   say which.
3. **A decision that looks accidental gets written down or removed.** No rule
   survives on "that's how it is".

## Process

**Three-tier tokens, 137 of them.** Primitive (holds a value), semantic (names a
role, points down), component (belongs to one component). Steps are named after
the job they do rather than after a number, so a value can move between steps
without renaming a single rule. Colour primitives and text sizes are the
deliberate exception – they are named by their own measure, because there the
job belongs to the token above them.

**The documentation reads the stylesheet.** Roughly thirty helper functions
generate the pages from the live CSS: the primitives table, the token inventory,
the meanings list, the spacing and motion scales, the type specimens, and the
contrast table – where every ratio is *computed from the tokens*, so a colour
change updates the verdict rather than leaving a stale number. A token added to
`:root` appears in the inventory on its own; one whose prefix matches no category
lands in a visible "not sorted yet" group rather than disappearing.

**Twenty-two tabs** across four groups: five that describe the project itself
(overview, roadmap, documents, accessibility, tokens), four Foundations, ten
Components, three Patterns. Each component tab follows the same structure – specimen,
variants table, specification, states, live preview – so comparing two
components is a matter of looking, not reading.

The [roadmap](https://nubook.eu/#design/roadmap) and
[documents](https://nubook.eu/#design/documents) tabs are the newest, and they are
here rather than in the shop for a reason about voice: a shop's footer is where a reader looks for
delivery and returns, not for a project plan. The documentation is already
backstage, so the plan belongs in it. The ladder has one source in the code; the
copy in `docs/roadmap.md` is compared to it by a test rather than kept in step by
hand. The documents tab is the annotated index of everything written along the
way – sources, the bookseller's brief, the procedures – with each entry's length
checked against the file, because a number nobody verifies quietly stops being
true.

**Documentation audits, run like code review.** I wrote a repeatable audit
procedure in three passes: does the text match the code; does it contradict any
other tab; is the language plain. Applied to the Button tab, it found that six of
eight specification rows and five of six state rows described a construction that
had been removed – the tab still documented glass panels on buttons that were by
then flat colour. The tab was rewritten from the rule that actually governs it.

**The audit found things I would have missed.** A "Scheme" row claiming the
buttons pinned six tokens to fixed values when the count was zero. A token
(`--nu-bg-tertiary`) whose only job – outlining a construction that had been
deleted – left it with no uses and a name that promised a surface step its value
had never been. A Polish meaning that said "content on a dark background" where
the English said "on an inverse background", a divergence that mattered the
moment a button started inverting with the page.

**Then I automated the audit.** Twelve test files now check things that are
invisible until someone breaks them: that no blur strength is typed by hand, that
every token named in documentation prose exists in the stylesheet, that every
colour token has a row in its table, that nothing sits in "not sorted yet", that
a component's documented entrance matches the rule that actually runs it. Each
check was added *after* the corresponding defect was found by hand – and verified
with a **negative control**: the code is temporarily broken in exactly the way
the check is meant to catch, and the check has to go red. A test that passes
without being able to catch the thing it is for is worse than no test, because it
buys confidence it has not earned.

**The tests are what made the procedures reusable.** Once a check exists for a
class of defect, the procedure that finds that defect can be written down and
handed to someone else – a person or a machine – because its findings are
verifiable rather than a matter of opinion. That turned the audit from something
I do into something the project *has*. Four written procedures now live in
`docs/skills/`, in Polish and English – listed, with their reasons and their
lengths, in the [Documents tab](https://nubook.eu/#design/documents):

- **Documentation audit** – the three passes, plus the traps that make an audit
  lie to you: a regular expression that matches a comment instead of a selector,
  a multi-line rule that a single-line pattern silently skips, a computed style
  that reports SVG properties the stylesheet never set. It also says what to do
  when the script reports twenty violations in code that looks fine: suspect the
  script first.
- **Writing a documentation tab** – the structure every tab shares, so a new one
  is comparable to the twenty-one already there rather than a new dialect.
- **Building a new view in the shop** – read the documentation and the tokens
  before the first line of code, use the components that exist instead of
  inventing near-duplicates, and audit the documentation afterwards, because a
  new component makes some existing sentence false.
- **Writing in Polish** – a procedure against the specific way a bilingual
  project degrades: Polish that is grammatical, made of Polish words, and is
  nevertheless English underneath.

These are the deliverable I did not expect to produce. A design system is
usually a set of components; what this one also has is a set of **written
procedures for keeping itself true** – each one backed by tests that can tell
whether the procedure was followed.

They are also the one part of the repository released for reuse. The shop, its
writing and its documentation are reserved; the four procedures are CC BY 4.0,
free to take, adapt and use at work. That split is the point: what is specific
to this shop stays here, and what is a way of working travels.

**Bilingual, written from the fact.** Every string exists in Polish and English,
each written from the thing being described rather than translated from the
other. A separate editorial pass checks the Polish for calques and for
personification creeping into layout descriptions.

**How it was built.** I worked with an AI assistant as the implementer. The
design decisions, the token architecture, the audit procedure and all the copy
are mine. That pairing is exactly why the discipline above exists: an
implementer that fast will happily introduce a fifth heading style and a
hand-typed pixel value, so the system needs rules a machine can be held to – and
tests that hold it.

## Outcomes

**A system the shop actually runs on.** Not a library beside the product: the
same stylesheet, the same tokens, one source. 137 tokens, 22 documented tabs,
four button variants, a documented motion scale with reasoned curves.

**Documentation that is provably current.** The generated parts cannot drift by
construction. The written parts are covered by twelve test suites and a repeatable
audit that has now been run on four tabs, with every finding either fixed in the
text or fixed in the code.

**Four written procedures, in two languages,** for auditing the documentation
against the shop, adding a tab, building a new view, and writing the Polish.
They exist because the tests exist: a procedure whose findings can be checked is
a procedure that can be handed over. This is the part I would bring to a team on
day one – not the token names, which are specific to this shop, but the method
for stopping a system and its documentation from quietly parting company.

**Decisions with reasons attached.** Around 180 multi-line explanatory comments
in the stylesheet answer the question "why is this like this" at the point where
someone would ask it – including the ones that record what was tried and
rejected, so nobody repeats a failed experiment.

**Honest about its gaps.** Two colour pairs fall below AA. They are in the
contrast table with a failing verdict rather than quietly excluded, and named in
the Accessibility tab as open items.

**What it changed about the product.** The system kept the shop coherent through
a redesign of both solid button variants, a new scheme-aware colour architecture
and a full rework of the top of every page – none of which required touching
more than a handful of rules, because the decisions were in tokens rather than
scattered across components.

---

*The shop this was built for, and the motif layer it documents:*
[read that case study](./case-study-shop.md).
