import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Logo from '../ui/Logo'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'

interface PageHeroProps {
  eyebrowEn?: string
  eyebrowAr?: string
  titleEn: string
  titleAr: string
  subtitleEn?: string
  subtitleAr?: string
}

export default function PageHero({
  eyebrowEn,
  eyebrowAr,
  titleEn,
  titleAr,
  subtitleEn,
  subtitleAr,
}: PageHeroProps) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative pt-40 pb-20 bg-[#040A2C] rtl:text-right overflow-hidden"
    >
      {/* Watermark logo — Task 5D */}
      <div
        className="absolute ltr:right-0 rtl:left-0 top-0 bottom-0 flex items-center opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Logo size="watermark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {(eyebrowEn || eyebrowAr) && (
          <Eyebrow className="mb-4">
            {lang === 'en' ? eyebrowEn : eyebrowAr}
          </Eyebrow>
        )}
        <GoldRule className="mb-6" />
        <h1 className="font-display text-[#EDE5D0] text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl mb-4 rtl:font-arabic">
          {lang === 'en' ? titleEn : titleAr}
        </h1>
        {(subtitleEn || subtitleAr) && (
          <p className="font-sans text-[#7A8BAA] text-base md:text-lg max-w-xl rtl:font-arabic">
            {lang === 'en' ? subtitleEn : subtitleAr}
          </p>
        )}
      </div>
    </motion.section>
  )
}
