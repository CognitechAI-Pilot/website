import { pricingPurpose } from '../data/site'

export default function Pricing({ onSelectPurpose }) {
  const tierCta =
    'w-full py-3.5 mt-8 rounded-xl text-xs font-bold text-center transition-all block'

  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
          PRICING MODEL
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Digital Co-Worker Pricing</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Transparent, modular engagement tiers designed to scale alongside your organization&rsquo;s AI maturity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="glow-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">AI Strategy Readiness &amp; Digital Co-Worker PoC</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              De-risk AI adoption with an upfront strategic readiness assessment and a targeted, high-impact Digital
              Co-Worker prototype.
            </p>

            <div className="mb-6">
              <span className="text-4xl font-black text-white">$15,000</span>
              <span className="text-xs font-mono text-slate-500 block mt-1">Scoped per sprint / prototype</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-blue-400"></i>
                <span>AI Strategy Readiness Assessment (Phase 1)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-blue-400"></i>
                <span>Single Digital Co-Worker Proof of Concept (PoC)</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <p className="text-[11px] text-slate-500 italic leading-snug">
                * Note: $15,000 Design &amp; PoC sprints assume customer platform interoperability and baseline
                repository readiness. Enterprise-ready production deployments are custom scoped via Statement of
                Work. Prices are in NZD and exclude GST.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => onSelectPurpose(pricingPurpose.poc)}
            className={`${tierCta} bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white`}
          >
            Start a PoC
          </a>
        </div>

        {/* Tier 2 */}
        <div className="glow-card-active p-8 rounded-3xl relative flex flex-col justify-between active-pulse">
          <span className="absolute -top-3 right-8 bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Sovereign &amp; Autonomous
          </span>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Sovereign, Self-Improving Digital Co-Worker</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Persistent, cross-session aware autonomous digital co-worker engineered for full production deployment.
            </p>

            <div className="mb-6">
              <span className="text-2xl sm:text-3xl font-black text-blue-300 block leading-tight">
                Statement of Work (SoW)
              </span>
              <span className="text-xs font-mono text-slate-400 block mt-1">
                Custom scoped per enterprise role and requirements
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-200 border-t border-slate-800 pt-6">
              {[
                '100% Onshore Sovereign AI Infrastructure (data remains in New Zealand)',
                'Cross-Session Institutional Memory (Retains Enterprise Context Across Teams)',
                'High-Speed Historical Search & Recall (SQLite FTS5 Log Querying)',
                'Self-Improving Operational Capabilities (Auto-Synthesizes Standardized Workflows)',
                'Zero-Trust Sandboxed Execution & Continuous Model Fine-Tuning'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <i className="fa-solid fa-check text-blue-400 mt-0.5"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            onClick={() => onSelectPurpose(pricingPurpose.sovereign)}
            className={`${tierCta} bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30`}
          >
            Inquire for Statement of Work
          </a>
        </div>

        {/* Tier 3 */}
        <div className="glow-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/40 transition-all">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Digital Co-Worker Support Retainer</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Continuous engineering maintenance, model fine-tuning, and long-term capability transfer.
            </p>

            <div className="mb-6">
              <span className="text-4xl font-black text-white">$500</span>
              <span className="text-xs font-mono text-slate-500 block mt-1">Starting base support plan / month</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
              {[
                'Base operational monitoring & incident triage',
                'Continuous model tuning & prompt optimization',
                'Ongoing security & compliance boundary audits',
                'Dedicated delivery capacity & capability handover'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <i className="fa-solid fa-check text-blue-400"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            onClick={() => onSelectPurpose(pricingPurpose.retainer)}
            className={`${tierCta} bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white`}
          >
            Inquire for Retainer
          </a>
        </div>
      </div>
    </section>
  )
}
