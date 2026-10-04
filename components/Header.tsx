'use client'
import { useState } from 'react'
import Link from 'next/link'

const WA_HREF =
  'https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20a%20quote%20for%20embroidery.'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
  </svg>
)

export default function Header({ activePage }: { activePage?: 'contact' }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(251,248,242,0.94)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid #EAE3D3',
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '14px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.svg" alt="" aria-hidden="true" style={{ height: 52, width: 'auto', display: 'block' }} />
          <div style={{ borderLeft: '1px solid rgba(65,36,2,0.2)', paddingLeft: 11 }}>
            <div style={{ fontFamily: 'Georgia,"Times New Roman",serif', fontSize: 26, fontWeight: 700, letterSpacing: '1.5px', color: '#412402', lineHeight: 1 }}>
              VARA
            </div>
            <div style={{ fontFamily: 'Helvetica,Arial,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '5px', color: '#854F0B', textTransform: 'uppercase', lineHeight: 1, marginTop: 5 }}>
              CREATIONS
            </div>
          </div>
          <span className="sr-only">Vara Creations</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 15, fontWeight: 500 }}
        >
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#how" className="nav-link">How it works</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
          {activePage === 'contact' ? (
            <span style={{ color: '#BE185D', borderBottom: '2px solid #BE185D', paddingBottom: 2 }}>
              Contact
            </span>
          ) : (
            <Link href="/contact" className="nav-link">Contact</Link>
          )}
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="header-wa-btn">
            <WaIcon />
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link href="/#services" className="nav-link" onClick={close}>Services</Link>
        <Link href="/#how" className="nav-link" onClick={close}>How it works</Link>
        <Link href="/#faq" className="nav-link" onClick={close}>FAQ</Link>
        {activePage === 'contact' ? (
          <span style={{ color: '#BE185D', fontWeight: 500 }}>Contact</span>
        ) : (
          <Link href="/contact" className="nav-link" onClick={close}>Contact</Link>
        )}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="header-wa-btn"
          style={{ alignSelf: 'flex-start' }}
          onClick={close}
        >
          <WaIcon />
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
