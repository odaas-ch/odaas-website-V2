import { Link } from 'react-router-dom'

function Hero() {
  // Dot-grid mountain range background
  const spacing = 50

  // Back mountain ridge (y-values, 0=top of SVG, 500=bottom)
  const backRidge = [
    500, 490, 460, 400, 340, 290, 250, 220, 190, 170, 130, 190, 270, 350,
    290, 230, 180, 150, 120, 100, 130, 200, 280, 360, 280, 200, 130, 210,
    310, 400, 460, 490, 500
  ]

  // Front mountain ridge (closer, lower peaks)
  const frontRidge = [
    500, 495, 478, 445, 400, 365, 340, 320, 305, 295, 275, 305, 355, 400,
    365, 330, 300, 285, 270, 255, 275, 315, 360, 405, 360, 315, 275, 325,
    385, 440, 475, 495, 500
  ]

  const backPoints = backRidge.map((y, i) => `${i * spacing},${y}`).join(' ')
  const frontPoints = frontRidge.map((y, i) => `${i * spacing},${y}`).join(' ')

  // Grid horizontal levels for the mountain body
  const gridLevels = [250, 300, 350, 400, 450, 500]

  const mtnColor = '#1A1A1A'

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Dot-Grid Mountain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 w-full"
          style={{ height: '65%' }}
          viewBox="0 0 1600 500"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mountainFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="35%" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <mask id="mountainMask">
              <rect width="1600" height="500" fill="url(#mountainFade)" />
            </mask>
          </defs>

          <g mask="url(#mountainMask)">
            {/* Horizontal grid lines */}
            {gridLevels.map(y =>
              backRidge.map((rh, c) =>
                c < backRidge.length - 1 && y >= rh && y >= backRidge[c + 1] ? (
                  <line
                    key={`gh-${y}-${c}`}
                    x1={c * spacing} y1={y}
                    x2={(c + 1) * spacing} y2={y}
                    stroke={mtnColor} strokeOpacity="0.06" strokeWidth="0.5"
                  />
                ) : null
              )
            )}

            {/* Vertical lines from front ridge to bottom */}
            {frontRidge.map((y, i) =>
              y < 490 ? (
                <line
                  key={`vl-${i}`}
                  x1={i * spacing} y1={y}
                  x2={i * spacing} y2={500}
                  stroke={mtnColor} strokeOpacity="0.04" strokeWidth="0.5"
                />
              ) : null
            )}

            {/* Connecting lines between back and front ridges */}
            {backRidge.map((by, i) =>
              by < 490 && frontRidge[i] < 490 ? (
                <line
                  key={`cl-${i}`}
                  x1={i * spacing} y1={by}
                  x2={i * spacing} y2={frontRidge[i]}
                  stroke={mtnColor} strokeOpacity="0.07" strokeWidth="0.5"
                />
              ) : null
            )}

            {/* Grid dots (below back ridge) */}
            {gridLevels.map(y =>
              backRidge.map((rh, c) =>
                y >= rh ? (
                  <circle
                    key={`gd-${y}-${c}`}
                    cx={c * spacing} cy={y}
                    r="1.5" fill={mtnColor} fillOpacity="0.08"
                  />
                ) : null
              )
            )}

            {/* Subtle fill below front ridge */}
            <polygon
              points={`${frontPoints} 1600,500 0,500`}
              fill={mtnColor} fillOpacity="0.02"
            />

            {/* Back ridge line */}
            <polyline
              points={backPoints}
              stroke={mtnColor} strokeOpacity="0.15" strokeWidth="1"
              strokeLinejoin="round"
            />

            {/* Back ridge dots */}
            {backRidge.map((y, i) =>
              y < 490 ? (
                <circle
                  key={`bd-${i}`}
                  cx={i * spacing} cy={y}
                  r="2.5" fill={mtnColor} fillOpacity="0.2"
                />
              ) : null
            )}

            {/* Front ridge line */}
            <polyline
              points={frontPoints}
              stroke={mtnColor} strokeOpacity="0.3" strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Front ridge dots */}
            {frontRidge.map((y, i) =>
              y < 490 ? (
                <circle
                  key={`fd-${i}`}
                  cx={i * spacing} cy={y}
                  r="3" fill={mtnColor} fillOpacity="0.4"
                />
              ) : null
            )}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-black/5 text-brand-gray-dark px-4 py-2 rounded-full text-sm font-medium mb-6 border border-brand-gray-border">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              Für Schweizer KMUs entwickelt
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 leading-tight">
              Endlich Ihre Geschäftsdaten im Griff –{' '}
              <span className="text-primary-600">ohne Datenspezialisten</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-brand-gray-medium mb-6 max-w-xl">
              oDaaS gibt Schweizer KMUs die Datenpower von Grosskonzernen –{' '}
              <span className="text-primary-600 font-semibold">einfach, schnell und ohne IT-Aufwand.</span>
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-brand-gray-medium text-sm">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Keine technischen Kenntnisse nötig
              </div>
              <div className="flex items-center gap-2 text-brand-gray-medium text-sm">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Daten bleiben in der Schweiz
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-btn hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5"
              >
                Demo ausprobieren
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-btn hover:bg-brand-gray-dark transition-all font-semibold text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
                So funktioniert's
              </a>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Window controls */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-card p-4">
                  <p className="text-xs text-slate-500 mb-1">Monatsumsatz</p>
                  <p className="text-2xl font-bold text-slate-900">CHF 127'450</p>
                </div>
                <div className="bg-slate-50 rounded-card p-4">
                  <p className="text-xs text-slate-500 mb-1">vs. Vormonat</p>
                  <p className="text-2xl font-bold text-success">+23.4%</p>
                </div>
                <div className="bg-slate-50 rounded-card p-4">
                  <p className="text-xs text-slate-500 mb-1">Offene Rechnungen</p>
                  <p className="text-2xl font-bold text-slate-900">CHF 34'200</p>
                </div>
                <div className="bg-slate-50 rounded-card p-4">
                  <p className="text-xs text-slate-500 mb-1">Neue Kunden</p>
                  <p className="text-2xl font-bold text-success">+47</p>
                </div>

                {/* Chart placeholder */}
                <div className="col-span-2 bg-gradient-to-t from-primary-50 to-transparent rounded-card p-4 h-32 flex items-end">
                  <svg className="w-full h-20" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <path
                      d="M0,50 Q30,45 60,40 T120,35 T180,25 T240,30 T300,10"
                      fill="none"
                      stroke="#B00020"
                      strokeWidth="3"
                    />
                    <path
                      d="M0,50 Q30,45 60,40 T120,35 T180,25 T240,30 T300,10 L300,60 L0,60 Z"
                      fill="rgba(176,0,32,0.1)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
