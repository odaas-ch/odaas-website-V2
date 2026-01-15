function Problem() {
  const examples = [
    'Zeiterfassung von Hand nach Bexio übertragen',
    'Tageseinnahmen aus zwei Kassen zusammenzählen',
    'Excel-Listen hin und her kopieren',
    'Drei verschiedene Programme öffnen, nur um eine Zahl zu finden',
  ]

  return (
    <section id="problem" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Das Problem
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Kennen Sie das?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-12">
            Jeden Abend eine Stunde am Computer. Zahlen von einem System ins andere übertragen.
            Am Monatsende wird es noch schlimmer: Stunden zusammenzählen, Löhne berechnen,
            dem Treuhänder alles schicken. Und wenn ein Fehler passiert, fängt man von vorne an.
          </p>
        </div>

        {/* Examples */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {examples.map((example, index) => (
            <div key={index} className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-700 text-sm pt-1">{example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
