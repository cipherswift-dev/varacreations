import { Noto_Sans_Telugu, Noto_Serif_Telugu } from 'next/font/google'
import '@/app/globals.css'
import RootShell from '@/components/RootShell'

// Telugu glyphs. They reuse the same CSS variables as the English fonts (--font-jost / --font-cormorant),
// so no component needs to know which language it is rendering.
const sans = Noto_Sans_Telugu({
  subsets: ['telugu', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const serif = Noto_Serif_Telugu({
  subsets: ['telugu', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export default function TeLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="te" fontClass={`${serif.variable} ${sans.variable}`}>
      {children}
    </RootShell>
  )
}
