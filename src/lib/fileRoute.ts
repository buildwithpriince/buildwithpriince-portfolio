import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { files } from '../content/files'

/*
 * Per-file URLs (SPEC §7). Decided so a single file can be linked to
 * directly and so the Open Graph tags in §10 have something to point at.
 *
 * The slug is the address, not the FILE number. Numbers are derived from
 * position (content/files.ts), so /file/003 would silently come to mean a
 * different project the first time the archive gains an entry out of order.
 * A shared link has to survive that; the displayed number does not.
 *
 * History API only — no router dependency for six records.
 */

const PREFIX = '/file/'

/** Marks entries this module pushed, so we never pop one we did not create. */
type FileHistoryState = { fileRoute: true; slug: string | null }

export const filePath = (slug: string) => `${PREFIX}${encodeURIComponent(slug)}`

/** The file a pathname names, or null. An unknown slug reads as no file. */
export function slugFromPath(pathname: string): string | null {
  if (!pathname.startsWith(PREFIX)) return null
  const slug = decodeURIComponent(pathname.slice(PREFIX.length)).replace(/\/+$/, '')
  return files.some((file) => file.slug === slug) ? slug : null
}

/** True for a click the browser should handle itself — new tab, new window. */
export function isPlainClick(event: MouseEvent): boolean {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
}

export function useFileRoute() {
  /*
   * Read from the URL during the first render, not in an effect, so a direct
   * link paints the opened file straight away instead of flashing the index.
   */
  const [slug, setSlug] = useState<string | null>(() => slugFromPath(window.location.pathname))

  useEffect(() => {
    const landed = slugFromPath(window.location.pathname)
    if (!landed) return

    /*
     * Someone opened a file link cold, so there is no archive entry behind it
     * and Back would leave the site. Synthesise one: replace this entry with
     * the index, then push the file on top.
     *
     * The state flag also makes this idempotent, which matters because
     * StrictMode runs effects twice in development and two pushes would put
     * a dead entry in the user's history.
     */
    const state = window.history.state as FileHistoryState | null
    if (state?.fileRoute) return

    const index: FileHistoryState = { fileRoute: true, slug: null }
    const file: FileHistoryState = { fileRoute: true, slug: landed }
    window.history.replaceState(index, '', '/')
    window.history.pushState(file, '', filePath(landed))
  }, [])

  useEffect(() => {
    const onPopState = () => setSlug(slugFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const open = useCallback((next: string) => {
    const state: FileHistoryState = { fileRoute: true, slug: next }
    window.history.pushState(state, '', filePath(next))
    setSlug(next)
  }, [])

  /*
   * Closing pops rather than pushing, so Escape, the close button and the
   * Back button are literally the same operation and the history does not
   * grow an entry every time a file is glanced at. Safe because every open
   * pushed an entry, and a cold landing had one synthesised above.
   */
  const close = useCallback(() => {
    window.history.back()
  }, [])

  return { slug, open, close }
}
