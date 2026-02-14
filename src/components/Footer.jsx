import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/white_2_medium.svg"
                alt="oDaaS Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-white">oDaaS</span>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Own Data As A Service — Die KI-Integrationsplattform für Schweizer KMUs.
              Ihre Daten. Ihre Kontrolle.
            </p>
            <div className="flex gap-3">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Swiss Made</span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Daten in CH</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-primary-400 transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <a
              href="mailto:info@odaas.ch"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              info@odaas.ch
            </a>
            <p className="text-slate-500 text-sm mt-4">
              www.odaas.ch
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} oDaaS. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
