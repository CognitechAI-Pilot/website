// Return On Investment section content, lifted from the approved index V2.3
// mockup. Figures are transcribed verbatim — they are commercial claims, so
// they should only ever change from an updated mockup, never by inference.

export const roiKpis = [
  {
    label: 'Human BA Output', value: '+30%', gradient: 'from-blue-400 to-cyan-300',
    title: 'Capacity Boost per BA',
    note: 'Unlocks +0.3 FTE ($42,000/yr gross capacity value) per analyst'
  },
  {
    label: 'Single BA Pilot', value: '324%', gradient: 'from-emerald-400 to-teal-300',
    title: 'Pilot Net ROI (4.2x)',
    note: '+$32,100/yr net value created on $9,900/yr ($825/mo) total spend'
  },
  {
    label: '3-BA Squad Model', value: '692%', gradient: 'from-cyan-300 to-blue-400',
    title: 'Squad Net ROI (7.9x)',
    note: '+0.9 FTE capacity unlocked for just +3.79% squad budget impact',
    featured: true
  },
  {
    label: 'Enterprise Squad Scale', value: '1,075%', gradient: 'from-purple-400 to-pink-300',
    title: '12-BA Scale (11.7x)',
    note: '+$461,100/yr net capacity value on $42,900/yr ($3,575/mo) spend'
  }
]

// The interactive calculator above the fold. `squad` is both the pill label's
// source and the key, and `spendBar` is the spend bar's width as a percentage
// of the value bar, which always runs full width.
export const squadCalculator = [
  {
    size: 1, pill: '1 BA',
    spend: '$9,900', spendNote: '$825/mo total ($13.10/workflow)',
    value: '$42,000', fte: '+0.3 FTE (~48 hrs/mo reclaimed)',
    net: '+$32,100', roiBadge: '324% Net ROI (4.2x Return)',
    spendDetail: '($6.9k Base + $2.4k Runtime + $0.6k Tokens)',
    spendBar: '23.6%', payback: '~11 Weeks',
    dollarMultiple: 'Every $1 spent unlocks $4.24 in BA capacity'
  },
  {
    size: 3, pill: '3 BAs',
    spend: '$15,900', spendNote: '$1,325/mo total ($7.01/workflow)',
    value: '$126,000', fte: '+0.9 FTE (~144 hrs/mo reclaimed)',
    net: '+$110,100', roiBadge: '692% Net ROI (7.9x Return)',
    spendDetail: '($6.9k Base + $7.2k Runtime + $1.8k Tokens)',
    spendBar: '12.6%', payback: '~6.5 Weeks',
    dollarMultiple: 'Every $1 spent unlocks $7.92 in BA capacity'
  },
  {
    size: 6, pill: '6 BAs',
    spend: '$24,900', spendNote: '$2,075/mo total ($5.49/workflow)',
    value: '$252,000', fte: '+1.8 FTE (~288 hrs/mo reclaimed)',
    net: '+$227,100', roiBadge: '912% Net ROI (10.1x Return)',
    spendDetail: '($6.9k Base + $14.4k Runtime + $3.6k Tokens)',
    spendBar: '9.9%', payback: '~5.1 Weeks',
    dollarMultiple: 'Every $1 spent unlocks $10.12 in BA capacity'
  },
  {
    size: 12, pill: '12 BAs',
    spend: '$42,900', spendNote: '$3,575/mo total ($4.73/workflow)',
    value: '$504,000', fte: '+3.6 FTE (~576 hrs/mo reclaimed)',
    net: '+$461,100', roiBadge: '1,075% Net ROI (11.7x Return)',
    spendDetail: '($6.9k Base + $28.8k Runtime + $7.2k Tokens)',
    spendBar: '8.5%', payback: '~4.4 Weeks',
    dollarMultiple: 'Every $1 spent unlocks $11.75 in BA capacity'
  }
]

// The squad the calculator opens on, and the one every "3-BA" figure elsewhere
// in the section is quoted against.
export const defaultSquadSize = 3

// Head-to-head hiring comparison beside the calculator.
export const hireVsEquip = [
  {
    label: 'Option A: Hire 1 Additional Senior BA',
    cost: '+$140,000 / yr', costClass: 'text-rose-400',
    cardClass: 'bg-slate-950/90 border border-slate-800/90',
    labelClass: 'text-slate-300',
    bar: '100%', barClass: 'bg-rose-500/80',
    footClass: 'text-slate-400',
    capacity: '+1.0 FTE', capacityClass: 'text-slate-200',
    impact: '+33.3%', impactClass: 'text-rose-400'
  },
  {
    label: 'Option B: Equip 3 BAs with Co-Workers',
    cost: '+$15,900 / yr', costClass: 'text-emerald-400',
    cardClass: 'bg-gradient-to-r from-blue-950/50 to-emerald-950/30 border-2 border-emerald-500/50 shadow-lg',
    labelClass: 'text-white',
    icon: 'fa-circle-check',
    bar: '11.4%', barClass: 'bg-gradient-to-r from-emerald-400 to-cyan-300',
    footClass: 'text-slate-200',
    capacity: '+0.9 FTE ($126k)', capacityClass: 'text-emerald-400',
    impact: 'Just +3.79%', impactClass: 'text-cyan-300'
  }
]

