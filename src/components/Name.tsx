import { useId, type CSSProperties } from 'react'
import { nameHeightEm, nameOutline, nameStrokes, nameViewBox, penWidth } from '../content/name'
import s from './Name.module.css'

/*
 * The name, drawn (SPEC §1, §6). Caveat 400 converted to paths at build time
 * by scripts/name/build-name.mjs — the face itself never loads.
 *
 * Drawn, not typed and not faded: while `draw` is set, a mask of pen strokes
 * animates along the letters and uncovers the outline as it goes. Once the
 * entry is over the mask is dropped and the outline is simply filled.
 *
 * Decorative to assistive technology — the accessible name is text, supplied
 * by whoever renders this (see Hero).
 */

type Props = { draw: boolean }

export function Name({ draw }: Props) {
  /* useId output is not always a valid url(#…) fragment; keep it plain. */
  const mask = `name-pen-${useId().replace(/[^\w-]/g, '')}`
  const [x, y, width, height] = nameViewBox.split(' ')

  return (
    <svg
      className={s.name}
      viewBox={nameViewBox}
      style={{ '--name-height-em': nameHeightEm } as CSSProperties}
      aria-hidden="true"
      focusable="false"
    >
      {draw && (
        <mask id={mask} maskUnits="userSpaceOnUse" x={x} y={y} width={width} height={height}>
          {nameStrokes.map((stroke) => (
            <path
              key={stroke.d}
              className={s.pen}
              d={stroke.d}
              pathLength={1}
              strokeWidth={penWidth}
              style={{ '--start': stroke.start, '--span': stroke.span } as CSSProperties}
            />
          ))}
        </mask>
      )}
      <path className={s.ink} d={nameOutline} mask={draw ? `url(#${mask})` : undefined} />
    </svg>
  )
}
