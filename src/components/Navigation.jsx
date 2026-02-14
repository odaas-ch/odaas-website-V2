import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isLandingPage = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    if (!isLandingPage) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/black_2_medium.svg"
              alt="oDaaS Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-slate-900">oDaaS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isLandingPage && (
              <>
                <button onClick={() => scrollToSection('problem')} className="text-slate-600 hover:text-primary-600 transition-colors">
                  Problem
                </button>
                <button onClick={() => scrollToSection('solution')} className="text-slate-600 hover:text-primary-600 transition-colors">
                  Lösung
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-slate-600 hover:text-primary-600 transition-colors">
                  So funktioniert's
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-primary-600 transition-colors">
                  Über oDaaS
                </button>
              </>
            )}
            <Link
              to="/demo"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Demo testen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
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
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {isLandingPage && (
                <>
                  <button onClick={() => scrollToSection('problem')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">
                    Problem
                  </button>
                  <button onClick={() => scrollToSection('solution')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">
                    Lösung
                  </button>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">
                    So funktioniert's
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-slate-600 hover:text-primary-600 transition-colors">
                    Über oDaaS
                  </button>
                </>
              )}
              <Link
                to="/demo"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
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
