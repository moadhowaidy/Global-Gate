import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { modelSteps } from '../../data'

function Step({ step, index, total }: { step: (typeof modelSteps)[0]; index: number; total: number }) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
      className="flex-1 flex flex-col relative rtl:text-right"
    >
      {/* Connector line (desktop only, not after last) */}
      {index < total - 1 && (
        <div
          className="hidden lg:block absolute top-5 ltr:left-[calc(100%)] rtl:right-[calc(100%)] w-full h-px bg-[#B8893C]/20 z-0"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 bg-[#0A1240] p-6 flex flex-col h-full border border-[#B8893C]/12 hover:border-[#B8893C]/35 transition-colors duration-300">
        <div className="font-display text-[#B8893C] text-4xl font-bold mb-4 opacity-30 leading-none">
          {step.numeral}
        </div>
        <h3 className="font-display text-[#EDE5D0] text-base font-semibold mb-3 rtl:font-arabic">
          {lang === 'en' ? step.titleEn : step.titleAr}
        </h3>
        <p className="font-sans text-[#B8A880] text-sm leading-relaxed rtl:font-arabic">
          {lang === 'en' ? step.bodyEn : step.bodyAr}
        </p>
      </div>
    </motion.div>
  )
}

export default function ModelSteps() {
  const { lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.08 })

  return (
    <section className="py-[76px] bg-[#0A1240] border-y border-[#B8893C]/12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 26 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 rtl:text-right"
        >
          <Eyebrow className="mb-3">
            {lang === 'en' ? 'Our Model' : 'نموذجنا'}
          </Eyebrow>
          <GoldRule className="mb-5" />
          <h2 className="font-display text-[#EDE5D0] text-3xl md:text-4xl font-semibold rtl:font-arabic">
            {lang === 'en' ? 'How We Work' : 'كيف نعمل'}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-1.5 rtl:lg:flex-row-reverse">
          {modelSteps.map((step, i) => (
            <Step key={step.numeral} step={step} index={i} total={modelSteps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
