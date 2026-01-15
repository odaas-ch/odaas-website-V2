import { Link } from 'react-router-dom'

function DemoPreview() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Section Label */}
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Probieren Sie es aus
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Sehen Sie selbst, wie einfach es ist
          </h2>
        </div>

        {/* Demo Preview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white rounded-md px-3 py-1 text-sm text-slate-500 max-w-xs border border-slate-200">
                  app.odaas.ch
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="p-6 md:p-8 bg-slate-50 min-h-[300px]">
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-md">
                    <p className="text-sm">Wie viele Stunden hat das Team diese Woche gearbeitet?</p>
                  </div>
                </div>

                {/* System Message */}
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-bl-md max-w-md shadow-sm">
                    <p className="text-sm text-slate-700">
                      Das Team hat diese Woche insgesamt <strong className="text-slate-900">187 Stunden</strong> erfasst.
                    </p>
                    <div className="mt-2 text-xs text-slate-500">
                      Sarah: 42h • Marco: 38h • Lisa: 41h • Thomas: 36h • Anna: 30h
                    </div>
                  </div>
                </div>

                {/* Another User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-md">
                    <p className="text-sm">Welche Rechnungen sind offen?</p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg glow-primary"
            >
              Interaktive Demo starten
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoPreview
