import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import DemoPage from './pages/DemoPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/produkt" element={<ProductPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
