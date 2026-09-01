import { roleData } from '../data/coworker'
import { roadmapOutcomes } from '../data/site'

const ROLE_TABS = [
  {
    key: 'delivery',
    icon: 'fa-code-branch',
    tone: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    title: 'Tech Delivery Lifecycle',
    blurb: 'Universal across tech squads (BA, QA, PO, Dev)',
    status: 'poc'
  },
  {
    key: 'policy',
    icon: 'fa-scale-balanced',
    tone: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    title: 'Policy & Regulatory',
    blurb: 'Public Sector & Regulated Compliance',
    status: 'roadmap'
  },
  {
    key: 'operations',
    icon: 'fa-briefcase',
    tone: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    title: 'Enterprise Operations',
    blurb: 'Shared Services & Back-Office Functions',
    status: 'roadmap'
  },
  {
    key: 'executive',
    icon: 'fa-user-tie',
    tone: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    title: 'Executive & Personal Assistant',
    blurb: 'Leaders, Founders & Business Owners',
    status: 'roadmap'
  }
]

export default function Customers({ activeRole, onSelectRole }) {
  const data = roleData[activeRole]

  return (
    <section id="customers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
          ROLE-BASED ENTERPRISE BLUEPRINTS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Digital Co-Workers in Action</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Proven role blueprints and active engineering roadmaps deployed across enterprise verticals.
        </p>
      </div>

      {/* Role blueprint navigation */}
      <div role="tablist" aria-label="Digital Co-Worker role blueprints" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {ROLE_TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeRole === tab.key}
            aria-controls="role-view-content"
            onClick={() => onSelectRole(tab.key)}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              activeRole === tab.key ? 'customer-tab-active' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${tab.tone}`}>
                <i className={`fa-solid ${tab.icon} text-base`}></i>
              </div>

              {tab.status === 'poc' ? (
                <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>PoC</span>
                </span>
              ) : (
                <span className="text-[9px] font-mono text-amber-400 uppercase font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                  <i className="fa-solid fa-compass text-[8px]"></i>
                  <span>ROADMAP</span>
                </span>
              )}
            </div>

            <span className={`text-sm font-bold block mb-0.5 ${activeRole === tab.key ? 'text-white' : 'text-slate-300'}`}>
              {tab.title}
            </span>
            <span className="text-[10px] text-slate-400 block leading-tight">{tab.blurb}</span>
          </button>
        ))}
      </div>

      {/* Vertical mapping bar */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-network-wired text-blue-400 text-xs"></i>
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">{data.label}</span>
        </div>
        {/* Static author-authored badge markup from the content module. */}
        <div className="flex flex-wrap gap-2 text-xs" dangerouslySetInnerHTML={{ __html: data.badgeBar }} />
      </div>

      {/* Role detail */}
      <div key={activeRole} id="role-view-content" className="glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 fade-in">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
              {data.subHeader}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{data.title}</h3>
          </div>
          <span className={`px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs flex items-center gap-2 whitespace-nowrap ${data.badgeClass}`}>
            {data.isRoadmap ? (
              <i className="fa-solid fa-compass text-amber-400"></i>
            ) : (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            )}
            <span>{data.badge}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <strong className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                <i className="fa-solid fa-triangle-exclamation mr-1.5"></i> The Enterprise Challenge
              </strong>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{data.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 space-y-2">
              <strong className="text-blue-300 font-bold text-xs uppercase tracking-wider block">
                <i className={`fa-solid ${data.isRoadmap ? 'fa-compass' : 'fa-robot'} mr-1.5`}></i>{' '}
                {data.isRoadmap ? 'The Roadmap Blueprint Solution' : 'The Digital Co-Worker Solution'}
              </strong>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{data.solution}</p>
            </div>
          </div>

          {/* Media frame */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {data.hasVideo ? (
                <video
                  controls
                  preload="none"
                  className="w-full h-full object-cover"
                  aria-label="Business Analyst Digital Co-Worker proof of concept demonstration"
                >
                  <source src="/enterprise-ba-coworker-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img
                    src={data.img}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover filter brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px] flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase bg-slate-950/90 px-2.5 py-1 rounded border border-amber-500/30 w-fit">
                      {data.tag}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <span
              className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest"
              dangerouslySetInnerHTML={{ __html: data.metricsTitle }}
            />
            {data.isRoadmap && (
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <i className="fa-solid fa-flask-vial"></i>
                <span>Co-Design a PoC for This Role</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.isRoadmap
              ? (roadmapOutcomes[activeRole] ?? []).map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1 text-xs">
                    <i className={`fa-solid ${item.icon} text-amber-400 text-sm mb-1 block`}></i>
                    <strong className="text-white block font-bold">{item.title}</strong>
                    <span className="text-slate-400 leading-snug">{item.text}</span>
                  </div>
                ))
              : data.metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className={`p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden group transition-all ${metric.border}`}
                  >
                    <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-xl transition-all ${metric.glow}`}></div>
                    <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.gradient} tracking-tight block mb-2`}>
                      {metric.stat}
                    </span>
                    <strong className="text-white font-bold text-sm block mb-1">{metric.title}</strong>
                    <p className="text-xs text-slate-400 leading-relaxed">{metric.text}</p>
                  </div>
                ))}
          </div>

          {!data.isRoadmap && (
            <p className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
              Benchmarks measured during the Business Analyst proof of concept described above. Results reflect that
              engagement&rsquo;s repositories and workflows; outcomes vary by organisation.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
