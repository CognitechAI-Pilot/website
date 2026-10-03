// The four Co-Worker role cards, lifted verbatim from the approved index.html
// mockup. Only the Technology BA role has a case study; the other three are
// roadmap roles, so they carry no "View Case Study" link.
export const portfolioRoles = [
  {
    id: 'role-box-delivery',
    icon: 'fa-code-branch',
    accent: 'blue',
    iconClass: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    labelClass: 'text-blue-400',
    checkClass: 'text-blue-400',
    status: 'pov',
    title: 'Technology Business Analyst',
    blurb: 'Accelerates software delivery cycles by eliminating manual requirement gathering and legacy system tracing.',
    capabilities: [
      { strong: 'Continuous AS-IS Discovery:', text: 'Extracts current-state logic directly from code repositories to eliminate manual tracing.' },
      { strong: 'Artifact Correlation:', text: 'Cross-references live code against historical project wikis to map hidden dependencies.' },
      { strong: 'Automated BA documentation:', text: 'requirements synthesis and pushes epics, user stories and acceptance criteria directly into workboards.' }
    ],
    verticals: [
      { label: 'Logistics & Supply Chain', primary: true, class: 'bg-blue-500/10 border-blue-500/30 text-blue-300' },
      { label: 'Banking & Finance' },
      { label: 'Public Sector' }
    ],
    caseStudyHref: '#case-study'
  },
  {
    id: 'role-box-policy',
    icon: 'fa-scale-balanced',
    iconClass: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    labelClass: 'text-indigo-400',
    checkClass: 'text-indigo-400',
    status: 'roadmap',
    title: 'Policy & Regulatory',
    blurb: 'Shields organizations from compliance drift and dramatically accelerates complex regulatory review cycles.',
    capabilities: [
      { strong: 'Deterministic Statutory Citations:', text: 'Ingests legislation and policy manuals with sentence-level source citations.' },
      { strong: 'Policy Drift Analysis:', text: 'Cross-references operational SOPs against regulatory frameworks to pinpoint compliance gaps.' },
      { strong: 'Immutable Audit Evidence:', text: 'Maintains tamper-proof reasoning traces and audit logs ready for governance committees.' }
    ],
    verticals: [
      { label: 'Public Sector & Govt', primary: true, class: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' },
      { label: 'Insurance Compliance' }
    ]
  },
  {
    id: 'role-box-operations',
    icon: 'fa-briefcase',
    iconClass: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    labelClass: 'text-purple-400',
    checkClass: 'text-purple-400',
    status: 'roadmap',
    title: 'Enterprise Operations',
    blurb: 'Eliminates back-office bottlenecks by unifying fragmented workflows across disconnected ERP and ITSM silos.',
    capabilities: [
      { strong: 'Cross-Silo Query Resolution:', text: 'Resolves vendor and shared service tickets by querying ERP and ITSM systems simultaneously.' },
      { strong: 'Automated 3-Way Reconciliation:', text: 'Detects invoice and PO discrepancies across disconnected back-office databases.' },
      { strong: 'Human-Gated Action Staging:', text: 'Formats multi-system transactional updates into secure staging cards for single-click human approval.' }
    ],
    verticals: [
      { label: 'Retail & E-Commerce', primary: true, class: 'bg-purple-500/10 border-purple-500/30 text-purple-300' },
      { label: 'Shared Services' }
    ]
  },
  {
    id: 'role-box-executive',
    icon: 'fa-user-tie',
    iconClass: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    labelClass: 'text-cyan-400',
    checkClass: 'text-cyan-400',
    status: 'roadmap',
    title: 'Executive & Personal Assistant',
    blurb: 'A secure, strategic multiplier for founders, directors, and enterprise leadership.',
    capabilities: [
      { strong: 'Cross-Squad Telemetry Synthesis:', text: 'Aggregates live delivery velocity and blocker metrics into concise board-ready briefings.' },
      { strong: 'Persistent Strategic Memory:', text: 'Retains continuous, cross-session awareness of executive priorities and dialectic tone.' },
      { strong: 'Zero-Leakage Confidentiality:', text: 'Strict, dedicated tenant isolation ensuring sensitive strategic deliberations remain entirely private.' }
    ],
    verticals: [
      { label: 'C-Suite & Executives', primary: true, class: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' },
      { label: 'Founders & Owners' }
    ]
  }
]

// The three engagement phases. `tier` is the pricing card each one highlights.
export const engagementPhases = [
  {
    id: 'engagement-p1', tier: 1, badge: 'P1', stage: 'Discovery',
    badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    stageClass: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    linkClass: 'text-blue-400 group-hover:text-blue-300',
    title: 'Phase 1: AI Health Check and Co-Worker PoV',
    body: 'A focused readiness review of targeted team workflows, repository data maturity, and sandbox security. Deploys a functional working prototype to establish empirical velocity gains and a de-risked rollout path before production build.',
    link: 'Linked Pricing: Tier 1 ($15,000)'
  },
  {
    id: 'engagement-p2', tier: 2, badge: 'P2', stage: 'Deployment',
    badgeClass: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    stageClass: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    linkClass: 'text-indigo-400 group-hover:text-indigo-300',
    title: 'Phase 2: Co-Worker Orchestration and Integration',
    body: 'Production configuration and deployment integrating specialized Co-Workers into your enterprise stack.',
    link: 'Linked Pricing: Tier 2 (SOW / POA)'
  },
  {
    id: 'engagement-p3', tier: 3, badge: 'P3', stage: 'Governance',
    badgeClass: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    stageClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    linkClass: 'text-cyan-400 group-hover:text-cyan-300',
    title: 'Phase 3: Co-Worker Support & Governance',
    body: 'Long-term capability evolution, compliance tracking, and prompt optimization for deployed Co-Workers.',
    link: 'Linked Pricing: Tier 3 (Retainer)'
  }
]

// The three pricing tiers, keyed by the engagement phase they belong to.
export const pricingTiers = [
  {
    tier: 1, phase: 'PHASE 1 ENGAGEMENT', phaseClass: 'text-blue-400',
    title: 'AI Health Check and Co-Worker PoV',
    blurb: 'De-risk AI adoption with an upfront health check assessment and a targeted, high-impact prototype.',
    price: '$15,000', priceClass: 'text-4xl font-black text-white',
    priceNote: 'Scoped per sprint / prototype',
    features: [
      { text: 'AI Health Check', bold: true },
      { text: 'Targeted Co-Worker pilot', bold: true }
    ],
    cta: 'Start a PoV'
  },
  {
    tier: 2, phase: 'PHASE 2 ENGAGEMENT', phaseClass: 'text-indigo-400',
    title: 'Co-Worker Orchestration and Integration',
    blurb: 'Production configuration and deployment integrating specialized Co-Workers directly into your enterprise stack.',
    price: 'Statement of Work (SOW)', priceClass: 'text-2xl sm:text-3xl font-black text-white block leading-tight',
    priceNote: 'Price on Application (POA) / Custom Scope',
    features: [
      { text: '100% Onshore Sovereign or Enterprise Cloud Tenant' },
      { text: 'Cross-Session Memory & GraphRAG Integration' },
      { text: 'Model Context Protocol (MCP) Sandboxed Actions' },
      { text: 'Zero-Trust IAM Bounds & Mandatory Approval Gates' }
    ],
    cta: 'Inquire for SOW'
  },
  {
    tier: 3, phase: 'PHASE 3 ENGAGEMENT', phaseClass: 'text-cyan-400',
    title: 'Co-Worker Support and Governance',
    blurb: 'Continuous engineering maintenance, fine-tuning, supervisory monitoring, and compliance oversight.',
    price: '$500–$2,500', priceClass: 'text-4xl font-black text-white',
    priceNote: 'Per month based on squad user scope',
    features: [
      { text: 'Base operational monitoring & incident triage' },
      { text: 'Continuous model tuning & prompt optimization' },
      { text: 'Security & compliance boundary audit logging' },
      { text: 'Dedicated delivery capacity & capability handover' }
    ],
    cta: 'Inquire for Retainer'
  }
]
