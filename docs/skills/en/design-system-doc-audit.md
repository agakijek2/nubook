---
name: "design-system-doc-audit"
description: "Checks a tab or section of design system documentation: whether the descriptions match the code, whether they contradict the other tabs, and whether the language is factual. Use whenever someone asks to \"review\", \"check\", \"verify\", \"audit\" or \"test\" documentation, a tab, a component or a section of a design system — including when they simply say \"see if it all adds up there\" or \"let's move to the next tab\". Use it as well after a new view or component has been added, to see whether the documentation still describes reality."
---

# Design system documentation audit

Design system documentation breaks in one way: the code moves on, the text stays. A sentence that was true the day it was written becomes false after a refactor, and nobody notices, because documentation has no tests. This audit is that test.

Run it in **three passes, in this order**. Do not mix them: hunting for untruths and editing prose at the same time ends with one eating the other.

## Before you start

Establish where the code that the tab describes lives. Usually it is three layers at once and **none of them may be skipped**:

- **markup** — the HTML: which element a control is, which attributes it carries, in what order its children stand
- **the stylesheet** — the CSS: values, tokens, selectors, weights, media queries, comments
- **the script** — the JS: what is generated at run time, which classes the code adds, which strings pass through the translation dictionary, what overwrites stylesheet values after rendering

A claim can agree with the stylesheet and contradict the script. A real example: a bar-height token is declared from the spacing scale, but the script overwrites it with a measured value — so documentation saying "derived from the scale" is true for the page's first second.

If the documentation is generated from the same files as the product, build it and **read the rendered DOM**, not the source. Some of the content only comes into being in the browser.

## Pass 1 — does the text match reality

Write out every **verifiable claim** in the tab. Verifiable means: the code can disprove it. "A badge states one fact about the title" — no. "Padding is 4px vertical and 8px horizontal" — yes.

Check **with a script, not with your eyes**, everything that can be counted: token parity between code and table, values off the scale, selectors with no focus rule, geometry fitting inside a safe area, occurrences of a class in the markup. A script will look in a hundred places; you will look in five and get tired.

**Start with the sentences that quantify.** "Every", "all", "the only", "never", "always", "just" — these are the sentences that most often turn out false, because one exception is enough. A descriptive sentence without a quantifier rarely lies.

A frequent special case: a true sentence that **lost its condition when it was shortened**. "A control carrying an icon has an `aria-label`" is false, because a control with visible text does not have one and should not — while the longer version of the same rule, standing in another tab, reads correctly. When you find a sentence like that, check whether its full version lives somewhere else: then the fix is to match it, not to invent a new one.

The patterns that recur most often — look for them deliberately:

- **A description of the state before a change.** Most often a change made the same day. If anything was moved, renamed or swapped for another component in this session, check whether the documentation knows.
- **A shared row describing one case.** The table has four variants and the "Border" row describes only the first — with no note that the other three have none.
- **A list of places that has shrunk or grown.** "Product view, cart, checkout, confirmation and documentation" — and the first two no longer belong.
- **A reference to a neighbour that no longer exists.** A note saying "this pair", when the pair is gone because one component was moved to its own tab.
- **Dead code posing as a source of truth.** Strings, constants or classes that look used and are not. Someone will edit them and see no effect.
- **A string whose absence breaks nothing.** In a bilingual project a missing dictionary key raises no error — the control shows a blank or `undefined`, and only in the language nobody happens to be reading. Check with a script that both dictionaries hold exactly the same set of keys and that no reference in the code points at a key that is not there. Two traps: keys reached dynamically (`t.shipNames[s.id]`, `T()[rule.err]`) look unused, and method calls on a variable named `t` (`t.replace`, `t.localeCompare`) look like keys.
- **Silence instead of untruth.** The tab describes a component in one context although the code uses it in three — and everything it says is true. Check not only whether the claims are true but whether they cover every place the thing lives. Search the whole codebase for the component's function or class and count the contexts.

### Do not trust your own script

**When the audit script says "all clear", check whether it would catch a case you know is bad.** Scripts pass because they look in the wrong place: a text match misses because the indentation differs, or a regular expression catches `border-bottom` while looking for `bottom`. A quiet false success is worse than no test.

**When the script reports an avalanche of violations, suspect the script first.** Twenty violations in code that looks well kept is usually a fault in the method, not in the code. Before reporting anything, verify one violation by hand in the source.

Two traps when reading a stylesheet with a regular expression, each producing a false result in the opposite direction. **A selector split across lines** (`.a,` on one, `.b{` on the next) will not be matched by a pattern expecting the selector and the brace on one line — the audit then reports as unhandled the rules that are handled. **A comment standing before a rule** is swallowed into the selector match if the pattern does not strip comments first — the audit then returns a list of "selectors" that are sentences from a comment. Strip comments before parsing, and match the selector as everything up to the brace, regardless of line breaks.

One concrete trap of the test environment: **computed styles for SVG are unreliable**. `fill`, `stroke` and `stroke-width` are presentation attributes, and a test engine can return values for them that disagree with the stylesheet — the audit will then report that every icon has a fill, although a shared rule sets `fill:none`. Verify claims about SVG appearance **by reading the stylesheet**, not by asking for a computed style. Compute path geometry from the `d` attribute, not from the rendered element's box.

