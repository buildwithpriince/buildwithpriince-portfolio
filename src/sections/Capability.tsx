import { Value } from '../components/Value'
import { todo } from '../content/todo'

/*
 * 05 CAPABILITY (SPEC §5). Quiet: four or five entries, honest levels.
 * "Vibe coding" and "prompt writing" are removed (§2).
 */
export function Capability() {
  return (
    <section id="capability">
      <h2>Capability</h2>
      <p>
        <Value field={todo('four or five entries with honest levels — not yet chosen (SPEC §5)')} />
      </p>
    </section>
  )
}
