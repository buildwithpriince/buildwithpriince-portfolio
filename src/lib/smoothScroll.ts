import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/*
 * The global motion layer (SPEC-EXPERIENCE §6): Lenis smooth scroll, driven
 * by the GSAP ticker so that scroll position and every ScrollTrigger read
 * the same frame. Section choreography arrives with the steps that need it;
 * this only sets up the clock they will share.
 *
 * Off under reduced motion — native scrolling, no smoothing (§7).
 *
 * Nested scrollers opt out with data-lenis-prevent (the file-open does).
 */

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ autoRaf: false })
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (seconds: number) => lenis.raf(seconds * 1000)
    gsap.ticker.add(tick)
    /* Lag smoothing would make the scroll jump after a long frame. */
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])
}
