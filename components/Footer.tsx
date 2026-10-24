import Link from 'next/link'
import MadeInIndia from '@/components/MadeInIndia'
import { copy, prefix, PHONE_DISPLAY, type Lang } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang]
  return (
    <footer style={{ background: 'var(--dark-bg)', color: 'rgba(246,236,218,0.8)' }}>
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
            {c.footer.blurb}
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
            {c.footer.reach}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <a href="tel:+919966906773" className="footer-link footer-link-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0B84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link href={`${prefix(lang)}/contact`} className="footer-link footer-link-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0B84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>
              <span>{c.footer.contactPage}</span>
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
        {c.footer.copyright}
        <div style={{ marginTop: 10 }}>
          <MadeInIndia color="#F0B84B" size={12} label={c.madeInIndia} />
        </div>
      </div>
    </footer>
  )
}
