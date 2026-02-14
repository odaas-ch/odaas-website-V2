function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-brand-black via-brand-gray-dark to-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="inline-block px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Kontakt
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Interessiert?
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12">
            Schreiben Sie uns eine E-Mail und wir melden uns bei Ihnen.
          </p>

          {/* CTA */}
          <a
            href="mailto:info@odaas.ch"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-btn hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5"
          >
            info@odaas.ch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>

          {/* Additional info */}
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Kostenlose Erstberatung
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Keine Verpflichtung
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Antwort innert 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
