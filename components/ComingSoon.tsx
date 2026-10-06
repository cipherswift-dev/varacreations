import LotusIcon from '@/components/LotusIcon'

const WA_HREF =
  'https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20to%20know%20more%20about%20your%20embroidery.'

export default function ComingSoon() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 24px',
        gap: 20,
      }}
    >
      <LotusIcon size={96} />
      <h1
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontWeight: 600,
          letterSpacing: '0.04em',
          margin: 0,
        }}
      >
        Vara Creations
      </h1>
      <p style={{ fontSize: 'clamp(18px, 3vw, 22px)', margin: 0, color: '#6B5335' }}>
        Home embroidery studio · Visakhapatnam
      </p>
      <p
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(26px, 5vw, 38px)',
          margin: '12px 0 0',
          color: '#BE185D',
        }}
      >
        Our new website is coming soon
      </p>
      <a className="btn-primary" href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ marginTop: 12 }}>
        Message us on WhatsApp
      </a>
    </main>
  )
}
