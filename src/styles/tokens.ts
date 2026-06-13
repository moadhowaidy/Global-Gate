export const colors = {
  // ── BACKGROUNDS ──────────────────────────────────────────────────
  navyDeep:  '#040A2C',   // primary body — matches logo bg exactly
  navyMid:   '#0A1240',   // section bands, card backgrounds
  navyLift:  '#141E56',   // elevated surfaces: nav, toggle, hover
  navyDark:  '#02061C',   // footer bar, deepest surfaces

  // ── GOLD ACCENT ───────────────────────────────────────────────────
  gold:      '#B8893C',   // primary — matches logo letter color exactly
  goldLight: '#CAA050',   // hover states
  goldFaint: 'rgba(184, 137, 60, 0.10)',
  goldBorder:'rgba(184, 137, 60, 0.20)',

  // ── TEXT ──────────────────────────────────────────────────────────
  whiteWarm: '#EDE5D0',   // primary text
  textMuted: '#7A8BAA',   // secondary / labels
  textBody:  '#B8A880',   // paragraph body text

  // ── UTILITY ───────────────────────────────────────────────────────
  waGreen:   '#25D366',   // WhatsApp button only
} as const

export const spacing = {
  sectionY:  'py-20',
  sectionYLg:'py-24',
  containerX:'px-6 md:px-10 lg:px-16',
  maxWidth:  'max-w-[1200px]',
} as const
