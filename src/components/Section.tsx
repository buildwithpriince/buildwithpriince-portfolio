import type { ReactNode } from 'react'
import { hand, type HandWord } from '../content/hand'
import { Hand } from './Hand'
import s from './Section.module.css'

/*
 * The shell every section shares: page gutter, vertical rhythm, and a label
 * in the archivist's hand (SPEC-EXPERIENCE §2, §3) — written on the section
 * the way a folder tab is written on, not a tracked all-caps mono heading.
 * The words come from content/hand.ts, so a label is a HandWord, not free text.
 *
 * No section number in the label. SPEC §5 numbers the sections for the
 * spec's own sake; numbered markers belong only where the content is
 * genuinely a sequence (§3) — the index, and nothing else.
 */
export function Section({ id, label, children }: { id: string; label: HandWord; children: ReactNode }) {
  return (
    <section id={id} className={s.section}>
      <h2 className={s.heading}>
        <span className="visually-hidden">{hand[label].text}</span>
        <Hand word={label} />
      </h2>
      {children}
    </section>
  )
}
