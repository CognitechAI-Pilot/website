import { useEffect } from 'react'

/**
 * The mockup's "Motion-Primitives Inspired" cursor spotlight: a soft radial
 * highlight that follows the pointer across each .glow-card.
 *
 * The mockup drove this from a global mousemove that measured every card on
 * the page on every event — 26 forced layout reads per move. This listens once
 * on the document, resolves the card under the pointer with closest(), and
 * writes the two CSS variables inside a single rAF, so a move costs one
 * measurement regardless of how many cards are mounted.
 *
 * Skipped entirely for coarse pointers (there is no hover to track) and when
 * the visitor prefers reduced motion.
 */
export default function useCardSpotlight() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    if (reduced.matches || coarse.matches) return

    let frame = 0
    let pending = null

    const paint = () => {
      frame = 0
      if (!pending) return
      const { card, x, y } = pending
      pending = null
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }

    const onPointerMove = (event) => {
      const card = event.target.closest?.('.glow-card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      pending = { card, x: event.clientX - rect.left, y: event.clientY - rect.top }
      if (!frame) frame = requestAnimationFrame(paint)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
