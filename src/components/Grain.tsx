import s from './Grain.module.css'

/*
 * Paper grain (SPEC-EXPERIENCE §6): a fixed noise layer over the whole page.
 * Paper material — it is the page's surface, not an effect on top of it.
 */
export function Grain() {
  return <div className={s.grain} aria-hidden="true" />
}
