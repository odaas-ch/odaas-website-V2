import { useState, useEffect, useRef } from 'react'

// Generative UI Components
const KPICard = ({ label, value, trend, color = 'primary', delay = 0 }) => (
  <div
    className="bg-slate-700/50 rounded-xl p-4 border border-white/10 animate-fadeIn"
    style={{ animationDelay: `${delay}ms` }}
  >
    <p className="text-xs text-slate-400 mb-1">{label}</p>
    <p className={`text-2xl font-bold text-${color}-400`}>{value}</p>
    {trend && (
      <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs. Vormonat
      </p>
    )}
  </div>
)

const BarChart = ({ data, delay = 0 }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  return (
    <div className="space-y-3 animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-slate-400 w-12">{item.label}</span>
          <div className="flex-1 bg-slate-700/50 rounded-full h-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{ width: `${(item.value / maxValue) * 100}%`, transitionDelay: `${i * 150 + delay}ms` }}
            >
              <span className="text-xs text-white font-medium">{item.value.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const LineChart = ({ data, delay = 0 }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (d.value / maxValue) * 80
  }))
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <svg viewBox="0 0 100 100" className="w-full h-32" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(y => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        ))}
        {/* Line */}
        <path d={pathD} fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" />
        {/* Area */}
        <path d={`${pathD} L 100 100 L 0 100 Z`} fill="url(#areaGradient)" />
        {/* Dots */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2" fill="#60a5fa" />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        {data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  )
}

