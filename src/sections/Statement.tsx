import { Value } from '../components/Value'
import { todo } from '../content/todo'

/*
 * 03 STATEMENT (SPEC §5). A rhythm break, not the tagline moved down the page.
 * A factual line, or an empty band — undecided (§14).
 */
export function Statement() {
  return (
    <section id="statement" aria-label="Statement">
      <p>
        <Value field={todo('one factual line, or ship as an empty band (SPEC §5, §14)')} />
      </p>
    </section>
  )
}
