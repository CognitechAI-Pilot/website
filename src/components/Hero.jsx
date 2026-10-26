// The hero photograph is self-hosted. It used to be hot-linked from
// images.unsplash.com, which put a third-party CDN call on the page that sells
// onshore data sovereignty, and left the hero to break if that URL ever moved.
// Three widths are encoded so phones do not download the 2000px file; the
// gradient underneath keeps the hero legible before the image paints.
const HERO_SRCSET = [
  '/hero-collaboration-1024.webp 1024w',
  '/hero-collaboration-1600.webp 1600w',
  '/hero-collaboration.webp 2000w'
].join(', ')

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 overflow-hidden border-b border-slate-800/80">
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-gradient-to-br from-slate-900 via-[#0B111E] to-blue-950">
        <img
          src="/hero-collaboration.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width="2000"
          height="1334"
          fetchpriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-[#0B111E]/60 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-blue-400 text-[11px] sm:text-xs font-mono mb-4 w-fit mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GOVERNED CO-WORKERS GROUNDED IN INSTITUTIONAL KNOWLEDGE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl leading-[1.15] mb-4">
            Co-Workers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Powering Enterprise Productivity
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Engineering, integrating, and governing specialized Co-Workers grounded in private institutional
            context—powered by stack-agnostic engines and 100% onshore sovereign AI deployment options.
          </p>
        </div>
      </div>
    </section>
  )
}
