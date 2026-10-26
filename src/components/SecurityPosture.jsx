import { useState } from 'react'
import { securityPosture } from '../data/architecture'

/**
 * Renders a claim built from parts, so the emphasis and the inline <code> span
 * stay in the data file rather than being split across four components.
 */
function RichText({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>
    if (part.code) return <code key={i} className="text-cyan-300 font-mono">{part.code}</code>
    return <strong key={i} className="text-white">{part.strong}</strong>
  })
}

/**
 * The sovereignty, security and compliance posture — what a CISO asks for
 * before anything else. Collapsed by default so it does not interrupt the
 * narrative, and unmounted while collapsed so screen readers skip it.
 */
export default function SecurityPosture() {
  const [open, setOpen] = useState(false)

  return (
    <div id="trust-security" className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 overflow-hidden shadow-xl scroll-mt-24">
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls="security-posture-drawer"
        className="w-full px-6 py-4 flex items-center justify-between gap-3 text-left hover:bg-slate-900/60 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-200 group-hover:text-white">
          <i className="fa-solid fa-shield-halved text-emerald-400 flex-shrink-0" aria-hidden="true"></i>
          <span>
            Sovereignty, Security &amp; Compliance Posture (Data Residency, Zero-Training &amp; GCDO Responsible AI
            Alignment)
          </span>
        </span>
        <span className="text-xs font-mono text-emerald-300 flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
          <span>{open ? 'Collapse' : 'Expand'}</span>
          <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true"></i>
        </span>
      </button>

      {open && (
        <div id="security-posture-drawer" className="fade-in border-t border-slate-800/60">
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs text-slate-200 leading-relaxed">
            {securityPosture.map((pillar) => (
              <div key={pillar.title} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-2">
                  <i className={`fa-solid ${pillar.icon} ${pillar.iconClass} text-sm flex-shrink-0`} aria-hidden="true"></i>
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                </div>
                <p>
                  <RichText parts={pillar.bodyParts} />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
