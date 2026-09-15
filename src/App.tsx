import { Capability } from './sections/Capability'
import { Correspondence } from './sections/Correspondence'
import { FileIndex } from './sections/FileIndex'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Statement } from './sections/Statement'
import { Subject } from './sections/Subject'

/*
 * Page order (SPEC §5). 00 COVER, the entry sequence, is step 4 and not
 * rendered here; the hero must already be in place underneath it.
 */
export function App() {
  return (
    <>
      <main>
        <Hero />
        <FileIndex />
        <Statement />
        <Subject />
        <Capability />
        <Correspondence />
      </main>
      <Footer />
    </>
  )
}
