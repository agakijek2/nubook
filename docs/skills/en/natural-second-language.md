---
name: "polszczyzna"
description: "Writes and edits Polish so that it reads as Polish rather than as a translation from English. Use whenever any Polish text is written or corrected: documentation, descriptions, interface strings, messages, articles, notes. Use it as well when the Polish and the English of a bilingual project are written side by side, and whenever someone says a sentence sounds unnatural, stiff, wooden, or like a calque."
---

# The second language, written rather than translated

> This is the English rendering of a skill written in Polish and used in Polish.
> The rules below are stated for Polish, because that is the language the project
> is written in; the procedure transfers to any pair of languages where one text
> is habitually made out of the other.

Polish written by a language model breaks in one way: every word is Polish, the grammar is correct, and the whole is not Polish. It can be understood and nobody talks like that. This is not a vocabulary problem. The sentence was composed in English and then dressed in Polish words.

This skill is a procedure against that, not a grammar lecture. The rules below are marked either **norm** (an error, to be corrected) or **style** (not an error, but it gives away where the sentence came from). Mixing the two ends in hypercorrection.

## First rule: write from the fact, not from the other language

In a bilingual project the temptation is always the same: write the English and make the Polish out of it. What comes out is a sentence that is English on the inside.

**Write both versions from the same thing, not one from the other.** Settle what the fact is — what is what, what stands where, what happens — and say it twice, once in each language, each in its own way. The sentences need not share a shape or a count. English reaches for a verbal noun where Polish takes a subordinate clause; if both versions came out identically built, one of them is probably a translation of the other.

If the Polish is being made from finished English, do not translate sentence by sentence. Read the paragraph, put it away, and write that paragraph in Polish.

## Four tests, applied to every sentence

Run them after writing, on the finished sentence. They are cheap and they catch most of it.

### 1. The back-translation test

Translate your Polish sentence back into English, word for word. **If it comes back as fluent English, it was an English sentence in Polish clothes.** A Polish sentence translated literally into English usually sounds odd in English, and that oddness is the sign that it is Polish.

- *Stan mieszka w atrybucie* → "The state lives in the attribute". Fluent. The sentence is English. In Polish: *Stan jest zapisany w atrybucie*.
- *Wartość kończy się na sumie wypełnienia i ikony* → "The value ends up at the sum of the padding and the icon". Fluent. In Polish: *Wartość to wypełnienie plus ikona*.

### 2. The read-aloud test

Read the sentence aloud and ask **whether you would say it that way in a conversation at work**. Not in a lecture, not in an official letter — in a conversation. If not, rewrite it in the plainest order available.

The test catches rhythm too: sentences of equal length, one after another, read as a list pretending to be a paragraph. Mix short with longer.

### 3. The subject test

Ask who or what performs the action in the sentence, and whether it can perform one.

Things have no agency. A layout, a form field, a value and a file do nothing of themselves — they simply are, they have a size, they stand somewhere. **A metaphor of movement pushed into a description of layout reads as literature rather than as specification.**

- "The cover can walk on its own" → "The cover also appears outside the card."
- "The thumbnail casts a shadow because it stands in a list" → "A thumbnail in a list has a shadow."
- "The field waits for an answer" → "The field is empty until an answer arrives."
- "The drawer arrives decisively" → "The drawer slides out quickly and stops without a bounce."

Exception: settled expressions in which the language itself personifies ("it follows from this", "the sentence says", "the table shows") are fine.

### 4. The verb test

Count the abstract nouns in the sentence. **Three verbal nouns and one auxiliary verb is a sentence to be rewritten around the verb.**

Noun chains are not errors, but they are marked: they belong to official and academic registers, and the reader has to work out which part attaches to which. In practical prose they are replaced with verb constructions.

- "perform a purchase" → "buy"
- "take a decision" → "decide"
- "carry out a verification" → "check"
- "the implementation of the system by the team took place" → "the team implemented the system"

## Constructions that give away the English original

These are not grammatical errors. They are a signal that the sentence has a foreign skeleton, and there is nearly always a simpler way to say it. **When you find one such sentence, look at its neighbours** — they come in batches, written in one breath.

In Polish the recurring ones are: *dwa poziomy jednej rzeczy* for "two levels of one thing", *pole, w którym staje okładka* for "the field the cover stands in", *przez to z dwojga, którego użyje* for "through whichever of the two it uses", *jedna odpowiedź obsługuje oba* for "one answer serves both", *adresować problem* for "address the problem", *robić sens* for "make sense", *wydaje się być* for "seems to be", *posiadać* for "to have", *dedykowany* for "dedicated" in the sense of "intended for".

