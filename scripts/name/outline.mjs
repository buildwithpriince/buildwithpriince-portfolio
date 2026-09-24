/*
 * Shared by the generators in this folder: load the hand (Caveat 400) and
 * convert a line of text to an SVG outline in font units, baseline at y = 0,
 * y pointing down.
 */

import opentype from 'opentype.js'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const buf = readFileSync(fileURLToPath(new URL('./caveat-latin-400-normal.woff', import.meta.url)))
export const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength))

/*
 * The outline as compact path data: relative commands, and no line-to the
 * current point (opentype emits one after most curves). `unitsPerEm` sets
 * the coordinate grid — the name keeps the font's 1000; small words use a
 * coarser grid, which at their size is well under a pixel.
 */
export function outline(text, unitsPerEm = font.unitsPerEm) {
  const path = font.getPath(text, 0, 0, unitsPerEm, { kerning: true })
  const r = Math.round
  let d = ''
  let cx = 0
  let cy = 0
  let sx = 0
  let sy = 0
  for (const c of path.commands) {
    if (c.type === 'Z') {
      d += 'z'
      cx = sx
      cy = sy
      continue
    }
    const x = r(c.x)
    const y = r(c.y)
    if (c.type === 'M') {
      d += `m${x - cx} ${y - cy}`
      sx = x
      sy = y
    } else if (c.type === 'L') {
      if (x === cx && y === cy) continue
      d += `l${x - cx} ${y - cy}`
    } else if (c.type === 'Q') {
      d += `q${r(c.x1) - cx} ${r(c.y1) - cy} ${x - cx} ${y - cy}`
    } else if (c.type === 'C') {
      d += `c${r(c.x1) - cx} ${r(c.y1) - cy} ${r(c.x2) - cx} ${r(c.y2) - cy} ${x - cx} ${y - cy}`
    }
    cx = x
    cy = y
  }
  /* Tighten separators: no space needed before a minus sign. */
  d = d.replace(/ -/g, '-')
  return { d, box: path.getBoundingBox() }
}

export function round4(v) {
  return Math.round(v * 1e4) / 1e4
}
