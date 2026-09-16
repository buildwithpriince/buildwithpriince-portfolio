import s from './Footer.module.css'

/*
 * 07 FOOTER (SPEC §5). Name mark, small — one of the two places the
 * handwriting face appears (§4). It is still set in mono here; the drawn mark
 * arrives with the name-draw in step 4, which is where that face is converted
 * to paths.
 */
export function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.mark}>Prince Agrawal</p>
    </footer>
  )
}
