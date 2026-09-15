import { Value } from '../components/Value'
import { todo, type Field } from '../content/todo'

type Endpoint = { label: string; handle: string; href: Field }

/*
 * 06 CORRESPONDENCE (SPEC §5). The numbered endpoints, carried over from the
 * current site with the trailing arrows dropped (§13).
 */
const endpoints: Endpoint[] = [
  { label: 'LinkedIn', handle: 'prince-agrawal-63aa36361', href: 'https://www.linkedin.com/in/prince-agrawal-63aa36361/' },
  { label: 'Instagram', handle: 'heyyitsprince', href: 'https://www.instagram.com/heyyitsprince' },
  // The number must not appear in plain text, including in the href (SPEC §2).
  { label: 'WhatsApp', handle: '', href: todo('obfuscated handler or contact form — no plain-text number (SPEC §2)') },
  { label: 'Email', handle: 'prince.agrawal2245@gmail.com', href: 'mailto:prince.agrawal2245@gmail.com' },
  { label: 'GitHub', handle: 'github.com/buildwithpriince', href: 'https://github.com/buildwithpriince' },
  { label: 'VSCO', handle: 'vsco.co/priiince07/gallery', href: 'https://vsco.co/priiince07/gallery' },
]

export function Correspondence() {
  return (
    <section id="correspondence">
      <h2>Correspondence</h2>
      <ol>
        {endpoints.map(({ label, handle, href }, index) => {
          const number = String(index + 1).padStart(2, '0')
          return (
            <li key={label}>
              {typeof href === 'string' ? (
                <a href={href}>
                  {number} {label} {handle}
                </a>
              ) : (
                <>
                  {number} {label} <Value field={href} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
