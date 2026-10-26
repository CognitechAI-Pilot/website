import { gapColumns, workflowContrast } from '../data/architecture'
import Icon from './Icon'

/**
 * A bullet's emphasised lead-in, which in one case carries an inline <code>
 * span. Parts are rendered in order so the markup stays in the data file
 * instead of forcing a second component.
 */
function RichText({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>
    if (part.code) return <code key={i} className="text-cyan-300 font-mono">{part.code}</code>
    return <strong key={i} className="text-white">{part.strong}</strong>
  })
}

/**
 * "The Enterprise AI Gap" — three contrast columns plus the before/after
 * workflow banner. Nested inside the About section so the anchor lands under
 * the About Us nav dropdown.
 */
export default function EnterpriseGap() {
  return (
    <div id="enterprise-gap" className="mt-20 pt-16 border-t border-slate-800/70 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-widest">
          THE ENTERPRISE AI GAP
        </span>
        <h3 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-3">
          Why Generic Chatbots &amp; Coding Plugins Stall in Enterprise Delivery
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Off-the-shelf chat seats and developer CLI plugins are built for isolated prompts or individual
          coders&mdash;not governed, multi-system functional roles. Here is how a{' '}
          <strong className="text-white">Dedicated Co-Worker Runtime</strong> differs from commodity subscriptions:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-stretch">
        {gapColumns.map((column) => (
          <div key={column.title} className={`glow-card p-6 rounded-3xl flex flex-col justify-between ${column.cardClass}`}>
            <div>
              <div className={`flex items-center justify-between gap-2 pb-4 mb-4 border-b ${column.headClass}`}>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block ${column.eyebrowClass}`}>
                    {column.eyebrow}
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">{column.title}</h4>
                  <span className={`text-[11px] font-mono block mt-1 ${column.examplesClass}`}>{column.examples}</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-200">
                {column.points.map((point) => (
                  <li key={point.title ?? point.titleParts[0]} className="flex items-start gap-2.5">
                    <Icon name={column.icon} className={`${column.iconClass} mt-1 flex-shrink-0`} />
                    <div>
                      <strong className="text-white block">
                        {point.titleParts ? <RichText parts={point.titleParts} /> : point.title}
                      </strong>
                      <span className="text-slate-200 text-[11px]">
                        {point.bodyParts ? <RichText parts={point.bodyParts} /> : point.body}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`mt-6 pt-3 border-t text-[11px] font-mono flex items-start gap-1.5 ${column.footClass}`}>
              <Icon name={column.footIcon} className="text-[10px] mt-0.5 flex-shrink-0" />
              <span>{column.foot}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="glow-card px-6 py-5 rounded-2xl border border-slate-800/90 bg-slate-950/95 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {workflowContrast.map((side, i) => (
            <div
              key={side.title}
              className={`flex items-start gap-3 ${i === 1 ? 'lg:border-l lg:border-slate-800 lg:pl-6' : ''}`}
            >
              <Icon name={side.icon} className={`${side.iconClass} text-sm mt-1 flex-shrink-0`} />
              <div className="text-xs font-mono leading-relaxed">
                <strong className="text-white">{side.title}</strong>
                <span className={side.bodyClass}>{side.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
