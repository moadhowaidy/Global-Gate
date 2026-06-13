import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import { ctaContent } from '../../data'

interface CtaBandProps {
  headlineOverride?: { en: string; ar: string }
}

export default function CtaBand({ headlineOverride }: CtaBandProps) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  const headline = headlineOverride
    ? lang === 'en'
      ? headlineOverride.en
      : headlineOverride.ar
    : lang === 'en'
    ? ctaContent.headlineEn
    : ctaContent.headlineAr

  const body =
    lang === 'en' ? ctaContent.bodyEn : ctaContent.bodyAr

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-[84px] bg-[#0A1240] border-y border-[#B8893C]/25"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center rtl:text-right">
        <h2 className="font-display text-[#EDE5D0] text-2xl md:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto mb-6 rtl:font-arabic rtl:mx-0 rtl:ml-auto">
          {headline}
        </h2>
        {!headlineOverride && (
          <p className="font-sans text-[#B8A880] text-base max-w-2xl mx-auto mb-10 leading-relaxed rtl:font-arabic rtl:mx-0 rtl:ml-auto">
            {body}
          </p>
        )}
        <Link to="/connect">
          <Button variant="gold">
            {lang === 'en' ? 'Start the Conversation' : 'ابدأ المحادثة'}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </Button>
        </Link>
      </div>
    </motion.section>
  )
}
