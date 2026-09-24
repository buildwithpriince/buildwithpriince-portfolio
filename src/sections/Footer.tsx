import s from './Footer.module.css'

/*
 * 07 FOOTER (SPEC §5). Name mark, small — one of the two places the
 * handwriting face appears (§4). It is still set in mono here. The face was
 * converted to paths in step 4 (components/Name), but the footer mark was
 * deliberately left out of that step and is still to be scheduled.
 */
export function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.mark}>Prince Agrawal</p>
    </footer>
  )
}
