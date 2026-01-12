function About() {
  const team = [
    {
      name: 'Michel Leisibach',
      role: 'Backend & Architektur',
    },
    {
      name: 'Yanick Schlatter',
      role: 'Frontend & Design',
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Über uns
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Wer steckt dahinter?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            oDaaS entsteht an der Hochschule Luzern. Wir haben mit echten Schweizer KMUs
            gesprochen und verstanden, wo der Schuh drückt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Team */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-400 font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-sm text-primary-400">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Advisor */}
          <div className="text-center mb-12">
            <p className="text-sm text-slate-500">
              <strong className="text-slate-400">Advisor:</strong> Dr. Sascha Roth
            </p>
          </div>

          {/* Validation Results */}
          <div className="bg-accent-500/10 rounded-2xl p-8 mb-8 border border-accent-500/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-bold text-white text-lg">Validiert mit echten KMUs</h3>
            </div>
            <p className="text-slate-400 text-center max-w-xl mx-auto mb-6">
              Getestet mit Schweizer KMUs aus verschiedenen Branchen: Bäckerei, Produktion, Handel.
            </p>
            <div className="flex justify-center">
              <div className="bg-slate-900 rounded-xl px-8 py-4 border border-slate-800">
                <p className="text-slate-500 text-sm mb-1">Zeitersparnis</p>
                <p className="text-2xl font-bold text-white">
                  <span className="text-red-400 line-through mr-2">45 Min</span>
                  <span className="text-accent-400">→ 5 Min</span>
                </p>
              </div>
            </div>
          </div>

          {/* Partner */}
          <div className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800">
            <p className="text-sm text-slate-500 mb-2">Partner</p>
            <p className="font-semibold text-white">BDO Schweiz</p>
            <p className="text-sm text-slate-400 mt-2">
              Wir arbeiten mit der BDO Schweiz zusammen. Ihr Treuhänder kennt uns vielleicht schon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
