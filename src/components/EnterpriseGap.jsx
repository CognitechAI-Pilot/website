import { gapRows } from '../data/architecture'
import Icon from './Icon'

/** A resolution whose copy carries an inline <code> span. */
function RichText({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string'
      ? <span key={i}>{part}</span>
      : <code key={i} className="text-cyan-300 font-mono text-xs">{part.code}</code>
  )
}

/**
 * "The Enterprise AI Gap" — one card pairing each incumbent friction with the
 * Co-Worker resolution. The arrows between the two columns are decorative; the
 * column headers carry the direction for anyone not seeing them.
 *
 * Nested inside the About section so the anchor lands under the About Us nav
 * dropdown.
 */
export default function EnterpriseGap() {
  return (
    <div id="enterprise-gap" className="mt-20 pt-16 border-t border-slate-800/70 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest">
          THE ENTERPRISE AI GAP
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-3">Co-Worker Advantage</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The governed digital co-worker resolves the core limitations of commodity AI chat seats and developer CLI
          plugins.
        </p>
      </div>

      <div className="glow-card rounded-3xl border border-slate-800/90 bg-slate-950/90 overflow-hidden mb-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-800 bg-slate-900/70 px-6 py-4 gap-2 items-center">
          <div className="lg:col-span-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
              Incumbent AI Friction (Chatbots &amp; CLI Plugins)
            </span>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-center text-slate-400 font-mono text-xs" aria-hidden="true">
            &rarr;
          </div>
          <div className="lg:col-span-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
              Cognitech Co-Worker Resolution
            </span>
          </div>
        </div>

        <div className="divide-y divide-slate-800/70 text-xs sm:text-sm">
          {gapRows.map((row) => (
            <div
              key={row.friction}
              className="grid grid-cols-1 lg:grid-cols-12 px-6 py-3.5 items-center gap-2 hover:bg-slate-900/40 transition-colors"
            >
              <div className="lg:col-span-5 flex items-center gap-2.5 text-slate-200">
                <Icon name="xmark" className="text-rose-400 w-4 text-center flex-shrink-0" />
                <span className="font-semibold">{row.friction}</span>
              </div>
              <div className="hidden lg:flex lg:col-span-1 justify-center text-blue-400 font-mono" aria-hidden="true">
                &rarr;
              </div>
              <div className="lg:col-span-6 flex items-center gap-2.5 text-white font-bold">
                <Icon name="circle-check" className="text-emerald-400 w-4 text-center flex-shrink-0" />
                <span>{row.resolutionParts ? <RichText parts={row.resolutionParts} /> : row.resolution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
