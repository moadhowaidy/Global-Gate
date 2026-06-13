import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { services } from '../../data'

function AccordionItem({
  svc,
  isOpen,
  onToggle,
  index,
}: {
  svc: (typeof services)[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  const subs = lang === 'en' ? svc.subsEn : svc.subsAr

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
      className={`border transition-colors duration-300 ${
        isOpen ? 'border-[#B8893C]/50' : 'border-[#B8893C]/15 hover:border-[#B8893C]/30'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-8 py-7 text-left rtl:text-right rtl:flex-row-reverse cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6 rtl:flex-row-reverse">
          <span className="font-display text-[#B8893C]/30 text-3xl font-bold leading-none shrink-0">
            {svc.num}
          </span>
          <h3 className="font-display text-[#EDE5D0] text-xl font-semibold rtl:font-arabic">
            {lang === 'en' ? svc.titleEn : svc.titleAr}
          </h3>
        </div>
        <div className="text-[#B8893C] shrink-0">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 grid md:grid-cols-2 gap-8 border-t border-[#B8893C]/15 pt-6 rtl:text-right">
              <p className="font-sans text-[#B8A880] text-sm leading-relaxed rtl:font-arabic">
                {lang === 'en' ? svc.descEn : svc.descAr}
              </p>
              <ul className="space-y-2">
                {subs.map((sub, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rtl:flex-row-reverse"
                  >
                    <span className="text-[#B8893C] mt-1.5 text-xs leading-none shrink-0">◆</span>
                    <span className="font-sans text-[#7A8BAA] text-sm rtl:font-arabic">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-[#040A2C]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-1.5">
          {services.map((svc, i) => (
            <AccordionItem
              key={svc.num}
              svc={svc}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
