import { useCallback, useState } from 'react'
import { Cursor } from './components/Cursor'
import { Grain } from './components/Grain'
import { shouldPlayEntry } from './lib/entry'
import { useSmoothScroll } from './lib/smoothScroll'
import { Capability } from './sections/Capability'
import { Correspondence } from './sections/Correspondence'
import { Cover } from './sections/Cover'
import { FileIndex } from './sections/FileIndex'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Statement } from './sections/Statement'
import { Subject } from './sections/Subject'

/*
 * Page order (SPEC §5). 00 COVER, the entry sequence, lies over the page
 * rather than in front of it: everything below renders in the same paint,
 * and the hero is already in place underneath when the cover lifts (§6).
 */
export function App() {
  const [entry, setEntry] = useState(shouldPlayEntry)
  const endEntry = useCallback(() => setEntry(false), [])
  useSmoothScroll()

  return (
    <>
      {entry && <Cover onDone={endEntry} />}
      <main>
        <Hero drawName={entry} />
        <FileIndex />
        <Statement />
        <Subject />
        <Capability />
        <Correspondence />
      </main>
      <Footer />
      <Grain />
      <Cursor />
    </>
  )
}
