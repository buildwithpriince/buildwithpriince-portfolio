import { slugFromPath } from './fileRoute'

/*
 * Whether the entry sequence plays (SPEC §6). Read once, during the first
 * render, so the cover is in the first paint rather than arriving after it.
 */

const SEEN_KEY = 'entry-seen'

export function shouldPlayEntry(): boolean {
  /* Disabled entirely, not shortened. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false

  /*
   * A direct link to a file paints the opened file on first paint (§7). The
   * file-open is a modal dialog in the top layer, so a cover could not sit
   * over it anyway; the entry belongs to arriving at the archive itself.
   */
  if (slugFromPath(window.location.pathname)) return false

  return !readSeen()
}

/* First visit only. Storage can be unavailable (private modes, blocked
   site data); without it the entry just plays again, which is harmless. */
export function markEntrySeen() {
  try {
    window.localStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* nothing to do */
  }
}

function readSeen(): boolean {
  try {
    return window.localStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}
