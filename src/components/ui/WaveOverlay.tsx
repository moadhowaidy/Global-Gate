import { useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function WaveOverlay() {
  const { waveActive, waveOrigin, toggleLang } = useLanguage()
  const circleRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!waveActive || !circleRef.current || !overlayRef.current) return

    const circle = circleRef.current
    const overlay = overlayRef.current

    overlay.style.display = 'block'

    // Position circle at click origin, centered
    circle.style.left = `${waveOrigin.x - 8}px`
    circle.style.top = `${waveOrigin.y - 8}px`

    // STEP 1: reset — no transition, scale 0
    circle.style.transition = 'none'
    circle.style.transform = 'scale(0)'
    circle.style.opacity = '1'

    // STEP 2: force reflow
    void circle.offsetWidth

    // STEP 3: animate expand
    circle.style.transition = 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)'
    circle.style.transform = 'scale(300)'

    // STEP 4: switch language while screen is covered
    const langTimer = window.setTimeout(() => {
      toggleLang()
    }, 660)

    // STEP 5: animate collapse
    const collapseTimer = window.setTimeout(() => {
      circle.style.transition = 'transform 520ms ease-in, opacity 520ms ease-in'
      circle.style.transform = 'scale(0)'
      circle.style.opacity = '0'
    }, 750)

    // STEP 6: hide overlay
    const hideTimer = window.setTimeout(() => {
      overlay.style.display = 'none'
    }, 1290)

    return () => {
      clearTimeout(langTimer)
      clearTimeout(collapseTimer)
      clearTimeout(hideTimer)
    }
  }, [waveActive, waveOrigin, toggleLang])

  return (
    <div
      ref={overlayRef}
      style={{ display: 'none' }}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={circleRef}
        style={{
          position: 'fixed',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: '#B8893C',
          transformOrigin: 'center center',
          transform: 'scale(0)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
