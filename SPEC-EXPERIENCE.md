# Experience Layer — Build Spec

**Read after SPEC.md. Where the two disagree, this file wins.**

Steps 1–4 of SPEC.md built the substance: the archive, the index, the file
records, the disclosure practice. That stays. This file replaces the remaining
steps (5 and 6) and rewrites how the site *feels*. The owner reviewed the build
and rejected it as static. He is right: the original spec stacked restraint rules
until it designed out everything he asked for. This file corrects that.

The brief, in his words: something out of the box, not a static website,
something that holds the visitor rather than just scrolls.

---

## 0. What this overrides in SPEC.md

| SPEC.md | Status | Replaced by |
| --- | --- | --- |
| §4 colour — "small deliberate hits" | **overridden** | §3 here: chrome is restrained, the dye is not |
| §4 colour — marigold, indigo, madder values | **overridden** | §3 here: one value per colour; dyes tuned so ink passes AA |
| §4 type — handwriting "appears exactly twice" | **overridden** | §3 here: handwriting is the archivist's hand |
| §8 dye — hero and entry only | **overridden** | §4 here: one living field under the whole site |
| §8 dye — multiply blending | **overridden — was a bug** | Multiply on a near-black ground is invisible. §4 here |
| §12 steps 5 and 6 | **replaced** | §8 here: steps E1–E8 |
| §13 — light background banned | **overridden** | Folder interiors are paper (§5.4) |
| §13 — motion rules | **replaced** | §6 here: the three materials |

Everything else in SPEC.md stands: structure, index, records, attribution,
durations, deep links, the no-tagline decision, accessibility, performance
budgets, the one-context WebGL rule.

---

## 1. The idea

### The page matches

Agrawal Matching Centre matches cloth to colour. Someone walks in with a fabric
and the shop finds what goes with it.

**The site does the same thing.** Every file has its own dye. The whole page sits
in a living field of colour, and that field continuously re-tints to match
whatever the visitor is looking at. Hover a file and the entire page shifts
toward its dye. Scroll into a section and the water takes that section's colour.
The site is never still, and it is never moving at random: it is always matching.

No one else can claim this. It comes from the family business, it explains the
palette, and it makes the site alive without being decorative.

### Three materials

Every piece of motion on the site belongs to exactly one material. Nothing moves
in a way that isn't one of these.

| Material | What it does | Where |
| --- | --- | --- |
| **Ink** | draws — lines, strokes, handwriting | the name, section labels, rules, annotations, the signature |
| **Dye** | diffuses — blooms, floods, bleeds, stains | the field, hovers, transitions, the cursor, filled type |
| **Paper** | moves as an object — lifts, folds, slides, stamps | the folder, preview cards, stamps, grain |

This is the discipline that keeps an intensely animated site coherent instead of
scattered. When deciding whether something should move, ask which material it
is. If the answer is none, it doesn't move.

**Text itself never fades or slides in.** Ink draws, dye flows, paper moves; set
type simply sits there. That one rule is what separates this from the generic
fade-up-on-every-section look.

---

## 2. What is wrong with the current build

Fix these in E1. They are why the build reads as generic even before motion:

- **Tracked all-caps mono labels over every section** (INDEX, SUBJECT,
  CAPABILITY). Among the most common tells of a templated page. Replace with
  handwritten labels (§3).
- **File names in all-caps mono** (CODEAUTOPSY). Set them in Instrument Serif,
  sentence case, large. Mono is for record data only.
- **All-caps field names** in records (YEAR, DOMAIN). Sentence case, small.
- **Empty right half of the screen** beside the index. The preview card lives
  there (§5.3).
- **Instrument Serif is unused anywhere.** It is the display face; use it.

---

## 3. Tokens

### Chrome versus dye

The resolution to the palette argument: **chrome is restrained, the dye is not.**
UI chrome — text, rules, labels — stays ink and cream. The dye field and
everything the dye touches is fully saturated.

### Base

```css
--ink:    #0F0B0A;   /* page ground */
--cream:  #F2E9D8;   /* text on ink */
--paper:  #EFE6D2;   /* folder interior */
--kraft:  #C9A873;   /* folder cover */
```

### Dyes — one per file

