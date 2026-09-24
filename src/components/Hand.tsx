import type { CSSProperties } from 'react'
import { hand, handHeightEm, type HandWord } from '../content/hand'
import s from './Hand.module.css'

/*
 * A word in the archivist's hand (SPEC-EXPERIENCE §3): Caveat converted to
 * paths at build time (scripts/name/build-words.mjs). Sized by font-size,
 * like text — the parent's type token sets it.
 *
 * Decorative to assistive technology; whoever renders it supplies the text.
 */
export function Hand({ word, className }: { word: HandWord; className?: string }) {
  const { viewBox, d } = hand[word]
  return (
    <svg
      className={className ? `${s.hand} ${className}` : s.hand}
      viewBox={viewBox}
      style={{ '--hand-height-em': handHeightEm } as CSSProperties}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  )
}
