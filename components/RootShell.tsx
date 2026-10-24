import type { Lang } from '@/lib/i18n'
import { copy } from '@/lib/i18n'

// Shared <html>/<body> for both language trees (each has its own root layout so <html lang> is correct).
export default function RootShell({
  lang,
  fontClass,
  children,
}: {
  lang: Lang
  fontClass: string
  children: React.ReactNode
}) {
  return (
    <html lang={copy[lang].htmlLang} className={fontClass} suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (default: light). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}",
          }}
        />
      </head>
      <body>
        {/* Shared SVG gradient defs — referenced by inline lotus SVGs site-wide */}
        <svg
          width="0"
          height="0"
          style={{ position: 'absolute', overflow: 'hidden' }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="gGold" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#EF9F27" />
              <stop offset="1" stopColor="#FACC15" />
            </linearGradient>
            <linearGradient id="gOra" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#F97316" />
              <stop offset="1" stopColor="#FB923C" />
            </linearGradient>
            <linearGradient id="gMag" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#BE185D" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="gPur" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#5B21B6" />
              <stop offset="1" stopColor="#8B2FD6" />
            </linearGradient>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  )
}
