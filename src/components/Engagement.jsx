import { engagementPhases } from '../data/portfolio'

/**
 * The three delivery phases. Clicking a phase scrolls to the matching pricing
 * tier and highlights it — the mockup did this with an inline
 * onclick="highlightPricingTier(n)"; here the selected tier is state owned by
 * the page and read by both this section and Pricing.
 */
export default function Engagement({ onSelectTier }) {
  return (
    <section id="engagement" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-2">
          DELIVERY FRAMEWORK
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Our Engagement Process</h2>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          A balanced execution roadmap delivering immediate, practical value upfront while establishing a transparent
          path to production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {engagementPhases.map((phase) => (
          <button
            key={phase.id}
            id={phase.id}
            type="button"
            onClick={() => onSelectTier(phase.tier)}
            aria-label={`${phase.title} — show the matching pricing tier`}
            className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between text-left cursor-pointer hover:border-blue-500/50 transition-all shadow-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-black text-sm ${phase.badgeClass}`}>
                  {phase.badge}
                </span>
                <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${phase.stageClass}`}>
                  {phase.stage}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">{phase.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{phase.body}</p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className={`text-[11px] font-mono flex items-center gap-1.5 transition-colors ${phase.linkClass}`}>
                <span>{phase.link}</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
