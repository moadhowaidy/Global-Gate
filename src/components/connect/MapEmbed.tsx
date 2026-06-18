import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { contact } from '../../data'

export default function MapEmbed() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="pb-20 bg-[#040A2C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative border border-[#B8893C]/18 overflow-hidden">
          <iframe
            src={contact.mapEmbed}
            className="w-full h-96 border-none map-dark"
            loading="lazy"
            title={
              lang === 'en'
                ? 'Global Gate — Al-Haddad, Tripoli, Libya'
                : 'البوابة العالمية — حي الحداد، طرابلس، ليبيا'
            }
          />
          <div className="absolute bottom-4 ltr:left-4 rtl:right-4 bg-[#040A2C]/92 border border-[#B8893C] p-3 backdrop-blur-sm">
            <h4 className="font-display text-[#B8893C] text-sm mb-1">
              {lang === 'en' ? 'Global Gate HQ' : 'مقر البوابة العالمية'}
            </h4>
            <p className="font-sans text-[#7A8BAA] text-xs rtl:font-arabic">
              {lang === 'en' ? contact.addressEn : contact.addressAr}
            </p>
            <p className="font-sans text-[#7A8BAA]/60 text-xs mt-0.5 rtl:font-arabic">
              {lang === 'en' ? contact.landmarkEn : contact.landmarkAr}
            </p>
            <a
              href={contact.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8893C] text-xs uppercase tracking-wide mt-1 inline-block hover:underline"
            >
              {lang === 'en' ? '↗ Open in Google Maps' : '↗ فتح في خرائط جوجل'}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
