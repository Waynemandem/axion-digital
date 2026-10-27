// src/components/ui/Tag.jsx
export default function Tag({ children, color }) {
  return (
    <span
      style={color ? { background: color + '18', color } : {}}
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${!color ? 'bg-[#1F1F1F] text-[#888]' : ''}`}
    >
      {children}
    </span>
  )
}