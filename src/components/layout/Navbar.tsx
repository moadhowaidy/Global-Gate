import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import LangToggle from '../ui/LangToggle'
import { useLanguage } from '../../context/LanguageContext'
import { navLinks } from '../../data'

export default function Navbar() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#040A2C]/95 backdrop-blur-md border-b border-[#B8893C]/15 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 rtl:flex-row-reverse">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 rtl:flex-row-reverse">
            <Logo size="nav" />
            <div className="hidden sm:flex flex-col gap-0.5 rtl:items-end">
              <span className="font-display text-[#B8893C] text-sm tracking-[0.16em] uppercase leading-none">
                {lang === 'en' ? 'GLOBAL GATE' : 'البوابة العالمية'}
              </span>
              <span className="font-arabic text-[#7A8BAA] text-xs leading-snug">
                {lang === 'en' ? 'البوابة العالمية' : 'Global Gate'}
              </span>
              <span className="text-[#7A8BAA]/50 text-[9px] tracking-widest uppercase">
                {lang === 'en' ? 'Investment Advisory' : 'الاستشارات الاستثمارية'}
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 rtl:flex-row-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.pathEn}
                to={link.pathEn}
                className={({ isActive }) =>
                  `font-sans text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#B8893C]'
                      : 'text-[#7A8BAA] hover:text-[#EDE5D0]'
                  }`
                }
              >
                {lang === 'en' ? link.labelEn : link.labelAr}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3 rtl:flex-row-reverse">
            <LangToggle />
            <button
              className="lg:hidden p-1.5 text-[#7A8BAA] hover:text-[#B8893C] transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0A1240] border-t border-[#B8893C]/15">
          <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.pathEn}
                to={link.pathEn}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 rtl:text-right ${
                    isActive ? 'text-[#B8893C]' : 'text-[#7A8BAA] hover:text-[#EDE5D0]'
                  }`
                }
              >
                {lang === 'en' ? link.labelEn : link.labelAr}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
