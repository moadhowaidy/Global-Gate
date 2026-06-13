import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#040A2C',
          mid:     '#0A1240',
          lift:    '#141E56',
          dark:    '#02061C',
        },
        gold: {
          DEFAULT: '#B8893C',
          light:   '#CAA050',
          faint:   'rgba(184,137,60,0.10)',
          border:  'rgba(184,137,60,0.20)',
        },
        warm:     '#EDE5D0',
        muted:    '#7A8BAA',
        bodytext: '#B8A880',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        arabic:  ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
