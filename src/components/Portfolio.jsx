import { portfolioRoles } from '../data/portfolio'

/**
 * The four-up Co-Worker role grid. Only the Technology BA role has a shipped
 * case study, so it is the only card carrying a "View Case Study" link — the
 * other three are roadmap roles and are not yet clickable.
 */
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
          ROLE-BASED BLUEPRINTS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Co-Workers Portfolio</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Proven role blueprints and active engineering roadmaps deployed across key enterprise sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {portfolioRoles.map((role) => (
          <div
            key={role.id}
            id={role.id}
            className={`glow-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between transition-all ${
              role.status === 'pov' ? 'customer-tab-active' : ''
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${role.iconClass}`}>
                  <i className={`fa-solid ${role.icon} text-base`}></i>
                </div>
                {role.status === 'pov' ? (
                  <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>PoV</span>
                  </span>
                ) : (
                  <span className="text-[9px] font-mono text-amber-400 uppercase font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <i className="fa-solid fa-compass text-[8px]"></i>
                    <span>ROADMAP</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{role.title}</h3>
                <p className="text-xs text-slate-400 leading-snug">{role.blurb}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <span className={`text-[10px] font-mono font-bold uppercase block tracking-wider ${role.labelClass}`}>
                  Capabilities
                </span>
                <ul className="space-y-2 text-slate-300 text-[11px]">
                  {role.capabilities.map((cap) => (
                    <li key={cap.strong} className="flex items-start gap-1.5">
                      <i className={`fa-solid fa-check text-[10px] mt-0.5 ${role.checkClass}`}></i>
                      <span>
                        <strong className="text-white">{cap.strong}</strong> {cap.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1.5">
                  Industry Verticals
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.verticals.map((v) => (
                    <span
                      key={v.label}
                      className={`px-2 py-0.5 rounded-md text-[10px] border ${
                        v.primary ? `${v.class} font-semibold` : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      {v.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {role.caseStudyHref && (
              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <a
                  href={role.caseStudyHref}
                  className="text-[11px] font-bold text-blue-400 flex items-center justify-between hover:text-blue-300 transition-colors"
                >
                  <span>View Case Study</span>
                  <i className="fa-solid fa-arrow-down text-[10px]"></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