Each file owns a dye. It appears in that file's row hover, preview card, folder
stain, cursor, and the ambient field while that file is in focus.

| File | Dye | Hex | Why |
| --- | --- | --- | --- |
| CodeAutopsy | Madder | `#E0443A` | the red of a diagnosis |
| Clarity | Indigo | `#6573F0` | lifted from the old `#2B3A8F`, which vanishes as dye on ink |
| Prism | Marigold | `#F2A20C` | the name's colour |
| GlobeTrotter | Peacock | `#13A89E` | |
| Swasthya-AI | Mehendi | `#7FA83A` | |
| Agrawal Storefront | Rani | `#E1307A` | the signature textile pink — the shop's colour |

New files get new dyes from the same textile family.

**Decided: every dye fill carries ink text, and every dye is tuned so ink on it
passes AA (4.5:1)** (E1 review, 2026-09-24). One rule, not a per-dye choice. As
first specified, madder (`#D8322B`, ink 4.11) and indigo (`#4F5FE0`, ink 3.77)
failed with both ink and cream, so both were nudged:

| Dye | Hex | Ink on dye |
| --- | --- | --- |
| Madder | `#E0443A` (was `#D8322B`) | 4.72 |
| Indigo | `#6573F0` (was `#4F5FE0`) | 4.91 |
| Marigold | `#F2A20C` | 9.28 |
| Peacock | `#13A89E` | 6.64 |
| Mehendi | `#7FA83A` | 7.05 |
| Rani | `#E1307A` | 4.57 |

A new dye must clear 4.5:1 with ink before any file uses it; record its ratio
beside the token in `styles/tokens.css`.

**Decided: one value per colour.** The name is marigold `#F2A20C`, and status
(the Live badge) is ink text on madder `#E0443A`. The SPEC.md §4 values
`#E8A317`, `#C1272D` and `#2B3A8F` are retired.

### Type — three faces, new roles

| Face | Role |
| --- | --- |
| **Handwriting** (the face already chosen) | **The archivist's hand.** The name, section labels written like folder tabs, short margin annotations on files, the stamp note, the signature. |
| **Instrument Serif** | Display. File names in the index and folder, the statement band, correspondence hovers. Large. |
| **IBM Plex Mono** | Record data only. Field values, durations, commit counts. Sentence case, small. |

Handwritten section labels change the character of the whole page: it stops
reading as a terminal and starts reading as a real archive someone keeps by hand.

**Annotations:** each file may carry one short handwritten margin note — a fact,
in the owner's voice. Examples of the register: *longest one* beside CodeAutopsy,
*still open* beside the storefront. The owner writes these; do not invent them.
Ship without annotations rather than with invented ones.

---

## 4. The dye field

One fixed, full-viewport WebGL canvas behind all content. The only WebGL context
on the site. Content above it has transparent backgrounds.

### Behaviour

- **Ambient.** When idle the field drifts slowly in the dye of whatever is in
  view. Never fully still, never busy.
- **Matching.** Hovering or focusing a file re-tints the whole field toward that
  file's dye over roughly 1.2s. This is the signature behaviour of the site.
- **Cursor.** The pointer leaves a faint dye trail everywhere on the page — the
  cursor is a dropper.
- **Blooms.** Full-strength splats for the entry, file-opens, and section
  transitions (§5).

### Simulation

Keep SPEC.md §8's tuning — vorticity near zero, viscosity high, density
dissipation high, velocity dissipation low. That is what makes it dye rather
than smoke.

**Rendering correction.** SPEC.md §8 specified multiply blending. On a near-black
ground multiply produces black, so the dye would be invisible. On ink, render the
dye as luminous pigment in dark water: normal compositing, brightness capped,
soft falloff at the edges. Multiply belongs only on paper (the folder interior,
§5.4), where it is done in CSS, not WebGL.

Adapting an existing MIT-licensed WebGL fluid implementation is acceptable;
retain its licence notice. Do not add it as a dependency.

### Dye inside type

The statement band (§5.5) shows the living field *inside* the letters. Do this
without a second context: the band is an ink-coloured layer with cream text and
`mix-blend-mode: darken` over the canvas. Darken keeps the ink ground dark and
lets the dye show through the letterforms.