Separately: **filler words** that fit anywhere and carry nothing — "key", "an important element", "in the final analysis", "it is worth emphasising", "let us take a look". Cut them or replace them with the specific thing. If something is key, write what it is key to.

And **pleonasms**: "go back backwards", "continue further", "in the month of May", "a period of time", "potential possibilities". Some have settled in far enough not to grate, but in practical prose they are ballast and come out.

## Word order

Polish word order is free but not arbitrary. The neutral order is **topic → predicate → objects → adjuncts**, and the most important, new information goes **near the end of the sentence**. If the logical stress falls on an unimportant word, move the phrase.

**Norm, not style:**

- Unstressed pronouns (*się, mi, ci, mu, go, ją*) stay next to the verb and **do not open a sentence**.
- The full form (*mnie, jego, jej*) is for emphasis, or follows a preposition. In a neutral sentence take the short one.
- A particle (*tylko, nawet, właśnie, aż*) stands **directly before what it limits**. *Tylko Marta napisała esej* means something other than *Marta napisała tylko esej*. An unintended change of scope is an error even when both sentences are grammatical.
- The negation stands before the word negated; moving it changes the sense.
- Do not split fixed pairings with long insertions: a preposition from its noun, a verb from its *się*, an idiom from itself.
- A preposition does not travel to the end of a phrase — that is a syntactic calque.

**Style:** an adverb before the verb reads lighter than after it.

## Passive and impersonal forms

**Write in the active voice** when it is known who acts. The passive belongs only where the agent is unknown, irrelevant, or deliberately left out.

Technical documentation takes the **indicative rather than the imperative**: "A token is chosen by role", not "Choose by role". Documentation describes a system; it does not issue orders.

## Punctuation and typography

**Norm:**

- A comma goes before the conjunctions that introduce a subordinate clause (*że, żeby, aby, ponieważ, bo, gdy, jeśli, który, choć, mimo że*).
- No comma before *i, oraz, lub, albo, ani* in a plain list, but one is needed when the conjunction repeats as a clause link or closes a parenthetical.
- The Polish quotation mark is low-then-high: **„tak"**, not "tak". Inside a quotation: »tak«.
- Inflect proper names and technical terms. Leaving a Polish name uninflected because it "looks better" is an error.
- Watch the case after a negation: genitive, not accusative.

**Typography:**

- The **hyphen** (-) joins words and takes no spaces around it.
- The **en dash** (–) and **em dash** (—) are marks of the sentence and take spaces. Polish practical typography sets an en dash with spaces.
- Do not leave a conjunction or a preposition at the end of a line — one-letter words are bound to the next word with a non-breaking space.
- No space before a comma, full stop, colon, semicolon or question mark.

Where a project has its own convention that conflicts with the above, **the project's convention wins** — write it down and hold to it.

## Register

Settle who is speaking and to whom before writing the first sentence.

- **To a customer or a reader:** honorifics capitalised, and one form held throughout. A switch halfway is visible at once.
- **Documentation and specification:** factual, indicative, no ornament. "It turns 45°", not "it turns half a right angle". No chronicle: "now", "no longer", "stays with" describe a rebuild rather than a state, and the reader did not see the previous version.
- **No corporate speak:** "address" → "deal with"; "forward" → "pass on"; "finalise" → "finish"; "implement" → "build" or "do".
- **Write what is, not what is not.** "An icon has two sizes" rather than "Two sizes and no others". Sentences by negation read like a defence against an accusation.
- **One word, one meaning within a text.** If "label" means a type style in one place and a control's text in another, one of them has to give way.

## Checklist before handing the text over

1. Does any sentence come back from the back-translation as fluent prose in the other language?
2. Does a thing anywhere perform an action it cannot perform?
3. Is there a sentence with three verbal nouns and one verb?
4. Do the unstressed pronouns sit next to the verb, and does none of them open a sentence?
5. Do the particles stand next to what they actually limit?
6. Is the new information in each sentence nearer the end than the beginning?
7. Does the passive appear only where the agent is irrelevant?
8. Do the sentences vary in length?
9. Does any word repeat three times in neighbouring sentences, and does anything rhyme?
10. Are the quotation marks the right ones, and do the dashes have spaces?
11. Is every proper name and term inflected?
12. Can every tenth word be cut without loss? If so, cut it.

## When correcting somebody else's text, or your own earlier one

Do not rewrite everything. **Point at the sentence, give the reason, and offer finished wording for approval** rather than a direction of change. Name the reason: syntactic calque, personification, noun chain, misplaced particle. A named fault teaches something; "reads unnaturally" does not.

If the text is bilingual, check that the correction has not moved the Polish away from the English **in content**. The shape of the sentence may differ and usually should. The fact may not.
