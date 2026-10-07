import Link from 'next/link'
import MadeInIndia from '@/components/MadeInIndia'

export default function FooterSlim() {
  return (
    <footer style={{ background: '#412402', color: 'rgba(246,236,218,0.8)' }}>
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
          © 2026 Vara Creations · Stitched with love in Visakhapatnam
          <div style={{ marginTop: 6, textAlign: 'center' }}>
            <MadeInIndia color="#F0B84B" size={12} />
          </div>
        </div>
        <Link href="/" style={{ color: '#F0B84B', textDecoration: 'none', fontSize: 14 }}>
          ← Back to home
        </Link>
      </div>
    </footer>
  )
}
