import { archCapabilities, archSilos } from '../data/architecture'
import SecurityPosture from './SecurityPosture'
import Icon from './Icon'

/**
 * The Co-Worker architecture diagram.
 *
 * Desktop (lg and up): the Human Analyst Workspace sits directly above the
 * Runtime Harness in the left 8 columns, and the Decoupled LLM Engine docks
 * horizontally to its right in the remaining 4. Below lg everything stacks in
 * one column, and the connectors swap to vertical so no card is squeezed.
 *
 * The connectors are decorative SVG, hidden from assistive technology — the
 * relationships they draw are already stated in the node copy. Their dash
 * animation stops under prefers-reduced-motion.
 */
export default function CoWorkerArchitecture() {
  return (
    <div id="architecture-blueprint" className="scroll-mt-24 pt-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold uppercase tracking-widest">
          SOVEREIGN CO-WORKER ARCHITECTURE
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-3">
          How the Cognitech Co-Worker Runtime Works
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Deployed in Cognitech Managed Cloud or directly inside your own sovereign cloud tenant. Our sealed runtime
          harness decouples your institutional IP and workflow logic from underlying LLM providers and external SaaS
          silos.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800/90 bg-[#070B14] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg opacity-60 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          {/* Top row: the workspace, sitting over the harness on desktop */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-center">
              <div className="w-full max-w-md rounded-2xl bg-[#0D1322] border border-slate-800 p-5 text-center shadow-lg hover:border-blue-500/50 transition-all">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                  <Icon name="comments" className="text-sm" />
                </div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  HUMAN ANALYST WORKSPACE
                </span>
                <span className="text-[11px] font-mono text-slate-300 block mt-1">
                  MS Teams &middot; Slack &middot; 1-Click HITL Approval Cards
                </span>
              </div>

              <div className="w-8 h-10 sm:h-12 relative" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 32 48" fill="none" preserveAspectRatio="none" focusable="false">
                  <path d="M16 0 L16 48" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="2" />
                  <path d="M16 0 L16 48" stroke="#38bdf8" strokeWidth="2" className="flow-line" />
                </svg>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4"></div>
          </div>

          {/* Middle row: the harness, with the LLM engine docked to its right */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 rounded-2xl bg-[#0D1424] border-2 border-emerald-500/50 p-6 sm:p-7 shadow-[0_0_50px_rgba(16,185,129,0.12)] relative">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/90 text-center sm:text-left">
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

              <p className="text-center text-xs font-mono text-slate-300 mb-5">
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
                      <span className="text-[10px] text-slate-300">{cap.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:flex-row items-center w-full">
              {/* Below lg the engine stacks underneath, so the link turns vertical */}
              <div className="lg:hidden flex flex-col items-center py-1" aria-hidden="true">
                <svg className="w-8 h-10" viewBox="0 0 32 40" fill="none" focusable="false">
                  <path d="M16 0 L16 40" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="2" />
                  <path d="M16 0 L16 40" stroke="#c084fc" strokeWidth="2" className="flow-line" />
                </svg>
              </div>

              <div className="hidden lg:flex items-center justify-center w-14 flex-shrink-0" aria-hidden="true">
                <svg className="w-full h-6" viewBox="0 0 56 24" fill="none" focusable="false">
                  <path d="M0 12 L56 12" stroke="rgba(192, 132, 252, 0.28)" strokeWidth="2" />
                  <path d="M0 12 L56 12" stroke="#c084fc" strokeWidth="2" className="flow-line" />
                </svg>
              </div>

              <div className="w-full max-w-md lg:max-w-none rounded-2xl bg-[#0D1322] border-2 border-purple-500/40 p-5 text-center shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:border-purple-400/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 flex items-center justify-center mx-auto mb-2.5">
                  <Icon name="microchip" className="text-sm" />
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-[9px] font-mono text-purple-300 font-bold uppercase inline-block mb-1.5">
                  MODULAR &amp; SWAPPABLE
                </span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  DECOUPLED LLM ENGINE
                </span>
                <span className="text-[11px] font-mono text-slate-300 block mt-1.5 leading-relaxed">
                  Claude Bedrock &middot; Azure OpenAI &middot; Sovereign Local Models
                </span>
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[10px] font-mono text-purple-300 flex items-center justify-center gap-1.5">
                  {/* The mockup asks for fa-shield-check, which is Pro-only. */}
                  <Icon name="shield-halved" className="text-[10px]" />
                  <span>Zero Vendor Lock-In &middot; Zero Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Harness out to the four silos. The desktop curves start under the
              8-column harness (x=333); below lg everything is centred (x=500). */}
          <div className="w-full h-14 sm:h-16 relative" aria-hidden="true">
            <svg className="hidden lg:block w-full h-full" viewBox="0 0 1000 64" fill="none" preserveAspectRatio="none" focusable="false">
              <path d="M333 0 C333 32, 125 32, 125 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M333 0 C333 32, 375 32, 375 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M333 0 C333 32, 625 32, 625 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M333 0 C333 32, 875 32, 875 64" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="2" />
              <path d="M333 0 C333 32, 125 32, 125 64" stroke="#10b981" strokeWidth="2" className="flow-line-slow" />
              <path d="M333 0 C333 32, 375 32, 375 64" stroke="#10b981" strokeWidth="2" className="flow-line" />
              <path d="M333 0 C333 32, 625 32, 625 64" stroke="#10b981" strokeWidth="2" className="flow-line" />
              <path d="M333 0 C333 32, 875 32, 875 64" stroke="#10b981" strokeWidth="2" className="flow-line-slow" />
            </svg>
            <svg className="lg:hidden w-full h-full" viewBox="0 0 1000 64" fill="none" preserveAspectRatio="none" focusable="false">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {archSilos.map((silo) => (
              <div
                key={silo.title}
                className="rounded-2xl bg-[#0D1322] border border-slate-800 p-5 text-center hover:border-emerald-500/40 transition-all"
              >
                <Icon name={silo.icon} className="text-slate-200 text-base mb-2.5 block mx-auto" />
                <h4 className="text-sm font-bold text-white mb-1">{silo.title}</h4>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block">
                  {silo.systems}
                </span>
                <span className={`inline-block mt-2.5 px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono border border-slate-700 ${silo.badgeClass}`}>
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