---

## 5. Section by section

### 5.1 Entry

Keep step 4's sequence and hand it off to the living field: the moment the last
stroke of the name lands, dye blooms from that stroke's endpoint, floods the
frame, then recedes into the ambient field — which keeps running. The entry does
not end; it becomes the site.

Constraints from SPEC.md §6 stand: under 2.5s, first visit only, skippable,
content in the DOM underneath from the start.

### 5.2 Hero

```
┌─────────────────────────────────────────────────────────┐
│ (dye field alive behind everything)                     │
│                                                         │
│  Prince                                                 │
│  Agrawal            ← handwriting, ~16vw, marigold      │
│                                                         │
│  Vadodara. Six files. First entry January 2026.         │
│                                                         │
│                              ● File 006 is still open   │
│                                                   │     │
│                                     ink line drawing ↓  │
└─────────────────────────────────────────────────────────┘
```

- Name at near-viewport scale — `clamp()` up to roughly 16vw. Currently it is a
  heading; it should be the picture.
- *File 006 is still open* with a pulsing rani dot. True, archival, and it points
  at the one ongoing project. Clicking it opens that file.
- The scroll cue is an ink line that draws downward and repeats. No arrow glyph.

### 5.3 Index

```
 the index                                          ┌──────────────┐
 ─────────────────────────────────────────────────  │ paper card,  │
 001   CodeAutopsy          2026   Tooling   ● Live │ tinted in    │
 002   Clarity ▓▓▓▓▓▓bloom from cursor▓▓▓▓▓▓▓▓▓▓▓▓▓ │ the file's   │
 003   Prism                2026   Finance   ● Live │ dye, tilted  │
 004   GlobeTrotter                                 │ ~1.5°        │
 005   Swasthya-AI                                  └──────────────┘
 006   Agrawal Storefront                 still open
```

- File names in Instrument Serif, large, sentence case.
- **Hover:** the row fills with the file's dye as a bloom spreading from the exact
  point where the cursor entered — a radial fill from that coordinate, not a flat
  fade. Text flips to its contrast colour. The whole field re-tints to match.
- **Preview:** a paper card on the right, tinted in the dye, slightly rotated,
  sliding and settling as the hovered row changes. It holds the record summary —
  duration, attribution, commit share. This fills the empty right half.
- **Keyboard focus** drives all of it identically. Already working; keep parity.
- **Arrival:** as the index enters the viewport, each rule draws left to right
  in sequence (ink). Row text does not animate.

### 5.4 The folder

The file-open becomes a physical object.

- Clicking a row: a kraft folder rises from that row's position, its cover
  rotates open on a top hinge (CSS 3D, `rotateX`), revealing a **paper**
  interior.
- The record is typeset on the paper in ink. A stain of the file's dye blooms in
  one corner — CSS layer, `mix-blend-mode: multiply`, which works on paper.
- **Folder tabs** along the edge, one per file. Click a tab to switch files; the
  folder swaps contents without closing. Left and right arrow keys move between
  files.
- Closing reverses the motion back into the row it came from.
- Cold deep links render the folder already open. Back behaviour stays as built.

This is the one light surface on the site. It gives the page a rhythm the
all-dark version could not: dark water outside, paper inside.

### 5.5 Statement

The only section that pins. It holds for about one viewport of scroll:

```
        Six files.            ← Instrument Serif, huge, dye flowing inside
        One still open.       ← italic, slides in as you scroll, rani dot
```

A fact, not a claim — counts update from `files.ts` like the hero. The
no-tagline decision stands. If the owner writes a better true line, use it.

Mobile does not pin; it plays once on view.

### 5.6 Subject

- Portrait in a two-tone indigo and marigold treatment (SVG colour-matrix
  filter).
- An *active* stamp — handwritten or stamped, madder — hits once as the section
  enters: scales down from about 1.3 with a slight rotation and settles. Paper.
- **Hover:** a dye wash sweeps across the portrait and reveals the childhood
  photo in natural colour. Requires the image conversion in E1.
- Record fields stay as built, restyled per §2.

### 5.7 Capability — swatches

Each skill is a strip of cloth. **Its honest level is how deep the dye has
taken:**

