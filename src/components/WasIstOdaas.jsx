import { useState, useEffect } from 'react'

function WasIstOdaas() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      problem: 'Daten von Hand übertragen',
      solution: 'Läuft automatisch',
    },
    {
      problem: 'Jedes Tool ist eine Insel',
      solution: 'Ihre Tools reden miteinander',
    },
    {
      problem: 'Infos in 5 verschiedenen Programmen',
      solution: 'Alles an einem Ort',
    },
  ]

  const painPoints = [
    'Zeiterfassung von Hand in die Buchhaltung übertragen',
    'Tageseinnahmen aus zwei Kassen zusammenzählen',
    'Excel-Listen hin und her kopieren',
    'Drei verschiedene Programme öffnen, nur um eine Zahl zu finden',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="was-ist-odaas" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">
            Das Problem & Die Lösung
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Kennen Sie das?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jeden Abend eine Stunde am Computer. Zahlen von einem System ins andere übertragen.
            Am Monatsende wird es noch schlimmer.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100"
            >
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-700 text-sm pt-1">{point}</p>
            </div>
          ))}
        </div>

        {/* Divider with "Mit oDaaS" */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
            Mit oDaaS
          </span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* Rotating Solution Slides */}
        <div className="relative">
          <div className="bg-green-50 rounded-2xl p-8 md:p-10 border border-green-100 overflow-hidden h-[100px] md:h-[60px] relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-10 transition-all duration-500 ${
                  activeSlide === index
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 h-full">
                  {/* Problem (crossed out) */}
                  <div className="flex items-center gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="line-through">{slide.problem}</span>
                  </div>

                  {/* Arrow */}
                  <svg className="w-6 h-6 text-green-500 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>

                  {/* Solution */}
                  <div className="flex items-center gap-3 text-green-700 font-semibold">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{slide.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index
                    ? 'bg-green-500 w-6'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WasIstOdaas
