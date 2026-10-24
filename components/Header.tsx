'use client'
import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { copy, prefix, waHref, type Lang } from '@/lib/i18n'

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
  </svg>
)

function LangToggle({ lang, activePage }: { lang: Lang; activePage?: 'contact' }) {
  const path = activePage === 'contact' ? '/contact' : ''
  return (
    <div className="lang-toggle" role="group" aria-label={copy[lang].nav.langLabel}>
      <Link
        href={path || '/'}
        hrefLang="en"
        lang="en"
        className={lang === 'en' ? 'active' : undefined}
        aria-current={lang === 'en' ? 'true' : undefined}
        title="English"
      >
        EN
      </Link>
      <Link
        href={'/te' + path}
        hrefLang="te"
        lang="te"
        className={lang === 'te' ? 'active' : undefined}
        aria-current={lang === 'te' ? 'true' : undefined}
        title="తెలుగు"
      >
        త
      </Link>
    </div>
  )
}

export default function Header({ lang, activePage }: { lang: Lang; activePage?: 'contact' }) {
  const t = copy[lang].nav
  const p = prefix(lang)
  const WA_HREF = waHref(lang)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(var(--bg-rgb),0.94)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="header-inner"
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
        <Link href={p || '/'} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-img" src="/logo-icon.svg" alt="" aria-hidden="true" style={{ height: 52, width: 'auto', display: 'block' }} />
          <div style={{ borderLeft: '1px solid rgba(var(--ink-rgb),0.2)', paddingLeft: 11 }}>
            <div className="logo-text" style={{ fontFamily: 'Georgia,"Times New Roman",serif', fontSize: 26, fontWeight: 700, letterSpacing: '1.5px', color: 'var(--ink)', lineHeight: 1 }}>
              VARA
            </div>
            <div className="logo-text" style={{ fontFamily: 'Helvetica,Arial,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '5px', color: 'var(--eyebrow)', textTransform: 'uppercase', lineHeight: 1, marginTop: 5 }}>
              CREATIONS
            </div>
          </div>
          <span className="sr-only">Vara Creations</span>
        </Link>

        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 15, fontWeight: 500 }}
        >
          <Link href={`${p}/#services`} className="nav-link">{t.services}</Link>
          <Link href={`${p}/#how`} className="nav-link">{t.how}</Link>
          <Link href={`${p}/#faq`} className="nav-link">{t.faq}</Link>
          {activePage === 'contact' ? (
            <span style={{ color: 'var(--brand)', borderBottom: '2px solid var(--brand)', paddingBottom: 2 }}>
              {t.contact}
            </span>
          ) : (
            <Link href={`${p}/contact`} className="nav-link">{t.contact}</Link>
          )}
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="header-wa-btn">
            <WaIcon />
            {t.whatsapp}
          </a>
        </nav>

        <ThemeToggle labelDark={t.themeDark} labelLight={t.themeLight} />
        <LangToggle lang={lang} activePage={activePage} />

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t.close : t.open}
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
      </div>

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav${open ? ' open' : ''}`} aria-label={t.mobileLabel}>
        <Link href={`${p}/#services`} className="nav-link" onClick={close}>{t.services}</Link>
        <Link href={`${p}/#how`} className="nav-link" onClick={close}>{t.how}</Link>
        <Link href={`${p}/#faq`} className="nav-link" onClick={close}>{t.faq}</Link>
        {activePage === 'contact' ? (
          <span style={{ color: 'var(--brand)', fontWeight: 500 }}>{t.contact}</span>
        ) : (
          <Link href={`${p}/contact`} className="nav-link" onClick={close}>{t.contact}</Link>
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
          {t.whatsapp}
        </a>
      </nav>
    </header>
  )
}
