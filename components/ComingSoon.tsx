import { Plus_Jakarta_Sans } from 'next/font/google'
import './ComingSoon.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const WA_HREF =
  'https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20a%20quote%20for%20embroidery.'

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.8c.2.1.4.2.5.3 0 .2 0 .7-.3 1.1Z" />
  </svg>
)

const lucide = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const SERVICES = [
  {
    c: '#6c2b85',
    title: 'Saree blouse embroidery',
    body: 'Our speciality. Aari and maggam-style work, zari, beads, mirror and threadwork, matched to your saree.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...lucide} aria-hidden="true">
        <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
      </svg>
    ),
  },
  {
    c: '#c82e6a',
    title: 'School uniforms & shirts',
    body: 'Names, class labels and school logos stitched neatly: durable embroidery that survives daily wear and every wash.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...lucide} aria-hidden="true">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    c: '#e66928',
    title: 'Team & group orders',
    body: 'Sports teams, event crews, office staff: one logo across many garments, with consistent placement and colour.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...lucide} aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    c: '#d98a0b',
    title: 'Personalised gifts',
    body: 'Monograms and names on kerchiefs, towels, baby wraps and keepsakes: small stitches that make a gift personal.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...lucide} aria-hidden="true">
        <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    ),
  },
]

export default function ComingSoon() {
  return (
    <div className={`cs-root ${jakarta.variable}`}>
      {/* Decorative background: lotus watermarks, drifting threads, needle and hoop */}
      <div className="cs-bg" aria-hidden="true">
        <svg className="cs-lotus-tl" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C 130 50 140 90 100 170 C 60 90 70 50 100 10 Z" />
          <path d="M100 170 C 140 140 180 130 190 90 C 150 70 110 110 100 170 Z" />
          <path d="M100 170 C 60 140 20 130 10 90 C 50 70 90 110 100 170 Z" />
          <circle cx="100" cy="170" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
        <svg className="cs-lotus-br" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C 130 50 140 90 100 170 C 60 90 70 50 100 10 Z" />
          <path d="M100 170 C 140 140 180 130 190 90 C 150 70 110 110 100 170 Z" />
          <path d="M100 170 C 60 140 20 130 10 90 C 50 70 90 110 100 170 Z" />
        </svg>
        <svg className="cs-threads" xmlns="http://www.w3.org/2000/svg">
          <path className="cs-thread" d="M -50 150 C 300 50, 400 400, 800 200 C 1200 0, 1400 350, 1950 100" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path className="cs-thread" d="M -50 600 C 400 800, 700 300, 1100 700 C 1500 1000, 1700 500, 1950 800" fill="none" stroke="#C82E6A" strokeOpacity="0.12" strokeWidth="1.2" />
        </svg>
        <div className="cs-float-1">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#D4A359" strokeWidth="1.5" style={{ position: 'static' }}>
            <path d="M 20,80 L 80,20" />
            <circle cx="78" cy="22" r="1" fill="#D4A359" />
            <path d="M 78,22 C 90,10 95,35 75,45 C 55,55 40,30 60,15" stroke="#C82E6A" strokeDasharray="3,3" />
          </svg>
        </div>
        <div className="cs-float-2">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#6C2B85" strokeWidth="1.5" style={{ position: 'static' }}>
            <circle cx="50" cy="50" r="35" stroke="#D4A359" strokeDasharray="4,3" />
            <circle cx="50" cy="50" r="38" stroke="#D4A359" strokeOpacity="0.5" />
            <rect x="46" y="8" width="8" height="5" fill="#D4A359" rx="1" />
          </svg>
        </div>
        <div className="cs-glow" />
      </div>

      <header className="cs-header">
        <a className="cs-pill" href={WA_HREF} target="_blank" rel="noopener noreferrer">
          <WaIcon size={16} />
          <span>Message us on WhatsApp</span>
          <svg width="12" height="12" viewBox="0 0 24 24" {...lucide} strokeWidth={2.4} aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </header>

      <main className="cs-main">
        <section className="cs-hero">
          <div className="cs-emblem">
            <svg viewBox="0 0 300 200" aria-hidden="true">
              <defs>
                <linearGradient id="petal-center" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#F5A623" /><stop offset="100%" stopColor="#E66928" /></linearGradient>
                <linearGradient id="petal-inner" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#E66928" /><stop offset="100%" stopColor="#C82E6A" /></linearGradient>
                <linearGradient id="petal-mid" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C82E6A" /><stop offset="100%" stopColor="#8B2680" /></linearGradient>
                <linearGradient id="petal-outer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8B2680" /><stop offset="100%" stopColor="#5B2182" /></linearGradient>
              </defs>
              <path d="M 50,135 Q 110,185 150,135 Q 100,105 50,135 Z" fill="url(#petal-outer)" />
              <path d="M 250,135 Q 190,185 150,135 Q 200,105 250,135 Z" fill="url(#petal-outer)" />
              <path d="M 60,110 Q 115,155 150,135 Q 90,75 60,110 Z" fill="url(#petal-mid)" />
              <path d="M 240,110 Q 185,155 150,135 Q 210,75 240,110 Z" fill="url(#petal-mid)" />
              <path d="M 85,80 Q 130,135 150,135 Q 110,40 85,80 Z" fill="url(#petal-inner)" />
              <path d="M 215,80 Q 170,135 150,135 Q 190,40 215,80 Z" fill="url(#petal-inner)" />
              <path d="M 150,20 Q 170,80 150,135 Q 130,80 150,20 Z" fill="url(#petal-center)" />
              <path d="M 150,20 L 150,135" stroke="#FFF" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
              <path d="M 85,80 C 120,100 140,120 150,135" stroke="#FFF" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.5" fill="none" />
              <path d="M 215,80 C 180,100 160,120 150,135" stroke="#FFF" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.5" fill="none" />
            </svg>
          </div>

          <h1 className="cs-title">
            Vara <span>Creations</span>
          </h1>

          <div className="cs-tagline">
            <span className="cs-stitch-line" />
            <p>Crafting Elegance, Stitch by Stitch</p>
            <span className="cs-stitch-line" />
          </div>

          <p className="cs-lead">
            We&rsquo;re putting the final stitches on our new website. Meanwhile, our home embroidery studio in
            Visakhapatnam is open for saree blouses, school uniforms, team wear and personalised gifts.
          </p>
        </section>

        <section className="cs-stitched cs-launch">
          <span className="cs-badge">Launching Soon</span>
          <h2>Something beautiful is being stitched</h2>
          <p>Our new website opens soon. Until then, message us on WhatsApp and we&rsquo;ll be happy to help.</p>
        </section>

        <section className="cs-cta">
          <h3>Ready to start your piece?</h3>
          <p>Send a photo, sketch or just an idea. We&rsquo;ll suggest designs and share a clear quote.</p>
          <a className="cs-btn" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <WaIcon />
            <span>Chat with us on WhatsApp</span>
          </a>
        </section>

        <section className="cs-services">
          <div className="cs-services-head">
            <span className="cs-kicker">What we stitch</span>
            <h2>Our Embroidery Crafts</h2>
            <i />
          </div>
          <div className="cs-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="cs-card" style={{ '--c': s.c } as React.CSSProperties}>
                <div className="cs-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="cs-footer">
        <div className="cs-footer-in">
          <small>
            &copy; 2026 <b>Vara Creations</b>. All rights reserved. Home embroidery studio, Visakhapatnam.
          </small>
          <a className="cs-wa-round" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WaIcon size={16} />
          </a>
        </div>
      </footer>
    </div>
  )
}
