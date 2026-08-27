export default function Showcase() {
  return (
    <section id="showcase" className="py-16 max-w-7xl mx-auto px-6 border-b border-gray-800">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-agentic bg-blue-950/50 border border-blue-900 px-3 py-1 rounded-full">
          Digital Co-Worker Prototype
        </span>
        <h2 className="text-3xl font-bold text-white mt-4 mb-3">Intelligent Systems Architecture</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Empowering enterprise analysts with specialized agent frameworks.
        </p>
      </div>

      <div className="bg-card-dark border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center shadow-2xl relative overflow-hidden">
        <div className="lg:w-3/5 space-y-5">
          <div className="flex items-center space-x-3 text-sm font-semibold text-agentic uppercase tracking-wider">
            <i className="fas fa-sliders text-base"></i>
            <span>Proof of Concept Spotlight: The BA-Agent Framework</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Optimizing Delivery Frameworks for Logistics Infrastructure
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Cognitech has built a highly focused Proof of Concept (PoC) scoped for a prominent leader in the
            logistics sector. By integrating directly with layered source frameworks and operational documentation,
            the agent simplifies the logic of expansive code repositories and maps intricate system dependencies.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Engineered strictly as a supportive <strong>Digital Co-Worker</strong>, the agent keeps specialists
            completely in control. It passes all generated user stories and system requirements straight to the human
            Business Analyst for validation first. Respective tasks are only automated and synced to external
            tracking ecosystems like Jira and Confluence after explicit human confirmation.
          </p>
        </div>

        <div className="lg:w-2/5 w-full bg-dark-bg border border-gray-800 rounded-xl p-6 relative">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span>Integration Plane</span>
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-card-dark/40 border border-gray-800 rounded-lg">
              <span className="text-sm font-medium text-gray-300">
                <i className="fas fa-robot text-agentic mr-2"></i> Agentic AI Layer
              </span>
              <span className="text-xs font-bold text-gray-500 bg-gray-900 px-2 py-0.5 rounded">PoC Engine</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-950/20 border border-blue-900/40 rounded-lg">
              <span className="text-sm font-medium text-white">
                <i className="fas fa-user-check text-agentic mr-2"></i> Human BA Verification
              </span>
              <span className="text-xs font-bold text-agentic bg-blue-950 border border-blue-900 px-2 py-0.5 rounded">
                Review Gate
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-card-dark/40 border border-gray-800 rounded-lg text-center">
                <i className="fab fa-jira text-xl text-blue-400 mb-1"></i>
                <div className="text-xs font-bold text-gray-300">Jira Sync</div>
              </div>
              <div className="p-3 bg-card-dark/40 border border-gray-800 rounded-lg text-center">
                <i className="fab fa-confluence text-xl text-blue-400 mb-1"></i>
                <div className="text-xs font-bold text-gray-300">Confluence Docs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
