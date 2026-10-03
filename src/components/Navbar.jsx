import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/site'

/**
 * Anchor links in the nav are written for the home page. When the nav is shown
 * on another route, they have to carry the route with them, so "#about"
 * becomes "/#about".
 */
function resolveHref(href, onHome) {
  return onHome ? href : `/${href}`
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const onHome = useLocation().pathname === '/'

  // Close the open dropdown on outside click or Escape.
  useEffect(() => {
    if (openDropdown === null) return
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenDropdown(null)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenDropdown(null)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openDropdown])

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeAll = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  const itemClass = 'block px-4 py-2.5 rounded-xl text-xs hover:bg-slate-800 text-slate-300 hover:text-white transition-all normal-case'

  // A dropdown entry is either a route change (`to`) or an anchor (`href`).
  const renderChild = (child) =>
    child.to ? (
      <Link key={child.to} to={child.to} onClick={closeAll} className={itemClass}>
        {child.label}
      </Link>
    ) : (
      <a key={child.href} href={resolveHref(child.href, onHome)} onClick={closeAll} className={itemClass}>
        {child.label}
      </a>
    )

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[#121B2B]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" onClick={closeAll} className="flex items-center gap-3">
          {/* Steps down below 360px so the longer wordmark cannot wrap into the CTA. */}
          <span className="text-white font-extrabold text-2xl max-[359px]:text-xl tracking-tight leading-none whitespace-nowrap">
            Cognitech AI
          </span>
        </Link>

        {/* Desktop navigation. Six top-level entries need the xl breakpoint. */}
        <div className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  aria-expanded={openDropdown === link.label}
                  aria-haspopup="true"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-2 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <span>{link.label}</span>
                  <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}></i>
                </button>

                {openDropdown === link.label && (
                  <div className={`absolute left-0 top-full ${link.width} bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-xl`}>
                    {link.children.map(renderChild)}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.href} href={resolveHref(link.href, onHome)} onClick={closeAll} className="hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resolveHref('#contact', onHome)}
            onClick={closeAll}
            className="px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-600/20"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden w-10 h-10 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors flex items-center justify-center"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div id="mobile-menu" className="xl:hidden border-t border-slate-800 bg-[#121B2B] max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    aria-expanded={openDropdown === link.label}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}></i>
                  </button>

                  {openDropdown === link.label && (
                    <div className="mt-1 ml-3 pl-3 border-l border-slate-800 space-y-1">
                      {link.children.map(renderChild)}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={resolveHref(link.href, onHome)}
                  onClick={closeAll}
                  className="block px-3 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
