import { capabilities } from '../data/site'

export default function Capabilities() {
  return (
    <section id="services" className="bg-card-dark py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Capabilities &amp; Technical Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We architect and deliver production-grade AI capabilities engineered for enterprise reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition bg-dark-bg"
            >
              <div className="w-10 h-10 bg-blue-950 border border-blue-900 rounded-lg flex items-center justify-center mb-4">
                <i className={`fas ${capability.icon} text-agentic`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{capability.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
