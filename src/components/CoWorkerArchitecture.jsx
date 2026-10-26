import { archCapabilities, archSilos, archTopNodes } from '../data/architecture'
import SecurityPosture from './SecurityPosture'
import Icon from './Icon'

const NODE = 'rounded-2xl bg-[#0D1322] border border-slate-800 p-5 text-center shadow-lg transition-all'

/**
 * The simplified Co-Worker architecture diagram: the human workspace and the
 * LLM router feeding a central runtime harness, which in turn reaches four
 * enterprise silos over the MCP bus.
 *
 * The connector curves are decorative SVG, hidden from assistive tech — the
 * relationships they draw are already stated in the node copy above and below
 * them. Their dash animation is disabled under prefers-reduced-motion.
 */
export default function CoWorkerArchitecture() {
  return (
    <div id="architecture-blueprint" className="scroll-mt-24 pt-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono font-bold uppercase tracking-widest">
          SOVEREIGN CO-WORKER ARCHITECTURE
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-3">
          How the Cognitech Co-Worker Runtime Works
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Deployed in Cognitech Managed Cloud or directly inside your own sovereign cloud tenant. Our sealed runtime
          harness decouples your institutional IP and workflow logic from underlying LLM providers and external SaaS
          silos.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800/90 bg-[#070B14] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg opacity-60 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Top row: the interface and the model router */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {archTopNodes.map((node) => (
              <div key={node.title} className={`${NODE} ${node.hoverClass}`}>
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mx-auto mb-2.5 ${node.iconClass}`}>
                  <Icon name={node.icon} className="text-sm" />
                </div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  {node.title}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block mt-1">{node.subtitle}</span>
              </div>
            ))}
          </div>

          {/* Top nodes into the runtime */}
          <div className="w-full max-w-3xl h-12 sm:h-14 relative">
            <svg className="w-full h-full" viewBox="0 0 800 56" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M200 0 C200 28, 380 28, 380 56" stroke="rgba(59, 130, 246, 0.22)" strokeWidth="2" />
              <path d="M600 0 C600 28, 420 28, 420 56" stroke="rgba(168, 85, 247, 0.22)" strokeWidth="2" />
              <path d="M200 0 C200 28, 380 28, 380 56" stroke="#38bdf8" strokeWidth="2" className="flow-line" />
              <path d="M600 0 C600 28, 420 28, 420 56" stroke="#c084fc" strokeWidth="2" className="flow-line" />
            </svg>
          </div>

          {/* Centre hub: the runtime and policy harness */}
          <div className="w-full max-w-2xl rounded-2xl bg-[#0D1424] border-2 border-emerald-500/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.12)] relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800/90 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wider uppercase">
                  COGNITECH CO-WORKER RUNTIME HARNESS
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold uppercase flex-shrink-0">
                Client In-Tenant or Managed Cloud
              </span>
            </div>

            <p className="text-center text-xs font-mono text-slate-400 mb-5">
              Isolated Per-User Runtime &middot; Operational Policy Layer &middot; Universal MCP &amp; API Bus
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {archCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className={`px-4 py-3 rounded-xl bg-[#080D1A] border border-slate-800 flex items-center gap-3 transition-colors ${cap.hoverClass}`}
                >
                  <Icon name={cap.icon} className={`${cap.iconClass} text-xs flex-shrink-0`} />
                  <div>
                    <span className="text-white font-bold block text-[11px] uppercase tracking-wider">{cap.title}</span>
                    <span className="text-[10px] text-slate-400">{cap.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Runtime out to the four silos */}
          <div className="w-full h-14 sm:h-16 relative">
            <svg className="w-full h-full" viewBox="0 0 1000 64" fill="none" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M500 0 C500 32, 125 32, 125 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M500 0 C500 32, 375 32, 375 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M500 0 C500 32, 625 32, 625 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M500 0 C500 32, 875 32, 875 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M500 0 C500 32, 125 32, 125 64" stroke="#10b981" strokeWidth="2" className="flow-line-slow" />
              <path d="M500 0 C500 32, 375 32, 375 64" stroke="#10b981" strokeWidth="2" className="flow-line" />
              <path d="M500 0 C500 32, 625 32, 625 64" stroke="#10b981" strokeWidth="2" className="flow-line" />
              <path d="M500 0 C500 32, 875 32, 875 64" stroke="#10b981" strokeWidth="2" className="flow-line-slow" />
            </svg>
          </div>

          {/* Bottom row: the enterprise silos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {archSilos.map((silo) => (
              <div
                key={silo.title}
                className="rounded-2xl bg-[#0D1322] border border-slate-800 p-5 text-center hover:border-emerald-500/40 transition-all"
              >
                <Icon name={silo.icon} className="text-slate-300 text-base mb-2.5 block" />
                <h5 className="text-sm font-bold text-white mb-1">{silo.title}</h5>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {silo.systems}
                </span>
                <span className={`inline-block mt-2.5 px-2 py-0.5 rounded bg-slate-900 text-[9px] font-mono border border-slate-800 ${silo.badgeClass}`}>
                  {silo.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SecurityPosture />
    </div>
  )
}
