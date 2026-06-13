import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import { heroContent } from '../../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

function parseHeadline(raw: string) {
  const parts = raw.split(/(<em>.*?<\/em>)/g)
  return parts.map((part, i) => {
    if (part.startsWith('<em>') && part.endsWith('</em>')) {
      const text = part.slice(4, -5)
      return (
        <em key={i} className="not-italic text-[#B8893C] font-display italic">
          {text}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function Hero() {
  const { lang } = useLanguage()
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    el.style.width = '0'
    el.style.transition = 'none'
    void el.offsetWidth
    el.style.transition = 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s'
    el.style.width = '56px'
  }, [])

  const headline = lang === 'en' ? heroContent.headlineEn : heroContent.headlineAr
  const sub = lang === 'en' ? heroContent.subEn : heroContent.subAr

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040A2C]">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(184,137,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,60,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,137,60,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start rtl:items-end"
        >
          {/* Logo block — Task 5B spec */}
          <motion.div
            className="mb-10 ltr:self-start rtl:self-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo size="hero" />
            <div className="flex items-center gap-2 mt-3 rtl:flex-row-reverse">
              <span className="text-[#7A8BAA] text-xs tracking-widest uppercase font-light">
                {lang === 'en' ? 'Investment Advisory' : 'استشارات استثمارية'}
              </span>
              <span className="text-[#B8893C]/40 text-xs">·</span>
              <span className="text-[#7A8BAA] text-xs tracking-widest uppercase font-light">
                {lang === 'en' ? 'Libya' : 'ليبيا'}
              </span>
            </div>
          </motion.div>

          {/* Gold line */}
          <motion.div variants={item} className="mb-8 ltr:self-start rtl:self-end">
            <div ref={lineRef} style={{ height: '2px', background: '#B8893C', width: '0' }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[#EDE5D0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6 rtl:font-arabic rtl:text-right"
          >
            {parseHeadline(headline)}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={item}
            className="font-sans text-[#7A8BAA] text-base md:text-lg max-w-xl mb-10 rtl:font-arabic rtl:text-right"
          >
            {sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 items-start rtl:flex-row-reverse"
          >
            <Link to="/connect">
              <Button variant="gold">
                {lang === 'en' ? 'Start the Conversation' : 'ابدأ المحادثة'}
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">
                {lang === 'en' ? 'Explore Our Services' : 'استكشف خدماتنا'}
              </Button>
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-col items-start gap-2 opacity-40 rtl:items-end"
          >
            <div className="w-px h-10 bg-[#B8893C]" />
            <p className="font-sans text-[#7A8BAA] text-[10px] uppercase tracking-widest">
              {lang === 'en' ? 'Scroll' : 'مرر للأسفل'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
