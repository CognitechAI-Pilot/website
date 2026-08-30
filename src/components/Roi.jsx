export default function Roi() {
  return (
    <section id="roi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                    WORKFORCE ECONOMICS &amp; CAPACITY ARBITRAGE
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
                    Return On Investment (ROI)
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Modeled on empirical Business Analysis Digital Co-Worker production workflows. Deploying digital co-workers decouples delivery output from linear headcount growth through high-leverage workforce augmentation.
                </p>
            </div>

            {/* 4 Key Percentage Highlight Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="glow-card p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Human BA Output</span>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        +30%
                    </div>
                    <span className="text-xs font-bold text-white block mt-1">Capacity Boost per BA</span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-tight">Reclaims ~48 productive hours/month per human analyst</p>
                </div>

                <div className="glow-card p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Single BA Pilot</span>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        350%+
                    </div>
                    <span className="text-xs font-bold text-white block mt-1">Pilot Net Return</span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-tight">Immediate self-funding return even at single-user pilot scale</p>
                </div>

                <div className="glow-card p-6 rounded-2xl border border-blue-500/40 bg-blue-950/20 text-center relative overflow-hidden">
                    <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider block mb-1">3-BA Squad Model</span>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                        1,250%+
                    </div>
                    <span className="text-xs font-bold text-white block mt-1">Squad Net ROI</span>
                    <p className="text-[11px] text-slate-300 mt-1 leading-tight">+30% squad capacity with only a ~2% budget variance</p>
                </div>

                <div className="glow-card p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Enterprise Org Scale</span>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                        4,200%+
                    </div>
                    <span className="text-xs font-bold text-white block mt-1">12-BA Scale ROI</span>
                    <p className="text-[11px] text-slate-400 mt-1 leading-tight">Exponential scale as fixed support &amp; tenant tiers are shared</p>
                </div>
            </div>

            {/* Infographics Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

                {/* Left Chart: Cumulative Net Capacity Gain Scaling */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            <i className="fa-solid fa-chart-line text-emerald-400"></i>
                            <span>Exponential Net Capacity Value Growth</span>
                        </h3>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Value Scaling</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Net value generated scales exponentially across the organization while team operating budget increases remain negligible:
                    </p>

                    <div className="space-y-3 pt-2 text-xs">
                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">1 BA Pilot Scale</span>
                                <span className="text-emerald-400 font-mono font-bold">+350% Net ROI</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full" style={{ width: '12%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">3-BA Core Squad Scale</span>
                                <span className="text-emerald-400 font-mono font-bold">+1,250% Net ROI</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">6-BA Multi-Squad Scale</span>
                                <span className="text-emerald-400 font-mono font-bold">+2,600% Net ROI</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full" style={{ width: '58%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">12-BA Enterprise Scale</span>
                                <span className="text-emerald-400 font-mono font-bold">+4,200% Net ROI</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Chart: Diminishing Marginal AI Operating Cost */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            <i className="fa-solid fa-arrow-trend-down text-cyan-400"></i>
                            <span>Diminishing Marginal AI Cost per User</span>
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">Unit Cost Curve</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Because base infrastructure and support are shared across the tenant, the unit cost per BA drops by approximately <strong>90%</strong> as adoption scales:
                    </p>

                    <div className="space-y-3 pt-2 text-xs">
                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">1 BA Pilot (Baseline Stack)</span>
                                <span className="text-amber-400 font-mono font-bold">100% Baseline Unit Cost</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-amber-500 to-red-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">3 BAs (Shared Retainer &amp; Capacity)</span>
                                <span className="text-cyan-400 font-mono font-bold">-66% Unit Cost per BA</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{ width: '34%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">6 BAs (Expanded Squads)</span>
                                <span className="text-cyan-400 font-mono font-bold">-83% Unit Cost per BA</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{ width: '17%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-semibold mb-1">
                                <span className="text-slate-300">12 BAs (Enterprise Pool)</span>
                                <span className="text-emerald-400 font-mono font-bold">-90% Unit Cost per BA</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                                <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Strategic Outcomes Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 border border-blue-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="space-y-1.5">
                    <strong className="text-blue-400 block font-bold uppercase tracking-wider">
                        <i className="fa-solid fa-scale-unbalanced mr-1"></i> Capital Efficiency
                    </strong>
                    <p className="text-slate-300 leading-relaxed">
                        Scaling output through digital workers decouples delivery velocity from expensive 1:1 linear recruitment cycles.
                    </p>
                </div>
                <div className="space-y-1.5">
                    <strong className="text-cyan-400 block font-bold uppercase tracking-wider">
                        <i className="fa-solid fa-gauge-high mr-1"></i> Lead Time Compression
                    </strong>
                    <p className="text-slate-300 leading-relaxed">
                        Automating repository AST discovery and Jira scaffolding reduces requirements cycle time from days to under 1 hour.
                    </p>
                </div>
                <div className="space-y-1.5">
                    <strong className="text-emerald-400 block font-bold uppercase tracking-wider">
                        <i className="fa-solid fa-arrows-rotate mr-1"></i> Strategic Reinvestment
                    </strong>
                    <p className="text-slate-300 leading-relaxed">
                        Human analysts shift out of manual backlog administration into high-touch customer discovery, architecture, and UAT.
                    </p>
                </div>
            </div>

            {/*
              Substantiation notice. The figures above are a modelled projection, not
              measured client outcomes. Under the Fair Trading Act 1986 a performance
              claim must have a reasonable basis at the time it is made, so the
              assumptions behind the model need to be stated and kept current.
              TODO(cognitech): replace the bracketed placeholders with the real inputs.
            */}
            <div className="mt-10 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                    <strong className="text-slate-400 font-semibold">How these figures are calculated.</strong>{' '}
                    The returns shown are an illustrative financial model, not a guarantee of results, and not
                    averaged client outcomes. They assume a fully-loaded analyst cost of [ANALYST_COST] per annum,
                    [HOURS_SAVED] hours returned per analyst per month, and Cognitech licence and retainer costs at
                    the published rates. Capacity gains observed during the NZ Post proof of concept are described in
                    that case study. Actual results depend on repository readiness, workflow complexity, and adoption,
                    and will vary by organisation. We will share the underlying model on request.
                </p>
            </div>
        </section>
  )
}
