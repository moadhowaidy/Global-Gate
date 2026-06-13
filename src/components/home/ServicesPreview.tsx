import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import { services } from '../../data'

function ServiceCard({ svc, index }: { svc: (typeof services)[0]; index: number }) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-[#0A1240] border border-[#B8893C]/18 p-8 flex flex-col hover:border-[#B8893C]/40 transition-colors duration-300 group rtl:text-right"
    >
      <div className="font-display text-[#B8893C]/30 text-5xl font-bold leading-none mb-5">
        {svc.num}
      </div>
      <h3 className="font-display text-[#EDE5D0] text-xl font-semibold mb-4 rtl:font-arabic">
        {lang === 'en' ? svc.titleEn : svc.titleAr}
      </h3>
      <p className="font-sans text-[#B8A880] text-sm leading-relaxed flex-1 rtl:font-arabic">
        {lang === 'en' ? svc.descEn : svc.descAr}
      </p>
      <div className="mt-6 flex items-center gap-2 text-[#B8893C] text-xs uppercase tracking-widest font-semibold group-hover:gap-3 transition-all duration-200 rtl:flex-row-reverse">
        <Link to="/services">{lang === 'en' ? 'Learn more' : 'اعرف أكثر'}</Link>
        <ArrowRight size={12} className="rtl:rotate-180" />
      </div>
    </motion.div>
  )
}

export default function ServicesPreview() {
  const { lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.08 })

  // Show first 3 services
  const preview = services.slice(0, 3)

  return (
    <section className="py-20 bg-[#040A2C]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 26 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 rtl:flex-row-reverse rtl:text-right"
        >
          <div>
            <Eyebrow className="mb-3">{lang === 'en' ? 'What We Do' : 'ما نفعله'}</Eyebrow>
            <GoldRule className="mb-5" />
            <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold rtl:font-arabic">
              {lang === 'en' ? 'Five Pillars of Service' : 'خمسة محاور للخدمة'}
            </h2>
          </div>
          <Link to="/services">
            <Button variant="outline">
              {lang === 'en' ? 'View All Services' : 'جميع الخدمات'}
              <ArrowRight size={12} className="rtl:rotate-180" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 gold-grid">
          {preview.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
