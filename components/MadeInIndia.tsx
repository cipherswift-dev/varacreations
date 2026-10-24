// "Made in India" badge with a small tricolour flag.
export default function MadeInIndia({
  color = 'var(--ink-2)',
  size = 13,
  label = 'Made in India',
}: {
  color?: string
  size?: number
  label?: string
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: size,
        fontWeight: 500,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color,
      }}
    >
      <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
        <rect x="0.5" y="0.5" width="23" height="15" rx="2.5" fill="#fff" stroke="#D8CFB8" />
        <path d="M3 .5h18a2.5 2.5 0 0 1 2.5 2.5v2.2h-23V3A2.5 2.5 0 0 1 3 .5Z" fill="#FF9933" />
        <path d="M.5 10.8h23V13a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 13Z" fill="#138808" />
        <circle cx="12" cy="8" r="1.9" fill="none" stroke="#000080" strokeWidth="0.9" />
      </svg>
      {label}
    </span>
  )
}