| Level | Meaning |
| --- | --- |
| First wash | learning |
| Set | used in shipped work |
| Deep | used repeatedly, confidently |
| Colourfast | can teach it |

Saturation and depth of colour show the level. On hover the dye soaks into the
strip up to its level. Honest levels are a feature of the whole site; this makes
them visible. The owner chooses the skills and levels. Nothing is marked
colourfast that he could not defend in an interview.

### 5.8 Correspondence

Keep the numbered rows. On hover the platform name expands in Instrument Serif
across the width of the row while dye floods from the cursor. The cursor label
says what happens: *write* for email, *visit* for profiles. Copying the email
shows a handwritten *copied* note that draws on and fades.

### 5.9 Footer

The name draws itself once more, small, as the footer enters. A handwritten
last line: *end of file*.

### 5.10 Between sections

As each section boundary crosses the middle of the viewport, one large splat of
the next section's colour enters the field from the edge. The page seems to be
re-dyed as you move through it. This is how the ambient field stays tied to the
content rather than looping.

---

## 6. Motion rules

- Every movement is ink, dye, or paper (§1). Nothing else moves.
- Set text never fades or slides in.
- One pin on the whole site — the statement band.
- No parallax for its own sake.
- Motion that answers an action (hover, focus, open, copy) should be immediate —
  it starts within one frame of the input.
- Ambient motion is slow. The field's drift should be felt more than watched.

### Global layer

- **Smooth scroll** with Lenis, synced to the GSAP ticker. Off under reduced
  motion.
- **GSAP + ScrollTrigger** for section choreography. Pin exact versions; check
  licence on install.
- **Custom cursor** on fine pointers only: a small cream ring; over a file it
  becomes a drop in that file's dye with the label *open*; over links it shows
  the action. Native focus rings are unaffected.
- **Grain:** a fixed SVG noise overlay around 6% opacity, stepping at about 8fps.

---

## 7. Performance and reach

The hiring-manager constraint from SPEC.md still holds: the content is real
HTML, readable immediately, and works if the canvas never loads.

- **One WebGL context.** Dye inside type and paper stains are CSS, not extra
  contexts.
- **Adaptive quality.** Measure frame time over the first ~60 frames and step
  down simulation and dye resolution until the budget holds. The lowest tier is
  a CSS animated gradient mesh — still moving, never static.
- **Mobile is alive.** Reduced-resolution simulation driven by touch plus slow
  ambient splats. No custom cursor, no pin. The folder opens as a full-screen
  paper sheet sliding up.
- **Reduced motion:** a still image of the field, instant state changes, no
  smooth scroll, no pin.
- **LCP** is the hero name, rendered as HTML immediately; the canvas initialises
  after first paint.
- Pause the simulation on tab blur. Motion libraries under ~60 KB gzipped
  combined.

---

## 8. Build order

Steps 1–4 are done. These replace steps 5 and 6. Same working agreement: one
step, self-audit, commit, stop.

| Step | Scope | Effort |
| --- | --- | --- |
| **E1** | Foundations. Add Lenis and GSAP (pinned). Motion tokens for the three materials. Grain. Custom cursor. Convert `public/` images to WebP/AVIF under 400 KB total. Fix §2: handwritten section labels, serif file names, sentence-case fields. Update `CLAUDE.md` to read this file after `SPEC.md`. | high |
| **E2** | The dye field. Global canvas, per-file dyes, cursor trail, matching re-tint, adaptive quality tiers, drop-dye-anywhere (§10.3). | xhigh |
| **E3** | Hero at scale and entry hand-off into the live field. *Still open* indicator. | high |
| **E4** | Index: cursor-point bloom, paper preview card, ink rules, annotations slot, duration column and sortable columns (§10.2). | high |
| **E5** | The folder: 3D open and close, paper interior, dye stain, tabs, arrow keys, cold deep link, case pages with page turn (§10.1). | xhigh |
| **E6** | Statement band: dye inside type, the single pin. | high |
| **E7** | Subject, capability swatches, correspondence, footer, section-transition splats, margin doodles and the workbench (§10.4–10.5). | high |
| **E8** | Mobile, reduced motion, performance pass, accessibility pass, ESLint and Prettier. | high |

