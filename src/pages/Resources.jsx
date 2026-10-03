import { Link } from 'react-router-dom'
import ArchitectureBlueprint from '../components/ArchitectureBlueprint'

export default function Resources() {
  return (
    <>
      <main>
        <section id="blueprint" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10 mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ENTERPRISE REFERENCE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Digital Co-Worker Blueprint</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
              A universal reference blueprint illustrating how Cognitech AI&rsquo;s Digital Co-Worker engine integrates
              with existing enterprise identity, data systems, and interchangeable cloud or onshore infrastructure.
            </p>
          </div>

          <ArchitectureBlueprint />
        </section>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs text-slate-500">
            <p>&copy; 2026 Cognitech Limited. Governed Co-Workers for Enterprise Productivity.</p>
            <div className="mt-4">
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                &larr; Return to Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
