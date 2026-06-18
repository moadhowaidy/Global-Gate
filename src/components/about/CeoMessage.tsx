import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { ceoMessage } from '../../data'

export default function CeoMessage() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 bg-[#0A1240]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10 rtl:text-right">
          <Eyebrow className="mb-3">
            {lang === 'en' ? 'CEO Message' : 'رسالة الرئيسة التنفيذية'}
          </Eyebrow>
          <GoldRule className="mb-5" />
        </div>

        <blockquote
          className={`ltr:border-l-4 rtl:border-r-4 border-[#B8893C] ltr:pl-8 rtl:pr-8 max-w-3xl rtl:text-right`}
        >
          <p className="font-display text-[#EDE5D0] text-lg md:text-xl leading-relaxed mb-6 rtl:font-arabic">
            {lang === 'en' ? ceoMessage.en : ceoMessage.ar}
          </p>
          <footer className="rtl:text-right">
            <div className="font-display text-[#B8893C] text-base font-semibold rtl:font-arabic">
              {lang === 'en' ? ceoMessage.signatureNameEn : ceoMessage.signatureNameAr}
            </div>
            <div className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest mt-1 rtl:font-arabic">
              {lang === 'en' ? ceoMessage.signatureTitleEn : ceoMessage.signatureTitleAr}
            </div>
          </footer>
        </blockquote>
      </div>
    </motion.section>
  )
}
