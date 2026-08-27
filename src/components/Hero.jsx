export default function Hero() {
  return (
    <header className="py-24 border-b border-gray-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-agentic bg-blue-950/50 border border-blue-900 px-3 py-1 rounded-full">
          Enterprise AI Delivery
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-5 mb-6 tracking-tight leading-none">
          <span className="gradient-text">Scaling Enterprise-Grade AI.</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          We build context-aware, secure, and right-sized AI systems that integrate directly into your existing
          operating model and stay yours to keep.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#approach"
            className="bg-agentic text-white px-6 py-3 rounded-xl hover:bg-blue-600 font-medium shadow transition text-sm"
          >
            See Our Approach
          </a>
          <a
            href="#contact"
            className="bg-card-dark text-gray-300 border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-700 font-medium transition text-sm"
          >
            Book a Discovery Consultation
          </a>
        </div>
      </div>
    </header>
  )
}
