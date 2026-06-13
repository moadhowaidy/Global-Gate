import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { values } from '../../data'

export default function ValuesGrid() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 bg-[#0A1240] border-y border-[#B8893C]/12"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12 rtl:text-right">
          <Eyebrow className="mb-3">
            {lang === 'en' ? 'Core Values' : 'قيمنا الجوهرية'}
          </Eyebrow>
          <GoldRule className="mb-5" />
          <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold rtl:font-arabic">
            {lang === 'en' ? 'What We Stand For' : 'ما نؤمن به'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5 gold-grid">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
              className="bg-[#040A2C] p-6 flex flex-col items-start hover:bg-[#141E56] transition-colors duration-300 rtl:items-end rtl:text-right"
            >
              <div className="text-[#B8893C] text-2xl mb-4 font-display" aria-hidden="true">
                {val.icon}
              </div>
              <h3 className="font-display text-[#EDE5D0] text-sm font-semibold mb-2 rtl:font-arabic">
                {lang === 'en' ? val.titleEn : val.titleAr}
              </h3>
              <p className="font-sans text-[#7A8BAA] text-xs leading-relaxed rtl:font-arabic">
                {lang === 'en' ? val.bodyEn : val.bodyAr}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
