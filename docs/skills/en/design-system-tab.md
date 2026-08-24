---
name: "design-system-tab"
description: "Writes or rebuilds a tab of design system documentation so that it keeps the same structure, the same sections and the same conventions as the others. Use whenever someone asks to add, write, rebuild or tidy a tab, page or section of design system documentation — including when it is phrased as a task (\"document the stepper\", \"add a tab for the modal\", \"tidy up Motion\"). Use it too when a new component has been built and needs documenting."
---

# A design system documentation tab

Tabs that differ in structure make the reader learn the layout again on every page. The same information belongs in the same place — then comparing two components is a matter of looking rather than reading.

Before writing, **read two existing tabs of the same kind**. This description gives the shape, but the code is the source of truth and may have moved since the shape was written down.

## Two kinds of tab

**A component** — a specific thing on screen: a badge, a button, a chip, a link, a tile, a stepper, a field. It is described through variants or states.

**A foundation** — a layer running through everything: colour, typography, spacing, iconography, motion. It is described through a scale and a set of rules.

Giving a component the structure of a foundation, or the other way round, is the most common mistake. The deciding question: can you point at it on screen? If yes, it is a component.

## Structure of a component tab

In this order:

1. **`<h1>`** — the component's name, one word.

2. **A lede** in `p.ds-lede` — one sentence, two at most: what the thing is and what it is for. Not what it looks like and not what it is built from. This is the sentence that settles whether to reach for this component or the one next to it.

3. **A specimen** — a working example against the page. Two forms:
   - one row in `div.demo.on-page` with a few instances side by side, when they are worth seeing together or worth clicking
   - a `div.ds-specimens` grid of figures with captions, when there are several variants and each needs a name

   The specimen is built from **the product's own classes**, not from copied styles. That way a change to the component changes the specimen.

4. **A table of variants or states.** Three columns: name, meaning, tokens. In the first column, **the plain name with the selector under it** in `<code>`, separated by `<br>`:
   ```
   Selected
   [aria-pressed="true"]
   ```
   The table gets an `id`, because the live preview reads it.

5. **`<h3>Specification</h3>`** — a table of properties: typography, padding, border, icon, element, focus. A row that does not describe every variant **must say which ones it describes**. "Primary and secondary: 1px…" rather than "1px…", because the two lower tiers have no border and silence turns the row into an untruth.

6. **Sections particular to the component** — only when there genuinely are any. States laid out in a cross table, sequential behaviour, an exception worth naming.

7. **`<h3>Live preview</h3>`** — a `div.ds-play` block with `data-` attributes saying which table the options come from and which specimen supplies the content. One sentence above it about where what you see comes from.

8. **`p.note`** — only when something marginal is left over that fitted in no table. No note is better than a note carrying trivia.

## Structure of a foundation tab

1. **`<h1>`** and **a lede** — what the layer is, in one sentence.
2. **`<h3>Parameters</h3>` or `<h3>Scale</h3>`** — rules and values, in a table generated from the stylesheet wherever that is possible.
3. **Token tables** — every token of the layer has its row. Parity with the code is a hard requirement, see below.
4. **`<h3>Rules</h3>`** — decisions that do not follow from the values themselves: what is forbidden, what is an exception and why.
5. **`<h3>Off the scale</h3>`** — places deliberately left outside the rule, named outright. This is the section that saves the credibility of the whole tab: without it, the first exception a reader meets undermines everything else.

## Conventions that hold for both kinds

**A value that can be read from the stylesheet must be read from it.** That is what the documentation's helper functions are for — a token with its value, the value alone, the source declaration, the steps of a scale, colour rows, cells measured on a rendered specimen. A number typed by hand is a falsehood waiting for its refactor. Check in the code what those helpers are called; do not guess.

**Every token in the code has a row.** When a token is added to the stylesheet, add it to the table in the same moment. Parity can be checked with a script: count the tokens in the `:root` block and in the tables, compare the lists. A script finds the drift in a second; the eye does not find it at all.

**Both language versions.** Every string through the translation function, including specimen captions, table headers and notes.

**The same names across tabs.** If one tab has a row called "Same value, different role", the same phenomenon is called that in every other tab. The headings "Specification", "Rules", "Live preview", "Off the scale" are shared. A new name for a known thing is a cost the reader pays.

**Language — indicative, factual, natural.** Describe what is, not what is not. No imperative: documentation describes a system, it does not issue orders. No chronicle: "now", "no longer", "stays with" speak of a rebuild the reader never saw. No ornament: "45°", not "half a right angle". One word, one meaning per page.

**A reason where a decision could look like an accident.** Not next to every value — next to the ones somebody will one day want to "fix". Why the code field is set in capitals, why one icon is smaller, why two tokens with the same value stay separate.

## After writing

Build the project and check the tab **in both languages**: that it renders without error, that every table has its full set of rows, that the live preview works and produces sensible code, that values generated from the stylesheet actually landed instead of leaving a blank.

Run the whole regression set too, not just a check of the new tab — the documentation lives in the same file as the product.

Finally, put the new tab through a documentation audit like any other. Freshly written text can disagree with the code as well, most often because it describes the intention rather than what was actually built.
