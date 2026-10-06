'use client'
import { useRef } from 'react'
import Header from '@/components/Header'
import FooterSlim from '@/components/FooterSlim'

export default function ContactPage() {
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
    let text = "Hi Vara Creations! I'd like a quote."
    if (name) text += '\nName: ' + name
    if (phone) text += '\nPhone: ' + phone
    if (service) text += '\nService: ' + service
    if (msg) text += '\nDetails: ' + msg
    window.open('https://wa.me/919966906773?text=' + encodeURIComponent(text), '_blank', 'noopener')
  }

  return (
    <div
      style={{
        fontFamily: 'var(--font-jost), system-ui, sans-serif',
        color: '#412402',
        background: '#FBF8F2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header activePage="contact" />

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
              color: '#854F0B',
              marginBottom: 12,
            }}
          >
            Contact us
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
            Tell us about your piece — we&apos;ll quote within a day.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#6B5335', margin: 0 }}>
            Pricing depends on the design, category and material, so the fastest way is to send a
            photo of your garment and reference design. WhatsApp works best for us.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="contact-grid">
          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20a%20quote%20for%20embroidery."
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
                <div style={{ fontWeight: 600, fontSize: 16 }}>WhatsApp — fastest reply</div>
                <div style={{ fontSize: 14, color: '#6B5335' }}>
                  +91 99669 06773 · send a photo of your garment
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
                <div style={{ fontWeight: 600, fontSize: 16 }}>Call us</div>
                <div style={{ fontSize: 14, color: '#6B5335' }}>+91 99669 06773 · 9 am – 8 pm, all days</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:varacreations@gmail.com" className="contact-card contact-card-email">
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: '#FDE7F1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>Email</div>
                <div style={{ fontSize: 14, color: '#6B5335' }}>varacreations@gmail.com</div>
              </div>
            </a>

            {/* Address */}
            <div className="contact-card-addr">
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: '#F0E9FB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16 }}>Home studio</div>
                <div style={{ fontSize: 14, color: '#6B5335', lineHeight: 1.7 }}>
                  102, Harshitha Homes, Sathavahanagar,
                  <br />
                  Kurmannapalem, Visakhapatnam,
                  <br />
                  Andhra Pradesh — 530032
                  <br />
                  <span style={{ color: '#9C8F76' }}>Pickups by appointment — message us first.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div style={{ border: '1px solid #EAE3D3', borderRadius: 20, background: '#fff', padding: 36 }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 28,
                fontWeight: 700,
                margin: '0 0 6px',
              }}
            >
              Request a quote
            </h2>
            <p style={{ fontSize: 14, color: '#6B5335', margin: '0 0 26px' }}>
              Fill this in and it opens WhatsApp with your message ready to send — attach photos
              there.
            </p>

            <form onSubmit={sendWhatsApp}>
              <div className="form-grid">
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5, fontWeight: 500, color: '#6B5335' }}
                >
                  Your name
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="e.g. Lakshmi"
                    className="form-input"
                  />
                </label>

                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5, fontWeight: 500, color: '#6B5335' }}
                >
                  Phone (optional)
                  <input
                    ref={phoneRef}
                    type="tel"
                    placeholder="For a call back"
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
                    color: '#6B5335',
                  }}
                >
                  What do you need?
                  <select ref={serviceRef} className="form-input">
                    <option>Saree blouse embroidery</option>
                    <option>School uniform / shirt embroidery</option>
                    <option>Team or group order</option>
                    <option>Personalised gift</option>
                    <option>Embroidery classes</option>
                    <option>Something else</option>
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
                    color: '#6B5335',
                  }}
                >
                  Tell us about it
                  <textarea
                    ref={msgRef}
                    rows={4}
                    placeholder="Garment, fabric, the design you have in mind, quantity, and when you need it…"
                    className="form-input"
                    style={{ resize: 'vertical', minHeight: 110 }}
                  />
                </label>
              </div>

              <button type="submit" className="btn-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
                </svg>
                Send on WhatsApp
              </button>
            </form>

            <p style={{ fontSize: 13, color: '#9C8F76', textAlign: 'center', margin: '14px 0 0' }}>
              Prefer email? Write to{' '}
              <a href="mailto:varacreations@gmail.com" style={{ color: '#854F0B' }}>
                varacreations@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <FooterSlim />
    </div>
  )
}
