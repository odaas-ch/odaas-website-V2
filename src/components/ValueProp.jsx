function ValueProp() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main statement */}
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
          <span className="font-semibold text-slate-900">oDaaS – Own Data as a Service – ist eine KI-gestützte Integrationsplattform</span>{' '}
          für Schweizer KMUs, die Ihre Business-Tools wie Buchhaltung, Zeiterfassung und Excel verbindet.
        </p>

        {/* Three key points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span>Tools verbinden</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Fragen stellen</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Antworten erhalten</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProp
