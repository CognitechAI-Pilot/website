export default function About() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
            <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                    OUR CORE PHILOSOPHY
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Core Philosophy */}
                <div className="lg:col-span-6 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                        Simplifying Enterprise AI for Real, Measurable Value
                    </h2>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                        We don't design for isolated tasks—we design for <span className="text-blue-400 font-bold">functional team roles</span>.
                    </p>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        Our Digital Co-Workers unlock capacity by handling deep institutional discovery and routine administration, allowing your human workforce to reinvest their time into strategic discovery and high-value innovation.
                    </p>
                </div>

                {/* Right Column: Value Grid */}
                <div className="lg:col-span-6 glow-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-950/80 space-y-4">
                    <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <h3 className="text-base font-bold text-white">Value of Our Solutions</h3>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm">
                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Rapid Deployment Templates:</strong>
                                <span className="text-slate-300 text-xs leading-relaxed">Pre-configured role blueprints—like the Digital BA—enable launch in days rather than months.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Predictable Open-Model Economics:</strong>
                                <span className="text-slate-300 text-xs leading-relaxed">Adapting and hosting proven open-source models onshore eliminates volatile cloud token markups as usage scales.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">100% Onshore Data Sovereignty:</strong>
                                <span className="text-slate-300 text-xs leading-relaxed">Locally hosted infrastructure guarantees strict data residency, privacy, and compliance with zero public model training.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Audit-Ready Governance:</strong>
                                <span className="text-slate-300 text-xs leading-relaxed">Full execution trace logging and human-in-the-loop controls provide boards with total risk visibility.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Capacity-Driven ROI:</strong>
                                <span className="text-slate-300 text-xs leading-relaxed">Commercials tied directly to tangible delivery hours reclaimed and capacity multiplier value.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