Commit after each. Screenshot and review before reporting done — this layer
lives or dies on how it looks, and a self-audit against text is not enough.

---

## 9. Anti-patterns

- Motion that is not ink, dye, or paper.
- Text that fades or slides in.
- More than one pinned section.
- Multiply blending on the ink ground.
- A second WebGL context.
- Tracked all-caps mono labels as section headings.
- A tagline or claim anywhere. Facts only.
- Borrowed specifics from the reference sites: live clocks and coordinates, a
  stylised self-portrait hero, video thumbnail tiles.
- Invented copy of any kind — annotations, descriptions, skills, levels.
- A static fallback on mobile. Lower quality, never frozen.

---

## 10. From the Wall of Portfolios

Source: the curators' notes on why each portfolio of the month on
wallofportfolios.in was chosen. Their praise is almost never about animation.
It is personality, storytelling, case studies, custom illustration, and design
tied to real outcomes. Motion is one ingredient among several. The layer above
covers motion; this section adds what the winners have and this site lacks.

### 10.1 Case pages inside the folder — highest value

The record is page one. Behind it sit three to five paper pages the visitor
flips through:

1. The problem
2. What I decided — what was specified and what was delegated
3. What broke
4. What shipped, and what happened after
5. What I would change

Page turn is paper material: CSS 3D `rotateY` hinged at the left edge, with a
shadow sweeping across the page beneath. Arrow keys and swipe on mobile. Each
page is short — a paragraph, optionally one diagram or screenshot.

A file with no written pages shows only its record. Never generate placeholder
pages.

**The storefront file tells its story in business terms** — what the site
changed for the shop. The curators single out portfolios that show design
driving real outcomes; almost no student has a real business to point to.

### 10.2 Sortable index, with duration as a column

Add **duration** to the index row — it is the site's most distinctive data and
currently hides inside the folder. Column heads (year, domain, duration,
status) become buttons. Sorting re-files the rows with a FLIP animation: rows
slide past each other like paper being re-ordered. Default stays chronological;
the sort state lives in the URL query.

Sort by duration and CodeAutopsy rises to the top on its own. The data makes the
argument without a sentence of copy.

### 10.3 Drop dye anywhere

Clicking or tapping empty space drops a splat of a random file's dye at that
point. No instruction; it is found. Costs almost nothing once the field exists,
and it lets the visitor play with the thing that makes the site alive.

### 10.4 Margin doodles

Custom illustration, in the archivist's hand. At most five small ink drawings in
the margins — a thread spool, a swatch card, a paper clip, a dye dropper — each
drawn on as its section enters (ink material).

**The owner draws them by hand**, on paper; they are scanned and traced to SVG
paths. That is the point: the curators repeatedly praise work that reflects the
person behind it. Never stock icons, never generated illustration.

### 10.5 The workbench

A short section between the statement band and Subject: loose sheets of paper
pinned at slight angles, each one a small thing built for himself or out of
curiosity — not a full file. One line and a link per sheet. The curators note
this too: curiosity beyond the main work.

Only real items. If fewer than two exist, omit the section entirely.

### Considered and not taken

The desktop-OS portfolio — a site that boots up like a computer — is a popular
genre on the Wall. It is a different metaphor, and the archive already does
that job. One metaphor per site.

---

## 11. Content the owner must write

Design cannot carry empty content. These are his, not the build's:

1. **Capability** — four or five skills and an honest level for each (§5.7).
2. **One-line descriptions** for all six files — what the project does, plainly.
3. **Subject opening** — two or three sentences.
4. **Missing record fields** — storefront year and domain; GlobeTrotter and
   Swasthya-AI domain and status.
5. **Case pages** (§10.1) — start with two files, not six: the storefront and
   CodeAutopsy. The rest can follow.
6. **Storefront outcomes** — what the site changed for the shop, in plain terms.
7. **Doodles** (§10.4) — up to five, hand-drawn, photographed or scanned.
8. **Workbench items** (§10.5) — real ones only.
9. **Annotations** — optional, one short fact per file (§3).
10. **CodeAutopsy repo transfer** — still blocking File 001.
