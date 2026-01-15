function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Systeme verbinden',
      description: 'Sie haben ein Bexio-Login? Eine Zeiterfassung? Verbinden Sie Ihre Systeme mit wenigen Klicks. Keine Installation, kein IT-Mensch nötig.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Frage stellen',
      description: 'Fragen Sie, was Sie wissen wollen. In Ihren Worten. Das System versteht Sie und holt die Daten aus den richtigen Systemen.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Zeit sparen',
      description: 'Was vorher eine Stunde dauerte, ist in Minuten erledigt. Wiederkehrende Aufgaben laufen automatisch.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            So funktioniert's
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            In drei Schritten startklar
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-200" />
              )}

              <div className="relative bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-50 rounded-2xl mb-6 relative">
                  <span className="text-primary-600">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Ihre Excel-Listen können Sie behalten. Das System liest auch Excel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
