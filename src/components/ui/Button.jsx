// src/components/ui/Button.jsx
export default function Button({
  children, variant = 'primary', size = 'md',
  onClick, href, type = 'button', fullWidth = false
}) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer`

  const variants = {
    primary: 'bg-[#FF4D00] text-white hover:bg-[#e64400]',
    outline: 'border border-[#1F1F1F] text-[#FAFAFA] hover:border-[#FF4D00] hover:text-[#FF4D00]',
    ghost:   'text-[#888] hover:text-[#FAFAFA]',
    white:   'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-white',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 rounded-md',
    md: 'text-sm px-5 py-2.5 rounded-md',
    lg: 'text-sm px-7 py-3.5 rounded-md',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''}`

  if (href) return <a href={href} className={classes}>{children}</a>

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}