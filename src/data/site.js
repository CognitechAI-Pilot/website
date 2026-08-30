export const contactEmail = 'dinesh@cognitech.co.nz'

export const navLinks = [
  { href: '#about', label: 'About Us' },
  {
    label: 'Digital Co-Worker',
    children: [
      { href: '#delivery-coworker', label: 'Technology Delivery Lifecycle Co-Worker' },
      { href: '#framework', label: 'AI Strategy & Creation Framework' },
      { href: '#customers', label: 'Digital Co-Workers in Action' },
      { href: '#roi', label: 'Return On Investment (ROI)' }
    ]
  },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Meet the Team' }
]

// Values MUST match the <option> values in Contact.jsx — the pricing CTAs
// preselect the enquiry purpose by value.
export const enquiryPurposes = [
  'Technology BA Digital Co-Worker Pilot',
  'Executive / Personal Assistant Co-Worker',
  'Sovereign Onshore Architecture Consultation',
  'AI Strategy Readiness & PoC',
  'Digital Co-Worker Support Retainer',
  'Policy or Operations Co-Worker Roadmap',
  'General Executive Inquiry'
]

// Each pricing CTA preselects one of the purposes above. Keeping the values in
// one place is what stops them drifting apart — in the static site two of the
// three CTAs passed strings with no matching option, which blanked the select.
export const pricingPurpose = {
  poc: 'AI Strategy Readiness & PoC',
  sovereign: 'Sovereign Onshore Architecture Consultation',
  retainer: 'Digital Co-Worker Support Retainer'
}

export const teamMembers = [
  {
    name: 'Dinesh',
    image: '/dinesh.jpg',
    role: 'Principal Business Analyst & AI Solutions Orchestrator',
    detail: 'Enterprise AI strategy, delivery orchestration and governance',
    highlighted: true
  },
  {
    name: 'Malintha',
    image: '/malintha_original.jpg',
    role: 'Lead AI Systems Architect',
    detail: 'Enterprise systems integration & technical discovery'
  },
  {
    name: 'Chamodya',
    image: '/Chamodya.jpg',
    role: 'LLM Engineering Specialist',
    detail: 'Contextual ingestion, fine-tuning & vector architectures'
  }
]

// Roadmap outcome cards, per role. Lifted from the v2 render logic.
export const roadmapOutcomes = {
  policy: [
    { title: 'Policy Traceability', text: 'Targeted reduction in legislative and regulatory compliance review cycles.', icon: 'fa-magnifying-glass' },
    { title: 'Sovereign Air-Gap', text: 'Onshore processing across local cloud providers guaranteeing total data sovereignty.', icon: 'fa-lock' },
    { title: 'Automated Compliance Auditability', text: 'Execution trace logging for board and audit committee oversight.', icon: 'fa-file-contract' }
  ],
  operations: [
    { title: 'Inquiry Automation', text: 'Automates routine vendor and back-office shared services queries.', icon: 'fa-comments' },
    { title: 'Enterprise System Integration', text: 'Safely executes approved actions across core enterprise CRM, ERP, and HRIS platforms.', icon: 'fa-diagram-project' },
    { title: 'Zero Data Leakage', text: 'Zero-trust IAM bounds ensure strict role-based data permissions.', icon: 'fa-shield-cat' }
  ],
  executive: [
    { title: 'Contextual Cross-Squad Synthesis', text: 'Summarizes multi-squad velocity, blocker logs, and release readiness into board briefs.', icon: 'fa-chart-pie' },
    { title: 'Zero Data Retention (ZDR)', text: 'Complete tenant isolation ensures confidential executive decisions never train external models.', icon: 'fa-user-shield' },
    { title: 'Authenticated Workflow Approvals', text: 'Reviews and signs off Jira epics and procurement items with human-in-the-loop security.', icon: 'fa-signature' }
  ]
}
