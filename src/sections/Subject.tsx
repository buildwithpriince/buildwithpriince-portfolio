import { Value } from '../components/Value'
import { todo } from '../content/todo'

/*
 * 04 SUBJECT (SPEC §5). Laid out as a personnel file. The childhood-photo
 * hover belongs on this portrait; it is interaction, so it is not built here.
 */
export function Subject() {
  return (
    <section id="subject">
      <h2>Subject</h2>
      <p>
        <Value field={todo('opening, two or three sentences (SPEC §9)')} />
      </p>
      <img src="/prince-portrait.jpeg" alt="Prince Agrawal" />
      <dl>
        <dt>Name</dt>
        <dd>Prince Agrawal</dd>
        <dt>Location</dt>
        <dd>Vadodara</dd>
        <dt>Study</dt>
        <dd>Second-year CSE, MSU Baroda</dd>
        <dt>Storefront</dt>
        <dd>Builds and runs the online store for Agrawal Matching Centre, the family’s women’s clothing and fabric shop</dd>
        <dt>Recurring team</dt>
        <dd>Fivestack — Jeet, Vihan, Harshiv, Tanmay</dd>
        <dt>SIH 2026</dt>
        <dd>Team of six</dd>
      </dl>
    </section>
  )
}
