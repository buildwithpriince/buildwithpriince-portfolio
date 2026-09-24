import { useEffect, type AnimationEvent, type CSSProperties } from 'react'
import { markEntrySeen } from '../lib/entry'
import s from './Cover.module.css'

/*
 * 00 COVER — the entry sequence (SPEC §6). One gesture: the classification
 * line types in, the name draws (components/Name, above this layer), and the
 * cover lifts away with the file-open's motion at full-screen scale, leaving
 * the drawn name where it already is as the hero's name.
 *
 * The page renders underneath the whole time; this is a layer over content,
 * never a gate in front of it. Decorative to assistive technology — every
 * word on it is also on the page.
 *
 * Any click, key, or scroll cuts straight to the end state.
 */

const CLASSIFICATION = 'SUBJECT FILE / AGRAWAL, P.'

type Props = { onDone: () => void }

export function Cover({ onDone }: Props) {
  useEffect(() => {
    markEntrySeen()

    const skip = () => onDone()
    const events = ['pointerdown', 'keydown', 'wheel', 'touchmove', 'scroll'] as const
    for (const type of events) window.addEventListener(type, skip, { passive: true, once: true })
    return () => {
      for (const type of events) window.removeEventListener(type, skip)
    }
  }, [onDone])

  return (
    <div
      className={s.cover}
      aria-hidden="true"
      onAnimationEnd={(event: AnimationEvent) => {
        if (event.target === event.currentTarget) onDone()
      }}
    >
      <p className={s.classification} style={{ '--chars': CLASSIFICATION.length } as CSSProperties}>
        {CLASSIFICATION}
      </p>
    </div>
  )
}
