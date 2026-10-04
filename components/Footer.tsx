import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#412402', color: 'rgba(246,236,218,0.8)' }}>
      <div
        className="footer-grid"
        style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 28px 40px' }}
      >
        {/* Brand */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-horizontal-dark.svg"
            alt="Vara Creations"
            style={{ height: 64, width: 'auto', display: 'block', marginBottom: 16 }}
          />
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, maxWidth: '36ch' }}>
            A family-run home embroidery studio in Visakhapatnam — stitching blouses, uniforms,
            team wear and gifts with love.
          </p>
        </div>

        {/* Address */}
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#F0B84B',
              marginBottom: 16,
            }}
          >
            Visit us
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0 }}>
            102, Harshitha Homes,
            <br />
            Sathavahanagar, Kurmannapalem,
            <br />
            Visakhapatnam, Andhra Pradesh — 530032
          </p>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#F0B84B',
              marginBottom: 16,
            }}
          >
            Reach us
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <a href="tel:+919966906773" className="footer-link">
              +91 99669 06773
            </a>
            <a href="mailto:varacreations@gmail.com" className="footer-link">
              varacreations@gmail.com
            </a>
            <Link href="/contact" className="footer-link">
              Contact page →
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(246,236,218,0.15)',
          padding: '18px 28px',
          textAlign: 'center',
          fontSize: 13,
          color: 'rgba(246,236,218,0.5)',
        }}
      >
        © 2026 Vara Creations · Stitched with love in Visakhapatnam
      </div>
    </footer>
  )
}
