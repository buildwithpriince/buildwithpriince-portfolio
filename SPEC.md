# Portfolio Rebuild — Build Spec

**Repo:** `buildwithpriince/buildwithpriince-portfolio`
**Branch:** `rebuild`
**Stack:** Vite + React + TypeScript (keep), Vercel (keep)
**Status:** design settled, content partially settled, no code written

This file is the single source of truth. It replaces a long design conversation —
everything here was decided deliberately. Where it says "do not", that is a
rejection of something already considered, not an oversight.

---

## 1. Subject and positioning

Prince Agrawal. Second-year CSE, MSU Baroda. Builds full-stack products, mostly
solo, mostly fast. Also builds and runs the online storefront for the family
business (Agrawal Matching Centre, a women's clothing and fabric shop).

**Three audiences, one site.** Software engineering roles read for craft. AI
engineering roles read for depth. Founders read for judgment. The site does not
pick one — the file records argue all three at once by showing real users, real
constraints, and honest attribution.

### The hero has no claim

**This is a deliberate rejection, not an omission.** Do not write a tagline, a
mission line, or any verb phrase about shipping, building, or vision.

A sentence set at display scale is where every portfolio puts its most generic
claim, because the format pressures toward something that sounds big. It is the
weakest element on both reference sites ("I BUILD VISION", "Synthesize
Approaches, Refined Digital Experiences") and it is the single most templated
convention in the genre. Skipping it reads as someone who does not need to
announce themselves — a stronger signal than any sentence claiming the same
thing, and the only version that cannot expire as the work changes.

The hero is the drawn name, then one factual line, then FILE 001 within a screen.

```
Prince Agrawal          (drawn, marigold, handwriting face)
Vadodara. Six files. First entry January 2026.
```

Numbers update as the archive grows. No adjectives. No claim.

### What separates this site

Not copy. A **disclosure practice** — three things almost nobody publishes,
carried on every file record:

1. **Duration.** Twelve days next to two days next to ongoing.
2. **Attribution.** What was specified versus what was assisted (§7).
3. **Commit share on team projects**, including where the contribution was a
   minority one.

A reviewer who has read forty portfolios saying "passionate developer" hits an
index of honest durations and attributions and immediately knows this is
different. It is unfakeable in a way copy is not.

The site's voice throughout: *here is the record, draw your own conclusions.*
That is what an archive is for. Every copy decision should be tested against it.

### The honest weakness the site must handle

Most projects run 1–5 days and none has been revisited. A sharp reviewer will
read that as "builds fast, never iterates." The site does not hide it:

1. Files are ordered chronologically so the sequence reads as trajectory.
2. Publishing duration makes the exceptions visible — CodeAutopsy ran 10–12 days
   and is the longest, most iterated project on the list.
3. The storefront is ongoing. A live commercial site cannot be a two-day sprint.

---

## 2. Non-negotiable content fixes

Carried from the audit of the current site. These are decided.

- **Remove "vibe coding" and "prompt writing" as skills.** They invite doubt
  about everything else on the list.
- **Every file links to its repo.** CodeAutopsy is currently on a separate
  GitHub account and must be transferred to `buildwithpriince` before launch —
  it is the only project built without heavy assistance and therefore the
  strongest competence evidence on the site.
- **Delete the achievements section.** One real achievement (TetraTHON 44/160)
  on a three-card shelf highlights the two empty slots. Outcomes become metadata
  on the file that earned them.
- **Add a resume download.**
- **Remove the placeholder** `PHOTO — swap in later`.
- **Do not publish the phone number in plain text.** Use a contact form or an
  obfuscated `tel:` handler.
- **One tagline, not three.** The current site has three competing self-
  descriptions in the hero alone.
- **Name consistency.** Git commits currently show "AGRAWAL PRINCE RAJESH" and
  "Prince R Agrawal"; the site says "Prince Agrawal". Pick one, apply everywhere
  including `git config user.name`.
- **No "just getting started" / "learning DSA" framing.** Let the work carry it.

---

## 3. Concept

The site is an **archive**, not a case file.

This distinction matters and was arrived at deliberately. Forensic vocabulary
(AUTOPSY, DIAGNOSIS, post-mortem) is welded to two specific projects and breaks
on everything else. Archive vocabulary is a container, and containers hold
anything — including projects that do not exist yet.

| Do not use | Use |
| --- | --- |
| CASE 001 | FILE 001 |
| DIAGNOSIS COMPLETE | STATUS |
| AUTOPSY / forensic / post-mortem | ARCHIVE / RECORD |
| Investigation | Index |

The numbering is legitimate here because the files genuinely are a chronological
sequence, and the sequence is the argument. Do not add numbered markers anywhere
the content is not actually ordered.

---

## 4. Design tokens

### Color

Derived from Indian textile dye, via the family business. This is the palette's
justification and the reason it belongs to this site specifically — it is not a
generic dark theme.

```css
--ink:      #0F0B0A;  /* base — warm near-black, never pure #000 */
--cream:    #F2E9D8;  /* primary text, raw/unbleached not white */
--marigold: #E8A317;  /* primary accent; the name, key emphasis */
--indigo:   #2B3A8F;  /* secondary surfaces, depth, hover states */
--madder:   #C1272D;  /* status only — LIVE, stamps, flags */
```

**Discipline is the whole point.** Dark ground, cream type, saturated color
arriving in small deliberate hits. If marigold appears on every screen at equal
weight it stops reading as an accent and the site becomes a themed restaurant.
Madder appears on status indicators and nowhere else.

An acid-green fifth accent was considered and **rejected** — near-black plus one
bright acid accent is a heavily worn default and reads as templated.

Derived values (borders, muted text) should be `--cream` at reduced alpha, not
new hex values. Keep the palette at five.

### Type

Three faces, down from five on the current site. Each has exactly one job.

| Face | Role | Notes |
| --- | --- | --- |
| **IBM Plex Mono** | Structure *and* display | File records, labels, metadata — and set very large for statement lines. Already in the current stack. |
| **Instrument Serif** (italic) | Contrast | Used only inside statement headlines, against large mono. Free, Google Fonts. |
| **Caveat** 400 (handwriting) | The name, entry only | Appears exactly twice: the entry animation — whose drawn name stays on as the hero's name (§6) — and the footer. Nowhere else. Never loaded as a font; it ships as SVG paths. |

**Delete:** DM Serif Display, Inter, Manrope, Space Grotesk.

**On mono-as-display:** the more common move is heavy grotesque caps paired with
an italic serif. That is what the reference sites do, and it is the reason they
resemble each other. Monospace set at display scale is on-concept for an archive
(records are typewritten), uses a face already in the stack, and is more
distinctive. This is a deliberate choice, not a fallback.

**Choose the handwriting face by typing "Prince Agrawal"** — not by copying the
reference site's choice. The name has a descender-heavy *g* and two *r*s; the
face that flatters a different name may not flatter this one.

**Decided: Caveat 400** (step 4, 2026-09-24), chosen by typing the name against
Architects Daughter and Shadows Into Light. The shortlist originally said
"Caveat 300"; that weight does not exist — Caveat's weight axis runs 400–700 —
and the sample it was judged on rendered at 400.

### Statement treatment

Mixed families within a single headline — large mono for the declarative line,
Instrument Serif italic for the grounding line. This is a two-line contrast, not
a single accented word. Do not italicise or recolour one word inside an otherwise
uniform headline; that is the generic version of this move.

### Scale and spacing

- Type scale on a modular ratio, defined once as tokens. Do not hardcode sizes.
- Spacing scale as tokens. **Do not position anything with absolute pixel
  offsets** — that is precisely what produced the failure described in §11.
- Body line length under 80 characters.
- Alignment: records left-aligned and gridded; statements centred and full-bleed.

---

## 5. Information architecture

Six sections. Two treatments alternate so the page has rhythm — an archive that
looks uniformly like an archive is monotonous no matter how good the palette is.

- **Record** — structured, mono, bordered, dense.
- **Statement** — full-bleed, large type, near-empty.

```
00  COVER        entry sequence (§6)
01  HERO         drawn name + one factual line — no claim (§1)
02  INDEX        record — the files (§7)
03  STATEMENT    statement — rhythm break, see warning below
04  SUBJECT      record — about, laid out as a personnel file
05  CAPABILITY   record, quiet — skills, four or five entries, honest levels
06  CORRESPOND   record — contact
07  FOOTER       name mark, small
```

**01 HERO is short.** FILE 001 should be reachable within one screen. The index
is the argument; nothing should delay it.

**The numbers above are this spec's bookkeeping, not site chrome.** Section
labels on the page read "SUBJECT", not "04 SUBJECT". §3 allows numbered markers
only where the content is genuinely a sequence: the file index is, and the
correspondence endpoints are, so both keep their numbers. The sections are an
outline, not an ordered thing a reader is meant to count through — numbering
them on the page would be exactly the decorative numbering §3 rejects. Decided
during step 3b; do not re-litigate.

**03 STATEMENT** exists for rhythm — a break in density between the index and the
subject record. It must not become the tagline reintroduced further down the
page. Keep it factual or observational: a constraint, a working condition, a
plain sentence. If nothing honest presents itself, use the space as breathing
room with no text at all. An empty band is better than a manufactured slogan.

**Decided: 03 ships as an empty band.** No line was honest enough to earn the
space. This is the decision, not an unfilled gap — do not write copy into it
later without reopening this section.

**04 SUBJECT** is where the childhood-photo hover belongs. It works far better as
a personnel-file portrait than it does in the hero.

**04 SUBJECT must state the recurring team.** Prince builds repeatedly with the
same group (Fivestack — Jeet, Vihan, Harshiv, Tanmay), and a team of six for SIH
2026. Most students work with whoever is assigned; people choosing to build with
him again is a signal no solo project can carry. State it plainly, as a fact, in
the same register as everything else.

**06 CORRESPONDENCE** — the numbered endpoints on the current site are its
best-designed element. Carry the idea across nearly unchanged.

---

## 6. Entry sequence

One gesture, not three. The ink that writes the name becomes the ink that opens
the site.

```
t=0.0   black field, nothing
t=0.3   mono classification line types in: SUBJECT FILE / AGRAWAL, P.
t=0.8   name draws itself in marigold — SVG path, stroke-dasharray animated
t=1.8   dye blooms outward from the final stroke, floods the frame
t=2.3   dye disperses; hero is already underneath, in place
```

**Hard constraints:**

- Total under 2.5s.
- Fires on first visit only; store a flag and skip on return.
- Skippable — any click, key, or scroll cuts to the end state.
- Content renders *underneath* while it plays, never after. The entry must not
  block first paint of real content.
- Disabled entirely under `prefers-reduced-motion`.

The name is drawn, not typed and not faded.

**Decided: how the draw works** (step 4). A glyph is a filled outline, not a pen
line, so animating its outline reads as tracing, not writing. The visible name
is the Caveat outline, converted to SVG paths at build time
(`scripts/name/build-name.mjs`). It is revealed by a mask of hand-authored
centreline pen strokes (`scripts/name/strokes.mjs`), drawn in writing order at a
constant pen speed. The strokes only have to cover the outline, not match it, so
the shape on screen is always exactly the face. Two alternatives were rejected:
stroking the outline wide enough to fill it thickens every letter, and stroking
it thin then filling it ends in a fade.

**Decided: the name is drawn in place.** It is drawn at its hero position, as
the hero's own heading, one layer above the cover. When the cover lifts, the
name does not move. There is one name, not a cover copy and a hero copy — that
is what "the ink that writes the name becomes the ink that opens the site" means
in practice.

**Until step 5, the cover lifts where the dye goes.** At t=1.8 the cover lifts
off the top of the screen with the file-open's motion tokens at full-screen
scale (§7), finishing at 2.22s. How the dye bloom relates to the lift is for
step 5 to settle.

**Decided during step 4** (2026-09-24, approved at review):

- **The name is set at `--step-8`.** Caveat is much narrower than mono, so at
  step 7 it would fill far less than the mono placeholder's footprint. Even
  step 8 is about 210px wide on a 375px phone and about 510px on desktop. Any
  larger would need a new step on the type scale, which is a token-layer
  decision rather than a hero tweak.
- **A direct `/file/<slug>` link skips the entry and does not set the seen
  flag.** A deep link paints the opened file on first paint (§7), and that file
  is a modal dialog in the top layer, which no cover can sit over. The entry
  belongs to arriving at the archive itself, so the next visit to `/` still
  gets it.
- **The seen flag is set when the entry starts, not when it finishes.** A reload
  halfway through does not replay it. "First visit only" means the first visit,
  not the first completed one.
- **The classification line sits at `--space-s` from the top of the cover,**
  not at the hero's own top padding. On a phone the hero padding is too small
  to hold the line above the name without the two colliding.

---

## 7. The index and the file-open

The works section is **a list, not a grid of cards.**

```
FILE 001   CODEAUTOPSY    2026   TOOLING     LIVE
FILE 002   CLARITY        2026   FINANCE     LIVE
FILE 003   PRISM          2026   FINANCE     LIVE
...
```

One row per file. Hover reveals a preview. Click opens that file full-screen —
the same gesture as the cover lifting at entry, at smaller scale. This is the
signature interaction and the most important build item after the tokens.

An index scales where cards do not: three cards look sparse, three rows look
intentional, and twelve rows still works.

### Decided: the hover preview carries the disclosure, not a thumbnail

**No screenshots, and no image slot left waiting for them.** Six do not exist,
CodeAutopsy cannot be captured until the repo transfer clears, and thumbnails of
AI tools and dashboards read as unreadable dark rectangles at preview size.
Worse, an image would bury the thing that actually separates this site.

The preview surfaces **duration, attribution and commit share** — the §1
disclosure practice — in the same visual language as the row. Undecided fields
render as TODO markers until the §9 copy is written.

The preview is a pointer-and-keyboard affordance shown beside the list, never
inline, so rows never shift under the cursor as it fills.

### Decided: every file has its own URL

`/file/<slug>` via the History API — no router dependency for six records.
Required for the §10 Open Graph tags to have anything to point at, and so a
single file can be linked to directly.

- **The slug is the address, not the FILE number.** Numbers are derived from
  position, so `/file/003` would silently come to mean a different project the
  first time the archive gains an entry out of order. A shared link has to
  survive that; the displayed number does not.
- A direct link renders the opened file on first paint — never a flash of the
  index first.
- Back returns to the index. On a cold landing there is no index entry behind
  the file, so one is synthesised rather than letting Back leave the site.
- Closing pops history rather than pushing, so Escape, the close button and Back
  are the same operation.
- Deep links need the SPA rewrite in `vercel.json` to survive a refresh.

### File record fields

Every file carries the same fields. Empty fields are omitted, never filled with
placeholder text.

- Number, name, year, domain, status
- One-line description
- Stack
- **Attribution** — what was built, what was assisted. See below.
- Outcome, where one exists (this is where achievements now live)
- Repo link, live link

### Attribution — required on every file

**Every project here was AI-assisted.** A `BUILT / ASSISTED` split would imply a
clean line that does not exist, and a reviewer who catches one overstatement
discounts the whole site. Do not use that framing anywhere.

The honest axis is not who typed it — it is **who decided it**:

```
PROBLEM, SCORING RUBRIC, OUTPUT FORMAT — SPECIFIED
IMPLEMENTATION — AI-ASSISTED, SELF-DIRECTED
DURATION — 12 DAYS
```

True for every file, defensible under questioning, and still the disclosure
almost nobody publishes. Directing models to ship working products is a real
skill; the site should state plainly how the work was done rather than implying
a distinction that would not survive an interview.

### Known file data

Commit counts are from the repo history and should be verified before publishing.

| File | Repo | Commits | Duration | Notes |
| --- | --- | --- | --- | --- |
| CodeAutopsy | **not yet under this account** | — | **10–12 days** | First project. Longest and most iterated on the list — self-directed prompting and revision throughout, no established workflow. Transfer ownership before launch. |
| Clarity | `clarity` | 13 / 20 | 5 days (Jul 24–29) | Highest ownership share. Finance. |
| Prism | `TETRA020` | 9 / 14 | 2 days (Aug 1–2) | Outcome: TetraTHON 2026 — 44/160. |
| GlobeTrotter | `odoo-TEAM-MSU-` | 10 / 37 | 1 day (Aug 22) | **Minority share, file stays.** Initial commit and scaffold, before anyone else pushed. Owned: scaffold, authentication, multi-currency and budget, trip context, destination carousel. Share stated openly beside it. Do not claim the admin panel, community page, calendar view or Python backend. |
| Swasthya-AI | `team-eternals` | 15 / 15 | 2 days (Sep 1–2) | Sole committer. |
| Agrawal storefront | in progress | — | ongoing | Live commercial site, non-technical users, real consequences. |

CodeAutopsy is chronologically first and by duration the deepest. Do not
describe it as "before I used AI" — it was not. Describe it as the one where the
thinking was done slowly.

Archive or add descriptions to `practice` and `code-vimarsh-website` — both are
public, undescribed, and dilute the profile.

### One file that does not exist yet

Every artifact currently on the profile is AI-assisted, which leaves one
interview question unanswered: what can be built without the tooling? This should
be settled with an artifact, not with copy.

Prince is strong in C and C++ and that is currently unused on the site. A small
hand-written C/C++ project, or a real DSA repository of his own solutions, adds
one file that answers the question by existing. It does not need to be
impressive — it needs to be obviously his, and labelled honestly as unassisted.

This is also the only honest place study work belongs on the site: as evidence,
never as an apology for inexperience.

---

## 8. The dye simulation

WebGL fluid simulation, tuned to read as **dye diffusing into water**, not smoke.
Same solver family as common cursor-fluid effects; four parameters carry the
difference.

| Parameter | Setting | Why |
| --- | --- | --- |
| Vorticity | near zero | Curl reads as smoke. Dye blooms, it does not curl. |
| Viscosity | high | Slow, heavy, syrupy spread. |
| Density dissipation | high | Colour fades as it spreads. |
| Velocity dissipation | low | Motion keeps carrying after colour fades. |
| Blending | **multiply, not additive** | Additive glows and reads as gas. Multiply reads as pigment sitting in something. Single most important setting. |

Injected colour cycles through `--marigold`, `--indigo`, `--madder`. Never random
hue.

**Placement — entry and hero only.** Possibly one statement section. Never behind
the index, file records, subject, or contact: moving colour under dense mono text
destroys legibility and burns GPU on exactly the screens where someone is trying
to read what was built.

**Budget:**

- Simulation at quarter resolution, dye texture at half.
- Pause on tab blur and when scrolled out of viewport.
- Desktop only. Static gradient fallback on mobile.
- Off under `prefers-reduced-motion`.

The effect holds attention *while* someone reads. It must never make them wait
before reading.

---

## 9. Copy still to write

Killing the tagline removes most of the display-scale writing risk. What remains:

1. **Hero factual line** — see §1. Essentially final; it is a count, not a claim.
2. **Statement (03)** — optional. See the warning in §5. May ship empty.
3. **Subject (04) opening** — two or three sentences. Not written.
4. **File descriptions** — one line each. This is where the real writing is, and
   it is worth more attention than any headline. A file record that says what the
   project actually did, in plain terms, does more work than a slogan.

Do not generate agency-voice filler anywhere ("I build vision", "refined digital
experiences", "passionate developer"). A vague sentence at display scale is worse
than no sentence. If a line is not ready, ship the section without it.

---

## 10. Technical requirements

### Build

- **Pin every dependency to an exact version.** The current `package.json` uses
  `"latest"` throughout, so no two installs produce the same build.
- **Remove Tailwind** unless it is actually adopted. It is currently installed,
  imported, and effectively unused.
- Add ESLint and Prettier configs.
- Components split into files. No single-file app.

### Performance

- `prince-portrait.jpeg` is 2.0 MB and `childhood-photo-hd.jpg` is 1.0 MB.
  Convert to WebP/AVIF, serve responsive sources, lazy-load below the fold.
  Target under 400 KB total for images.
- **Self-host fonts.** The current site uses a CSS `@import` for Google Fonts,
  which is the most render-blocking option available. Subset to the glyphs used.
- Target: LCP under 2.5s on a mid-range Android over 4G.

### Accessibility

The current site has zero `tabIndex`, `role`, or `onKeyDown` attributes — project
cards are click handlers on `<article>` elements and cannot be opened by
keyboard. This must not carry over.

- Index rows are real buttons or links.
- Visible keyboard focus everywhere.
- `prefers-reduced-motion` honoured for entry, dye, and all transitions.
- Contrast checked — marigold on ink and madder on ink both need verifying.

### SEO

Open Graph tags, favicon (the drawn name mark), meta description, sitemap. The
current site has none, so the link previews as a blank grey box anywhere it is
shared.

---

## 11. What is being deleted, and why

`styles.css` and `cleanup.css` are both removed.

`cleanup.css` is 1202 lines of patches over the base stylesheet: 378
`!important` declarations, `.hero-copy` redefined 68 times, `.atlas-card` 66
times, roughly 30 media queries with contradictory rules at the same breakpoint
(`.hero-copy { top }` is set to 365px, then 132px, then 112px at `max-width:760px`).
Its comments read "Final hero alignment pass", "Final hero positioning pass",
"Final desktop constellation pass" — four finals, none final.

This cannot be patched into the design above. A token layer is the abstraction
whose absence caused it.

Do not reintroduce: `!important` as a layout tool, absolute pixel positioning for
responsive elements, or a second stylesheet that overrides the first.

---

## 12. Build order

Do not reorder. In particular, the dye effect is last among the visual items —
building it first produces a beautiful hero on top of an unfinished site.

Numbered as plain text, not as a markdown list, so that 3b can sit between 3
and 4 without renumbering everything after it.

- **1. Tokens and type.** Palette, three faces, type scale, spacing scale.
  Nothing visual. This is the step whose absence caused §11.
- **2. Structure, unstyled.** All six sections, real content, deliberately ugly.
  Proves the architecture holds before any polish.
- **3. Index and file-open.** The signature interaction. Most of the real work.
- **3b. The remaining records.** Sections 04, 05, 06 and the footer, in the same
  visual language as the index. Records, not decoration. Added after the
  original spec — see below.
- **3c. Hero and statement layout.** 01 HERO's spacing and factual line, and
  giving 03 STATEMENT real height so the rhythm break exists. No name
  treatment — that is step 4. Added after the original spec — see below.
- **4. Entry sequence.** Name draw + cover lift.
- **5. Dye simulation.**
- **6. Motion polish, mobile, performance, accessibility pass.** Named items,
  so none of them goes missing the way these did before:
  - Convert `public/` images to WebP/AVIF, serve responsive sources,
    lazy-load below the fold — under 400 KB total (§10).
  - **Then** build the childhood-photo hover on the Subject portrait (§5). It
    is gated on the conversion above: built first, it ships the regression the
    conversion exists to prevent.
  - ESLint and Prettier configs (§10).
  - Motion polish, mobile, remaining accessibility pass.

Steps 1–2 are a focused weekend. Step 3 is where the time goes.

### Amendments to this list

Items added after the original spec was written, recorded here so a later
session does not mistake the numbering for drift.

- **Step 3b — the remaining records** (added 2026-09-16). The original list went
  straight from the index to the entry sequence, leaving sections 04–07 with no
  step to be built in. That is an omission, not a reordering: 3b is the same
  class of work as step 3, and the page should be visually complete before
  anything animates in front of it. The principle this list protects — entry
  before dye, both after the substance — is untouched. It keeps the name "3b"
  rather than renumbering, so references to "step 4" in older notes and commits
  still mean the entry sequence.
- **Step 3c — hero and statement layout** (added 2026-09-16). 3b closed the gap
  for sections 04–07 but left 01 and 03 with no step either. It runs before
  step 4 because the entry sequence hands off to the hero: if the hero has no
  layout of its own by then, step 4 will style it implicitly and uncontrolled,
  which is how the last build drifted.
- **Dependency hygiene** (done 2026-09-16, before 3b). Pinning every dependency
  to an exact version and removing Tailwind are §10 requirements that were
  attached to no numbered step, which is how they survived steps 1–3. Done as
  its own commit rather than folded into a styling step.
- **Step 6 broken into named items** (2026-09-16). The childhood-photo hover,
  the image conversion and the ESLint and Prettier configs were each real
  requirements attached to no step. "Performance pass" was not specific enough
  to stop them being forgotten — the dependency hygiene above proves the
  failure mode. They are now listed individually under step 6.
- **Footer name mark deferred** (2026-09-24). Step 4 converted the handwriting
  face to paths but deliberately left the footer mark (§4, §5 07) out of scope;
  the footer is still set in mono. It is attached to no numbered step yet, and
  that needs deciding.

---

## 13. Anti-patterns — do not reintroduce

These were each considered and rejected during design. If the build drifts toward
one, it has drifted.

- Forensic vocabulary (see §3).
- Cards for the works section. It is an index.
- A separate achievements section. Outcomes are file metadata.
- A fifth or sixth colour; acid-green specifically.
- More than three typefaces.
- Single-word emphasis inside a headline (one word italic or recoloured).
- Fade-and-slide-up entrance on every section, hover transitions on every card —
  scattered motion reads as templated. Motion answers actions or marks one
  orchestrated moment.
- `→` appended to link and button text.
- Light background. The palette's saturation depends on a dark ground.
- Self-mythologising copy. The reference sites do this and it is their weakest
  quality, not their strength.
- **A tagline, mission line, or hero claim of any kind** (§1). This is the most
  likely drift, because a hero feels like it needs a sentence. It does not.
- **`BUILT` vs `ASSISTED` attribution** (§7). Everything was assisted; the split
  is indefensible.
- Metrics as identity. "Ships in days" was considered and rejected — it measures
  a phase and goes false the moment a project takes months.

---

## 14. Open questions

- Subject (04) opening copy and the file descriptions (§9).
- Which step builds the footer name mark (§12 amendments).
- **CodeAutopsy repo transfer — blocking for FILE 001.** Collaborator access does
  not surface a repo on a personal profile; only ownership does. Transfer from
  the other account (Settings → Transfer ownership), or clone and push fresh.
- The unassisted C/C++ or DSA artifact (§7) — not blocking for launch, but the
  site is incomplete without it.
