import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import useCardSpotlight from './hooks/useCardSpotlight'

/**
 * The browser only scrolls to a #hash when it is present on the initial load.
 * A click on an anchor the browser is already showing, or a hash arriving with
 * a client-side route change, does not scroll on its own, so it is done by hand
 * once the target exists.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // The target mounts with the route, so wait a frame before looking for it.
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(hash.slice(1))
      if (!el) return
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

/**
 * Everything inside the router. The router itself is supplied by the entry
 * point — BrowserRouter in the browser, StaticRouter when prerendering — so
 * the same tree renders in both.
 */
export default function App() {
  useCardSpotlight()

  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Anything else falls back to the landing page. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
