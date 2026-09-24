import { Name } from '../components/Name'
import { files } from '../content/files'
import s from './Hero.module.css'

const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']

const countWord = (n: number) => WORDS[n] ?? String(n)

type Props = {
  /** True while the entry sequence plays: the name draws over the cover. */
  drawName: boolean
}

/*
 * 01 HERO (SPEC §1, §5). The drawn name, one factual line, nothing else.
 * No tagline, no claim — deliberately.
 */
export function Hero({ drawName }: Props) {
  const count = files.length
  return (
    <section id="hero" className={s.hero}>
      <h1 className={s.name}>
        <span className="visually-hidden">Prince Agrawal</span>
        <Name draw={drawName} />
      </h1>
      <p className={s.line}>
        Vadodara. {countWord(count)} {count === 1 ? 'file' : 'files'}. First entry January 2026.
      </p>
    </section>
  )
}
