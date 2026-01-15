import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Interessiert?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-12">
            Testen Sie die Demo und sehen Sie selbst, wie oDaaS in Ihrem Betrieb funktionieren kann.
          </p>

          {/* CTA */}
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg glow-primary"
          >
            Demo ausprobieren
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
