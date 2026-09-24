import { Section } from '../components/Section'
import { Value } from '../components/Value'
import { todo, type Field } from '../content/todo'
import s from './Correspondence.module.css'

type Endpoint = { label: string; handle: string; href: Field }

/*
 * 06 CORRESPONDENCE (SPEC §5). The numbered endpoints, carried across nearly
 * unchanged — §5 calls them the current site's best-designed element.
 *
 * The numbering survives §3's test: these are a real ordered list on the page,
 * not decoration applied to unordered content. Rows share the index's row
 * language, so the site reads as one archive rather than two.
 *
 * No trailing arrows (§13).
 */
const endpoints: Endpoint[] = [
  {
    label: 'LinkedIn',
    handle: 'prince-agrawal-63aa36361',
    href: 'https://www.linkedin.com/in/prince-agrawal-63aa36361/',
  },
  { label: 'Instagram', handle: 'heyyitsprince', href: 'https://www.instagram.com/heyyitsprince' },
  // The number must not appear in plain text, including in the href (SPEC §2).
  {
    label: 'WhatsApp',
    handle: '',
    href: todo('obfuscated handler or contact form — no plain-text number (SPEC §2)'),
  },
  {
    label: 'Email',
    handle: 'prince.agrawal2245@gmail.com',
    href: 'mailto:prince.agrawal2245@gmail.com',
  },
  {
    label: 'GitHub',
    handle: 'github.com/buildwithpriince',
    href: 'https://github.com/buildwithpriince',
  },
  { label: 'VSCO', handle: 'vsco.co/priiince07/gallery', href: 'https://vsco.co/priiince07/gallery' },
]

export function Correspondence() {
  return (
    <Section id="correspondence" label="correspondence">
      <ol className={s.endpoints}>
        {endpoints.map(({ label, handle, href }, index) => {
          const number = String(index + 1).padStart(2, '0')
          return (
            <li key={label} className={s.item}>
              {typeof href === 'string' ? (
                <a className={s.endpoint} href={href}>
                  <span className={s.number}>{number}</span>
                  <span className={s.label}>{label}</span>
                  <span className={s.handle}>{handle}</span>
                </a>
              ) : (
                /* No destination yet, so no link — a dead anchor is worse. */
                <div className={s.endpoint}>
                  <span className={s.number}>{number}</span>
                  <span className={s.label}>{label}</span>
                  <span className={s.handle}>
                    <Value field={href} />
                  </span>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
