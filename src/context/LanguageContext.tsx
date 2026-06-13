import React, { createContext, useContext, useState, useCallback } from 'react'

type Lang = 'en' | 'ar'

interface WaveOrigin {
  x: number
  y: number
}

interface LanguageContextType {
  lang: Lang
  dir: 'ltr' | 'rtl'
  toggleLang: () => void
  triggerWave: (origin: WaveOrigin) => void
  waveActive: boolean
  waveOrigin: WaveOrigin
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [waveActive, setWaveActive] = useState(false)
  const [waveOrigin, setWaveOrigin] = useState<WaveOrigin>({ x: 0, y: 0 })

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ar' : 'en'
      document.documentElement.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', next)
      return next
    })
  }, [])

  const triggerWave = useCallback((origin: WaveOrigin) => {
    setWaveOrigin(origin)
    setWaveActive(true)
  }, [])

  const value: LanguageContextType = {
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    toggleLang,
    triggerWave,
    waveActive,
    waveOrigin,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
