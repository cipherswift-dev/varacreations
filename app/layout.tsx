import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { SITE_LIVE } from '@/lib/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vara Creations — Home Embroidery Studio, Visakhapatnam',
  description:
    'Custom embroidery for saree blouses, school uniforms, team wear and personalised gifts. Family-run studio in Visakhapatnam, Andhra Pradesh.',
  icons: { icon: '/logo-icon.svg' },
  // Keep search engines away until launch (NEXT_PUBLIC_SITE_LIVE=true).
  robots: SITE_LIVE ? undefined : { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
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
