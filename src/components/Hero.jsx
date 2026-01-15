import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-100">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            Für Schweizer KMUs
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Die KI-Integrationsplattform
            <span className="text-primary-600"> für Schweizer KMUs</span>
          </h1>

          {/* Claim */}
          <p className="text-xl md:text-2xl text-accent-600 font-semibold mb-6">
            Anschliessen. Fragen. Loslegen.
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Verbinden Sie Ihre Business-Software und stellen Sie einfach Fragen – in Ihren Worten.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg glow-primary"
            >
              Demo ausprobieren
            </Link>
            <a
              href="#how-it-works"
              className="bg-white text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-lg border border-slate-200"
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
