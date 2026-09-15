import { useState } from 'react'
import ArchitectureBlueprint from './ArchitectureBlueprint'

export default function DeliveryCoWorker({ onViewProofPoint }) {
  const [tab, setTab] = useState('capabilities')

  const tabClass = (key) =>
    `px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border border-transparent ${
      tab === key ? 'tab-btn-active' : 'text-slate-400 hover:text-white'
    }`

  return (
    <section id="delivery-coworker" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-2">
          FLAGSHIP DIGITAL WORKFORCE ROLE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Technology Delivery Lifecycle Co-Worker</h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Engineered to augment multi-disciplinary delivery teams—supporting Business Analysts, Product Owners,
          Delivery Leads, QA Engineers, Developers, and Subject Matter Experts through cross-repository knowledge
          extraction and workflow orchestration.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div role="tablist" aria-label="Delivery co-worker views" className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800/90 shadow-xl">
          <button
            type="button"
            role="tab"
            id="tab-capabilities"
            aria-selected={tab === 'capabilities'}
            aria-controls="panel-capabilities"
            onClick={() => setTab('capabilities')}
            className={tabClass('capabilities')}
          >
            <i className="fa-solid fa-brain"></i>
            <span>Capabilities &amp; Persona Workflows</span>
          </button>
          <button
            type="button"
            role="tab"
            id="tab-architecture"
            aria-selected={tab === 'architecture'}
            aria-controls="panel-architecture"
            onClick={() => setTab('architecture')}
            className={tabClass('architecture')}
          >
            <i className="fa-solid fa-layer-group"></i>
            <span>Enterprise AI Architecture Blueprint</span>
          </button>
        </div>
      </div>

      {tab === 'capabilities' && (
        <div role="tabpanel" id="panel-capabilities" aria-labelledby="tab-capabilities">
      <div className="fade-in space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="glow-card p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                              <i className="fa-solid fa-brain text-lg"></i>
                          </div>
                          <h3 className="text-base font-bold text-white mb-2">Knowledge Extraction &amp; Context Discovery</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">
                              Extracts current-state business logic trapped in legacy source code (C#, Java, Python), database schemas, and unstructured project wikis without manual code tracing.
                          </p>
                      </div>

                      <div className="glow-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all">
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
                              <i className="fa-solid fa-diagram-project text-lg"></i>
                          </div>
                          <h3 className="text-base font-bold text-white mb-2">Cross-Repository Correlation</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">
                              Correlates operational requirements, API specifications, and backlog items (Jira, Azure DevOps) to pinpoint hidden dependencies and documentation decay.
                          </p>
                      </div>

                      <div className="glow-card p-6 rounded-2xl border border-purple-500/40 transition-all">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
                              <i className="fa-solid fa-arrows-split-up-and-left text-lg"></i>
                          </div>
                          <h3 className="text-base font-bold text-white mb-2">Delivery Workflow Orchestration</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">
                              Synthesizes meeting transcripts and raw briefs into structured User Stories, Acceptance Criteria (Given/When/Then), and Cypress/Playwright regression test paths.
                          </p>
                      </div>
                  </div>

                  <div className="glow-card p-8 rounded-3xl border border-slate-800 bg-slate-950/70">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                          <div>
                              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block">CROSS-FUNCTIONAL AUGMENTATION</span>
                              <h3 className="text-xl font-bold text-white">How This Co-Worker Empowers Every Persona in Delivery</h3>
                          </div>
                          <a href="#customers" onClick={() => onViewProofPoint('delivery')} className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all inline-flex items-center gap-2">
                              <span>View Live Enterprise Proof Point</span>
                              <i className="fa-solid fa-arrow-right text-[10px]"></i>
                          </a>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                              <strong className="text-blue-400 font-bold block uppercase tracking-wider">Business Analysts</strong>
                              <p className="text-slate-300 leading-relaxed">Automates current-state code analysis and drafts acceptance criteria, cutting discovery from weeks to hours.</p>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                              <strong className="text-indigo-400 font-bold block uppercase tracking-wider">Product Owners</strong>
                              <p className="text-slate-300 leading-relaxed">Uncovers hidden legacy business rules to prevent missing dependencies when refining backlog epics.</p>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                              <strong className="text-purple-400 font-bold block uppercase tracking-wider">QA &amp; Test Engineers</strong>
                              <p className="text-slate-300 leading-relaxed">Extracts boundary conditions directly from code to auto-generate regression test scripts.</p>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                              <strong className="text-emerald-400 font-bold block uppercase tracking-wider">Developers &amp; SMEs</strong>
                              <p className="text-slate-300 leading-relaxed">Verifies requirement feasibility against AST code schemas before writing a single line of production code.</p>
                          </div>
                      </div>
                  </div>
              </div>        </div>
      )}

      {tab === 'architecture' && (
        <div
          role="tabpanel"
          id="panel-architecture"
          aria-labelledby="tab-architecture"
          className="fade-in bg-slate-950 p-4 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Enterprise Reference Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Governed Enterprise AI Architecture Blueprint
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              A universal reference blueprint illustrating how Cognitech AI&rsquo;s Digital Co-Worker engine
              integrates with existing enterprise identity, data systems, and interchangeable cloud or onshore
              infrastructure.
            </p>
          </div>

          <ArchitectureBlueprint />
        </div>
      )}

    </section>
  )
}
