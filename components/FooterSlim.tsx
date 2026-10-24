import Link from 'next/link'
import MadeInIndia from '@/components/MadeInIndia'
import { copy, prefix, type Lang } from '@/lib/i18n'

export default function FooterSlim({ lang }: { lang: Lang }) {
  const c = copy[lang]
  return (
    <footer style={{ background: 'var(--dark-bg)', color: 'rgba(246,236,218,0.8)' }}>
      <div
        style={{
          borderTop: '1px solid rgba(246,236,218,0.15)',
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          maxWidth: 1160,
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-horizontal-dark.svg"
          alt="Vara Creations"
          style={{ height: 44, width: 'auto', display: 'block' }}
        />
        <div style={{ fontSize: 13, color: 'rgba(246,236,218,0.5)' }}>
          {c.footer.copyright}
          <div style={{ marginTop: 6, textAlign: 'center' }}>
            <MadeInIndia color="#F0B84B" size={12} label={c.madeInIndia} />
          </div>
        </div>
        <Link href={prefix(lang) || '/'} style={{ color: '#F0B84B', textDecoration: 'none', fontSize: 14 }}>
          {c.footer.back}
        </Link>
      </div>
    </footer>
  )
}