const DataTable = ({ columns, rows, delay = 0 }) => (
  <div className="overflow-x-auto animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-white/10">
          {columns.map((col, i) => (
            <th key={i} className="text-left text-slate-400 font-medium py-2 px-3">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/5">
            {row.map((cell, j) => (
              <td key={j} className="py-2 px-3 text-slate-300">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const PieChart = ({ data, delay = 0 }) => {
  let cumulative = 0
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const colors = ['#3b82f6', '#14b8a6', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="flex items-center gap-6 animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <svg viewBox="0 0 100 100" className="w-32 h-32">
        {data.map((item, i) => {
          const startAngle = cumulative * 360
          cumulative += item.value / total
          const endAngle = cumulative * 360
          const largeArc = endAngle - startAngle > 180 ? 1 : 0
          const startRad = (startAngle - 90) * Math.PI / 180
          const endRad = (endAngle - 90) * Math.PI / 180
          const x1 = 50 + 40 * Math.cos(startRad)
          const y1 = 50 + 40 * Math.sin(startRad)
          const x2 = 50 + 40 * Math.cos(endRad)
          const y2 = 50 + 40 * Math.sin(endRad)
          return (
            <path
              key={i}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={colors[i % colors.length]}
              className="hover:opacity-80 transition-opacity"
            />
          )
        })}
        <circle cx="50" cy="50" r="20" fill="#1e293b" />
      </svg>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[i % colors.length] }} />
            <span className="text-xs text-slate-400">{item.label}</span>
            <span className="text-xs text-slate-300 font-medium">{((item.value / total) * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const StatusBadge = ({ status }) => {
  const styles = {
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400',
    info: 'bg-blue-500/20 text-blue-400',
  }
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${styles[status] || styles.info}`}>
      {status === 'success' ? '✓ Erfolgreich' : status === 'warning' ? '⚠ Warnung' : status === 'error' ? '✗ Fehler' : 'Info'}
    </span>
  )
}

// Demo Scenarios with Generative UI
const demoScenarios = [
  {
    id: 'dashboard',
    title: 'Umsatz-Dashboard',
    icon: '📊',
    description: 'Live-generiertes Business Dashboard',
    systems: ['Bexio', 'WooCommerce', 'Stripe'],
    conversation: [
      { type: 'user', text: 'Zeig mir ein Dashboard mit den Umsätzen der letzten 3 Monate' },
      { type: 'status', text: 'Verbinde mit Bexio, WooCommerce und Stripe...' },
      { type: 'system', text: 'Daten werden geladen...' },
      { type: 'status', text: 'Generiere Dashboard...' },
      {
        type: 'ui',
        component: 'dashboard',
        data: {
          kpis: [
            { label: 'Gesamtumsatz', value: 'CHF 287\'450', trend: 12.5, color: 'primary' },
            { label: 'Bestellungen', value: '1\'247', trend: 8.3, color: 'accent' },
            { label: 'Ø Bestellwert', value: 'CHF 230', trend: -2.1, color: 'primary' },
            { label: 'Neue Kunden', value: '89', trend: 15.7, color: 'green' },
          ],
          chart: [
            { label: 'Okt', value: 84500 },
            { label: 'Nov', value: 92300 },
            { label: 'Dez', value: 110650 },
          ],
        }
      },
      { type: 'user', text: 'Aufschlüsseln nach Produktkategorie' },
      { type: 'status', text: 'Analysiere Verkaufsdaten nach Kategorien...' },
      {
        type: 'ui',
        component: 'breakdown',
        data: {
          bars: [
            { label: 'Software', value: 125000 },
            { label: 'Services', value: 89000 },
            { label: 'Hardware', value: 45000 },
            { label: 'Support', value: 28450 },
          ],
          pie: [
            { label: 'Software', value: 125000 },
            { label: 'Services', value: 89000 },
            { label: 'Hardware', value: 45000 },
            { label: 'Support', value: 28450 },
          ]
        }
      },
      { type: 'system', text: '📈 Insight: Software-Umsätze sind um 23% gestiegen verglichen mit dem Vorquartal. Der Dezember war der stärkste Monat durch Jahresend-Lizenzverlängerungen.' },
    ],
  },
  {
    id: 'report',
    title: 'Monatsbericht',
    icon: '📋',
    description: 'Automatisch generierter Finanz-Report',
    systems: ['Bexio', 'Clockify', 'Bank'],
    conversation: [
      { type: 'user', text: 'Erstelle einen Finanzbericht für Dezember 2024' },
      { type: 'status', text: 'Sammle Daten aus Buchhaltung, Zeiterfassung und Bank...' },
      { type: 'system', text: 'Analysiere Transaktionen und Arbeitszeiten...' },
      { type: 'status', text: 'Generiere Bericht...' },
      {
        type: 'ui',
        component: 'report',
        data: {
          title: 'Monatsbericht Dezember 2024',
          summary: {
            einnahmen: 'CHF 110\'650',
            ausgaben: 'CHF 67\'230',
            gewinn: 'CHF 43\'420',
            marge: '39.2%'
          },
          topExpenses: [
            ['Löhne & Sozialleistungen', 'CHF 42\'500', '63.2%'],
            ['Softwarelizenzen', 'CHF 8\'750', '13.0%'],
            ['Marketing', 'CHF 6\'200', '9.2%'],
            ['Büro & Infrastruktur', 'CHF 5\'400', '8.0%'],
            ['Diverses', 'CHF 4\'380', '6.6%'],
          ],
          projects: [
            ['Weber Redesign', '45h', 'CHF 12\'600', '✓'],
            ['App MVP Müller', '78h', 'CHF 21\'840', '✓'],
            ['Wartung Kunden', '23h', 'CHF 4\'140', '✓'],
          ]
        }
      },
      { type: 'user', text: 'Vergleich zum November?' },
      { type: 'status', text: 'Berechne Veränderungen...' },
      {
        type: 'ui',
        component: 'comparison',
        data: {
          metrics: [
            { label: 'Umsatz', current: 110650, previous: 92300, unit: 'CHF' },
            { label: 'Ausgaben', current: 67230, previous: 61400, unit: 'CHF' },
            { label: 'Gewinn', current: 43420, previous: 30900, unit: 'CHF' },
            { label: 'Projekte', current: 3, previous: 4, unit: '' },
          ]
        }
      },
      { type: 'system', text: '✅ Der Dezember war überdurchschnittlich profitabel. Die Gewinnmarge stieg von 33.5% auf 39.2%, hauptsächlich durch höhere Software-Lizenzverkäufe bei stabilen Fixkosten.' },
    ],
  },
  {
    id: 'analysis',
    title: 'Kunden-Analyse',
    icon: '🔍',
    description: 'Datengetriebene Kundeninsights',
    systems: ['HubSpot', 'Bexio', 'WooCommerce'],
    conversation: [
      { type: 'user', text: 'Welche Kunden haben 2024 am meisten Umsatz gebracht?' },
      { type: 'status', text: 'Analysiere Kundendaten aus CRM und Buchhaltung...' },
      { type: 'system', text: 'Verknüpfe Kundenprofile mit Transaktionen...' },
      {
        type: 'ui',
        component: 'topCustomers',
        data: {
          customers: [
            { rank: 1, name: 'TechCorp AG', revenue: 'CHF 89\'400', orders: 12, since: '2021' },
            { rank: 2, name: 'Digital Solutions', revenue: 'CHF 67\'200', orders: 8, since: '2022' },
            { rank: 3, name: 'MediaHouse GmbH', revenue: 'CHF 45\'800', orders: 15, since: '2020' },
            { rank: 4, name: 'StartupXY', revenue: 'CHF 34\'500', orders: 6, since: '2023' },
            { rank: 5, name: 'Retail Plus AG', revenue: 'CHF 28\'900', orders: 4, since: '2023' },
          ],
          total: 'CHF 265\'800'
        }
      },
      { type: 'user', text: 'Zeig mir das Wachstumspotenzial' },
      { type: 'status', text: 'Berechne Customer Lifetime Value und Wachstumsprognosen...' },
      {
        type: 'ui',
        component: 'potential',
        data: {
          opportunities: [
            { customer: 'StartupXY', current: 34500, potential: 85000, probability: '78%', reason: 'Skalierung geplant Q2' },
            { customer: 'MediaHouse GmbH', current: 45800, potential: 72000, probability: '65%', reason: 'Neue Abteilung' },
            { customer: 'Retail Plus AG', current: 28900, potential: 55000, probability: '45%', reason: 'Expansion Westschweiz' },
          ]
        }
      },
      { type: 'system', text: '💡 Empfehlung: StartupXY hat das höchste Wachstumspotenzial. Ein proaktives Gespräch über ihre Q2-Pläne könnte den Umsatz mehr als verdoppeln. Soll ich einen Termin im CRM anlegen?' },
      { type: 'user', text: 'Ja, lege einen Termin für nächste Woche an' },
      { type: 'status', text: 'Erstelle Termin in HubSpot...' },
      { type: 'system', text: '✅ Termin erstellt:\n\n📅 Meeting: Wachstumsgespräch StartupXY\n🕐 Nächste Woche Dienstag, 14:00\n👤 Kontakt: M. Schneider (Geschäftsleitung)\n📝 Notiz: Q2 Skalierungspläne besprechen\n\nErinnerung wird 1 Tag vorher gesendet.' },
    ],
  },
]

function DemoPage() {
  const [messages, setMessages] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentScenario, setCurrentScenario] = useState(null)
  const [activeSystems, setActiveSystems] = useState([])
  const [progress, setProgress] = useState(0)
  const chatContainerRef = useRef(null)
  const chatSectionRef = useRef(null)
  const playingRef = useRef(false)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (isPlaying) {
      scrollToBottom()
    }
  }, [messages, isPlaying])

  const playScenario = async (scenario) => {
    if (isPlaying) return

    setIsPlaying(true)
    playingRef.current = true
    setCurrentScenario(scenario.id)
    setActiveSystems(scenario.systems || [])
    setMessages([])
    setProgress(0)

    // Scroll to chat section (especially useful on mobile)
    setTimeout(() => {
      if (chatSectionRef.current) {
        const yOffset = -20 // Small offset from top
        const element = chatSectionRef.current
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)

    await new Promise(r => setTimeout(r, 500))

    const totalMessages = scenario.conversation.length
    let messageIndex = 0

    for (const msg of scenario.conversation) {
      if (!playingRef.current) break

      messageIndex++
      setProgress(Math.round((messageIndex / totalMessages) * 100))

      if (msg.type === 'user') {
        const msgId = Date.now()
        setMessages(prev => [...prev, { id: msgId, type: 'user', content: '', isTyping: true }])

        await new Promise(r => setTimeout(r, 300))
        for (let i = 0; i < msg.text.length; i++) {
          if (!playingRef.current) break
          const currentText = msg.text.substring(0, i + 1)
          setMessages(prev => prev.map(m =>
            m.id === msgId ? { ...m, content: currentText } : m
          ))
          await new Promise(r => setTimeout(r, 25))
        }
        setMessages(prev => prev.map(m =>
          m.id === msgId ? { ...m, isTyping: false } : m
        ))
        await new Promise(r => setTimeout(r, 600))

      } else if (msg.type === 'status') {
        setMessages(prev => [...prev, { id: Date.now(), type: 'status', content: msg.text }])
        await new Promise(r => setTimeout(r, 1200))

      } else if (msg.type === 'system') {
        const msgId = Date.now()
        setMessages(prev => [...prev, { id: msgId, type: 'system', content: '', isTyping: true }])
        await new Promise(r => setTimeout(r, 400))

        for (let i = 0; i < msg.text.length; i++) {
          if (!playingRef.current) break
          const currentText = msg.text.substring(0, i + 1)
          setMessages(prev => prev.map(m =>
            m.id === msgId ? { ...m, content: currentText } : m
          ))
          await new Promise(r => setTimeout(r, 12))
        }
        setMessages(prev => prev.map(m =>
          m.id === msgId ? { ...m, isTyping: false } : m
        ))
        await new Promise(r => setTimeout(r, 800))

      } else if (msg.type === 'ui') {
        // Add UI component message
        setMessages(prev => [...prev, {
          id: Date.now(),
          type: 'ui',
          component: msg.component,
          data: msg.data
        }])
        await new Promise(r => setTimeout(r, 1500))
      }
    }

    setProgress(100)
    setIsPlaying(false)
    playingRef.current = false
  }

  const stopDemo = () => {
    playingRef.current = false
    setIsPlaying(false)
  }

  const resetDemo = () => {
    setMessages([])
    setCurrentScenario(null)
    setActiveSystems([])
    setProgress(0)
  }

  // Render UI Components
  const renderUIComponent = (message) => {
    const { component, data } = message

    switch (component) {
      case 'dashboard':
        return (
          <div className="space-y-6 p-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.kpis.map((kpi, i) => (
                <KPICard key={i} {...kpi} delay={i * 100} />
              ))}
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-4">Umsatzentwicklung</h4>
              <LineChart data={data.chart} delay={400} />
            </div>
          </div>
        )

      case 'breakdown':
        return (
          <div className="grid md:grid-cols-2 gap-6 p-1">
            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-4">Nach Kategorie</h4>
              <BarChart data={data.bars} />
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-4">Verteilung</h4>
              <PieChart data={data.pie} delay={200} />
            </div>
          </div>
        )

      case 'report':
        return (
          <div className="space-y-4 p-1">
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl p-4 border border-primary-500/20">
              <h3 className="text-lg font-semibold text-white mb-1">{data.title}</h3>
              <p className="text-xs text-slate-400">Automatisch generiert von oDaaS</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-400">Einnahmen</p>
                <p className="text-xl font-bold text-green-400">{data.summary.einnahmen}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-400">Ausgaben</p>
                <p className="text-xl font-bold text-red-400">{data.summary.ausgaben}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-400">Gewinn</p>
                <p className="text-xl font-bold text-primary-400">{data.summary.gewinn}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-400">Marge</p>
                <p className="text-xl font-bold text-accent-400">{data.summary.marge}</p>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-3">Top Ausgaben</h4>
              <DataTable
                columns={['Kategorie', 'Betrag', 'Anteil']}
                rows={data.topExpenses}
                delay={200}
              />
            </div>

            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-3">Abgeschlossene Projekte</h4>
              <DataTable
                columns={['Projekt', 'Stunden', 'Umsatz', 'Status']}
                rows={data.projects}
                delay={300}
              />
            </div>
          </div>
        )

      case 'comparison':
        return (
          <div className="space-y-4 p-1">
            <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Monatsvergleich</h4>
                  <p className="text-xs text-slate-400">November 2024 → Dezember 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.metrics.map((m, i) => {
                  const change = ((m.current - m.previous) / m.previous) * 100
                  const isPositive = m.label === 'Ausgaben' ? change < 0 : change > 0
                  const iconColor = isPositive ? 'text-green-400' : 'text-red-400'
                  const bgColor = isPositive ? 'from-green-500/10 to-green-500/5' : 'from-red-500/10 to-red-500/5'
                  const borderColor = isPositive ? 'border-green-500/20' : 'border-red-500/20'

                  return (
                    <div
                      key={i}
                      className={`bg-gradient-to-br ${bgColor} rounded-xl p-4 border ${borderColor} animate-fadeIn`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <p className="text-xs text-slate-400 mb-1">{m.label}</p>
                      <p className="text-2xl font-bold text-white mb-2">
                        {m.unit} {m.current.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`flex items-center gap-1 text-sm font-medium ${iconColor}`}>
                          {isPositive ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          )}
                          {Math.abs(change).toFixed(1)}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        von {m.unit} {m.previous.toLocaleString()}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )

      case 'topCustomers':
        return (
          <div className="space-y-4 p-1">
            <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-slate-300 mb-4">Top 5 Kunden 2024</h4>
              <div className="space-y-3">
                {data.customers.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      i === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                      i === 1 ? 'bg-slate-400/20 text-slate-300' :
                      i === 2 ? 'bg-amber-600/20 text-amber-500' :
                      'bg-slate-700 text-slate-400'
                    }`}>
                      {c.rank}
                    </span>
                    <div className="flex-1">
                      <p className="text-white font-medium">{c.name}</p>
                      <p className="text-xs text-slate-500">Kunde seit {c.since} • {c.orders} Bestellungen</p>
                    </div>
                    <p className="text-primary-400 font-semibold">{c.revenue}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                <span className="text-slate-400">Top 5 Total</span>
                <span className="text-white font-bold">{data.total}</span>
              </div>
            </div>
          </div>
        )

      case 'potential':
        return (
          <div className="bg-slate-700/50 rounded-xl p-4 border border-white/10">
            <h4 className="text-sm font-medium text-slate-300 mb-4">Wachstumspotenzial</h4>
            <div className="space-y-4">
              {data.opportunities.map((o, i) => (
                <div key={i} className="p-3 bg-slate-800/50 rounded-lg animate-fadeIn" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-white font-medium">{o.customer}</span>
                    <span className="text-xs bg-accent-500/20 text-accent-400 px-2 py-1 rounded">{o.probability} Wahrscheinlichkeit</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-400 text-sm">CHF {o.current.toLocaleString()}</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-green-400 font-medium">CHF {o.potential.toLocaleString()}</span>
                    <span className="text-xs text-green-400/70">(+{Math.round(((o.potential - o.current) / o.current) * 100)}%)</span>
                  </div>
                  <p className="text-xs text-slate-500">💡 {o.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-slate-300 text-sm">Generative UI Demo</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Erleben Sie{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                oDaaS
              </span>
              {' '}in Aktion
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Sehen Sie, wie Dashboards, Reports und Analysen in Echtzeit generiert werden –
              angepasst an Ihre Fragen.
            </p>
          </div>
        </div>

        {/* Scenario Selection */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            Wählen Sie ein Szenario aus:
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {demoScenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => playScenario(scenario)}
                disabled={isPlaying}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 transform hover:scale-[1.02] ${
                  currentScenario === scenario.id
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl shadow-primary-500/25'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
                } ${isPlaying && currentScenario !== scenario.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                {currentScenario === scenario.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 animate-pulse" />
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{scenario.icon}</span>
                    {currentScenario === scenario.id && isPlaying && (
                      <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                        <span className="text-xs text-white">Läuft</span>
                      </div>
                    )}
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${currentScenario === scenario.id ? 'text-white' : 'text-white'}`}>
                    {scenario.title}
                  </h3>

                  <p className={`text-sm mb-4 ${currentScenario === scenario.id ? 'text-primary-100' : 'text-slate-400'}`}>
                    {scenario.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {scenario.systems.map((system) => (
                      <span
                        key={system}
                        className={`text-xs px-2 py-1 rounded-md ${
                          currentScenario === scenario.id
                            ? 'bg-white/20 text-white'
                            : 'bg-white/5 text-slate-500'
                        }`}
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                {currentScenario === scenario.id && progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div
                      className="h-full bg-white/50 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div ref={chatSectionRef} className="max-w-6xl mx-auto px-4 scroll-mt-4">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="bg-slate-800/80 px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">o</span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></span>
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">oDaaS Assistant</h2>
                    <div className="flex items-center gap-2">
                      {activeSystems.length > 0 ? (
                        <p className="text-xs text-slate-400">
                          Verbunden mit {activeSystems.length} Systemen
                        </p>
                      ) : (
                        <p className="text-xs text-slate-400">Bereit für Ihre Anfragen</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isPlaying && (
                    <button
                      onClick={stopDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                      Stoppen
                    </button>
                  )}
                  {messages.length > 0 && !isPlaying && (
                    <button
                      onClick={resetDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-400 rounded-xl hover:bg-white/10 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Zurücksetzen
                    </button>
                  )}
                </div>
              </div>

              {/* Active Systems Pills */}
              {activeSystems.length > 0 && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-500">Aktive Verbindungen:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeSystems.map((system) => (
                      <span
                        key={system}
                        className="inline-flex items-center gap-1.5 text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-lg"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Messages Area */}
            <div
              ref={chatContainerRef}
              className="h-[65vh] min-h-[500px] max-h-[800px] overflow-y-auto p-6 space-y-4 scroll-smooth dark-scrollbar"
            >
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Wählen Sie ein Szenario
                  </h3>
                  <p className="text-slate-400 max-w-md">
                    Klicken Sie oben auf eines der Demo-Szenarien, um zu sehen wie oDaaS
                    Dashboards und Reports in Echtzeit generiert.
                  </p>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {message.type === 'status' ? (
                        <div className="flex items-center gap-3 text-slate-500 text-sm py-2">
                          {isPlaying && index === messages.length - 1 ? (
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          <span className="italic">{message.content}</span>
                        </div>
                      ) : message.type === 'ui' ? (
                        <div className="w-full max-w-[95%] animate-fadeIn">
                          {renderUIComponent(message)}
                        </div>
                      ) : (
                        <div
                          className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 ${
                            message.type === 'user'
                              ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-br-md shadow-lg shadow-primary-500/20'
                              : 'bg-slate-700/50 text-slate-100 rounded-bl-md border border-white/5'
                          }`}
                        >
                          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {message.content}
                            {message.isTyping && (
                              <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse" />
                            )}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Input Area (Decorative) */}
            <div className="border-t border-white/10 p-4 bg-slate-800/30">
              <div className="flex gap-3">
                <div className="flex-1 bg-slate-700/30 rounded-xl px-4 py-3 text-sm text-slate-500 border border-white/5">
                  {isPlaying ? 'Demo läuft...' : 'Wählen Sie ein Szenario oben aus'}
                </div>
                <button
                  disabled
                  className="bg-slate-700/30 text-slate-500 px-4 py-3 rounded-xl cursor-not-allowed border border-white/5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-accent-600 p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bereit für Ihre eigene Integration?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Kontaktieren Sie uns für eine persönliche Demo mit Ihren echten Business-Systemen
                und sehen Sie, wie viel Zeit Sie sparen können.
              </p>
              <a
                href="mailto:info@odaas.ch"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-white/90 transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                info@odaas.ch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoPage
