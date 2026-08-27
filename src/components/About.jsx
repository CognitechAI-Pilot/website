import { edgePoints } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto px-6">
      <div className="bg-card-dark rounded-2xl border border-gray-800 p-8 md:p-12 shadow-xl flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="lg:w-2/3 space-y-6 flex flex-col justify-center">
          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="h-1 w-3 bg-agentic rounded-full"></span> Enterprise AI Adoption
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              AI fails when treated as a standalone sandbox. Cognitech designs custom, architecture-integrated
              digital solutions that embed seamlessly into your business workflows. We safely and incrementally
              de-risk your technology transition, keeping human teams firmly in oversight and governance positions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="h-1 w-3 bg-purple-500 rounded-full"></span> Economical AI Execution
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Slam the brakes on skyrocketing frontier model inference fees driven by unconstrained token
              consumption. We resolve escalating enterprise runtime costs by deploying right-sized, highly targeted
              open-weights foundations optimized via parameter-efficient tuning (PEFT/LoRA). Your operations stay
              fast, secure, and structurally economical.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 bg-dark-bg border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-lg mb-4 flex items-center">
              <i className="fas fa-shield-halved text-agentic mr-2.5"></i> Our Edge
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {edgePoints.map((point) => (
                <li key={point.title} className="flex items-start">
                  <i className="fas fa-check text-agentic mt-1 mr-3 text-xs flex-shrink-0"></i>
                  <span>
                    <strong>{point.title}</strong> {point.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
