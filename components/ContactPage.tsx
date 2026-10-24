'use client'
import { useRef } from 'react'
import Header from '@/components/Header'
import FooterSlim from '@/components/FooterSlim'
import { copy, waHref, type Lang } from '@/lib/i18n'

export default function ContactPage({ lang }: { lang: Lang }) {
  const c = copy[lang].contact
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)
  const msgRef = useRef<HTMLTextAreaElement>(null)

  function sendWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const name = nameRef.current?.value.trim() ?? ''
    const phone = phoneRef.current?.value.trim() ?? ''
    const service = serviceRef.current?.value ?? ''
    const msg = msgRef.current?.value.trim() ?? ''
    let text = c.msgGreeting
    if (name) text += `\n${c.msgName}: ` + name
    if (phone) text += `\n${c.msgPhone}: ` + phone
    if (service) text += `\n${c.msgService}: ` + service
    if (msg) text += `\n${c.msgDetails}: ` + msg
    window.open('https://wa.me/919966906773?text=' + encodeURIComponent(text), '_blank', 'noopener')
  }

  return (
    <div
      style={{
        fontFamily: 'var(--font-jost), system-ui, sans-serif',
        color: 'var(--ink)',
        background: 'var(--bg)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header lang={lang} activePage="contact" />

      <main
        style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 28px 90px', width: '100%', flex: 1 }}
      >
        {/* Intro */}
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--eyebrow)',
              marginBottom: 12,
            }}
          >
            {c.eyebrow}
          </div>
          <h1
            className="contact-h1"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 50,
              lineHeight: 1.08,
              fontWeight: 600,
              margin: '0 0 18px',
            }}
          >
            {c.h1}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
            {c.intro}
          </p>
        </div>

        {/* 2-col grid */}
        <div className="contact-grid">
          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* WhatsApp */}
            <a
              href={waHref(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-wa"
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{c.waTitle}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                  {c.waSub}
                </div>
              </div>
            </a>

            {/* Call */}
            <a href="tel:+919966906773" className="contact-card contact-card-phone">
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: '#FFF3DC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#854F0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{c.callTitle}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>{c.callSub}</div>
              </div>
            </a>
          </div>

          {/* Quote form */}
          <div style={{ border: '1px solid var(--border)', borderRadius: 20, background: 'var(--surface)', padding: 36 }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 28,
                fontWeight: 700,
                margin: '0 0 6px',
              }}
            >
              {c.formTitle}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '0 0 26px' }}>
              {c.formIntro}
            </p>

            <form onSubmit={sendWhatsApp}>
              <div className="form-grid">
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5, fontWeight: 500, color: 'var(--ink-2)' }}
                >
                  {c.name}
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder={c.namePh}
                    className="form-input"
                  />
                </label>

                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5, fontWeight: 500, color: 'var(--ink-2)' }}
                >
                  {c.phone}
                  <input
                    ref={phoneRef}
                    type="tel"
                    placeholder={c.phonePh}
                    className="form-input"
                  />
                </label>

                <label
                  style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: 'var(--ink-2)',
                  }}
                >
                  {c.service}
                  <select ref={serviceRef} className="form-input">
                    {c.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label
                  style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: 'var(--ink-2)',
                  }}
                >
                  {c.details}
                  <textarea
                    ref={msgRef}
                    rows={4}
                    placeholder={c.detailsPh}
                    className="form-input"
                    style={{ resize: 'vertical', minHeight: 110 }}
                  />
                </label>
              </div>

              <button type="submit" className="btn-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
                </svg>
                {c.send}
              </button>
            </form>

          </div>
        </div>
      </main>

      <FooterSlim lang={lang} />
    </div>
  )
}
