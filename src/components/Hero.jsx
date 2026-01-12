import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/20">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            Für Schweizer KMUs
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Die KI-Integrationsplattform
            <span className="text-primary-400"> für Schweizer KMUs</span>
          </h1>

          {/* Claim */}
          <p className="text-xl md:text-2xl text-accent-400 font-semibold mb-6">
            Anschliessen. Fragen. Loslegen.
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Verbinden Sie Ihre Business-Software und stellen Sie einfach Fragen – in Ihren Worten.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-500 transition-colors font-semibold text-lg glow-primary"
            >
              Demo ausprobieren
            </Link>
            <a
              href="#how-it-works"
              className="bg-slate-800 text-slate-200 px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors font-semibold text-lg border border-slate-700"
            >
              So funktioniert's
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
