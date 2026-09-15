import { files } from '../content/files'

const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']

const countWord = (n: number) => WORDS[n] ?? String(n)

/*
 * 01 HERO (SPEC §1, §5). The name, one factual line, nothing else.
 * No tagline, no claim — deliberately. The name becomes the drawn SVG in step 4.
 */
export function Hero() {
  const count = files.length
  return (
    <section id="hero">
      <h1>Prince Agrawal</h1>
      <p>
        Vadodara. {countWord(count)} {count === 1 ? 'file' : 'files'}. First entry January 2026.
      </p>
    </section>
  )
}
