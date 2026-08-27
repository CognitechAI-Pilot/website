import { teamMembers, executionFocus } from '../data/site'

export default function Team() {
  return (
    <section id="team" className="py-16 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Our Hybrid Operating Model</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We combine local strategic leadership with global engineering scale to deliver elite AI solutions
          economically.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
        <div className="bg-card-dark border border-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 flex items-center">
              <i className="fas fa-map-marker-alt text-agentic mr-2"></i> Enterprise AI Design and Orchestration
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-6">New Zealand Core Architecture Team</p>

            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex items-center space-x-5 ${
                    index < teamMembers.length - 1 ? 'pb-5 border-b border-gray-800/60' : ''
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-30 h-30 rounded-full border-2 border-white object-cover object-center flex-shrink-0 bg-gray-300 antialiased shadow-md"
                  />
                  <div>
                    <h4 className={`text-lg font-bold ${member.highlighted ? 'text-white' : 'text-gray-300'}`}>
                      {member.name}
                    </h4>
                    {member.highlighted ? (
                      <p className="text-sm text-agentic font-medium tracking-wide mt-1">{member.role}</p>
                    ) : (
                      <h4 className="text-sm text-gray-400 mt-1">{member.role}</h4>
                    )}
                    {member.detail && <p className="text-xs text-gray-500 mt-0.5">{member.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-deep-blue border border-blue-900 text-white rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold mb-1 flex items-center text-white">
                <i className="fas fa-bolt mr-2 text-yellow-400"></i> Elite Delivery Pods
              </h3>
              <p className="text-xs text-blue-200 uppercase tracking-wider">Sri Lanka Technical Execution Hub</p>
            </div>

            <p className="text-sm text-blue-100 leading-relaxed">
              Backed by specialized engineering hubs in Sri Lanka. Our overseas squads deliver rapid, cost-efficient
              pipeline development, database integration, and AI modeling under strict New Zealand onshore management
              and architectural governance.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">Core Execution Focus</h4>
              <ul className="space-y-2.5 text-xs text-blue-100/90">
                {executionFocus.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <i className={`fas ${item.icon} text-blue-300 text-[10px]`}></i> {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-blue-800 flex flex-wrap gap-2 justify-between items-center text-xs text-blue-200">
            <span className="bg-blue-950/40 border border-blue-800/60 px-3 py-1.5 rounded-lg font-medium">
              Local Governance &amp; Accountability
            </span>
            <span className="bg-blue-950/40 border border-blue-800/60 px-3 py-1.5 rounded-lg font-medium">
              Global Scaling Speed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
