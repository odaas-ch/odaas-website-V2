function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Verbinden',
      description: 'Verbinden Sie Ihre Buchhaltung, Zeiterfassung oder andere Tools mit wenigen Klicks. Keine Installation nötig.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Fragen',
      description: 'Stellen Sie Ihre Frage in normalen Worten. Das System versteht Sie und holt die Daten aus allen verbundenen Systemen.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Erledigt',
      description: 'Sie erhalten Ihre Antwort in Sekunden. Was früher Stunden dauerte, passiert jetzt automatisch.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Datenintegration war noch nie so einfach
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stellen Sie eine Frage – mit Hilfe von künstlicher Intelligenz erhalten Sie die Antwort aus all Ihren Tools.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-primary-300 hover:shadow-md transition-all">
              {/* Icon with number */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 rounded-xl mb-4 relative">
                <span className="text-white">{step.icon}</span>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
