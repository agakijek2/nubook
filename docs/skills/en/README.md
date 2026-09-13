# Skills — how this project is built and how it is checked

This shop and its design system are built together with Claude. The four files in this
directory describe the working method that came out of it: repeatable procedures,
written down so that every next component comes out the same way rather than
slightly differently each time.

In Claude's terminology such a file is a **skill** — an instruction the model reaches
for when it meets a task of that kind. The live versions are stored on the account and
those are the ones that run in a conversation; these files are copies, kept in the
repository so the convention travels with the code and enters its history.

## Four skills and the division of labour between them

| file | when it runs |
|---|---|
| [`new-view-in-the-shop.md`](new-view-in-the-shop.md) | something is being built in the shop |
| [`design-system-tab.md`](design-system-tab.md) | something is being documented |
| [`design-system-doc-audit.md`](design-system-doc-audit.md) | a description is being checked against the code |
| [`natural-second-language.md`](natural-second-language.md) | Polish prose is being written or corrected |

The order is not accidental. It follows from one observation: **design system
documentation breaks in exactly one way — the code moves on, the text stays.** A
sentence that was true the day it was written becomes false after a refactor and
nobody notices, because documentation has no tests.

The first skill keeps a new view built from tokens and existing components instead of
introducing hard-coded values. The second keeps every tab the same shape. The third is
the test: it walks a tab in three passes — agreement with the code, agreement with the
other tabs, language — and verifies claims with a script rather than by eye.

The fourth arrived later and cuts across the other three: it handles every piece of
Polish prose the project produces, and the third one calls it during its language pass.
It came out of one observation — the model writes Polish sentences that are
grammatically correct and that nobody would say, because it composes them in English
and then dresses them in Polish words. The skill is a procedure against that: four
tests run on the finished sentence, rather than a list of forbidden words.

## What has proved true along the way

**Sentences that quantify lie most often.** "Every", "all", "the only", "never" — one
exception is enough to make them false, and there is usually one. Descriptive
sentences without a quantifier break less.

**A row shared by several variants describes one of them.** The table has four button
types and the "Border" row describes the first — with no note that two of the others
have no border. Silence turns it into an untruth.

**The checking script can lie too.** It passes because it looks in the wrong place: a
text match misses on indentation, a regular expression catches `border-bottom` while
looking for `bottom`, a selector split across two lines is never matched, a comment is
swallowed into the selector. A quiet false success is worse than no test, so a script
that says "all clear" has to be tried on a case known to be bad.

**All three layers have to be read at once.** A claim can agree with the stylesheet and
contradict the script — for instance, a bar-height token declared from the spacing
scale that the script overwrites with a measured value after rendering.

**A missing translation key breaks nothing, which is why it survives.** It leaves a
blank in the language nobody is reading. Both dictionaries having the same set of keys
is worth checking mechanically.

**A version written out of the other one always shows.** Both sentences then have the
same shape and the same number of parts, although each language solves the thing its
own way. The test that catches it is mechanical: translate the sentence back, word for
word, and see whether it returns as fluent prose in the language it came from.

## A note on the copies

The files in this directory are not the same thing as the skills that run in a
conversation. Changing one here does not change the model's behaviour, and changing a
skill does not update these files — a fix has to touch both places.

The Polish originals are one directory up, and those are the versions actually in use:
the project is documented in Polish and the skills carry rules about writing it. These
translations exist so the method can be shown outside the project it grew in, and they
are updated whenever the originals change.
