import { teamMembers } from '../data/team'

export default function Team() {
  return (
    <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Meet the Team</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Local strategic leadership driving onshore architecture, solution design, and AI governance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glow-card rounded-3xl p-8 sm:p-10 border border-slate-800">
        <div className="text-center border-b border-slate-800 pb-6 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase">
            <i className="fa-solid fa-location-dot"></i> Enterprise AI Design and Orchestration
          </span>
          <span className="text-xs text-slate-500 font-mono block mt-1">NEW ZEALAND CORE ARCHITECTURE TEAM</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-5 p-5 rounded-2xl bg-slate-950/60 border border-slate-800"
            >
              <div
                className={`w-20 h-20 rounded-full overflow-hidden border-2 flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg ${member.ring}`}
              >
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width="80"
                  height="80"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{member.name}</h3>
                <span className={`text-xs font-bold font-mono block mt-1 ${member.roleColor}`}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
