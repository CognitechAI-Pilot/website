// Hosted on Vercel Blob rather than committed to the repo. The %20s are
// required: the blob key contains spaces, so an unencoded URL would 404.
const BA_DEMO_VIDEO =
  'https://ijgegdmg6x19waqf.public.blob.vercel-storage.com/Extended%20BA%20Digital%20Co-Worker.mp4'

const METRICS = [
  {
    value: '< 5 Mins',
    gradient: 'from-blue-400 to-cyan-300',
    title: 'Current-State Discovery',
    text: 'Reduced from 10–15 manual days down to seconds using AST code vector search.'
  },
  {
    value: '100%',
    gradient: 'from-emerald-400 to-teal-300',
    title: 'Human-Gated Write Security',
    text: 'Jira user story creations require explicit human BA confirmation inside Teams.'
  },
  {
    value: '0%',
    gradient: 'from-purple-400 to-pink-300',
    title: 'Raw Repo Write Access',
    text: 'Source code is vectorized externally; agents never hold direct code edit rights.'
  }
]

/**
 * A static showcase of the one shipped case study. This replaced a swappable
 * four-role section; the other three roles are roadmap only, so there is
 * nothing to swap between.
 */
export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 fade-in">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
              NATIONAL LOGISTICS &amp; POSTAL CASE STUDY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Technology Business Analyst Co-Worker</h3>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono font-bold text-xs flex items-center gap-2 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Proof of Value</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <strong className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                <i className="fa-solid fa-triangle-exclamation mr-1.5"></i> The Operational Challenge
              </strong>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Navigating dense, multi-layered legacy operational documents and mapping complex requirements created
                significant administrative bottlenecks for Business Analysts at a leading national postal and logistics
                enterprise. Manual data discovery delayed project kickoff times and increased the risk of missed
                dependencies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 space-y-2">
              <strong className="text-blue-300 font-bold text-xs uppercase tracking-wider block">
                <i className="fa-solid fa-robot mr-1.5"></i> The Co-Worker Solution
              </strong>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cognitech AI deployed a specialized{' '}
                <strong className="text-white">Technology Business Analyst Co-Worker</strong> to ingest, structure, and
                query expansive knowledge repositories in real-time—accelerating user story creation while keeping human
                analysts in complete control.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {/* controlsList + the context-menu handler remove the browser's own
                  "Save video as…" affordances. They are a deterrent, not access
                  control: the blob URL is public. */}
              <video
                controls
                controlsList="nodownload"
                onContextMenu={(event) => event.preventDefault()}
                preload="none"
                className="w-full h-full object-cover"
                aria-label="Technology Business Analyst Co-Worker proof of value demonstration"
              >
                <source src={BA_DEMO_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              <i className="fa-solid fa-chart-line mr-1.5"></i> Performance Benchmark &amp; Security Metrics
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METRICS.map((metric) => (
              <div key={metric.title} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
                <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient} tracking-tight block mb-2`}>
                  {metric.value}
                </span>
                <strong className="text-white font-bold text-sm block mb-1">{metric.title}</strong>
                <p className="text-xs text-slate-400 leading-relaxed">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
