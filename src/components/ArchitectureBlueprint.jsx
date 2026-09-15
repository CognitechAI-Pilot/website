import { useEffect, useRef, useState } from 'react'
import {
  TAG_BUILD,
  TAG_CYAN,
  TAG_EXTERNAL,
  TAG_MANAGED,
  cognitiveLoops,
  connectedSystems,
  gatewayControls,
  governanceModules,
  memoryTiers,
  orchestrationCapabilities,
  planeNav,
  platformPillars,
  squadAgents,
  storagePlanes
} from '../data/blueprint'

const PLANE_IDS = planeNav.map((plane) => plane.id)
const ALL_COLLAPSED = Object.fromEntries(PLANE_IDS.map((id) => [id, false]))

const CHIP = 'px-2 py-0.5 rounded text-[9px] font-mono font-bold'
const CARD = 'p-5 rounded-2xl bg-slate-950/90 flex flex-col justify-between space-y-4 border'

/**
 * One of the five uniform planes (01, 02, 03, 05, 06): a header strip, a
 * roll-up summary that doubles as the accordion trigger, and a detail drawer.
 *
 * The source design hung onclick on a <div>, which left the accordions
 * unreachable by keyboard; the trigger is a real <button> here so it is
 * focusable and announces its state.
 */
function Plane({ id, span, border, eyebrow, eyebrowColor, pulseDot, badge, icon, iconColor, heading, summary, expanded, onToggle, planeRef, children }) {
  return (
    <div ref={planeRef} id={id} className={`${span} ${CARD} ${border}`}>
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 min-w-0">
          {pulseDot && <span className={`w-2 h-2 rounded-full ${pulseDot} animate-pulse flex-shrink-0`}></span>}
          <span className={`text-[10px] font-mono font-bold ${eyebrowColor} uppercase tracking-wider`}>{eyebrow}</span>
        </div>
        <span className={`${badge.className} ${CHIP} flex-shrink-0 text-right`}>{badge.label}</span>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`${id}-content`}
        className="w-full text-left space-y-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span className="flex items-center justify-between gap-3">
          <span className="text-base font-bold text-white flex items-center gap-2 font-display">
            <i className={`fa-solid ${icon} ${iconColor}`}></i>
            {heading}
          </span>
          <i className={`fa-solid fa-chevron-down text-slate-400 transition-transform duration-200 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}></i>
        </span>
        <span className="block text-xs text-slate-300 leading-snug">{summary}</span>
      </button>

      {expanded && (
        <div id={`${id}-content`} className="fade-in space-y-3 pt-2 border-t border-slate-800 text-xs font-mono">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ArchitectureBlueprint() {
  const [expanded, setExpanded] = useState(ALL_COLLAPSED)
  const [pendingFocus, setPendingFocus] = useState(null)
  const planeRefs = useRef({})

  const allExpanded = PLANE_IDS.every((id) => expanded[id])

  // Scrolling has to wait for the expand to paint, so the quick-nav pills set a
  // target and this effect moves to it on the next render.
  useEffect(() => {
    if (!pendingFocus) return
    const el = planeRefs.current[pendingFocus]
    if (el) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' })
    }
    setPendingFocus(null)
  }, [pendingFocus])

  const toggle = (id) => setExpanded((state) => ({ ...state, [id]: !state[id] }))

  const focusPlane = (id) => {
    setExpanded((state) => ({ ...state, [id]: true }))
    setPendingFocus(id)
  }

  const toggleAll = () =>
    setExpanded(Object.fromEntries(PLANE_IDS.map((id) => [id, !allExpanded])))

  const planeProps = (id) => ({
    id,
    expanded: expanded[id],
    onToggle: () => toggle(id),
    planeRef: (el) => { planeRefs.current[id] = el }
  })

  return (
    <div className="space-y-6">
      {/* CONTROLS & ARCHITECTURAL DOMAINS LEGEND */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider">
              Enterprise Architecture Domains (6 Core Planes)
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
              Interactive Blueprint
            </span>
          </div>

          <button
            type="button"
            onClick={toggleAll}
            aria-expanded={allExpanded}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-mono font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <i className={`fa-solid ${allExpanded ? 'fa-compress' : 'fa-layer-group'}`}></i>
            <span>{allExpanded ? 'Collapse All Details' : 'Expand All Details'}</span>
          </button>
        </div>

        {/* Quick navigation pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
          {planeNav.map((plane) => (
            <button
              key={plane.id}
              type="button"
              onClick={() => focusPlane(plane.id)}
              className={`p-2.5 ${plane.pill} rounded-xl border ${plane.border} flex items-center gap-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
            >
              <span className={`w-5 h-5 rounded-lg ${plane.chip} flex items-center justify-center font-bold text-[10px] flex-shrink-0`}>
                {plane.num}
              </span>
              <span className={`${plane.labelClass} text-[11px] truncate`}>{plane.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* MAIN BLUEPRINT CANVAS */}
      <div className="blueprint-canvas rounded-3xl p-5 sm:p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
        {/* SECTION 1: ACCESS CHANNELS, CONTROL PLANE & IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <Plane
            {...planeProps('plane-01')}
            span="lg:col-span-4"
            border="border-slate-800"
            eyebrow="01. Interaction Surfaces"
            eyebrowColor="text-blue-400"
            badge={{ label: '1–10 USERS / SQUAD', className: 'bg-blue-500/10 text-blue-300' }}
            icon="fa-users-gear"
            iconColor="text-blue-400"
            heading="Workforce Squads"
            summary="Native co-working embedded in Microsoft Teams, Slack, Isolated Web Sidecars, and IDE environments."
          >
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 text-xs text-slate-200 space-y-2 font-sans">
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-1.5">
                <span className="text-slate-400 font-medium font-mono text-[11px]">Public Workspace:</span>
                <span className="text-white font-semibold text-right">MS Teams • Slack • Google Chat</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400 font-medium font-mono text-[11px]">Isolated / Sovereign:</span>
                <span className="text-emerald-400 font-semibold text-right">Dedicated Web Sidecar • IDE / CLI</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              Squad members (BAs, Product Owners, Developers, QA leads) collaborate directly with assigned
              co-workers through regular conversational surfaces.
            </p>
          </Plane>

          <Plane
            {...planeProps('plane-02')}
            span="lg:col-span-5"
            border="border-purple-500/40"
            eyebrow="02. Control Plane & Governance Harness"
            eyebrowColor="text-purple-400"
            pulseDot="bg-purple-400"
            badge={{ label: 'MANAGED CONTROL', className: TAG_MANAGED }}
            icon="fa-shield-halved"
            iconColor="text-purple-400"
            heading="Enterprise AI Governance"
            summary="Central agent registry, content guardrails, token rate limiting, quality evaluations, and immutable audit logs."
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
              {governanceModules.map((module, index) => (
                <div
                  key={module.title}
                  className={`p-2 bg-slate-900 rounded-xl border border-slate-800 space-y-1 ${
                    index === governanceModules.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <i className={`fa-solid ${module.icon} text-purple-400 text-xs`}></i>
                  <strong className="text-white text-[10px] block">{module.title}</strong>
                  <span className="text-[9px] text-slate-400">{module.sub}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-purple-950/20 border border-purple-900/50 rounded-xl flex flex-wrap items-center justify-between gap-2 text-[11px]">
              <span className="text-slate-300 font-semibold">Secure AI Gateway:</span>
              <span className="text-purple-300 font-bold">Azure APIM • AWS Bedrock Gateway • Kong</span>
            </div>
          </Plane>

          <Plane
            {...planeProps('plane-03')}
            span="lg:col-span-3"
            border="border-slate-800"
            eyebrow="03. Identity & Access (IAM)"
            eyebrowColor="text-emerald-400"
            badge={{ label: 'ZERO-TRUST', className: TAG_MANAGED }}
            icon="fa-id-badge"
            iconColor="text-emerald-400"
            heading="Zero-Trust Security"
            summary={'Enterprise SSO, MFA enforcement, and delegated "On-Behalf-Of" tokens tied directly to human user identity.'}
          >
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 space-y-1.5 text-xs">
              <span className="text-slate-300 text-[10px] font-bold uppercase block tracking-wider">
                Compatible IAM Providers:
              </span>
              <span className="text-emerald-400 font-bold block leading-snug">
                Microsoft Entra ID • AWS IAM • Okta • Keycloak
              </span>
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px] font-sans">
              <li>• Enforces RBAC &amp; ABAC data visibility</li>
              <li>• Zero shared admin service passwords</li>
            </ul>
          </Plane>
        </div>

        {/* 04: SECURE AI TENANT & EXECUTION BOUNDARY */}
        <div
          id="plane-04"
          ref={(el) => { planeRefs.current['plane-04'] = el }}
          className="p-5 sm:p-8 rounded-3xl bg-slate-950/95 border-2 border-blue-500/50 relative space-y-6 shadow-2xl active-pulse"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-lg border border-blue-500/30 flex-shrink-0">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                    Organisation&rsquo;s Secure AI Tenant &amp; Execution Boundary
                  </h4>
                  <span className={`${TAG_BUILD} px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold`}>
                    100% TENANT ISOLATED
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  Dedicated Client Cloud VPC or On-Premise Sovereign Infrastructure • Zero Data Leakage • Zero
                  Public Model Training
                </p>
              </div>
            </div>
            <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex-shrink-0">
              <span className="text-slate-400 font-medium">Supported Environments:</span>{' '}
              <strong className="text-blue-400 font-bold">Azure • AWS • GCP • Sovereign Onshore</strong>
            </div>
          </div>

          {/* COGNITECH AI ENTERPRISE DIGITAL CO-WORKER PLATFORM */}
          <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/40 space-y-4">
            <button
              type="button"
              onClick={() => toggle('plane-04')}
              aria-expanded={expanded['plane-04']}
              aria-controls="plane-04-content"
              className="w-full flex items-center justify-between gap-3 border-b border-slate-800 pb-3 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <span className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0"></span>
                <span className="min-w-0">
                  <span className="block text-sm sm:text-base font-black text-white uppercase tracking-wider font-display">
                    04. Cognitech AI Enterprise Digital Co-Worker Platform
                  </span>
                  <span className="block text-xs text-slate-400 font-mono">
                    {expanded['plane-04']
                      ? 'Collapse to return to the high-level roll-up'
                      : 'Expand for detailed architectural specifications'}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-3 flex-shrink-0">
                <span className={`${TAG_BUILD} px-3 py-0.5 rounded-full text-[10px] font-mono font-bold hidden sm:inline-block`}>
                  PROPRIETARY CORE IP
                </span>
                <i className={`fa-solid fa-chevron-down text-emerald-400 transition-transform duration-200 ${expanded['plane-04'] ? 'rotate-180' : ''}`}></i>
              </span>
            </button>

            {/* Roll-up: the four core pillars, shown while collapsed */}
            {!expanded['plane-04'] && (
              <div className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
                {platformPillars.map((pillar) => (
                  <div key={pillar.title} className={`p-3.5 rounded-2xl bg-slate-950/90 border ${pillar.border} flex items-start gap-3 transition-colors`}>
                    <i className={`fa-solid ${pillar.icon} ${pillar.accent} mt-1 text-sm flex-shrink-0`}></i>
                    <div>
                      <strong className="text-white text-xs block mb-0.5">{pillar.title}</strong>
                      <span className="text-slate-400 text-[11px] leading-tight block">{pillar.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed view */}
            {expanded['plane-04'] && (
              <div id="plane-04-content" className="fade-in space-y-6 pt-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* 4A: ORCHESTRATION */}
                  <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-950/90 border border-blue-500/30 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">Orchestration Layer</span>
                      <span className={`${TAG_BUILD} ${CHIP}`}>CORE IP</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <h5 className="font-bold text-white text-sm">Digital Co-Worker Orchestration</h5>
                      <ul className="space-y-2.5 text-slate-300 font-medium">
                        {orchestrationCapabilities.map((item) => (
                          <li key={item.title} className="flex items-start gap-2">
                            <i className={`fa-solid ${item.icon} text-blue-400 mt-0.5`}></i>
                            <span>
                              <strong className="text-white">{item.title}</strong>{' '}
                              {item.mono ? (
                                <>
                                  Standardized{' '}
                                  <span className="text-blue-400 font-mono font-semibold">{item.mono}</span> modules.
                                </>
                              ) : (
                                item.text
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-slate-900/95 rounded-xl border border-slate-800 space-y-2 text-[11px] font-mono">
                      <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-1.5">
                        <span className="text-blue-400 font-bold text-[10px] uppercase flex items-center gap-1.5">
                          <i className="fa-solid fa-layer-group text-blue-400"></i>
                          Institutional Memory (3 Tiers)
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">STATE ENGINE</span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        {memoryTiers.map((tier) => (
                          <div key={tier.tier} className="flex items-start gap-1.5 leading-snug">
                            <span className={`px-1.5 rounded ${tier.chip} font-bold text-[9px] flex-shrink-0`}>
                              {tier.tier}
                            </span>
                            <span className="text-slate-300">{tier.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 4B: AGENT RUNTIME */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/90 border border-blue-500/40 flex flex-col justify-between space-y-5">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">Agentic Execution Engine</span>
                      <span className={`${TAG_BUILD} ${CHIP}`}>AGENT RUNTIME</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h5 className="font-bold text-white text-sm">
                          Co-Worker Agent Runtime (1–10 Dedicated Squad Agents)
                        </h5>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">1:1 Pairings</span>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                        {squadAgents.map((agent) => (
                          <div key={agent.label} className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-[10px] text-slate-200">
                            <i className={`fa-solid ${agent.icon} ${agent.accent} mb-1 block`}></i>
                            {agent.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono">
                      {cognitiveLoops.map((loop) => (
                        <div key={loop.title} className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-200">
                          <strong className={`${loop.accent} block font-bold`}>{loop.title}</strong>
                          <span className="text-slate-400">{loop.sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4C: SECURE TOOL GATEWAY */}
                  <div className="lg:col-span-3 p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/40 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Security Broker</span>
                      <span className={`${TAG_MANAGED} ${CHIP}`}>AIR-GAPPED HITL</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <h5 className="font-bold text-white text-sm">Tool Gateway (Secure Connectors)</h5>

                      <div className="p-2.5 bg-emerald-950/30 border border-emerald-500/40 rounded-xl space-y-1">
                        <strong className="text-emerald-400 font-bold block text-[11px] uppercase">
                          <i className="fa-solid fa-user-shield mr-1"></i> Human Approval Gate
                        </strong>
                        <p className="text-slate-200 text-[11px] leading-tight">
                          Queries are automated; all state modifications require explicit human confirmation.
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-slate-300 text-[11px] font-mono font-medium">
                        {gatewayControls.map((control) => (
                          <li key={control}>• {control}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center justify-between gap-2">
                      <span>Standard:</span>
                      <strong className="text-white text-right">Model Context Protocol (MCP)</strong>
                    </div>
                  </div>
                </div>

                {/* 4D: PERSISTENT STATE, MEMORY & STORAGE */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider block mb-3">
                    Persistent State, Memory &amp; Storage Plane (Interchangeable Managed Services)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    {storagePlanes.map((store) => (
                      <div key={store.title} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-white flex items-center gap-1.5 text-xs">
                            <i className={`fa-solid ${store.icon} text-cyan-400`}></i>
                            <span>{store.title}</span>
                          </strong>
                          <span className={`${TAG_CYAN} px-2 py-0.5 rounded text-[9px] font-bold flex-shrink-0`}>
                            {store.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{store.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 3: ENTERPRISE SYSTEMS & MODEL ENGINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <Plane
            {...planeProps('plane-05')}
            span="lg:col-span-7"
            border="border-slate-800"
            eyebrow="05. Connected Enterprise Systems & Repositories"
            eyebrowColor="text-slate-300"
            badge={{ label: 'READ-ONLY INGEST (WRITES VIA HITL GATEWAY)', className: TAG_EXTERNAL }}
            icon="fa-network-wired"
            iconColor="text-amber-400"
            heading="Enterprise Data Repositories"
            summary="Read-only knowledge ingestion across Jira, Confluence, SharePoint, and GitHub with air-gapped write protection."
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {connectedSystems.map((system) => (
                <div key={system.title} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <i className={`${system.icon} ${system.accent} text-sm`}></i>
                  <strong className="text-white text-[11px] block">{system.title}</strong>
                  <span className="text-[10px] text-slate-300">{system.sub}</span>
                </div>
              ))}
            </div>
          </Plane>

          <Plane
            {...planeProps('plane-06')}
            span="lg:col-span-5"
            border="border-amber-500/40"
            eyebrow="06. Plug-and-Play Model Inference Layer"
            eyebrowColor="text-amber-400"
            badge={{ label: 'DECOUPLED', className: TAG_EXTERNAL }}
            icon="fa-microchip"
            iconColor="text-amber-400"
            heading="Decoupled LLM Engines"
            summary="Instant routing between 100% Onshore Sovereign models (zero offshore data) or Public Cloud frontier APIs."
          >
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-300 text-[10px] uppercase font-bold block">Interchangeable Engine Options:</span>
              <div className="text-amber-300 font-semibold text-[11px] space-y-0.5">
                <div>• <strong className="text-white">Sovereign Onshore:</strong> 100% NZ Local DeepSeek-R1 / Qwen 2.5</div>
                <div>• <strong className="text-white">Public Cloud Frontier:</strong> Azure OpenAI • AWS Bedrock • Vertex AI</div>
              </div>
            </div>
          </Plane>
        </div>
      </div>
    </div>
  )
}
