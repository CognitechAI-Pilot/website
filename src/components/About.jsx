export default function About() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
            <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
                    OUR PURPOSE
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                        Simplifying AI Adoption for Sustainable Business Value
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        At Cognitech, we have a sole purpose: to help organizations simplify AI adoption and apply it to add real and sustainable value. We know boards, executive teams, and senior leaders are struggling to grapple with the rapid adoption of AI, the pace of change, and managing the risks associated with AI solutions being deployed in their teams with no real oversight or control.
                    </p>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        Rather than starting with acronyms, architecture models, and AI jargon, we have a simple philosophy: <strong className="text-white font-bold">our solutions are digital workers designed to improve the performance of your human workforce.</strong> We don't design for specific use cases—we design for roles that AI can perform.
                    </p>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        When successful, our solutions go beyond basic cost reduction—they unlock capital and capacity, giving you the opportunity to reinvest in your human workforce to drive higher-value innovation. While the current Big Tech frontier models carry significant structural risk and regulatory uncertainty, the underlying technologies that power tailored AI solutions are here to stay. At Cognitech, we engineer resilient architectures that prepare your business for that future.
                    </p>
                </div>

                <div className="lg:col-span-5 glow-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-950/80 space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <h3 className="text-lg font-bold text-white">Value of Our Solutions</h3>
                    </div>

                    <div className="space-y-5 text-xs sm:text-sm">
                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Rapid Deployment Architecture:</strong>
                                <span className="text-slate-300 leading-relaxed">Built on reusable, templated role designs—like our Digital Business Analyst—allowing new customers to adopt, configure, and launch pre-structured digital workers in days rather than months.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Predictable, Scalable Costs:</strong>
                                <span className="text-slate-300 leading-relaxed">Locally built and trained models eliminate exponential token-consumption fees as Digital Co-Workers scale across your operations.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Data Sovereignty &amp; Privacy:</strong>
                                <span className="text-slate-300 leading-relaxed">New Zealand owned and locally hosted to guarantee complete data sovereignty, strict compliance, privacy, and local data security.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Audit-Ready Governance:</strong>
                                <span className="text-slate-300 leading-relaxed">Provides boards and executives with full visibility, verifiable oversight, and transparent risk management for every deployed digital worker.</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0"></i>
                            <div>
                                <strong className="text-white block font-semibold mb-0.5">Value-Based Pricing:</strong>
                                <span className="text-slate-300 leading-relaxed">Pricing aligned directly with the tangible cost savings and efficiency your digital workers deliver—not arbitrary token metrics.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
