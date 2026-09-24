import { useEffect, useRef } from 'react'
import { Hand } from './Hand'
import s from './Cursor.module.css'

/*
 * The custom cursor (SPEC-EXPERIENCE §6). Fine pointers only: a small cream
 * ring. Over a file it becomes a drop of that file's dye labelled "open";
 * over a link it says what the link does — "write" for email, "visit"
 * for anything else. Buttons keep the plain ring.
 *
 * What a target does is read from the DOM, not configured per component:
 * a file row carries data-cursor="open" and data-dye; links are links.
 *
 * Position is written straight to the element on every pointer event, never
 * through React state — following the pointer has to be immediate (§6), and
 * a re-render per mousemove is not. Native focus rings are untouched.
 */

type Kind = 'none' | 'open' | 'write' | 'visit'

const FINE = '(hover: hover) and (pointer: fine)'

function read(target: EventTarget | null): { kind: Kind; dye?: string } {
  if (!(target instanceof Element)) return { kind: 'none' }
  const file = target.closest<HTMLElement>('[data-cursor="open"]')
  if (file) return { kind: 'open', dye: file.dataset.dye }
  const link = target.closest('a[href]')
  if (link) return { kind: link.getAttribute('href')!.startsWith('mailto:') ? 'write' : 'visit' }
  return { kind: 'none' }
}

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia(FINE).matches) return

    const root = document.documentElement
    root.classList.add('has-cursor')

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      el.style.translate = `${event.clientX}px ${event.clientY}px`
      el.dataset.visible = 'true'
    }
    const over = (event: PointerEvent) => {
      const { kind, dye } = read(event.target)
      el.dataset.kind = kind
      if (dye) el.style.setProperty('--cursor-dye', `var(--dye-${dye})`)
    }
    const leave = (event: MouseEvent) => {
      if (!event.relatedTarget) el.dataset.visible = 'false'
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    document.addEventListener('mouseout', leave)
    return () => {
      root.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <div ref={ref} className={s.cursor} data-kind="none" data-visible="false" aria-hidden="true">
      <span className={s.mark} />
      <span className={s.label}>
        <Hand word="open" className={s.open} />
        <Hand word="write" className={s.write} />
        <Hand word="visit" className={s.visit} />
      </span>
    </div>
  )
}
