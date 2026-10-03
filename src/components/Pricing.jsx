import { useEffect, useRef } from 'react'
import { pricingTiers } from '../data/portfolio'
import { pricingPurpose } from '../data/site'

/**
 * The three commercial tiers, one per engagement phase. All three use the same
 * glow-card treatment — the mockup gives tier 2 no special background, so it
 * reads identically to tiers 1 and 3 until a phase card highlights it.
 */
export default function Pricing({ onSelectPurpose, highlightedTier }) {
  const cardRefs = useRef({})

  // Scroll the highlighted tier into view when an engagement phase selects it.
  useEffect(() => {
    if (!highlightedTier) return
    const el = cardRefs.current[highlightedTier]
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' })
  }, [highlightedTier])

  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
          PRICING MODEL
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Co-Worker Pricing</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Transparent, modular engagement tiers aligned with the 3 phases of our delivery process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <div
            key={tier.tier}
            id={`pricing-tier-${tier.tier}`}
            ref={(el) => { cardRefs.current[tier.tier] = el }}
            className={`glow-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between transition-all ${
              highlightedTier === tier.tier ? 'tier-highlight' : ''
            }`}
          >
            <div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${tier.phaseClass}`}>
                {tier.phase}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{tier.blurb}</p>

              <div className="mb-6">
                <span className={tier.priceClass}>{tier.price}</span>
                <span className="text-xs font-mono text-slate-500 block mt-1">{tier.priceNote}</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2.5">
                    <i className="fa-solid fa-check text-blue-400 mt-0.5"></i>
                    <span className={feature.bold ? 'font-semibold text-white' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => onSelectPurpose(pricingPurpose[tier.tier])}
              className="w-full py-3.5 mt-8 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold text-center transition-all block"
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
