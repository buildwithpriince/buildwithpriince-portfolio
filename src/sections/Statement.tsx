import s from './Statement.module.css'

/*
 * 03 STATEMENT (SPEC §5). A rhythm break between the index and the subject
 * record. Decided: it ships as an empty band — no line. §5 is explicit that
 * breathing room beats a manufactured slogan, and nothing honest presented
 * itself. The band is spatial only, so it carries no text and no accessible
 * name; its height is in Statement.module.css.
 *
 * Do not fill this later. An empty band is the decision, not a gap.
 */
export function Statement() {
  return <section id="statement" className={s.band} />
}
