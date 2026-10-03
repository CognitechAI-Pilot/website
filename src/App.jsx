import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resources from './pages/Resources'

/**
 * The browser only scrolls to a #hash when it is present on the initial load.
 * Navigating from, say, the home page to /resources#blueprint is a client-side
 * route change, so the scroll has to be done by hand once the target exists.
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        {/* Anything else falls back to the landing page. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
