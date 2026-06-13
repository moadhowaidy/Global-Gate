import { useState } from 'react'
import GGLogo from './GGLogo'

type LogoSize = 'nav' | 'hero' | 'footer' | 'watermark'

interface LogoProps {
  size?: LogoSize
  className?: string
}

/**
 * Renders the REAL logo image.
 *  - nav / hero / footer use the tightly cropped monogram  → /logo-mark.jpg
 *  - watermark uses the full square logo                    → /logo.jpg
 *
 * Served from /public via a plain <img> (NOT a bundler import) so a missing
 * file can never break the build. On a 404 it auto-falls back to the vector
 * GGLogo so the site never shows a broken-image icon.
 *
 * The image background (#040A2C) is the exact site background, so the square
 * blends into the page and only the gold monogram is visible.
 *
 * Box ratios match logo-mark.jpg (460×290 ≈ 1.586:1) so `contain` fills the
 * box with no meaningful letterbox and never clips the monogram.
 */

const boxes: Record<
  LogoSize,
  { w: number; h: number; src: string; svg: 'nav' | 'hero' | 'footer' }
> = {
  nav:       { w: 70,  h: 44,  src: '/logo-mark.jpg', svg: 'nav' },
  hero:      { w: 268, h: 170, src: '/logo-mark.jpg', svg: 'hero' },
  footer:    { w: 58,  h: 37,  src: '/logo-mark.jpg', svg: 'footer' },
  watermark: { w: 520, h: 520, src: '/logo.jpg',      svg: 'hero' },
}

export default function Logo({ size = 'nav', className = '' }: LogoProps) {
  const [failed, setFailed] = useState(false)
  const { w, h, src, svg } = boxes[size]

  if (failed) {
    return <GGLogo size={svg} className={className} />
  }

  return (
    <img
      src={src}
      alt="Global Gate"
      onError={() => setFailed(true)}
      style={{
        width: w,
        height: h,
        objectFit: 'contain',
        display: 'block',
      }}
      className={className}
    />
  )
}
