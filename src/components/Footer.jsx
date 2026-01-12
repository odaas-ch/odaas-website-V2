import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">o</span>
              </div>
              <span className="font-bold text-xl text-white">oDaaS</span>
            </Link>
            <p className="text-slate-500 max-w-md">
              KI-Integrationsplattform für Schweizer KMUs. Verbinden Sie Ihre Business-Software
              und stellen Sie einfach Fragen – in Ihren Worten.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/produkt" className="hover:text-primary-400 transition-colors">Produkt</Link></li>
              <li><Link to="/demo" className="hover:text-primary-400 transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-slate-500">
              <li>HSLU - Hochschule Luzern</li>
              <li>SmartUp Programm</li>
              <li>Informatik</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} oDaaS. Ein Projekt der Hochschule Luzern.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
