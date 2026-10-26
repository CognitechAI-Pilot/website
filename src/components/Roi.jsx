import { useMemo, useState } from 'react'
import {
  BA_COUNT_RANGE,
  DEFAULT_BA_COUNT,
  DEFAULT_BA_SALARY,
  SALARY_INPUT,
  computeRoi,
  roiKpis,
  squadPresets,
  unitCostBreakdown,
  unitWorkflowRows
} from '../data/roi'
import Icon from './Icon'

const TRACK = 'w-full bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/80'
const INPUT = 'bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-white focus:outline-none focus:border-blue-500'

export default function Roi() {
  // Kept as raw strings so a half-typed or momentarily empty field is not
  // fought by the clamp; computeRoi() clamps when it reads them.
  const [baCount, setBaCount] = useState(String(DEFAULT_BA_COUNT))
  const [baSalary, setBaSalary] = useState(String(DEFAULT_BA_SALARY))
  const [methodologyOpen, setMethodologyOpen] = useState(false)

  const calc = useMemo(() => computeRoi(baCount, baSalary), [baCount, baSalary])

  return (
    <section id="roi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest">
          WORKFORCE ECONOMICS &amp; VALUE VS. AI SPEND
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Return On Investment (ROI)</h2>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Modeled on empirical Business Analysis Co-Worker production workflows (63 deep workflows/month per BA).
          Deploying co-workers decouples delivery output from linear headcount growth.
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {roiKpis.map((kpi) => (
          <div
            key={kpi.label}
            className={`glow-card p-6 rounded-2xl text-center relative overflow-hidden ${
              kpi.featured ? 'border border-blue-500/40 bg-blue-950/20' : 'border border-slate-800'
            }`}
          >
            <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${kpi.featured ? 'text-blue-200' : 'text-slate-300'}`}>
              {kpi.label}
            </span>
            <div className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${kpi.gradient}`}>
              {kpi.value}
            </div>
            <span className="text-xs font-bold text-white block mt-1">{kpi.title}</span>
            <p className={`text-[11px] mt-1 leading-tight ${kpi.featured ? 'text-slate-200' : 'text-slate-300'}`}>
              {kpi.note}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width capacity modeller */}
      <div className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider block">
              CUSTOM WORKFORCE CAPACITY MODELER
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white">Interactive Value vs. AI Spend Calculator</h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div role="group" aria-label="Preset Squad Sizes" className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 gap-1">
              {squadPresets.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setBaCount(String(size))}
                  aria-pressed={calc.baCount === size}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    calc.baCount === size ? 'squad-pill-active' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {size === 1 ? '1 BA' : `${size} BAs`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* The free inputs; the presets just write into the headcount field */}
          <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col justify-center space-y-4">
            <div>
              <label htmlFor="custom-ba-count" className="block text-[10px] font-mono uppercase text-slate-300 font-bold mb-1.5">
                {`Custom BA Headcount (${BA_COUNT_RANGE.min}\u2013${BA_COUNT_RANGE.max} Seats)`}
              </label>
              <div className="flex items-center gap-2.5">
                <input
                  id="custom-ba-count"
                  type="number"
                  inputMode="numeric"
                  min={BA_COUNT_RANGE.min}
                  max={BA_COUNT_RANGE.max}
                  value={baCount}
                  onChange={(event) => setBaCount(event.target.value)}
                  onBlur={() => setBaCount(String(calc.baCount))}
                  className={`w-24 ${INPUT}`}
                />
                <span className="text-xs font-mono text-slate-300">Active Analysts</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <label htmlFor="custom-ba-salary" className="block text-[10px] font-mono uppercase text-slate-300 font-bold mb-1.5">
                Loaded Annual BA Cost ($ NZD)
              </label>
              <div className="flex items-center gap-2.5">
                <input
                  id="custom-ba-salary"
                  type="number"
                  inputMode="numeric"
                  min={SALARY_INPUT.min}
                  max={SALARY_INPUT.max}
                  step={SALARY_INPUT.step}
                  value={baSalary}
                  onChange={(event) => setBaSalary(event.target.value)}
                  onBlur={() => setBaSalary(String(calc.baSalary))}
                  className={`w-32 ${INPUT}`}
                />
                <span className="text-xs font-mono text-slate-300">NZD / year</span>
              </div>
            </div>
          </div>

          {/* The three figures the inputs drive */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-slate-300 uppercase block mb-1">All-In Annual AI Spend</span>
              <div className="text-2xl sm:text-3xl lg:text-[clamp(1.125rem,1.9vw,1.875rem)] font-black text-white font-mono" aria-live="polite">
                {calc.spend}<span className="text-xs text-slate-300 font-normal">/yr</span>
              </div>
              <span className="text-[11px] font-mono text-slate-300 block mt-1.5">{calc.spendNote}</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-cyan-300 uppercase block mb-1">Gross Capacity Unlocked</span>
              <div className="text-2xl sm:text-3xl lg:text-[clamp(1.125rem,1.9vw,1.875rem)] font-black text-cyan-300 font-mono">
                {calc.value}<span className="text-xs text-slate-300 font-normal">/yr</span>
              </div>
              <span className="text-[11px] font-mono text-slate-200 block mt-1.5">{calc.fte}</span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/40 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold block mb-1">Net Capacity Value Created</span>
              <div className="text-2xl sm:text-3xl lg:text-[clamp(1.125rem,1.9vw,1.875rem)] font-black text-emerald-400 font-mono">
                {calc.net}<span className="text-xs text-emerald-200 font-normal">/yr</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-300 font-bold block mt-1.5">{calc.roiBadge}</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-start justify-between gap-3 text-xs font-mono">
              <span className="text-slate-200">
                Annual AI Investment <span className="text-slate-300 text-[11px]">{calc.spendDetail}</span>
              </span>
              <span className="text-white font-bold">{calc.spend}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
              <div className="bg-slate-400 h-full rounded-full transition-all duration-500" style={{ width: calc.spendBar }}></div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-start justify-between gap-3 text-xs font-mono">
              <span className="text-emerald-300 font-semibold">
                Gross Human BA Capacity Unlocked <span className="text-slate-300 text-[11px]">{calc.valueDetail}</span>
              </span>
              <span className="text-emerald-400 font-bold">{calc.value}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-emerald-500/30">
              <div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-300 h-full rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-slate-300">
            <Icon name="bolt" className="text-amber-400 mr-1.5" />Payback Period:{' '}
            <strong className="text-white">{calc.payback}</strong>
          </span>
          <span className="text-cyan-300 font-bold">{calc.dollarMultiple}</span>
        </div>
      </div>

      {/* Basis of estimate — the disclaimer now reads on the button itself */}
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 overflow-hidden shadow-xl">
        <button
          type="button"
          onClick={() => setMethodologyOpen((open) => !open)}
          aria-expanded={methodologyOpen}
          aria-controls="roi-methodology"
          className="w-full px-6 py-4 flex items-center justify-between gap-3 text-left hover:bg-slate-900/60 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-200 group-hover:text-white">
            <Icon name="scale-balanced" className="text-cyan-400 flex-shrink-0" />
            <span>
              Basis of Estimate: Illustrative pilot benchmarks ($140,000 NZD Senior BA baseline; +30% capacity gain)
              &mdash; empirically calibrated to your repositories during Phase 1 &amp; Phase 2.
            </span>
          </span>
          <span className="text-xs font-mono text-blue-300 flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
            <span>{methodologyOpen ? 'Collapse Workings' : 'Expand Workings'}</span>
            <Icon name="chevron-down" className={`text-[10px] transition-transform duration-300 ${methodologyOpen ? 'rotate-180' : ''}`} />
          </span>
        </button>

        {methodologyOpen && (
          <div id="roi-methodology" className="fade-in border-t border-slate-800/60">
            <div className="p-6 space-y-8 text-[11px] text-slate-300 leading-relaxed">
              {/* Written assumptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800/80">
                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-blue-300">
                    1. Workforce &amp; Productivity Baseline
                  </strong>
                  <p>
                    <strong className="text-white">Human Analyst Baseline:</strong> Modeled on a standard New Zealand
                    Senior Technology Business Analyst fully loaded annual cost of{' '}
                    <strong className="text-white">$140,000 NZD/year</strong> ($11,667/month).
                  </p>
                  <p>
                    <strong className="text-white">Workflow Volume &amp; Capacity Gain:</strong> Assumes an empirical
                    baseline of 3 deep discovery workflows per day across 21 working days (
                    <strong className="text-white">63 completed workflows/month</strong> or 756/year per BA).
                    Offloading legacy repository AST tracing, impact assessments, and ticket scaffolding unlocks an
                    estimated{' '}
                    <strong className="text-white">+30% productive capacity (+0.3 FTE or ~48 hours/month)</strong>,
                    valued at $42,000 NZD/year ($3,500/month) per analyst or{' '}
                    <strong className="text-white">$55.56 NZD</strong> in gross capacity value per completed workflow.
                  </p>
                </div>

                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-cyan-300">
                    2. Platform, Co-Worker Runtime &amp; Token Assumptions
                  </strong>
                  <p>
                    <strong className="text-white">Fixed Blueprint Base ($575/mo | $6,900/yr):</strong> Models our
                    standard Managed Cloud support &amp; governance retainer ($500/mo per Standardized Role Blueprint)
                    plus the $75/mo shared vector/search base. Organizations deploying multiple distinct Role
                    Blueprints, custom enterprise MCP connectors, or Sovereign In-Tenant (BYOC) environments scale
                    across our $500&ndash;$2,500/mo Phase 3 retainer tiers.
                  </p>
                  <p>
                    <strong className="text-white">Dedicated Co-Worker Runtime ($200/BA/mo | $2,400/BA/yr):</strong>{' '}
                    Covers per-user Co-Worker orchestration runtime licensing and isolated container execution across
                    either Cognitech Managed Cloud or client-hosted (in-tenant) environments.
                  </p>
                  <p>
                    <strong className="text-white">Usage-Based LLM Inference ($50/BA/mo | $600/BA/yr):</strong> Modeled
                    on multi-turn agentic execution (~120,000 input tokens and ~8,000 output tokens per deep workflow,
                    or <strong className="text-white">~$0.80 NZD per workflow</strong>) routed via enterprise-grade
                    regional endpoints (e.g., Claude Sonnet on AWS Bedrock) with zero model training retention.
                  </p>
                </div>

                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-emerald-300">
                    3. FinOps Calibration &amp; Commercial Disclaimer
                  </strong>
                  <p>
                    All figures, return multiples, and unit economics presented are illustrative estimates based on
                    internal pilot benchmarks in New Zealand Dollars (NZD) exclusive of GST. Actual token consumption,
                    infrastructure utilization, and productivity gains will vary depending on repository size, legacy
                    documentation density, external MCP integration complexity, and user adoption.
                  </p>
                  <p>
                    During <strong className="text-white">Phase 2 (Orchestration &amp; Integration SOW)</strong>,
                    Cognitech conducts a live <strong className="text-white">FinOps Calibration</strong> inside the
                    client&rsquo;s environment to establish empirical token baselines and configure hard-capped monthly
                    spend guardrails prior to ongoing production deployment.
                  </p>
                </div>
              </div>

              {/* Unit deliverable chart beside the auditable schedule */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-7 glow-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <Icon name="layer-group" className="text-cyan-400 text-sm" />
                        <h3 className="text-base font-bold text-white">Unit Deliverable Arbitrage (Per Completed Workflow)</h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider whitespace-nowrap">
                        VISUAL BREAKDOWN
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      Each BA executes 63 deep workflows/month (189 workflows/month across a 3-BA squad). Usage-based
                      LLM tokens represent just <strong className="text-white">1.4% ($0.80)</strong> of the{' '}
                      <strong className="text-white">$55.56</strong> capacity value unlocked per workflow:
                    </p>

                    <div className="space-y-4 text-xs">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                          <span className="text-white font-semibold">BA Capacity Value Unlocked / Workflow ($3,500/mo &divide; 63)</span>
                          <span className="text-emerald-300 font-bold whitespace-nowrap">$55.56 (100%)</span>
                        </div>
                        <div className={`${TRACK} h-3`}>
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                          <span className="text-white font-semibold">All-In AI Cost / Workflow (3-BA Squad: $7.01 | 1-BA: $13.10)</span>
                          <span className="text-amber-300 font-bold text-right">$7.01 Total (12.6% of Value)</span>
                        </div>
                        <div className={`${TRACK} h-3`}>
                          <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full" style={{ width: '12.6%' }}></div>
                        </div>
                      </div>

                      <div className="pl-4 border-l-2 border-slate-800 space-y-3 pt-1">
                        {unitCostBreakdown.map((row) => (
                          <div key={row.label} className="space-y-1">
                            <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                              <span className="text-slate-200">{`${row.marker} ${row.label}`}</span>
                              <span className={`${row.amountClass} text-right`}>{row.amount}</span>
                            </div>
                            <div className="w-full bg-slate-900/90 rounded-full h-2 overflow-hidden">
                              <div className={`${row.barClass} h-full rounded-full`} style={{ width: row.width }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-slate-300">Net Capacity Value Gained / Workflow:</span>
                    <span className="text-emerald-300 font-bold text-right">+$48.55 (87.4% Margin @ 3 BAs) | +$42.46 (76.4% @ 1 BA)</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block mb-1">
                      AUDITABLE SCHEDULE
                    </span>
                    <h4 className="text-base font-bold text-white mb-0.5">Value vs. AI Spend per Completed Workflow</h4>
                    <p className="text-[11px] text-slate-300 mb-4">
                      1 BA (63 workflows/mo) vs. 3-BA Squad (189 workflows/mo)
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[11px]">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-300 font-mono text-[10px] uppercase">
                            <th scope="col" className="py-2 pr-1">Component</th>
                            <th scope="col" className="py-2 px-1 text-right">Single BA</th>
                            <th scope="col" className="py-2 pl-1 text-right text-cyan-300">3-BA Squad</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/70 text-slate-200">
                          {unitWorkflowRows.map((row) => {
                            const pad = row.tall ? 'py-3' : 'py-2.5'
                            const note = row.noteClass ?? 'text-slate-300'
                            return (
                              <tr key={row.label} className={row.rowClass ?? ''}>
                                <th scope="row" className={`${pad} pr-1 text-left font-normal ${row.labelClass ?? ''}`}>
                                  {row.label}
                                  {row.sub && (
                                    <span className="block text-[10px] text-slate-300 font-mono">{row.sub}</span>
                                  )}
                                </th>
                                <td className={`${pad} px-1 text-right font-mono ${row.figureClass ?? ''}`}>
                                  {row.single}
                                  <span className={`text-[10px] ${note} block`}>{row.singleNote}</span>
                                </td>
                                <td className={`${pad} pl-1 text-right font-mono ${row.figureClass ?? ''}`}>
                                  {row.squad}
                                  <span className={`text-[10px] ${note} block`}>{row.squadNote}</span>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}
