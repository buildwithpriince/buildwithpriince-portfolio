import { todo, type Field } from './todo'

/*
 * The archive (SPEC §7). Ordered chronologically — the sequence is the
 * argument, so FILE numbers are derived from position, never stored.
 *
 * Optional fields are left undefined when they do not apply and are omitted
 * from the record. A field that applies but is not yet known is a Todo.
 */

/*
 * Every file owns a dye (SPEC-EXPERIENCE §3): its row, its cursor drop, and
 * later its preview, folder stain and the field while it is in focus. New
 * files get new dyes from the same textile family — add the token to
 * styles/tokens.css, with its contrast choice, before adding it here.
 */
export type Dye = 'madder' | 'indigo' | 'marigold' | 'peacock' | 'mehendi' | 'rani'

export type FileRecord = {
  slug: string
  name: string
  dye: Dye
  year: Field
  domain: Field
  status: Field
  description: Field
  stack: Field
  attribution: {
    specified: Field
    implementation: Field
    duration: Field
  }
  /** Team projects only (SPEC §1). Counts need verifying before publish (§7). */
  commits?: Field
  outcome?: Field
  repo: Field
  live: Field
}

const DESCRIPTION = todo('one-line description (SPEC §9)')

/* True for every file (SPEC §7). Do not replace with a BUILT / ASSISTED split. */
const IMPLEMENTATION = 'AI-assisted, self-directed'

export const files: FileRecord[] = [
  {
    slug: 'codeautopsy',
    name: 'CodeAutopsy',
    dye: 'madder',
    year: '2026',
    domain: 'Tooling',
    status: 'Live',
    description: DESCRIPTION,
    stack: 'Node · TypeScript · Gemini API',
    attribution: {
      specified: 'Problem, scoring rubric, output format',
      implementation: IMPLEMENTATION,
      duration: '10–12 days',
    },
    repo: todo('not under buildwithpriince — transfer before launch, blocking (SPEC §14)'),
    live: 'https://code-autopsy-two.vercel.app/',
  },
  {
    slug: 'clarity',
    name: 'Clarity',
    dye: 'indigo',
    year: '2026',
    domain: 'Finance',
    status: 'Live',
    description: DESCRIPTION,
    stack: 'React · FastAPI · MongoDB',
    attribution: {
      specified: todo('what was specified'),
      implementation: IMPLEMENTATION,
      duration: '5 days',
    },
    commits: '13 / 20',
    repo: 'https://github.com/buildwithpriince/clarity',
    live: 'https://clarity-orcin-ten.vercel.app/',
  },
  {
    slug: 'prism',
    name: 'Prism',
    dye: 'marigold',
    year: '2026',
    domain: 'Finance',
    status: 'Live',
    description: DESCRIPTION,
    stack: 'React · FastAPI · Gemini API',
    attribution: {
      specified: todo('what was specified'),
      implementation: IMPLEMENTATION,
      duration: '2 days',
    },
    commits: '9 / 14',
    outcome: 'TetraTHON 2026 — 44/160',
    repo: 'https://github.com/buildwithpriince/TETRA020',
    live: 'https://tetra-020.vercel.app/',
  },
  {
    /*
     * Minority commit share, kept deliberately (SPEC §7). Prince made the
     * initial commit and scaffolded the app before anyone else pushed. The
     * share is stated openly beside what was owned; the admin panel,
     * community page, calendar view and Python backend are not claimed.
     */
    slug: 'globetrotter',
    name: 'GlobeTrotter',
    dye: 'peacock',
    year: '2026',
    domain: todo('domain'),
    status: todo('status'),
    description: DESCRIPTION,
    stack: todo('stack'),
    attribution: {
      specified:
        'project scaffold, authentication, multi-currency and budget, trip context, destination carousel',
      implementation: IMPLEMENTATION,
      duration: '1 day',
    },
    commits: '10 / 37 — team of 4; admin panel, community and backend by another contributor',
    repo: 'https://github.com/buildwithpriince/odoo-TEAM-MSU-',
    live: todo('live link, if any'),
  },
  {
    slug: 'swasthya-ai',
    name: 'Swasthya-AI',
    dye: 'mehendi',
    year: '2026',
    domain: todo('domain'),
    status: todo('status'),
    description: DESCRIPTION,
    stack: todo('stack'),
    attribution: {
      specified: todo('what was specified'),
      implementation: IMPLEMENTATION,
      duration: '2 days',
    },
    commits: '15 / 15',
    repo: 'https://github.com/buildwithpriince/team-eternals',
    live: todo('live link, if any'),
  },
  {
    // Start date unknown; placed last because it is ongoing.
    slug: 'agrawal-storefront',
    name: 'Agrawal storefront',
    dye: 'rani',
    year: todo('year started'),
    domain: todo('domain'),
    status: 'Live',
    description: DESCRIPTION,
    stack: todo('stack'),
    attribution: {
      specified: todo('what was specified'),
      implementation: IMPLEMENTATION,
      duration: 'Ongoing',
    },
    repo: todo('repo — in progress'),
    live: todo('storefront URL'),
  },
]

export const fileNumber = (index: number) => String(index + 1).padStart(3, '0')
