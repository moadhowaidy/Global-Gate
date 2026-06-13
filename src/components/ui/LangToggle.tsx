import { useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function LangToggle() {
  const { lang, triggerWave } = useLanguage()
  const btnRef = useRef<HTMLButtonElement>(null)

  function handleClick() {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    triggerWave({ x, y })
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="flex items-center gap-1.5 bg-[#141E56] border border-[#B8893C]/30 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8893C] hover:border-[#B8893C]/70 hover:bg-[#B8893C]/10 transition-all duration-300 cursor-pointer select-none"
      aria-label="Toggle language"
    >
      <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
      <span className="text-[#B8893C]/40">|</span>
      <span className={lang === 'ar' ? 'opacity-100' : 'opacity-40'}>AR</span>
    </button>
  )
}
