interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p
      className={`font-sans text-[#B8893C] text-xs uppercase tracking-[0.2em] font-semibold ${className}`}
    >
      {children}
    </p>
  )
}
