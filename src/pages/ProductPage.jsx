import { Link } from 'react-router-dom'

function ProductPage() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Multi-System Integration',
      description: 'Verbinden Sie beliebig viele Business-Systeme: ERP, CRM, Buchhaltung, Zeiterfassung und mehr. Eine zentrale Schnittstelle für alle Ihre Daten.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Natürliche Sprache',
      description: 'Stellen Sie Fragen in normaler Sprache. Keine komplexen Query-Sprachen, keine technischen Kenntnisse erforderlich.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Automatisierte Workflows',
      description: 'Wiederkehrende Aufgaben werden einmal beschrieben und dann automatisch ausgeführt. Zuverlässig und ohne manuellen Eingriff.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Schweizer Datenschutz',
      description: 'Ihre Daten bleiben in der Schweiz. Keine Übermittlung ins Ausland, volle DSGVO-Konformität.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Vollständige Protokollierung',
      description: 'Jede Aktion wird protokolliert. Nachvollziehbar, auditierbar und transparent für Compliance-Anforderungen.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Hybrid-Ansatz',
      description: 'Learn Once, Execute Forever: KI analysiert einmalig, danach läuft alles deterministisch. Vorhersehbar und zuverlässig.',
    },
  ]

  const useCases = [
    {
      title: 'Lohnabrechnung',
      description: 'Automatische Übertragung von Zeiterfassungsdaten in die Buchhaltung. Jeden Monat, ohne manuellen Aufwand.',
      before: '45 Minuten pro Monat',
      after: '2-5 Minuten pro Monat',
    },
    {
      title: 'Reporting',
      description: 'Wöchentliche oder monatliche Reports aus verschiedenen Systemen, automatisch zusammengestellt und versendet.',
      before: 'Stunden für manuelle Zusammenstellung',
      after: 'Automatisch auf Knopfdruck',
    },
    {
      title: 'Kundenanfragen',
      description: 'Sofortiger Zugriff auf alle Kundeninformationen aus CRM, ERP und Buchhaltung – per einfacher Frage.',
      before: 'Mehrere Systeme durchsuchen',
      after: 'Eine Frage, alle Antworten',
    },
  ]

  const integrations = [
    'Bexio', 'Abacus', 'SAP', 'Microsoft 365', 'Jira', 'Clockify',
    'Slack', 'Teams', 'Google Workspace', 'Salesforce', 'HubSpot', 'Und mehr...'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Das Produkt
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              oDaaS ist eine KI-gestützte Integrationsplattform, die Ihre Business-Software
              verbindet und über natürliche Sprache zugänglich macht.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg"
            >
              Demo ausprobieren
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Funktionen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Alles, was Sie brauchen, um Ihre Business-Systeme zu verbinden und effizienter zu arbeiten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
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

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Anwendungsfälle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Konkrete Beispiele, wie oDaaS Ihren Arbeitsalltag vereinfacht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 mb-6">{useCase.description}</p>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 text-sm font-medium">Vorher:</span>
                    <span className="text-slate-600 text-sm">{useCase.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-sm font-medium">Nachher:</span>
                    <span className="text-slate-600 text-sm">{useCase.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Integrationen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Verbinden Sie die Tools, die Sie bereits nutzen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-medium text-sm"
              >
                {integration}
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Weitere Integrationen auf Anfrage möglich
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, Ihre Systeme zu verbinden?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Testen Sie oDaaS jetzt in unserer interaktiven Demo und sehen Sie selbst,
            wie einfach Integration sein kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors font-semibold text-lg"
            >
              Demo starten
            </Link>
            <Link
              to="/#contact"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl hover:bg-primary-400 transition-colors font-semibold text-lg border border-primary-400"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
