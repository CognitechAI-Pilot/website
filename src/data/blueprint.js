// Content for the Enterprise AI Architecture Blueprint (the "architecture" tab
// of the Technology Delivery Lifecycle Co-Worker section).
//
// The blueprint is a six-plane reference architecture. Each plane's header and
// roll-up summary share a uniform shape, so they live here; the expanded detail
// of each plane is genuinely bespoke and stays in ArchitectureBlueprint.jsx.

// The source design carried these as hand-rolled CSS classes (.tag-we-build and
// friends). They map exactly onto Tailwind's palette, so they are plain utility
// strings — one less stylesheet to keep in sync with the markup.
export const TAG_BUILD = 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
export const TAG_MANAGED = 'bg-purple-500/15 border border-purple-500/40 text-purple-400'
export const TAG_EXTERNAL = 'bg-amber-500/15 border border-amber-500/40 text-amber-400'
export const TAG_CYAN = 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-400'

// Quick-navigation pills above the canvas. `accent` styles the numbered chip,
// `border` the pill itself — plane 04 is the Cognitech AI platform and is
// deliberately the only one given a filled chip, since it is the core IP.
export const planeNav = [
  { id: 'plane-01', num: '01', label: 'Interaction Surfaces', border: 'border-slate-800', chip: 'bg-blue-500/20 text-blue-400', pill: 'bg-slate-900 hover:bg-slate-800', labelClass: 'text-slate-300' },
  { id: 'plane-02', num: '02', label: 'Control & Harness', border: 'border-purple-500/30', chip: 'bg-purple-500/20 text-purple-400', pill: 'bg-slate-900 hover:bg-slate-800', labelClass: 'text-slate-300' },
  { id: 'plane-03', num: '03', label: 'Identity (IAM)', border: 'border-emerald-500/30', chip: 'bg-emerald-500/20 text-emerald-400', pill: 'bg-slate-900 hover:bg-slate-800', labelClass: 'text-slate-300' },
  { id: 'plane-04', num: '04', label: 'Cognitech AI Platform', border: 'border-emerald-500/50', chip: 'bg-emerald-500 text-slate-950 font-black', pill: 'bg-emerald-950/30 hover:bg-emerald-950/50', labelClass: 'text-white font-bold' },
  { id: 'plane-05', num: '05', label: 'Connected Data', border: 'border-slate-800', chip: 'bg-amber-500/20 text-amber-400', pill: 'bg-slate-900 hover:bg-slate-800', labelClass: 'text-slate-300' },
  { id: 'plane-06', num: '06', label: 'Model Layer', border: 'border-amber-500/30', chip: 'bg-amber-500/20 text-amber-400', pill: 'bg-slate-900 hover:bg-slate-800', labelClass: 'text-slate-300' }
]

// 02 — Control Plane & Governance Harness.
export const governanceModules = [
  { icon: 'fa-book-bookmark', title: 'Registry', sub: 'Role Catalog' },
  { icon: 'fa-shield-halved', title: 'Guardrails', sub: 'Safe Bounds' },
  { icon: 'fa-chart-line', title: 'Traces', sub: 'App Insights/Langfuse' },
  { icon: 'fa-sliders', title: 'Evals', sub: 'Drift Check' },
  { icon: 'fa-file-shield', title: 'Audit', sub: 'NZ Compliance' }
]

// 04 — roll-up shown while the platform plane is collapsed.
export const platformPillars = [
  { icon: 'fa-diagram-project', accent: 'text-blue-400', border: 'border-blue-500/30 hover:border-blue-400/60', title: 'Orchestration Layer', sub: 'Role Personalisation & 3-Tier Memory' },
  { icon: 'fa-microchip', accent: 'text-blue-400', border: 'border-blue-500/30 hover:border-blue-400/60', title: 'Agentic Execution Engine', sub: '1–10 Dedicated Squad Agents & AST Parsers' },
  { icon: 'fa-user-shield', accent: 'text-emerald-400', border: 'border-emerald-500/30 hover:border-emerald-400/60', title: 'Security Broker', sub: 'Air-Gapped Human Approval (MCP)' },
  { icon: 'fa-database', accent: 'text-cyan-400', border: 'border-cyan-500/30 hover:border-cyan-400/60', title: 'Persistent State & Storage', sub: 'Interchangeable Managed Services' }
]

