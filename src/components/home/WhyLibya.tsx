import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { whyLibya } from '../../data'

function Card({ card, index }: { card: (typeof whyLibya)[0]; index: number }) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-[#0A1240] border border-[#B8893C]/18 p-8 hover:border-[#B8893C]/40 transition-colors duration-300 rtl:text-right"
    >
      <div className="text-[#B8893C] text-2xl mb-5 font-display" aria-hidden="true">
        {card.icon}
      </div>
      <h3 className="font-display text-[#EDE5D0] text-xl font-semibold mb-3 rtl:font-arabic">
        {lang === 'en' ? card.titleEn : card.titleAr}
      </h3>
      <p className="font-sans text-[#B8A880] text-sm leading-relaxed rtl:font-arabic">
        {lang === 'en' ? card.bodyEn : card.bodyAr}
      </p>
    </motion.div>
  )
}

export default function WhyLibya() {
  const { lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.08 })

  return (
    <section className="py-20 bg-[#040A2C]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 26 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 rtl:text-right"
        >
          <Eyebrow className="mb-3">
            {lang === 'en' ? 'The Opportunity' : 'الفرصة'}
          </Eyebrow>
          <GoldRule className="mb-5" />
          <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold max-w-xl rtl:font-arabic">
            {lang === 'en' ? 'Why Libya. Why Now.' : 'لماذا ليبيا. لماذا الآن.'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 gold-grid">
          {whyLibya.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
