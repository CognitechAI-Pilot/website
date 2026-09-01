import { useEffect, useRef, useState } from 'react'
import { stackBlueprints, personaData } from '../data/coworker'

const STACKS = [
  { key: 'ms', label: 'Azure / M365', icon: 'fa-brands fa-microsoft' },
  { key: 'aws', label: 'AWS Bedrock', icon: 'fa-brands fa-aws' },
  { key: 'gcp', label: 'Google Cloud', icon: 'fa-brands fa-google' },
  { key: 'sovereign', label: 'Sovereign Onshore', icon: 'fa-solid fa-shield-halved' }
]

const PERSONAS = [
  { key: 'ba', label: 'Technology BA' },
  { key: 'qa', label: 'QA Engineer' },
  { key: 'sme', label: 'Developer / SME' }
]

export default function DeliveryCoWorker({ onViewProofPoint }) {
  const [tab, setTab] = useState('capabilities')
  const [stack, setStack] = useState('sovereign')
  const [persona, setPersona] = useState('ba')
  const gridRef = useRef(null)

  // The blueprint markup carries the persona panel inside it, so the panel is
  // patched after each blueprint render. Queries are scoped to the container.
  useEffect(() => {
    const root = gridRef.current
    if (!root) return

    const data = personaData[persona]
    if (!data) return

    const title = root.querySelector('#arch-persona-title')
    if (title) title.textContent = data.title

    const list = root.querySelector('#arch-persona-bullets')
    if (list) {
      list.textContent = ''
      for (const bullet of data.bullets) {
        const li = document.createElement('li')
        li.className = 'flex items-start gap-2'
        const icon = document.createElement('i')
        icon.className = 'fa-solid fa-arrow-right text-purple-400 mt-0.5'
        const span = document.createElement('span')
        span.textContent = bullet
        li.append(icon, span)
        list.appendChild(li)
      }
    }
  }, [stack, persona])

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
            <span>Stack-Agnostic Architecture Blueprint</span>
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
          className="fade-in bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
              DECOUPLED SYSTEM BLUEPRINT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Stack-Agnostic Architecture Blueprint</h3>
            <p className="text-xs text-slate-400 mt-1">
              Toggle infrastructure stacks and digital co-worker personas to inspect universal agentic design
              patterns across public cloud and onshore open source.
            </p>
          </div>

          <div className="glow-card p-4 rounded-2xl mb-8 border border-slate-800 flex flex-col lg:flex-row justify-between gap-6 items-center">
            <div className="w-full lg:w-auto">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                1. Select Enterprise Infrastructure Stack:
              </span>
              <div className="grid grid-cols-2 sm:flex gap-2">
                {STACKS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setStack(item.key)}
                    aria-pressed={stack === item.key}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all border ${
                      stack === item.key
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    <i className={`${item.icon} mr-1.5`}></i> {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto lg:border-l lg:border-slate-800 lg:pl-6">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                2. Select Digital Co-Worker Persona:
              </span>
              <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {PERSONAS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setPersona(item.key)}
                    aria-pressed={persona === item.key}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all border ${
                      persona === item.key
                        ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/30'
                        : 'text-slate-400 hover:text-white border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/*
            Blueprint markup is static, author-authored HTML held in the content
            module — no user input reaches it.
          */}
          <div
            key={stack}
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative fade-in"
            dangerouslySetInnerHTML={{ __html: stackBlueprints[stack] }}
          />
        </div>
      )}
    </section>
  )
}
