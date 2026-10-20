import { useState } from 'react'
import {
  roiKpis,
  spendVsValue,
  squadEconomicsHeads,
  squadEconomicsRows,
  unitCostBreakdown,
  unitWorkflowRows
} from '../data/roi'

const TRACK = 'w-full bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/80'

export default function Roi() {
  // The mockup toggled a max-height class; the drawer unmounts here instead, so
  // screen readers do not read a collapsed panel.
  const [methodologyOpen, setMethodologyOpen] = useState(false)

  return (
    <section id="roi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
          WORKFORCE ECONOMICS &amp; VALUE VS. AI SPEND
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">Return On Investment (ROI)</h2>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          Modeled on empirical Business Analysis Co-Worker production workflows (63 deep workflows/month per BA).
          Deploying co-workers decouples delivery output from linear headcount growth&mdash;delivering up to an 11.7x
          return on direct AI spend.
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
            <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${kpi.featured ? 'text-blue-300' : 'text-slate-400'}`}>
              {kpi.label}
            </span>
            <div className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${kpi.gradient}`}>
              {kpi.value}
            </div>
            <span className="text-xs font-bold text-white block mt-1">{kpi.title}</span>
            <p className={`text-[11px] mt-1 leading-tight ${kpi.featured ? 'text-slate-300' : 'text-slate-400'}`}>
              {kpi.note}
            </p>
          </div>
        ))}
      </div>

      {/* Dual infographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Spend vs. value created */}
        <div className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-chart-line text-emerald-400 text-sm"></i>
                <h3 className="text-base sm:text-lg font-bold text-white">Total Annual AI Spend vs. Value Created</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap">
                VALUE VS. SPEND
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Comparing all-inclusive annual AI spend (fixed base + $2,400/yr isolated container + $600/yr token
              allowance per BA) against gross capacity value unlocked ($42,000/yr per BA):
            </p>

            <div className="space-y-5 text-xs">
              {spendVsValue.map((row) => (
                <div key={row.label} className="space-y-1.5">
                  <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                    <span className="text-white font-semibold">{row.label}</span>
                    <span className="text-emerald-400 font-bold text-right">{row.summary}</span>
                  </div>
                  <div className="space-y-1">
                    <div className={`${TRACK} h-2`}>
                      <div className="bg-slate-500 h-full rounded-full" style={{ width: row.spend }} title={row.spendTitle}></div>
                    </div>
                    <div className={`${TRACK} h-2.5`}>
                      <div
                        className={`bg-gradient-to-r ${row.valueGradient} h-full rounded-full`}
                        style={{ width: row.value }}
                        title={row.valueTitle}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-2 rounded-sm bg-slate-500 inline-block flex-shrink-0"></span>
              <span>Total Annual AI Spend (Base + Containers + Tokens)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-2 rounded-sm bg-gradient-to-r from-emerald-500 to-cyan-400 inline-block flex-shrink-0"></span>
              <span>Gross Capacity Value Created ($42k/BA)</span>
            </div>
          </div>
        </div>

        {/* Unit deliverable arbitrage */}
        <div className="glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-layer-group text-cyan-400 text-sm"></i>
                <h3 className="text-base sm:text-lg font-bold text-white">Unit Deliverable Arbitrage (Per Workflow)</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider whitespace-nowrap">
                UNIT ECONOMICS
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Each BA executes 63 deep workflows/month (189 workflows/month across a 3-BA squad). Usage-based LLM
              tokens represent just <strong className="text-white">1.4% ($0.80)</strong> of the{' '}
              <strong className="text-white">$55.56</strong> capacity value unlocked per workflow:
            </p>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                  <span className="text-white font-semibold">BA Capacity Value Unlocked / Workflow ($3,500/mo &divide; 63)</span>
                  <span className="text-emerald-400 font-bold whitespace-nowrap">$55.56 (100%)</span>
                </div>
                <div className={`${TRACK} h-3`}>
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                  <span className="text-white font-semibold">All-In AI Cost / Workflow (3-BA Squad: $7.01 | 1-BA: $13.10)</span>
                  <span className="text-amber-400 font-bold text-right">$7.01 Total (12.6% of Value)</span>
                </div>
                <div className={`${TRACK} h-3`}>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full" style={{ width: '12.6%' }}></div>
                </div>
              </div>

              <div className="pl-4 border-l-2 border-slate-800 space-y-3 pt-1">
                {unitCostBreakdown.map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex items-start justify-between gap-3 font-mono text-[11px]">
                      <span className="text-slate-300">{row.marker} {row.label}</span>
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
            <span className="text-slate-400">Net Capacity Value Gained / Workflow:</span>
            <span className="text-emerald-400 font-bold text-right">+$48.55 (87.4% Margin @ 3 BAs) | +$42.46 (76.4% @ 1 BA)</span>
          </div>
        </div>
      </div>

      {/* Squad budget arbitrage, promoted out of the Part B card to a banner */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-blue-500/30 flex items-start gap-3.5 shadow-lg">
        <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Squad Budget Arbitrage:</strong> Equipping an existing 3-BA
          squad with Digital Co-Workers unlocks{' '}
          <strong className="text-emerald-400 font-bold">+0.9 FTE of extra delivery capacity</strong> (3 &times; +0.3
          FTE) while increasing the $420k squad budget by just{' '}
          <strong className="text-cyan-300 font-bold">+3.79%</strong> (+$15,900/yr)&mdash;compared to a{' '}
          <strong className="text-amber-400 font-bold">+33.3% budget expansion</strong> (+$140,000/yr) to hire a 4th
          human BA for similar capacity.
        </p>
      </div>

      {/* Methodology, assumptions and the detailed workings */}
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 overflow-hidden shadow-xl">
        <button
          type="button"
          onClick={() => setMethodologyOpen((open) => !open)}
          aria-expanded={methodologyOpen}
          aria-controls="roi-methodology"
          className="w-full px-6 py-4 flex items-center justify-between gap-3 text-left hover:bg-slate-900/60 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-300 group-hover:text-white">
            <i className="fa-solid fa-sliders text-blue-400"></i>
            <span>View Economic Modeling Methodology, Assumptions &amp; Detailed Financial Workings</span>
          </span>
          <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5 flex-shrink-0">
            <span>{methodologyOpen ? 'Collapse' : 'Expand'}</span>
            <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${methodologyOpen ? 'rotate-180' : ''}`}></i>
          </span>
        </button>

        {methodologyOpen && (
          <div id="roi-methodology" className="fade-in border-t border-slate-800/60">
            <div className="p-6 space-y-8 text-[11px] text-slate-400 leading-relaxed">
              {/* Written assumptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800/80">
                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-blue-400">
                    1. Workforce &amp; Productivity Baseline
                  </strong>
                  <p>
                    <strong className="text-slate-200">Human Analyst Baseline:</strong> Modeled on a standard New
                    Zealand Senior Technology Business Analyst fully loaded annual cost of{' '}
                    <strong className="text-slate-200">$140,000 NZD/year</strong> ($11,667/month).
                  </p>
                  <p>
                    <strong className="text-slate-200">Workflow Volume &amp; Capacity Gain:</strong> Assumes an
                    empirical baseline of 3 deep discovery workflows per day across 21 working days (
                    <strong className="text-slate-200">63 completed workflows/month</strong> or 756/year per BA).
                    Offloading legacy repository AST tracing, impact assessments, and ticket scaffolding unlocks an
                    estimated{' '}
                    <strong className="text-slate-200">+30% productive capacity (+0.3 FTE or ~48 hours/month)</strong>,
                    valued at $42,000 NZD/year ($3,500/month) per analyst or{' '}
                    <strong className="text-slate-200">$55.56 NZD</strong> in gross capacity value per completed
                    workflow.
                  </p>
                </div>

                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-cyan-400">
                    2. Platform, Container &amp; Token Assumptions
                  </strong>
                  <p>
                    <strong className="text-slate-200">Fixed Shared Squad Base ($575/mo | $6,900/yr):</strong>{' '}
                    Comprises a $500/month base Agent Support &amp; Governance retainer plus $75/month for shared
                    foundational database and search indexing infrastructure across the squad.
                  </p>
                  <p>
                    <strong className="text-slate-200">Dedicated Runtime ($200/BA/mo | $2,400/BA/yr):</strong> Reflects
                    dedicated, single-tenant cloud container infrastructure (e.g., Azure Container Apps) spun up per
                    active user to maintain strict memory, execution, and tenant isolation.
                  </p>
                  <p>
                    <strong className="text-slate-200">Usage-Based LLM Inference ($50/BA/mo | $600/BA/yr):</strong>{' '}
                    Modeled on multi-turn agentic execution (~120,000 input tokens and ~8,000 output tokens per deep
                    workflow, or <strong className="text-slate-200">~$0.80 NZD per workflow</strong>) routed via
                    enterprise-grade regional endpoints (e.g., Claude Sonnet on AWS Bedrock) with zero model training
                    retention.
                  </p>
                </div>

                <div className="space-y-2">
                  <strong className="font-mono uppercase tracking-wider block text-[10px] text-emerald-400">
                    3. FinOps Calibration &amp; Commercial Disclaimer
                  </strong>
                  <p>
                    All figures, return multiples, and unit economics presented are illustrative estimates based on
                    internal pilot benchmarks in New Zealand Dollars (NZD) exclusive of GST. Actual token consumption,
                    infrastructure utilization, and productivity gains will vary depending on repository size, legacy
                    documentation density, external MCP integration complexity, and user adoption.
                  </p>
                  <p>
                    During <strong className="text-slate-200">Phase 2 (Orchestration &amp; Integration SOW)</strong>,
                    Cognitech conducts a live <strong className="text-slate-200">FinOps Calibration</strong> inside the
                    client&rsquo;s environment to establish empirical token baselines and configure hard-capped monthly
                    spend guardrails prior to ongoing production deployment.
                  </p>
                </div>
              </div>

              {/* Detailed workings */}
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest block mb-4">
                  <i className="fa-solid fa-table-list text-blue-400 mr-1.5"></i> Auditable Financial Workings (Parts A
                  &amp; B)
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Part A */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                      PART A: UNIT WORKFLOW ECONOMICS
                    </span>
                    <h4 className="text-sm font-bold text-white mb-0.5">Value vs. AI Spend per Completed Workflow</h4>
                    <p className="text-[10px] text-slate-400 mb-3">
                      1 BA (63 workflows/mo) vs. 3-BA Squad (189 workflows/mo)
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[10px]">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400 font-mono text-[9px] uppercase">
                            <th scope="col" className="py-2 pr-1">Component</th>
                            <th scope="col" className="py-2 px-1 text-right">Single BA</th>
                            <th scope="col" className="py-2 pl-1 text-right text-cyan-300">3-BA Squad</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/70 text-slate-300">
                          {unitWorkflowRows.map((row) => {
                            const pad = row.tall ? 'py-2.5' : 'py-2'
                            const note = row.noteClass ?? 'text-slate-500'
                            return (
                              <tr key={row.label} className={row.rowClass ?? ''}>
                                <th scope="row" className={`${pad} pr-1 text-left font-normal ${row.labelClass ?? ''}`}>
                                  {row.label}
                                  {row.sub && (
                                    <span className="block text-[9px] text-slate-500 font-mono">{row.sub}</span>
                                  )}
                                </th>
                                <td className={`${pad} px-1 text-right font-mono ${row.figureClass ?? ''}`}>
                                  {row.single}
                                  <span className={`text-[9px] ${note} block`}>{row.singleNote}</span>
                                </td>
                                <td className={`${pad} pl-1 text-right font-mono ${row.figureClass ?? ''}`}>
                                  {row.squad}
                                  <span className={`text-[9px] ${note} block`}>{row.squadNote}</span>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Part B */}
                  <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                      PART B: SCALING ROI ACROSS SQUADS
                    </span>
                    <h4 className="text-sm font-bold text-white mb-0.5">Annual Squad Economics &amp; Capacity Arbitrage</h4>
                    <p className="text-[10px] text-slate-400 mb-3">
                      Baseline: Human BA = $140k/yr; 30% gain unlocks +0.3 FTE ($42k/yr) per BA.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[10px]">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400 font-mono text-[9px] uppercase">
                            {squadEconomicsHeads.map((head) => (
                              <th
                                key={head.label}
                                scope="col"
                                className={`py-2 ${head.className ?? 'px-1'} ${head.align === 'left' ? '' : 'text-right'}`}
                              >
                                {head.label}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/70 text-slate-300 font-mono">
                          {squadEconomicsRows.map((row) => (
                            <tr key={row.squad} className={row.highlighted ? 'bg-blue-950/20' : ''}>
                              <th scope="row" className={`py-2 pr-1 text-left font-sans font-bold ${row.highlighted ? 'text-blue-300' : 'text-white'}`}>
                                {row.squad}
                              </th>
                              <td className="py-2 px-1 text-right">{row.fixedBase}</td>
                              <td className="py-2 px-1 text-right">{row.containers}</td>
                              <td className="py-2 px-1 text-right">{row.tokens}</td>
                              <td className="py-2 px-1 text-right font-bold text-white">{row.total}</td>
                              <td className="py-2 px-1 text-right">{row.gross}</td>
                              <td className="py-2 px-1 text-right font-bold text-emerald-400">{row.net}</td>
                              <td className="py-2 pl-1 text-right font-bold text-cyan-300 whitespace-nowrap">{row.roi}</td>
                            </tr>
                          ))}
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
