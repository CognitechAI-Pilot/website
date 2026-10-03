export const contactEmail = 'dinesh@cognitech.co.nz'

// Navigation, matching the approved index.html mockup. `children` makes a
// dropdown; `to` sends the link to another route, `href` to an anchor on the
// current page.
export const navLinks = [
  { href: '#about', label: 'About Us' },
  {
    label: 'Co-Workers',
    width: 'w-72',
    children: [
      { href: '#role-box-delivery', label: 'Technology Business Analyst' },
      { href: '#role-box-policy', label: 'Policy & Regulatory' },
      { href: '#role-box-operations', label: 'Enterprise Operations' },
      { href: '#role-box-executive', label: 'Executive & Personal Assistant' }
    ]
  },
  {
    label: 'Case Studies',
    width: 'w-72',
    children: [{ href: '#case-study', label: 'TECHNOLOGY BA – LOGISTIC & POSTAL' }]
  },
  {
    label: 'Engagement Process',
    width: 'w-80',
    children: [
      { href: '#engagement-p1', label: 'Phase 1: AI Health Check and Co-Worker PoV' },
      { href: '#engagement-p2', label: 'Phase 2: Co-Worker Orchestration and Integration' },
      { href: '#engagement-p3', label: 'Phase 3: Support & Governance' }
    ]
  },
  {
    label: 'Pricing',
    width: 'w-64',
    children: [
      { href: '#pricing', label: 'Commercial Tiers' },
      { href: '#roi', label: 'Return On Investment (ROI)' }
    ]
  },
  {
    label: 'Resources',
    width: 'w-72',
    children: [{ to: '/resources#blueprint', label: 'Digital Co-Worker Blueprint' }]
  },
  { href: '#team', label: 'Meet the Team' }
]

// Values MUST match the <option> values rendered by Contact.jsx — the pricing
// CTAs preselect the enquiry purpose by value.
export const enquiryPurposes = [
  { value: 'AI Health Check and Co-Worker PoV', label: 'AI Health Check and Co-Worker PoV ($15k)' },
  { value: 'Co-Worker Orchestration and Integration', label: 'Co-Worker Orchestration and Integration (SOW)' },
  { value: 'Co-Worker Support and Governance', label: 'Co-Worker Support & Governance Retainer' },
  { value: 'Technology BA Co-Worker', label: 'Technology BA Co-Worker Pilot' },
  { value: 'General Executive Inquiry', label: 'General Executive Inquiry' }
]

// Each pricing CTA preselects one of the purposes above. Keeping them in one
// place is what stops the two lists drifting apart.
export const pricingPurpose = {
  1: 'AI Health Check and Co-Worker PoV',
  2: 'Co-Worker Orchestration and Integration',
  3: 'Co-Worker Support and Governance'
}
