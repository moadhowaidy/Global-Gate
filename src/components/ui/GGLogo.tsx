type LogoSize = 'nav' | 'hero' | 'favicon' | 'footer'

interface GGLogoProps {
  size?: LogoSize
  className?: string
}

const sizes: Record<LogoSize, { width: number; height: number }> = {
  nav:     { width: 60,  height: 40  },
  hero:    { width: 200, height: 130 },
  footer:  { width: 50,  height: 32  },
  favicon: { width: 32,  height: 32  },
}

const GOLD = '#B8893C'

export default function GGLogo({ size = 'nav', className = '' }: GGLogoProps) {
  const { width, height } = sizes[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Global Gate monogram"
    >
      {/* ── TOP HORIZONTAL RULE ────────────────────────────────── */}
      <rect x="60" y="14" width="120" height="3" fill={GOLD} />

      {/* ── BOTTOM HORIZONTAL RULE ─────────────────────────────── */}
      <rect x="60" y="143" width="120" height="3" fill={GOLD} />

      {/* ── LEFT G — font-rendered for elegant serif curves ───── */}
      <text
        x="68"
        y="115"
        fontFamily="Playfair Display, Georgia, 'Times New Roman', serif"
        fontWeight="400"
        fontSize="110"
        fill={GOLD}
        textAnchor="middle"
        letterSpacing="-2"
      >
        G
      </text>

      {/* ── RIGHT G — mirrored via transform ───────────────────── */}
      <g transform="translate(240, 0) scale(-1, 1)">
        <text
          x="68"
          y="115"
          fontFamily="Playfair Display, Georgia, 'Times New Roman', serif"
          fontWeight="400"
          fontSize="110"
          fill={GOLD}
          textAnchor="middle"
          letterSpacing="-2"
        >
          G
        </text>
      </g>

      {/* ── CENTRE I-BAR DIVIDERS — thin vertical bars ─────────── */}
      <rect x="113" y="40" width="2.5" height="80" fill={GOLD} opacity="0.55" />
      <rect x="124.5" y="40" width="2.5" height="80" fill={GOLD} opacity="0.55" />
    </svg>
  )
}
