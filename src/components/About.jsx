function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Über oDaaS
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Das Projekt
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mit echten Schweizer KMUs gesprochen und verstanden, wo der Schuh drückt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Validation Results */}
          <div className="bg-accent-50 rounded-2xl p-8 mb-8 border border-accent-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-bold text-slate-900 text-lg">Validiert mit echten KMUs</h3>
            </div>
            <p className="text-slate-600 text-center max-w-xl mx-auto mb-6">
              Getestet mit Schweizer KMUs aus verschiedenen Branchen: Bäckerei, Produktion, Handel.
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl px-8 py-4 shadow-sm border border-slate-200">
                <p className="text-slate-500 text-sm mb-1">Zeitersparnis</p>
                <p className="text-2xl font-bold text-slate-900">
                  <span className="text-red-500 line-through mr-2">45 Min</span>
                  <span className="text-accent-600">→ 5 Min</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
