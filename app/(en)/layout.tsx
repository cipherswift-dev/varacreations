import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/app/globals.css'
import RootShell from '@/components/RootShell'

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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en" fontClass={`${cormorant.variable} ${jost.variable}`}>
      {children}
    </RootShell>
  )
}
