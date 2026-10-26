// Return On Investment content, lifted from the approved index V2.6 mockup.
//
// Two different kinds of number live here. The commercial CONSTANTS below are
// transcribed claims — they change only from an updated mockup. Everything the
// calculator shows is DERIVED from them by computeRoi() using the mockup's own
// formula, so the figures move with the visitor's inputs instead of being
// transcribed one by one.

export const roiKpis = [
  {
    label: 'Unit Token Arbitrage', value: '$0.80', gradient: 'from-blue-400 to-cyan-300',
    title: 'Tokens vs. $55.56 Value',
    note: 'Unlocks +0.3 FTE ($42,000/yr gross capacity) per analyst across 63 workflows/mo'
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

// ---- Commercial constants (transcribed) -----------------------------------
export const FIXED_BASE_YEAR = 6900        // $575/mo shared blueprint base
export const RUNTIME_PER_BA_YEAR = 2400    // $200/BA/mo Co-Worker runtime
export const TOKENS_PER_BA_YEAR = 600      // $50/BA/mo inference allowance
export const WORKFLOWS_PER_BA_YEAR = 756   // 63/month across 12 months
export const CAPACITY_GAIN = 0.3           // +30% productive capacity per BA
export const HOURS_RECLAIMED_PER_BA_MONTH = 48

// Presets, and the bounds the mockup's script enforces on the free inputs.
export const squadPresets = [1, 3, 6, 12]
export const DEFAULT_BA_COUNT = 3
export const DEFAULT_BA_SALARY = 140000
export const BA_COUNT_RANGE = { min: 1, max: 50 }
export const BA_SALARY_RANGE = { min: 60000, max: 400000 }
// What the number inputs offer before clamping, per the mockup's markup.
export const SALARY_INPUT = { min: 80000, max: 300000, step: 5000 }

const clamp = (value, { min, max }) => Math.max(min, Math.min(max, value))
const formatNZD = (n) => `$${Math.round(n).toLocaleString('en-NZ')}`

/**
 * The mockup's calculateCustomRoi(), ported verbatim. Returns every string the
 * calculator renders, so the component stays presentation-only.
 */
export function computeRoi(rawCount, rawSalary) {
  const baCount = clamp(parseInt(rawCount, 10) || BA_COUNT_RANGE.min, BA_COUNT_RANGE)
  const baSalary = clamp(parseInt(rawSalary, 10) || DEFAULT_BA_SALARY, BA_SALARY_RANGE)

  const runtimeYr = baCount * RUNTIME_PER_BA_YEAR
  const tokensYr = baCount * TOKENS_PER_BA_YEAR
  const totalSpendYr = FIXED_BASE_YEAR + runtimeYr + tokensYr
  const workflowsPerYr = baCount * WORKFLOWS_PER_BA_YEAR
  const costPerWorkflow = totalSpendYr / workflowsPerYr

  const grossValuePerBa = baSalary * CAPACITY_GAIN
  const grossValueYr = baCount * grossValuePerBa
  const netValueYr = grossValueYr - totalSpendYr
  const ratio = grossValueYr / totalSpendYr

  return {
    baCount,
    baSalary,
    spend: formatNZD(totalSpendYr),
    spendNote: `${formatNZD(totalSpendYr / 12)}/mo total ($${costPerWorkflow.toFixed(2)}/workflow)`,
    value: formatNZD(grossValueYr),
    fte: `+${(baCount * CAPACITY_GAIN).toFixed(1)} FTE (~${Math.round(baCount * HOURS_RECLAIMED_PER_BA_MONTH)} hrs/mo reclaimed)`,
    net: `+${formatNZD(netValueYr)}`,
    roiBadge: `${Math.round((netValueYr / totalSpendYr) * 100).toLocaleString('en-NZ')}% Net ROI (${ratio.toFixed(1)}x Return)`,
    spendDetail: `($6.9k Base + $${(runtimeYr / 1000).toFixed(1)}k Runtime + $${(tokensYr / 1000).toFixed(1)}k Tokens)`,
    valueDetail: `(${formatNZD(grossValuePerBa)}/yr per BA)`,
    spendBar: `${Math.min(100, Math.max(5, (totalSpendYr / grossValueYr) * 100)).toFixed(1)}%`,
    payback: `~${((totalSpendYr / grossValueYr) * 52).toFixed(1)} Weeks`,
    dollarMultiple: `Every $1 spent unlocks $${ratio.toFixed(2)} in BA capacity`
  }
}

// Cost components making up the all-in per-workflow figure.
export const unitCostBreakdown = [
  { marker: '⊢', label: 'Shared Platform & Support ($575/mo fixed)',
    amount: '$3.04 (3-BA) | $9.13 (1-BA)', amountClass: 'text-cyan-300',
    width: '5.5%', barClass: 'bg-cyan-400' },
  { marker: '⊢', label: 'Dedicated Co-Worker Runtime ($200/BA/mo)',
    amount: '$3.17 (5.7% of Value)', amountClass: 'text-blue-300',
    width: '5.7%', barClass: 'bg-blue-500' },
  { marker: '↰', label: 'Usage-Based LLM Inference ($50/BA/mo)',
    amount: '$0.80 ← Only 1.4% of value unlocked!', amountClass: 'text-emerald-300 font-bold',
    width: '2%', barClass: 'bg-emerald-400' }
]

// The auditable per-workflow schedule beside that chart.
export const unitWorkflowRows = [
  { label: 'Gross BA Capacity Unlocked', sub: '($3,500/mo ÷ 63)',
    single: '$55.56', singleNote: '(100%)', squad: '$55.56', squadNote: '(100%)',
    labelClass: 'font-medium text-white', figureClass: 'font-bold text-emerald-300' },
  { label: 'Less: Shared Platform & Support', sub: '($575/mo fixed)',
    single: '-$9.13', singleNote: '(16.4%)', squad: '-$3.04', squadNote: '(5.5%)' },
  { label: 'Less: Dedicated Co-Worker Runtime', sub: '($200/BA/mo)',
    single: '-$3.17', singleNote: '(5.7%)', squad: '-$3.17', squadNote: '(5.7%)' },
  { label: 'Less: Usage-Based Inference', sub: '($50/BA/mo)',
    single: '-$0.80', singleNote: '(1.4%)', squad: '-$0.80', squadNote: '(1.4%)' },
  { label: 'Total All-In AI Cost / Deliverable',
    single: '$13.10', singleNote: '(23.6%)', squad: '$7.01', squadNote: '(12.6%)',
    rowClass: 'bg-slate-950/60 font-semibold text-white', figureClass: 'text-amber-300' },
  { label: 'Net Capacity Value Gained',
    single: '+$42.46', singleNote: '(76.4%)', squad: '+$48.55', squadNote: '(87.4%)',
    rowClass: 'bg-emerald-950/20 font-bold text-white', labelClass: 'text-emerald-300',
    figureClass: 'text-emerald-300', noteClass: 'text-emerald-200', tall: true }
]
