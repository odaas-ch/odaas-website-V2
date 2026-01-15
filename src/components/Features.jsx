function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Multi-System Integration',
      description: 'Verbinden Sie beliebig viele Business-Systeme: ERP, CRM, Buchhaltung, Zeiterfassung und mehr.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Natürliche Sprache',
      description: 'Stellen Sie Fragen in normaler Sprache. Keine technischen Kenntnisse erforderlich.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Automatisierte Workflows',
      description: 'Wiederkehrende Aufgaben werden einmal beschrieben und dann automatisch ausgeführt.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Vollständige Protokollierung',
      description: 'Jede Aktion wird protokolliert. Nachvollziehbar und transparent.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Hybrid-Ansatz',
      description: 'KI analysiert einmalig, danach läuft alles deterministisch. Vorhersehbar und zuverlässig.',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Funktionen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
            Alles was Sie brauchen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Eine Plattform, die Ihre Business-Systeme verbindet und Arbeit abnimmt.
          </p>
        </div>

        {/* Erste Reihe: 3 Kacheln */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.title} className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Zweite Reihe: 2 Kacheln zentriert */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {features.slice(3).map((feature) => (
            <div key={feature.title} className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
