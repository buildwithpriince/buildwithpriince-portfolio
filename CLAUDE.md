# Working agreement

`SPEC.md` in this repo is the source of truth for the portfolio rebuild. Read it
before starting work in any session. This file covers *how* we work; SPEC.md
covers *what* is being built.

## Branch

All rebuild work happens on `rebuild/archive`. Never commit rebuild work to
`main` — `main` serves the live site.

## One step at a time

The build has six steps, listed in SPEC.md §12. They are ordered deliberately.

**Do exactly one step per instruction, then stop.** Do not begin the next step,
do not "also quickly" do part of a later step, and do not add polish that belongs
to a later step. If a step seems to require something from a later step, say so
and wait rather than proceeding.

Stopping early is always better than running ahead. If a step turns out to be
larger than expected, stop at a sensible point and report what remains.

## At the end of every step

1. **Self-audit.** Re-read the relevant sections of SPEC.md and list anything in
   your work that deviates from it. Be specific — name files and lines. If
   nothing deviates, say so plainly rather than padding the list.
2. **Report decisions.** List any judgement call made that SPEC.md did not
   explicitly authorise, and why. The palette contrast fix in §4 is the model
   here: a real problem, a reasoned fix, clearly surfaced.
3. **Commit locally** with a descriptive message. Do not push.
4. **Stop and wait.** Do not push and do not start the next step until told.

The review beat matters more than the speed. This rebuild exists because the
previous version drifted without anyone noticing.

## Copy

Where SPEC.md §9 lists copy as undecided, write a visible `TODO` marker. Do not
write placeholder copy, lorem ipsum, or agency-voice filler. Filler tends to
survive to production because it looks finished.

## Hard constraints

SPEC.md §13 is a list of anti-patterns, each rejected deliberately during design.
Check work against it before reporting a step complete. The three most likely
drifts:

- Adding a tagline or hero claim (§1 — the hero deliberately has none)
- Rendering the works section as cards instead of an index (§7)
- Adding fade-and-slide-up entrance animation to every section (§13)

Do not "improve" SPEC.md's decisions unilaterally. If something in it looks
wrong, say so and wait — several of its choices are counterintuitive on purpose
and the reasoning is recorded alongside them.

## Questions

If a requirement is ambiguous, ask rather than guessing. One clarifying question
costs less than a step built on a wrong assumption.
