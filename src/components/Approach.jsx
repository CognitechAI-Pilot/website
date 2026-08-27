import { phases } from '../data/site'

export default function Approach() {
  return (
    <section id="approach" className="py-16 max-w-7xl mx-auto px-6 border-t border-gray-800">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-agentic bg-blue-950/50 border border-blue-900 px-3 py-1 rounded-full">
          Methodology
        </span>
        <h2 className="text-3xl font-bold text-white mt-4 mb-3">Our Approach</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A disciplined, end-to-end framework designed to integrate enterprise AI directly into your business DNA.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {phases.map((phase) => (
          <div
            key={phase.phase}
            className="bg-card-dark border border-gray-800 rounded-xl p-8 relative flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-bold text-agentic uppercase tracking-wider mb-2">{phase.phase}</div>
              <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{phase.body}</p>
            </div>
            <div className="text-xs text-gray-500 font-medium pt-4 border-t border-gray-800/50 flex items-center gap-2">
              <i className={`fas ${phase.icon} text-agentic`}></i> {phase.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
