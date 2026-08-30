import { useState } from 'react'
import { p2StageData } from '../data/coworker'

const PHASES = [
  { num: 1, code: 'P1', tag: 'Pre-Assessment', tone: 'blue', title: 'Phase 1: AI Strategy & Readiness', blurb: 'Strategic alignment, ROI mapping, tech layer readiness, talent & governance controls.' },
  { num: 2, code: 'P2', tag: 'Implementation', tone: 'indigo', title: 'Phase 2: AI Design, Build & Deploy', blurb: '5-Stage specialized engineering lifecycle for building and deploying Digital Co-Workers.' },
  { num: 3, code: 'P3', tag: 'Operations', tone: 'cyan', title: 'Phase 3: Enablement & Governance', blurb: 'Autonomous skill refinement, post-training loops, and real-time board-level supervisory telemetry.' }
]

const TONES = {
  blue: { chip: 'bg-blue-500/20 text-blue-400', tag: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  indigo: { chip: 'bg-indigo-500/20 text-indigo-400', tag: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  cyan: { chip: 'bg-cyan-500/20 text-cyan-400', tag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' }
}

const STAGE_TABS = [
  { num: 1, label: 'Knowledge Mapping', tone: 'text-blue-400' },
  { num: 2, label: 'Process Mapping', tone: 'text-indigo-400' },
  { num: 3, label: 'Capability Wiring', tone: 'text-purple-400' },
  { num: 4, label: 'Guardrails & HITL', tone: 'text-amber-400' },
  { num: 5, label: 'Channel Deployment', tone: 'text-emerald-400' }
]

export default function Framework() {
  const [phase, setPhase] = useState(1)
  const [stage, setStage] = useState(1)
  const stageData = p2StageData[stage]

  return (
    <section id="framework" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-2">
          GOVERNED ENGINEERING METHODOLOGY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Enterprise AI Strategy &amp; Operating Framework</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          A comprehensive execution model bridging strategic pre-assessment discovery, role-based systems
          engineering, and continuous supervisory governance.
        </p>
      </div>

      <div role="tablist" aria-label="Framework phases" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {PHASES.map((item) => (
          <button
            key={item.num}
            type="button"
            role="tab"
            aria-selected={phase === item.num}
            aria-controls={`phase-panel-${item.num}`}
            onClick={() => { setPhase(item.num); if (item.num === 2) setStage(1) }}
            className={`p-5 rounded-2xl bg-slate-950 border text-left transition-all cursor-pointer ${
              phase === item.num ? 'tab-btn-active border-blue-500/40' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${TONES[item.tone].chip}`}>
                {item.code}
              </span>
              <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${TONES[item.tone].tag}`}>
                {item.tag}
              </span>
            </div>
            <h3 className={`text-sm font-bold block ${phase === item.num ? 'text-white' : 'text-slate-300'}`}>{item.title}</h3>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.blurb}</p>
          </button>
        ))}
      </div>

      {phase === 1 && (
        <div id="phase-panel-1" role="tabpanel">
      <div className="glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 fade-in mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                      FOUNDATIONAL DISCOVERY &amp; OPERATING MODEL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      Phase 1: Customer AI Strategy &amp; Operating Framework
                  </h3>
              </div>
              <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                  <span className="text-slate-500">Target Audience:</span> <span className="text-blue-400 font-bold">CIOs, CAIOs, and Senior Executive Teams</span>
              </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              A structured discovery assessment to balance frontier capabilities, data architecture, organizational talent, and risk governance before engineering begins.
          </p>

          {/* 3 Core Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                          <i className="fa-solid fa-chart-line text-sm"></i>
                      </div>
                      <div>
                          <span className="text-[10px] font-mono text-blue-400 font-bold uppercase block">PILLAR 01</span>
                          <h4 className="text-sm font-bold text-white">Strategic Alignment &amp; Value Delivery</h4>
                      </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-3">
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• ROI Optimization:</strong>
                          <span className="text-slate-400 leading-snug">Aligning CAPEX directly to core efficiency benchmarks and business unit metrics.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• High-Impact Use Cases:</strong>
                          <span className="text-slate-400 leading-snug">Prioritizing agentic workflow orchestration, automated support, and localized knowledge graph retrieval.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Core KPIs (Operational Velocity &amp; Resilience):</strong>
                          <span className="text-slate-400 leading-snug">Targeting a 40%+ reduction in end-to-end task cycle times with automated model fallbacks.</span>
                      </li>
                  </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                          <i className="fa-solid fa-server text-sm"></i>
                      </div>
                      <div>
                          <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase block">PILLAR 02</span>
                          <h4 className="text-sm font-bold text-white">Technology Layer (Build vs. Buy)</h4>
                      </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-3">
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Frontier Integrations:</strong>
                          <span className="text-slate-400 leading-snug">Orchestrating multi-agent setups via secure cloud gateways or local models.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Data Pipelines &amp; Fine-Tuning:</strong>
                          <span className="text-slate-400 leading-snug">Secure vector stores, Lake/Warehouse pipelines, and parameter optimization.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Middleware &amp; Tooling:</strong>
                          <span className="text-slate-400 leading-snug">Scalable API broker infrastructure, MCP tooling, and standardized routing rules.</span>
                      </li>
                  </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                          <i className="fa-solid fa-users-gear text-sm"></i>
                      </div>
                      <div>
                          <span className="text-[10px] font-mono text-purple-400 font-bold uppercase block">PILLAR 03</span>
                          <h4 className="text-sm font-bold text-white">Talent, Culture &amp; Operations</h4>
                      </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-3">
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Targeted Upskilling:</strong>
                          <span className="text-slate-400 leading-snug">Structured engineering squads, prompt engineering maturity, and scaled training pathways.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Cross-Functional Squads:</strong>
                          <span className="text-slate-400 leading-snug">Multi-disciplinary engineering squads collaborating directly with dedicated Product Owners.</span>
                      </li>
                      <li>
                          <strong className="text-white block font-semibold mb-0.5">• Change Playbooks:</strong>
                          <span className="text-slate-400 leading-snug">Managing human-in-the-loop handshakes, team adoption curves, and persona integration.</span>
                      </li>
                  </ul>
              </div>
          </div>

          {/* Foundation Layer */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-blue-500/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-shield-halved text-blue-400 text-base"></i>
                      <h4 className="text-sm font-bold text-white">Foundation Layer: Governance, Ethics &amp; Risk Controls</h4>
                  </div>
                  <span className="text-[10px] font-mono text-blue-300 uppercase px-2.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30">Universal Safeguards</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                      <strong className="text-blue-300 block font-bold mb-0.5">Security Guardrails</strong>
                      <span className="text-slate-400">Zero-Trust IAM, active prompt audit trails, and data isolation.</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                      <strong className="text-indigo-300 block font-bold mb-0.5">Responsible AI &amp; Ethics</strong>
                      <span className="text-slate-400">Bias mitigation, ethical boundaries, and transparent reasoning spans.</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                      <strong className="text-purple-300 block font-bold mb-0.5">Compliance Tracking</strong>
                      <span className="text-slate-400">Full regulatory evidence logging and drift mitigation for audit committees.</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                      <strong className="text-emerald-300 block font-bold mb-0.5">Token Unit Economics</strong>
                      <span className="text-slate-400">Enterprise quota modeling, dynamic model-switching, and API cost controls.</span>
                  </div>
              </div>
          </div>
      </div>        </div>
      )}

      {phase === 2 && (
        <div id="phase-panel-2" role="tabpanel" className="fade-in space-y-6">
          <div className="glow-card p-4 rounded-2xl border border-slate-800">
            <div role="tablist" aria-label="Phase 2 stages" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {STAGE_TABS.map((item) => (
                <button
                  key={item.num}
                  type="button"
                  role="tab"
                  aria-selected={stage === item.num}
                  onClick={() => setStage(item.num)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    stage === item.num ? 'border-blue-500/40 bg-blue-500/10' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block mb-0.5 ${item.tone}`}>
                    STAGE 0{item.num}
                  </span>
                  <span className="text-xs font-bold block text-slate-300 leading-snug">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div key={stage} className="glow-card rounded-2xl p-6 sm:p-8 border border-slate-800 fade-in">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                  {stageData.num}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">{stageData.title}</h3>
              </div>
              <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                <span className="text-slate-500">Key Question:</span>{' '}
                <span className="text-blue-400 font-bold">{stageData.question}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">{stageData.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stageData.pillars.map((pillar, index) => (
                <div key={pillar.title} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold font-mono uppercase text-blue-400 block">
                    PILLAR 0{index + 1}: {pillar.title}
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">{pillar.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="p-4 bg-blue-950/30 rounded-xl border border-blue-900/40 flex items-start gap-3 w-full">
                <i className="fa-solid fa-certificate text-blue-400 text-base mt-0.5"></i>
                <div>
                  <span className="text-xs font-bold text-blue-300 block">
                    Production Proof Point (Delivery Lifecycle BA Agent Pilot Benchmark)
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">{stageData.proof}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {phase === 3 && (
        <div id="phase-panel-3" role="tabpanel">
      <div className="fade-in space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">STAGE 06</span>
                      <span className="text-xs font-mono text-slate-500">Autonomous Learning</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Autonomous Learning &amp; Fine-Tuning</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                      Captures full multi-turn session trajectories in ShareGPT format, including human edits. Uses trajectory data, SFT, and DPO to continuously update onshore model weights.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                          <strong className="text-pink-400 block font-bold mb-0.5">Telemetry &amp; ShareGPT Datasets:</strong>
                          <span className="text-slate-400">Captures real BA edits to train model nuances without offshore data leaks.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                          <strong className="text-pink-400 block font-bold mb-0.5">Procedural Skill Refinement:</strong>
                          <span className="text-slate-400">Updates versioned SKILL.md modules for instant organizational reuse.</span>
                      </div>
                  </div>
              </div>

              <div className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">STAGE 07</span>
                      <span className="text-xs font-mono text-slate-500">Board Oversight</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Governance &amp; Continuous Telemetry</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                      Establishes real-time operational monitoring, token budget caps, and supervisor auditing. Implements execution trace logging to maintain enterprise safety and continuous compliance.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                          <strong className="text-cyan-400 block font-bold mb-0.5">Supervisor Meta-Agents:</strong>
                          <span className="text-slate-400">LLM-as-a-Judge watchdogs tracing reasoning spans and preventing infinite loops.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                          <strong className="text-cyan-400 block font-bold mb-0.5">Board &amp; Risk Committee Registers:</strong>
                          <span className="text-slate-400">Audit-ready evidence logging, token cost alerts, and AI risk registers.</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>        </div>
      )}
    </section>
  )
}
