# Working agreement

`SPEC.md` in this repo is the source of truth for the portfolio rebuild. Read it
before starting work in any session, then read `SPEC-EXPERIENCE.md`, which
overrides the parts of SPEC.md listed in its §0. Where the two disagree,
SPEC-EXPERIENCE.md wins. This file covers *how* we work; the two specs cover
*what* is being built.

## Branch

All rebuild work happens on `rebuild`. Never commit rebuild work to
`main` — `main` serves the live site.

## One step at a time

Steps 1–4 are in SPEC.md §12 and are done. The remaining steps are E1–E8 in
SPEC-EXPERIENCE.md §8, which replace SPEC.md's steps 5 and 6. They are ordered
deliberately.

**Do exactly one step per instruction, then stop.** Do not begin the next step,
do not "also quickly" do part of a later step, and do not add polish that belongs
to a later step. If a step seems to require something from a later step, say so
and wait rather than proceeding.

Stopping early is always better than running ahead. If a step turns out to be
larger than expected, stop at a sensible point and report what remains.

## At the end of every step

1. **Self-audit.** Re-read the relevant sections of both specs and list anything
   in your work that deviates from them. Be specific — name files and lines. If
   nothing deviates, say so plainly rather than padding the list.
2. **Report decisions.** List any judgement call that neither spec explicitly
   authorised, and why. The palette contrast fix in SPEC §4 is the model here: a
   real problem, a reasoned fix, clearly surfaced.
3. **Commit locally** with a descriptive message. Do not push.
4. **Stop and wait.** Do not push and do not start the next step until told.

The review beat matters more than the speed. This rebuild exists because the
previous version drifted without anyone noticing.

## Copy

Where SPEC.md §9 or SPEC-EXPERIENCE.md §11 lists copy as undecided, write a
visible `TODO` marker. Do not
write placeholder copy, lorem ipsum, or agency-voice filler. Filler tends to
survive to production because it looks finished.

## Hard constraints

SPEC-EXPERIENCE.md §9 and SPEC.md §13 are lists of anti-patterns, each rejected
deliberately during design (SPEC-EXPERIENCE §0 says which parts of §13 it
overrides). Check work against both before reporting a step complete. The most
likely drifts:

- Adding a tagline or hero claim (SPEC §1 — the hero deliberately has none)
- Rendering the works section as cards instead of an index (SPEC §7)
- Motion that is not ink, dye, or paper; text that fades or slides in
  (SPEC-EXPERIENCE §1, §6)
- Invented copy of any kind — annotations, descriptions, skills, levels

SPEC-EXPERIENCE.md §8 also asks for a screenshot review before a step is
reported done: this layer is judged on how it looks, and a self-audit against
text is not enough.

Do not "improve" either spec's decisions unilaterally. If something in it looks
wrong, say so and wait — several of its choices are counterintuitive on purpose
and the reasoning is recorded alongside them.

## Questions

If a requirement is ambiguous, ask rather than guessing. One clarifying question
costs less than a step built on a wrong assumption.
