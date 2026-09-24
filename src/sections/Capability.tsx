import { Section } from '../components/Section'
import { Value } from '../components/Value'
import { todo } from '../content/todo'
import s from './Capability.module.css'

/*
 * 05 CAPABILITY (SPEC §5). "Record, quiet" — four or five entries with honest
 * levels. "Vibe coding" and "prompt writing" are removed (§2).
 *
 * The entries are not chosen yet, so there is nothing to lay out. The section
 * gets its frame and the marker stays visible; the record itself is written
 * once the entries and their levels exist. Building an empty list shaped for
 * content nobody has decided would be guessing at the shape.
 */
export function Capability() {
  return (
    <Section id="capability" label="capability">
      <p className={s.pending}>
        <Value field={todo('four or five entries with honest levels — not yet chosen (SPEC §5)')} />
      </p>
    </Section>
  )
}
