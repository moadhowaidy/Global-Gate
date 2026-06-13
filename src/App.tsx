import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import WaveOverlay from './components/ui/WaveOverlay'
import LoadingScreen from './components/ui/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Connect from './pages/Connect'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <WaveOverlay />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  )
}