## Pass 2 — agreement with the other tabs

The same thing described twice always drifts apart. Compare the tab with the rest of the documentation and look for:

- **contradictions** — one tab says a control is a button, another says it is a link
- **different words for the same thing** — one says "container", another says "box"; one says "variant", another says "type"
- **different structure for the same kind of content** — one component tab has a captioned specimen grid, another a bare row; one puts the class in the first column of a table, another hides it in brackets at the end of a paragraph
- **repetition** — the same technical sentence in two tabs; pick the place it belongs and leave only the principle in the other
- **general promises the details do not keep** — the lede promises four places of use and the specification describes one
- **a tab that knows more about somebody else's component than that component's own tab** — if the colour table names a use the component tab is silent about, the component tab has the gap

Report a discrepancy **from both sides**: which tab is right depends on the code, not on which one you happen to be reading.

## Pass 3 — language

The criteria: factual, professional, indicative, natural.

- **Indicative, not imperative.** "A token is chosen by role", not "Choose by role". Documentation describes a system; it does not issue orders.
- **Write what is, not what is not.** "An icon has two sizes" rather than "Two sizes and no others". Sentences by negation read like a defence against an accusation.
- **No chronicle.** "Now", "no longer", "stays with" in a historical sense describe a rebuild rather than a state. The reader did not see the previous version.
- **No ornament.** "It turns half a right angle" is 45°. An ornament costs attention and adds nothing.
- **No justifying the decision.** A row describing how the component would look without the decision that was taken describes a state that does not exist. Write what is removed and what stands in its place, not how it would be otherwise.
- **One word, one meaning per page.** If "label" means a type style in one place and a control's text in another, one of them has to give way.

### Natural language

The hardest thing to catch, because the text looks correct. **Run this part of the pass together with the `polszczyzna` skill** — it holds the tests, the list of constructions carried over from English, and the word-order rules. What stays here is what belongs to documentation itself.

Three versions of the same problem come back most often, all of them what a model writes when it composes in one language while thinking in another:

**Dictionary calques.** "State lives in the attribute", "box" translated word for word. Each word looks familiar; the whole is not the language anyone writes.

**Constructions nobody uses.** Every word native, the syntax imported: "two levels of one thing", "the field the cover stands in", "the value ends at the sum of the padding and the icon". The sentence can be understood and nobody talks like that.

**Personifying things with no agency.** "The cover can walk on its own", "the thumbnail casts a shadow because it stands in a list", "the field waits for an answer". A metaphor of movement pushes into a description of layout and reads as literature rather than specification.

Two tests carry most of the findings. **Read the sentence aloud** and ask whether you would say it that way in a conversation at work. Then **translate it back into the other language, word for word**: if it comes back as fluent prose there, it was a sentence of that language wearing this one's words. When either test fails, rewrite in the plainest possible order: what is what, what stands where, what happens. "A tile is a grey 4:5 field with a cover in it" rather than "the field the cover stands in".

In bilingual documentation, check additionally **whether one version is a translation of the other**. The symptom is easy to see: both sentences have the same shape, the same number of parts and the same order. The two languages solve the same thing differently — English reaches for a verbal noun where Polish takes a subordinate clause — so an identical shape means one sentence was made out of the other. The fix is to write the second version from the fact, not to rearrange the words of a translation. The content has to match; the shape does not and usually should not.

This fault comes from writing several sentences in one breath, so **when you find one such sentence, look at its neighbours** — they are usually from the same batch.

## How to report

**Change nothing until you have heard a decision.** The author of the documentation knows intentions the code does not show — sometimes the description needs fixing, sometimes the code does.

For each finding give:

1. **what it concerns** — a quotation of the disputed sentence
2. **why it is wrong** — evidence from the code: a selector name, a value, a count of occurrences. Specifics, not impressions.
3. **a proposal** — finished wording to approve, not a direction of travel

Write down as well **what you checked that came out right**. An audit listing only faults does not say how far it reached — and a tab with no findings is a result, not the absence of one.

When a discrepancy can be removed from either side, **present both ways**: fix the code or fix the description. Say which you recommend and why, and leave the choice.

**Before calling something a bug, check whether it is intended.** Behaviour that looks like an oversight is sometimes a design decision nobody wrote down — a cover left unfaded on the product page looks like a forgotten rule and is a deliberate choice, because the reader came to look at that cover. Describe what you see and ask about the intention. When the intention is confirmed, the work is to **write it down** — a comment by the rule and a row in the documentation — and to remove whatever undermines it: a dead class, an unused selector, a switch with no rule behind it.

Some discrepancies are an opportunity to close a real gap instead: a missing focus rule, a missing token, a value repeated in five places rather than one.

Group the report by the three passes, in their order. At the end ask outright what to apply.

## After applying the fixes

Build the project and **run the whole regression set**, not just a check of the changed sentence. A documentation fix can break the product when the documentation lives in the same file.

Check as well whether the fix invalidated a sentence **somewhere else**: narrowing a rule in one tab often makes the summary in the introduction false.

Finally, hand over a ready commit message — one per approved decision.
