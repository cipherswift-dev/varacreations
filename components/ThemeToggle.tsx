'use client'
import { useEffect, useState } from 'react'

// Moon in light mode (click → dark), sun in dark mode (click → light).
// The icon swap is pure CSS keyed on <html data-theme>, so there is no flash on load;
// RootShell's inline script sets data-theme before first paint.
export default function ThemeToggle({ labelDark, labelLight }: { labelDark: string; labelLight: string }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark')
  }, [])

  function toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setDark(next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={dark ? labelLight : labelDark} title={dark ? labelLight : labelDark}>
      <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  )
}
