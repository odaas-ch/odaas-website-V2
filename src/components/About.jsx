function About() {
  const team = [
    {
      name: 'Michel Leisibach',
      role: 'Co-Founder & CTO',
      description: 'Backend-Architektur, AI/MCP-Integration. Kommt aus der SAP/ABAP-Welt und bringt Enterprise-Denken in die KMU-Realität.',
      image: null, // TODO: Foto hinzufügen
    },
    {
      name: 'Yanick Schlatter',
      role: 'Co-Founder & Frontend/UX',
      description: 'User Experience und Interface-Design. Sorgt dafür, dass komplexe Technologie einfach bedienbar wird.',
      image: null, // TODO: Foto hinzufügen
    },
  ]

  const advisors = [
    {
      name: 'Dr. Sascha Roth',
      role: 'Advisor',
      description: 'Begleitet oDaaS als Advisor und bringt wertvolle Erfahrung im Bereich Unternehmertum und Innovation ein.',
      image: null, // TODO: Foto hinzufügen
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">
            Über oDaaS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Das Projekt
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Die Geschichte */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Die Geschichte</h3>
            <p className="text-slate-600 leading-relaxed">
              oDaaS entstand 2024 aus einem Vorprojekt an der HSLU, in dem wir das KMU-Integrationsproblem
              durch Interviews und Marktanalyse validierten. Die Bachelorarbeit lieferte den technischen
              Proof of Concept. Jetzt, im Rahmen des Masterstudiums und des SmartUp Accelerators,
              entwickeln wir oDaaS zur marktreifen Lösung weiter.
            </p>
          </div>

          {/* Team */}
          <h3 className="font-bold text-slate-900 text-xl mb-6 text-center">Das Team</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  {/* Photo placeholder */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                    <p className="text-sm text-primary-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>

          {/* Advisors */}
          {advisors.length > 0 && (
            <>
              <h3 className="font-bold text-slate-900 text-xl mb-6 text-center">Advisors</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {advisors.map((advisor, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Photo placeholder */}
                      {advisor.image ? (
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-slate-900">{advisor.name}</h4>
                        <p className="text-sm text-primary-600">{advisor.role}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">{advisor.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Unterstützt von */}
          <div className="mt-12 pt-12 border-t border-slate-200">
            <h3 className="font-bold text-slate-500 text-sm uppercase tracking-wide mb-8 text-center">Unterstützt von</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* HSLU */}
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-colors">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">HSLU</span>
                </div>
                <span className="text-slate-600 font-medium">Hochschule Luzern</span>
              </div>
              {/* SmartUp */}
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-colors">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">SU</span>
                </div>
                <span className="text-slate-600 font-medium">SmartUp Accelerator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
