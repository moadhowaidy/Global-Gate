import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../ui/Logo'
import GoldRule from '../ui/GoldRule'
import { useLanguage } from '../../context/LanguageContext'
import { company, contact, navLinks } from '../../data'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="bg-[#0A1240] border-t border-[#B8893C]/20">
      {/* Main footer body */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 rtl:text-right">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 rtl:flex-row-reverse rtl:justify-end mb-4">
              <Logo size="nav" />
              <div className="rtl:text-right">
                <p className="font-display text-[#B8893C] text-sm font-semibold leading-none tracking-[0.14em] uppercase">
                  {lang === 'en' ? company.nameEn : company.nameAr}
                </p>
                <p className="font-sans text-[#7A8BAA]/50 text-[9px] uppercase tracking-widest mt-1">
                  {lang === 'en' ? company.subtitleEn : company.subtitleAr}
                </p>
              </div>
            </div>
            <GoldRule className="mb-4 rtl:mr-0 rtl:ml-auto" />
            <p className="text-[#7A8BAA] text-sm leading-relaxed max-w-xs rtl:font-arabic">
              {lang === 'en' ? company.taglineEn : company.taglineAr}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[#B8893C] text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              {lang === 'en' ? 'Navigation' : 'التنقل'}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.pathEn}>
                  <NavLink
                    to={link.pathEn}
                    className="font-sans text-sm text-[#7A8BAA] hover:text-[#B8893C] transition-colors duration-200 uppercase tracking-wide"
                  >
                    {lang === 'en' ? link.labelEn : link.labelAr}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[#B8893C] text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              {lang === 'en' ? 'Contact' : 'التواصل'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#B8893C] mt-0.5 shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  dir="ltr"
                  className="font-sans text-sm text-[#7A8BAA] hover:text-[#B8893C] transition-colors duration-200 rtl:text-right"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#B8893C] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  dir="ltr"
                  className="font-sans text-sm text-[#7A8BAA] hover:text-[#B8893C] transition-colors duration-200 break-all rtl:text-right"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#B8893C] mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-[#7A8BAA] rtl:font-arabic">
                  {lang === 'en' ? contact.addressEn : contact.addressAr}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dark bottom bar — Task 5C */}
      <div className="bg-[#02061C] border-t border-[#B8893C]/12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 rtl:flex-row-reverse">
<p className="font-sans text-[#7A8BAA] text-xs tracking-wide rtl:font-arabic">
            {lang === 'en'
              ? `© ${company.founded} Global Gate — All rights reserved`
              : `© ${company.founded} البوابة العالمية — جميع الحقوق محفوظة`}
          </p>
        </div>
        <p className="font-sans text-center text-[#7A8BAA]/50 pb-4" style={{ fontSize: '10px', letterSpacing: '0.06em' }}>
          Powered by{' '}
          <a
            href="https://swiftscaled.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#8B0000', textDecoration: 'none' }}
          >
            SWIFTSCAL
          </a>
        </p>
      </div>
    </footer>
  )
}
