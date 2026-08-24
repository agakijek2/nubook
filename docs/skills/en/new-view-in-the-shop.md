---
name: "new-view-in-the-shop"
description: "Designs and builds a new view, page or component in the shop, working only from the design system. Use whenever someone asks to add, design or build anything new — a page, a section, a screen, a form, a modal, a control, a component — including when it is phrased as a task (\"add a favourites page\", \"build a login screen\", \"we need a search view\"). The skill requires reading the documentation and the tokens before writing a line, reusing existing components instead of inventing new ones, and offering a documentation audit at the end."
---

# A new view in the shop

The shop has a design system and the system is the source of truth — not your memory of how it looked in an earlier conversation. A view that goes around the system costs twice later: once to fix it, once to straighten out the documentation that stopped describing reality.

So the order is the opposite of what instinct suggests: **read first, design second, write last.**

## Step 1 — read the system before writing anything

Look in two places, and do not shorten this step even when the task looks small:

- **the token block in the stylesheet** (`:root`) — colour, typography, spacing, icons, motion, layout. This is the only place values live.
- **the design system documentation** — component tabs say what each thing is, when it is used and which tokens it needs. The introduction and the accessibility tab hold the rules that apply to everything.

Read the **rendered documentation**, not just the source: some tables are generated from the stylesheet at run time, so the source shows a template rather than values.

Take three things away from this: which components already exist, which tokens are available, and which rules hold regardless of component.

## Step 2 — build the view out of what is already there

Before inventing anything, check whether the system already has it. A new component is a cost: it has to be documented, maintained, and kept from drifting away from the rest.

Rules that always hold:

- **Colour, spacing and duration come from tokens only.** No hex value, no `rgba`, no spacing pixel off the scale, no millisecond count written inline. If no token fits, go to step 3.
- **Element before attribute.** A control is the HTML element that already means what it does. Something that leads to an address is an `<a href>`. Something that acts in place is a `<button type="button">`. ARIA adds only what HTML has no element for.
- **Every string through the translation dictionary.** Including image alt text and the labels only a screen reader reaches. A string written straight into the markup works until the first change of language.
- **A key names the place, then the thing.** A short name for where the string lives, then what the string is: `fName`, `errZip`, `secPay`, `qtyLess`. A nested group is keyed by ids that come from the data — `shipNames.inpost`, `aboutAuthor.f` — so the code can reach a value with whatever it already holds instead of translating one into the other. A new string is added to both dictionaries at once: a key that exists in only one of them raises no error, it just leaves a blank in the language nobody happens to be looking at.
- **An icon from the set, in one of the two sizes**, with `aria-hidden`, and the name on the control that carries it.
- **Visible focus on every interactive element**, in the values the rest of the system uses.
- **Motion explains something or there is none** — and everything that travels yields to `prefers-reduced-motion`.

## Step 3 — when the system does not have it

This is not an accident but the normal situation: a new view exposes a gap. **Do not patch it with a hard-coded value.** A written-in colour will survive in the stylesheet for years, because no token audit can see it — it sits outside any token declaration.

Stop instead and put the case: what is missing, which ways out there are, and which one you recommend. Usually there are three:

1. **use an existing token or component**, accepting a small difference in appearance
2. **add a semantic token** pointing at an existing primitive — cheap, because the palette does not grow
3. **add a new primitive or component** — the most expensive, justified only when the first two genuinely do not work

The decision belongs to the person you are working with. Your job is to show what each way costs.

## Step 4 — check before saying it is done

Build the project and walk the new view the way a reader will: arriving, every state of every control, leaving. Check in both languages, and in both currencies if the view shows prices.

Check programmatically whatever can be counted: whether a value off the scale has appeared, whether every control has a focus rule, whether every string goes through the dictionary, whether both dictionaries hold the same set of keys, whether every icon has `aria-hidden`, whether the new element broke an existing view.

## Step 5 — offer a documentation audit

A new view almost always invalidates a sentence in the documentation, even when it adds no component at all. "Where it is used" columns list the places a component appears — and a new one has just arrived. The introduction says "four places" and there are five.

So **after every finished view, ask outright** whether to audit the tabs the change touched. Name them, so the question is concrete — for example: "The new view uses chips and a secondary button. Shall I check the Chip and Button tabs against what is there now?"

Do not run the audit unasked: it is separate, longer work and it may need to wait.

## At the end

Hand over a ready commit message — one per approved decision, in the indicative, with the area first. For example: `favourites: new list view with filter chips and an empty state`.
