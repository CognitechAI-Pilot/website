// "The Enterprise AI Gap" and the simplified Co-Worker architecture diagram,
// transcribed from the approved index V2.3 mockup. Copy is verbatim — these are
// positioning claims, so they change only from an updated mockup.

// "The Enterprise AI Gap" is now one card: each row pairs an incumbent
// friction with the Co-Worker resolution. `resolutionParts` is used where the
// copy carries an inline <code> span.
export const gapRows = [
  {
    friction: 'Session Amnesia & Static Prompts',
    resolutionParts: [
      'Shared ',
      { code: 'Org > Dept > Role' },
      ' Memory, Evolving Skills & Predefined Workflows'
    ]
  },
  {
    friction: 'Ecosystem & Single-Model Lock-In',
    resolution: 'Decoupled LLM Router + Universal MCP Bus'
  },
  {
    friction: 'Uncontrolled Writes & SaaS Black-Box',
    resolution: 'In-Tenant Harness & 100% HITL Approval Gates'
  },
  {
    friction: 'Shadow AI & Unaudited Actions',
    resolution: 'Operational Governance (RBAC Policy Layer & Audit Logs)'
  },
  {
    friction: 'Unpredictable Token Bill Shock',
    resolution: 'Calibrated FinOps AI Spend & Circuit Breakers'
  },
  {
    friction: 'Vendor-Locked Prompts & Context',
    resolution: '100% Client IP & Institutional Memory Retention'
  }
]

// The 2x2 capability grid inside the central runtime hub.
export const archCapabilities = [
  {
    icon: 'fa-sitemap', iconClass: 'text-cyan-400', hoverClass: 'hover:border-cyan-500/40',
    title: 'ORG > DEPT > ROLE MEMORY', subtitle: 'Compounding Institutional IP'
  },
  {
    icon: 'fa-shield-halved', iconClass: 'text-emerald-400', hoverClass: 'hover:border-emerald-500/40',
    title: 'OPERATIONAL POLICY LAYER', subtitle: 'RBAC, IP & FinOps Circuit Breakers'
  },
  {
    icon: 'fa-diagram-project', iconClass: 'text-blue-400', hoverClass: 'hover:border-blue-500/40',
    title: 'AST & GRAPHRAG SYNTHESIS', subtitle: 'Cross-Repo & Wiki Correlation'
  },
  {
    icon: 'fa-user-check', iconClass: 'text-amber-400', hoverClass: 'hover:border-amber-500/40',
    title: '100% HITL APPROVAL GATES', subtitle: 'Zero Unapproved System Writes'
  }
]

// Bottom row: the enterprise silos the MCP bus reaches.
export const archSilos = [
  {
    icon: 'fa-code', title: 'Code Repositories',
    systems: 'GITHUB · GITLAB · BITBUCKET',
    badge: 'Read-Only AST Indexing', badgeClass: 'text-cyan-300'
  },
  {
    icon: 'fa-book-open', title: 'Knowledge & EDRMS',
    systems: 'CONFLUENCE · SHAREPOINT · ECM',
    badge: 'GraphRAG & Citation Sync', badgeClass: 'text-cyan-300'
  },
  {
    icon: 'fa-list-check', title: 'Delivery Workboards',
    systems: 'JIRA · AZURE DEVOPS · LINEAR',
    badge: 'HITL-Gated Ticket Staging', badgeClass: 'text-emerald-300'
  },
  {
    icon: 'fa-database', title: 'Core ERP & ITSM',
    systems: 'SERVICENOW · SAP · SALESFORCE',
    badge: 'Universal MCP / API Bus', badgeClass: 'text-emerald-300'
  }
]

// The sovereignty / security posture drawer that sits under the architecture
// diagram. These are compliance claims — transcribe them, never paraphrase.
export const securityPosture = [
  {
    icon: 'fa-server', iconClass: 'text-emerald-400',
    title: 'Data Residency & Hosting',
    bodyParts: [
      'Deploy inside your own ',
      { strong: 'Azure New Zealand North' },
      ' or ',
      { strong: 'AWS AP-Southeast (Auckland/Sydney)' },
      ' VNet (In-Tenant BYOC), or within Cognitech\u2019s isolated regional containers. Institutional memory files (',
      { code: 'Org > Dept > Role' },
      ') remain 100% under client ownership.'
    ]
  },
  {
    icon: 'fa-ban', iconClass: 'text-blue-400',
    title: 'Zero Model Training',
    bodyParts: [
      'All LLM inference is routed exclusively via enterprise regional APIs (AWS Bedrock / Azure OpenAI) or dedicated local open-weights models under strict zero-data-retention (ZDR) policies. Client code, prompts, and wikis are ',
      { strong: 'never' },
      ' used to train foundation models.'
    ]
  },
  {
    icon: 'fa-lock', iconClass: 'text-cyan-400',
    title: 'Zero-Trust & HITL Gates',
    bodyParts: [
      'Source code repositories are indexed strictly ',
      { strong: 'read-only' },
      ' via AST chunking. All external mutations (Jira stories, Confluence updates) are staged inside Microsoft Teams approval cards requiring explicit human sign-off.'
    ]
  },
  {
    icon: 'fa-file-shield', iconClass: 'text-purple-400',
    title: 'GCDO AI Policy & Privacy Act',
    bodyParts: [
      'Designed around the ',
      { strong: 'GCDO (Government Chief Digital Officer) Public Service AI Framework' },
      ' and Responsible AI guidance, alongside ',
      { strong: 'NZ Privacy Act 2020' },
      ' Information Privacy Principles. Hardened distroless containers and full sub-processor schedules are provided during Phase 1 PoV.'
    ]
  }
]
