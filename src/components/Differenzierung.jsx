function Differenzierung() {
  const features = [
    {
      title: 'Jeder Schritt dokumentiert',
      description: 'Das System merkt sich, wie eine Aufgabe funktioniert. Beim nächsten Mal läuft sie automatisch – immer gleich, nachvollziehbar, ohne Überraschungen.',
      icon: (
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Spontan fragen oder automatisieren',
      description: 'Manchmal wollen Sie einfach schnell etwas wissen. Manchmal soll eine Aufgabe jeden Monat laufen. Beides geht.',
      icon: (
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Ihre Daten bleiben in der Schweiz',
      description: 'Alles verschlüsselt, alles in der Schweiz. Ihr Treuhandbüro wird zufrieden sein.',
      icon: (
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="differenzierung" className="py-20 md:py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Message */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Was uns unterscheidet
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Was oDaaS
              <span className="text-primary-400"> anders macht</span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              oDaaS arbeitet nicht rein KI-basiert. Beim ersten Mal analysiert die KI die Aufgabe
              und zerlegt sie in einzelne Schritte. Diese werden gespeichert. Bei jeder weiteren
              Ausführung läuft der Workflow deterministisch ab. Ohne KI.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual / Additional Info */}
          <div className="bg-brand-gray-dark rounded-card p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6">
              Zwei Modi in einem System
            </h3>

            <div className="space-y-6">
              {/* Ad-hoc Mode */}
              <div className="bg-white/5 rounded-card p-6 border border-white/10 hover:border-primary-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Ad-hoc Modus</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Spontane Fragen stellen und sofort Antworten erhalten.
                  Perfekt für einmalige Abfragen und schnelle Informationen.
                </p>
              </div>

              {/* Automation Mode */}
              <div className="bg-white/5 rounded-card p-6 border border-white/10 hover:border-primary-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white">Automation Modus</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Wiederkehrende Aufgaben einmal definieren und automatisch ausführen lassen.
                  Ideal für regelmässige Prozesse und Reports.
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm mt-6">
              Anders als klassische Integrationstools ermöglicht oDaaS auch spontane Fragen.
              Nicht alles muss vorher konfiguriert werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Differenzierung
