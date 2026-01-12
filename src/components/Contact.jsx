import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Interessiert?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12">
            Schreiben Sie uns. Wir zeigen Ihnen gerne, wie oDaaS in Ihrem Betrieb funktioniert.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold">ML</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Michel Leisibach</h3>
              <p className="text-sm text-primary-400 mb-3">Backend & Architektur</p>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="mailto:michel.leisibach@stud.hslu.ch" className="block hover:text-primary-400 transition-colors">
                  michel.leisibach@stud.hslu.ch
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold">YS</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Yanick Schlatter</h3>
              <p className="text-sm text-primary-400 mb-3">Frontend & Design</p>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="mailto:yanick.schlatter@stud.hslu.ch" className="block hover:text-primary-400 transition-colors">
                  yanick.schlatter@stud.hslu.ch
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-500 transition-colors font-semibold text-lg glow-primary"
          >
            Demo anfragen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
