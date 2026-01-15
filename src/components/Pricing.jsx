import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Preise
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Was kostet das?
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-slate-500 mb-2">Ab</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-slate-900">CHF 50</span>
                <span className="text-slate-500">/ Monat</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700">Unbegrenzte Fragen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700">Automatisierte Workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700">Daten in der Schweiz</span>
              </div>
            </div>

            {/* Trial */}
            <div className="bg-accent-50 rounded-xl p-4 mb-8 border border-accent-100">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900">3 Monate kostenlos testen</p>
                  <p className="text-sm text-slate-600">Keine Verpflichtung.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/demo"
              className="block w-full bg-primary-600 text-white px-6 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-center glow-primary"
            >
              Jetzt Demo anfragen
            </Link>

            {/* Partner Discount */}
            <p className="text-center text-sm text-slate-500 mt-4">
              BDO-Kunden erhalten einen Partnerrabatt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
