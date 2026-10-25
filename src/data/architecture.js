// "The Enterprise AI Gap" and the simplified Co-Worker architecture diagram,
// transcribed from the approved index V2.3 mockup. Copy is verbatim — these are
// positioning claims, so they change only from an updated mockup.

// Three contrast columns. The first two are the commodity categories; the third
// is ours and carries the emphasised card treatment.
export const gapColumns = [
  {
    eyebrow: 'COMMODITY CHAT SEATS',
    title: 'Generic Productivity Chatbots',
    examples: 'e.g., standard M365 Copilot / ChatGPT seats',
    cardClass: 'border border-slate-800/90',
    headClass: 'border-slate-800',
    eyebrowClass: 'text-rose-400 font-semibold',
    examplesClass: 'text-slate-200',
    icon: 'fa-xmark',
    iconClass: 'text-rose-400',
    points: [
      {
        title: 'Blank-Prompt & Session Amnesia:',
        body: 'Analysts must manually locate documents and re-prompt from scratch; project nuances vanish when the chat tab closes.'
      },
      {
        title: 'Single-Vendor Ecosystem Lock-In:',
        body: "Trapped inside a single vendor's productivity suite and proprietary LLM pricing with no cross-silo AST code tracing."
      },
      {
        title: 'Vendor-Hosted SaaS Boundary:',
        body: 'No custom operational policy layer or multi-system staging; users must manually copy-paste outputs into workboards.'
      }
    ],
    footIcon: 'fa-circle-exclamation',
    footClass: 'border-slate-800/80 text-rose-400 font-semibold',
    foot: 'Result: 10–15% ad-hoc drafting speed; zero end-to-end workflow automation.'
  },
  {
    eyebrow: 'DEVELOPER CODING ASSISTANTS',
    title: 'Developer CLI & IDE Plugins',
    examples: 'e.g., Claude Code CLI / GitHub Copilot',
    cardClass: 'border border-slate-800/90',
    headClass: 'border-slate-800',
    eyebrowClass: 'text-amber-400 font-semibold',
    examplesClass: 'text-slate-200',
    icon: 'fa-xmark',
    iconClass: 'text-amber-400',
    points: [
      {
        title: 'Built for Coders, Not Analysts:',
        body: 'Operates inside a terminal or IDE. Business & Policy Analysts require structured Teams, Confluence, and EDRMS workflows.'
      },
      {
        title: 'Single-Model API & Token Burn Risk:',
        body: 'Locked to a single model vendor; raw unindexed file-reading loops lack FinOps circuit breakers and risk API bill shock.'
      },
      {
        title: 'CISO Governance Veto:',
        body: 'Direct user-token write access to repos and workboards without a centralized operational policy layer or HITL approval gates.'
      }
    ],
    footIcon: 'fa-triangle-exclamation',
    footClass: 'border-slate-800/80 text-amber-400 font-semibold',
    foot: 'Result: Built for individual engineers; fails enterprise BA & policy compliance.'
  },
  {
    eyebrow: 'GOVERNED ENTERPRISE APPLIANCE',
    title: 'Cognitech Digital Co-Worker',
    examples: 'In-Tenant or Managed Role Runtime',
    cardClass: 'border-2 border-blue-500/60 bg-gradient-to-b from-blue-950/30 to-slate-950 shadow-2xl shadow-blue-600/10',
    headClass: 'border-blue-500/30',
    eyebrowClass: 'text-blue-400 font-bold',
    examplesClass: 'text-blue-200',
    icon: 'fa-circle-check',
    iconClass: 'text-emerald-400',
    points: [
      {
        // The code span is markup rather than copy, so this point renders from
        // its parts instead of a single string.
        titleParts: ['Compounding ', { code: 'Org > Dept > Role' }, ' Memory:'],
        body: 'Retains standing instructions, domain glossaries, and institutional IP across sessions inside your own storage volumes.'
      },
      {
        title: 'Decoupled LLM + Universal MCP Bus:',
        body: 'Model-agnostic router (swap Claude, OpenAI, or sovereign models anytime) + universal API/MCP connectors across Jira, GitHub & ERP with zero vendor lock-in.'
      },
      {
        title: 'In-Tenant Harness & Policy Layer:',
        bodyParts: [
          'Runs in Cognitech Cloud or ',
          { strong: 'inside your own cloud tenant' },
          '; enforces FinOps caps (~$0.80/workflow) and 100% MS Teams HITL write approvals.'
        ]
      }
    ],
    footIcon: 'fa-bolt',
    footClass: 'border-blue-500/30 text-emerald-400 font-bold',
    foot: 'Result: Unlocks +0.3 FTE ($42,000/yr) per analyst with zero vendor lock-in.'
  }
]

// The two halves of the "manual chat way vs. Co-Worker way" banner.
export const workflowContrast = [
  {
    icon: 'fa-hourglass-half',
    iconClass: 'text-rose-400',
    title: 'Manual Chat Way (2–3 Days):',
    body: ' Hunt 15 wikis → Ask dev for code logic → Re-prompt 10x → Type Jira tickets',
    bodyClass: 'text-rose-400'
  },
  {
    icon: 'fa-wand-magic-sparkles',
    iconClass: 'text-emerald-400',
    title: 'Co-Worker Way (< 5 Mins):',
    body: ' Trigger in Teams → Auto-query AST + Wiki + Memory → 1-Click Approve Jira Card',
    bodyClass: 'text-emerald-400'
  }
]

// Top row of the diagram: what the runtime sits between.
export const archTopNodes = [
  {
    icon: 'fa-comments',
    hoverClass: 'hover:border-blue-500/50',
    iconClass: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    title: 'HUMAN ANALYST WORKSPACE',
    subtitle: 'MS Teams · Slack · 1-Click HITL Approval Cards'
  },
  {
    icon: 'fa-microchip',
    hoverClass: 'hover:border-purple-500/50',
    iconClass: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    title: 'DECOUPLED LLM ENGINE (ZERO LOCK-IN)',
    subtitle: 'Claude Bedrock · Azure OpenAI · Sovereign Local Models'
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
    badge: 'Read-Only AST Indexing', badgeClass: 'text-cyan-400'
  },
  {
    icon: 'fa-book-open', title: 'Knowledge & EDRMS',
    systems: 'CONFLUENCE · SHAREPOINT · ECM',
    badge: 'GraphRAG & Citation Sync', badgeClass: 'text-cyan-400'
  },
  {
    icon: 'fa-list-check', title: 'Delivery Workboards',
    systems: 'JIRA · AZURE DEVOPS · LINEAR',
    badge: 'HITL-Gated Ticket Staging', badgeClass: 'text-emerald-400'
  },
  {
    icon: 'fa-database', title: 'Core ERP & ITSM',
    systems: 'SERVICENOW · SAP · SALESFORCE',
    badge: 'Universal MCP / API Bus', badgeClass: 'text-emerald-400'
  }
]
