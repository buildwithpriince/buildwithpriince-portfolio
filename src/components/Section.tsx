import type { ReactNode } from 'react'
import s from './Section.module.css'

/*
 * The shell every section shares (SPEC §5): page gutter, vertical rhythm, and
 * a quiet uppercase label rather than a display heading. Sections differ in
 * what they hold, not in how they sit on the page.
 *
 * No section number in the label. §5 numbers the sections for the spec's own
 * sake, but §3 is explicit that numbered markers belong only where the content
 * is genuinely a sequence — which is the index, and nothing else.
 */
export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className={s.section}>
      <h2 className={s.heading}>{title}</h2>
      {children}
    </section>
  )
}
