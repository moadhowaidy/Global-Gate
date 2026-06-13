import React from 'react'

type Variant = 'gold' | 'outline' | 'whatsapp'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest text-xs font-semibold px-8 py-3 hover:-translate-y-0.5 cursor-pointer'

const variants: Record<Variant, string> = {
  gold: 'bg-[#B8893C] text-[#040A2C] hover:bg-[#CAA050]',
  outline: 'border border-[#B8893C] text-[#B8893C] hover:bg-[#B8893C]/10',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fb859]',
}

export default function Button({
  variant = 'gold',
  as,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
