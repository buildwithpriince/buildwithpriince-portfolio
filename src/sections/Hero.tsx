import { files } from '../content/files'
import s from './Hero.module.css'

const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']

const countWord = (n: number) => WORDS[n] ?? String(n)

/*
 * 01 HERO (SPEC §1, §5). The name, one factual line, nothing else.
 * No tagline, no claim — deliberately. The name becomes the drawn SVG in step 4.
 */
export function Hero() {
  const count = files.length
  return (
    <section id="hero" className={s.hero}>
      <h1 className={s.name}>Prince Agrawal</h1>
      <p className={s.line}>
        Vadodara. {countWord(count)} {count === 1 ? 'file' : 'files'}. First entry January 2026.
      </p>
    </section>
  )
}
