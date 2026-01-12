import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    if (!isLandingPage) {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">o</span>
            </div>
            <span className="font-bold text-xl text-white">oDaaS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isLandingPage && (
              <>
                <button onClick={() => scrollToSection('problem')} className="text-slate-400 hover:text-primary-400 transition-colors">
                  Problem
                </button>
                <button onClick={() => scrollToSection('solution')} className="text-slate-400 hover:text-primary-400 transition-colors">
                  Lösung
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-slate-400 hover:text-primary-400 transition-colors">
                  So funktioniert's
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-primary-400 transition-colors">
                  Preise
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-primary-400 transition-colors">
                  Über uns
                </button>
              </>
            )}
            <Link to="/produkt" className="text-slate-400 hover:text-primary-400 transition-colors">
              Produkt
            </Link>
            <Link
              to="/demo"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors font-medium"
            >
              Demo testen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {isLandingPage && (
                <>
                  <button onClick={() => scrollToSection('problem')} className="text-left text-slate-400 hover:text-primary-400 transition-colors">
                    Problem
                  </button>
                  <button onClick={() => scrollToSection('solution')} className="text-left text-slate-400 hover:text-primary-400 transition-colors">
                    Lösung
                  </button>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-left text-slate-400 hover:text-primary-400 transition-colors">
                    So funktioniert's
                  </button>
                  <button onClick={() => scrollToSection('pricing')} className="text-left text-slate-400 hover:text-primary-400 transition-colors">
                    Preise
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-slate-400 hover:text-primary-400 transition-colors">
                    Über uns
                  </button>
                </>
              )}
              <Link
                to="/produkt"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produkt
              </Link>
              <Link
                to="/demo"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo testen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