// 04A — Digital Co-Worker Orchestration.
export const orchestrationCapabilities = [
  { icon: 'fa-user-gear', title: 'Role Personalisation:', text: 'Individual work profile & dialectic tone.' },
  { icon: 'fa-briefcase', title: 'Enterprise Work Context:', text: 'Retains active project schemas & Jira epics.' },
  { icon: 'fa-diagram-project', title: 'Task Delegation:', text: 'Coordinates sub-task routing & workflow handoffs.' },
  { icon: 'fa-code', title: 'Procedural Skill Engine:', text: 'Standardized agentskills.io modules.', mono: 'agentskills.io' }
]

// 04A — cross-session institutional memory hierarchy.
export const memoryTiers = [
  { tier: 'Org', chip: 'bg-purple-500/20 text-purple-300', text: 'Enterprise standards, GCDO guardrails & core policies' },
  { tier: 'Role', chip: 'bg-blue-500/20 text-blue-300', text: 'Squad backlog, shared AST schemas & chapter playbooks' },
  { tier: 'User', chip: 'bg-emerald-500/20 text-emerald-300', text: 'User working drafts, prompt scratchpads & preferences' }
]

// 04B — the 1:1 squad pairings mesh. The trailing entry is the "and so on"
// marker rather than a co-worker, hence the separate icon.
export const squadAgents = [
  { icon: 'fa-robot', accent: 'text-blue-400', label: 'Co-Worker 1 (BA)' },
  { icon: 'fa-robot', accent: 'text-blue-400', label: 'Co-Worker 2 (PO)' },
  { icon: 'fa-robot', accent: 'text-blue-400', label: 'Co-Worker 3 (QA)' },
  { icon: 'fa-robot', accent: 'text-blue-400', label: 'Co-Worker 4 (Dev)' },
  { icon: 'fa-ellipsis', accent: 'text-slate-400', label: 'Up to 10' }
]

// 04B — the four cognitive loops each agent runs.
export const cognitiveLoops = [
  { title: 'Multi-Step Reason', accent: 'text-blue-400', sub: 'Self-Nudge Loops' },
  { title: 'AST Code Parsers', accent: 'text-indigo-400', sub: 'C#, Java, Python' },
  { title: 'Skill Synthesis', accent: 'text-purple-400', sub: 'Procedural Workflows' },
  { title: 'Sub-Agent Task', accent: 'text-emerald-400', sub: 'Parallel Execution' }
]

// 04C — tool gateway controls.
export const gatewayControls = [
  'Strict Access Control & RBAC',
  'Enterprise Secrets Management',
  'Immutable Action Logging'
]

// 04D — persistent state, memory and storage plane.
export const storagePlanes = [
  {
    icon: 'fa-brain',
    title: 'Semantic Memory',
    badge: 'LONG-TERM',
    text: 'Vector indexing and structured institutional context storage for cross-session recall and knowledge retention.'
  },
  {
    icon: 'fa-bolt',
    title: 'Session State & Queue',
    badge: 'SHORT-TERM',
    text: 'Low-latency caching for active multi-turn conversations, dialectic context buffers, and asynchronous task scheduling.'
  },
  {
    icon: 'fa-folder-tree',
    title: 'Knowledge & Artifacts',
    badge: 'STORAGE',
    text: 'Secure storage for parsed AST code schemas, meeting transcripts, architecture diagrams, and drafted user stories.'
  }
]

// 05 — connected enterprise systems and repositories.
export const connectedSystems = [
  { icon: 'fa-solid fa-envelope-open-text', accent: 'text-blue-400', title: 'Email & Comms', sub: 'Outlook • Gmail' },
  { icon: 'fa-solid fa-folder-tree', accent: 'text-emerald-400', title: 'Wikis & Docs', sub: 'SharePoint • Confluence' },
  { icon: 'fa-brands fa-jira', accent: 'text-cyan-400', title: 'Work Mgmt', sub: 'Jira • Azure DevOps' },
  { icon: 'fa-brands fa-github', accent: 'text-purple-400', title: 'Code Repos', sub: 'GitHub • GitLab' }
]