// Left chart. `spend` and `value` are bar widths as percentages, taken from the
// mockup's inline styles rather than derived, so the two charts stay visually
// consistent with the approved design.
export const spendVsValue = [
  { label: '1 BA Pilot', summary: '$42.0k Value vs. $9.9k Spend (+$32.1k Net | 324% ROI)',
    spend: '6%', spendTitle: '$9.9k Annual AI Spend',
    value: '24%', valueTitle: '$42.0k Gross Capacity Value',
    valueGradient: 'from-emerald-500 to-teal-400' },
  { label: '3-BA Squad', summary: '$126.0k Value vs. $15.9k Spend (+$110.1k Net | 692% ROI)',
    spend: '9%', spendTitle: '$15.9k Annual AI Spend',
    value: '48%', valueTitle: '$126.0k Gross Capacity Value',
    valueGradient: 'from-emerald-500 to-teal-400' },
  { label: '6-BA Multi-Squad', summary: '$252.0k Value vs. $24.9k Spend (+$227.1k Net | 912% ROI)',
    spend: '13%', spendTitle: '$24.9k Annual AI Spend',
    value: '74%', valueTitle: '$252.0k Gross Capacity Value',
    valueGradient: 'from-emerald-500 to-cyan-400' },
  { label: '12-BA Enterprise Scale', summary: '$504.0k Value vs. $42.9k Spend (+$461.1k Net | 1,075% ROI)',
    spend: '18%', spendTitle: '$42.9k Annual AI Spend',
    value: '100%', valueTitle: '$504.0k Gross Capacity Value',
    valueGradient: 'from-emerald-400 via-teal-400 to-cyan-300' }
]

// Right chart — the cost components that make up the all-in figure.
export const unitCostBreakdown = [
  { marker: '⊢', label: 'Shared Platform & Support ($575/mo fixed)',
    amount: '$3.04 (3-BA) | $9.13 (1-BA)', amountClass: 'text-cyan-300',
    width: '5.5%', barClass: 'bg-cyan-400' },
  { marker: '⊢', label: 'Dedicated Co-Worker Runtime ($200/BA/mo)',
    amount: '$3.17 (5.7% of Value)', amountClass: 'text-blue-400',
    width: '5.7%', barClass: 'bg-blue-500' },
  { marker: '↰', label: 'Usage-Based LLM Inference ($50/BA/mo)',
    amount: '$0.80 ← Only 1.4% of value unlocked!', amountClass: 'text-emerald-400 font-bold',
    width: '2%', barClass: 'bg-emerald-400' }
]

// Part A — per-workflow unit economics. Labels are deliberately terser than
// the prose elsewhere: the table is nested inside the methodology drawer and
// has less width to work with.
export const unitWorkflowRows = [
  { label: 'Gross BA Capacity Unlocked', sub: '($3,500/mo \u00F7 63)',
    single: '$55.56', singleNote: '(100%)', squad: '$55.56', squadNote: '(100%)',
    labelClass: 'font-medium text-white', figureClass: 'font-bold text-emerald-400' },
  { label: 'Less: Shared Platform & Support', sub: '($575/mo fixed)',
    single: '-$9.13', singleNote: '(16.4%)', squad: '-$3.04', squadNote: '(5.5%)' },
  { label: 'Less: Dedicated Co-Worker Runtime', sub: '($200/BA/mo)',
    single: '-$3.17', singleNote: '(5.7%)', squad: '-$3.17', squadNote: '(5.7%)' },
  { label: 'Less: Usage-Based Inference', sub: '($50/BA/mo)',
    single: '-$0.80', singleNote: '(1.4%)', squad: '-$0.80', squadNote: '(1.4%)' },
  { label: 'Total All-In AI Cost / Deliverable',
    single: '$13.10', singleNote: '(23.6%)', squad: '$7.01', squadNote: '(12.6%)',
    rowClass: 'bg-slate-950/60 font-semibold text-white', figureClass: 'text-amber-400' },
  { label: 'Net Capacity Value Gained',
    single: '+$42.46', singleNote: '(76.4%)', squad: '+$48.55', squadNote: '(87.4%)',
    rowClass: 'bg-emerald-950/20 font-bold text-white', labelClass: 'text-emerald-300',
    figureClass: 'text-emerald-400', noteClass: 'text-emerald-300/70', tall: true }
]

// Part B — annual economics by squad size.
export const squadEconomicsRows = [
  { squad: '1 BA Pilot', fixedBase: '$6,900', runtime: '$2,400', tokens: '$600',
    total: '$9,900', gross: '$42,000', net: '+$32,100', roi: '324% (4.2x)' },
  { squad: '3 BA Squad', fixedBase: '$6,900', runtime: '$7,200', tokens: '$1,800',
    total: '$15,900', gross: '$126,000', net: '+$110,100', roi: '692% (7.9x)', highlighted: true },
  { squad: '6 BAs', fixedBase: '$6,900', runtime: '$14,400', tokens: '$3,600',
    total: '$24,900', gross: '$252,000', net: '+$227,100', roi: '912% (10.1x)' },
  { squad: '12 BAs', fixedBase: '$6,900', runtime: '$28,800', tokens: '$7,200',
    total: '$42,900', gross: '$504,000', net: '+$461,100', roi: '1,075% (11.7x)' }
]

export const squadEconomicsHeads = [
  { label: 'Squad Size', align: 'left', className: 'pr-1' },
  { label: 'Fixed Base' },
  { label: 'Co-Worker Runtime' },
  { label: 'Tokens' },
  { label: 'Total AI Spend', className: 'text-white' },
  { label: 'Gross Value' },
  { label: 'Net Value', className: 'text-emerald-400' },
  { label: 'Net ROI (Multiple)', className: 'pl-1 text-cyan-300' }
]
