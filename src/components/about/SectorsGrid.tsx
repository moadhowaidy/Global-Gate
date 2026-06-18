import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { sectors } from '../../data'

export default function SectorsGrid() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 bg-[#040A2C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12 rtl:text-right">
          <Eyebrow className="mb-3">
            {lang === 'en' ? 'Industries We Serve' : 'القطاعات التي نخدمها'}
          </Eyebrow>
          <GoldRule className="mb-5" />
          <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold rtl:font-arabic">
            {lang === 'en' ? 'Industries We Serve' : 'القطاعات التي نخدمها'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 gold-grid">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 }}
              className="bg-[#0A1240] px-6 py-8 flex items-center justify-center hover:bg-[#141E56] hover:border-[#B8893C]/40 border border-transparent transition-all duration-300 group cursor-default rtl:text-right"
            >
              <p className="font-sans text-[#B8A880] text-sm text-center group-hover:text-[#EDE5D0] transition-colors duration-200 rtl:font-arabic">
                {lang === 'en' ? sector.en : sector.ar}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
