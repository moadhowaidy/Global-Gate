import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { vision, mission } from '../../data'

export default function VisionMission() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  const cards = [
    {
      labelEn: 'Vision',
      labelAr: 'رؤيتنا',
      text: lang === 'en' ? vision.en : vision.ar,
    },
    {
      labelEn: 'Mission',
      labelAr: 'رسالتنا',
      text: lang === 'en' ? mission.en : mission.ar,
    },
  ]

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
            {lang === 'en' ? 'Foundation' : 'الأساس'}
          </Eyebrow>
          <GoldRule className="mb-5" />
          <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold rtl:font-arabic">
            {lang === 'en' ? 'Vision & Mission' : 'الرؤية والرسالة'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 gold-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#0A1240] p-10 rtl:text-right"
            >
              <Eyebrow className="mb-4">
                {lang === 'en' ? card.labelEn : card.labelAr}
              </Eyebrow>
              <p className="font-sans text-[#B8A880] text-base leading-relaxed rtl:font-arabic">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
