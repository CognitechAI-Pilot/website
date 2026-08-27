import { useState } from 'react'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-card-dark border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none mr-1"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
            <div className="w-8 h-8 bg-agentic rounded-lg flex items-center justify-center">
              <i className="fas fa-brain text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Cognitech</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-400 hover:text-agentic transition">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-agentic text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-sm text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-2 border-t border-gray-800 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2.5 text-sm text-gray-400 hover:text-agentic transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mx-2 mt-2 bg-agentic text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
