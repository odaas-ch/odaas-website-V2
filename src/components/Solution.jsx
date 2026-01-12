function Solution() {
  return (
    <section id="solution" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Die Lösung
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            So einfach geht's
          </h2>

          {/* Intro */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sie stellen eine Frage. Das System holt die Antwort. Fertig.
          </p>
        </div>

        {/* Two Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature 1: Fragen statt suchen */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Fragen Sie einfach
            </h3>

            <p className="text-slate-400 mb-6">
              Kein Klicken durch Menüs, keine Berichte konfigurieren.
              Sie fragen in normalen Worten – das System versteht Sie.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-primary-400 mt-0.5">→</span>
                <span className="text-slate-300">"Haben alle Mitarbeiter diese Woche richtig gestempelt?"</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-primary-400 mt-0.5">→</span>
                <span className="text-slate-300">"Wie viel Umsatz hatten wir gestern in beiden Filialen?"</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-primary-400 mt-0.5">→</span>
                <span className="text-slate-300">"Welche Rechnungen sind noch offen?"</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Automatisierte Workflows */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Einmal erklären, läuft automatisch
            </h3>

            <p className="text-slate-400 mb-6">
              Aufgaben die Sie jeden Monat machen, erklärt das System einmal –
              danach laufen sie von alleine. Immer gleich, ohne Fehler.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-accent-400 mt-0.5">→</span>
                <span className="text-slate-300">"Übertrage die Zeiterfassung von diesem Monat nach Bexio"</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-accent-400 mt-0.5">→</span>
                <span className="text-slate-300">"Schicke dem Treuhänder den Monatsabschluss"</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-accent-400 mt-0.5">→</span>
                <span className="text-slate-300">"Erstelle die Bestellliste für morgen"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
