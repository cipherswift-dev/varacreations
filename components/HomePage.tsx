import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LotusIcon from '@/components/LotusIcon'
import MadeInIndia from '@/components/MadeInIndia'
import WorkCarousel from '@/components/WorkCarousel'
import { copy, prefix, waHref, type Lang } from '@/lib/i18n'

// Visual styling for each service card, in the same order as copy[lang].services.items.
const SERVICE_STYLES = [
  { gradient: 'linear-gradient(90deg,#BE185D,#EC4899)', cls: 'service-card service-card-mag' },
  { gradient: 'linear-gradient(90deg,#1D4ED8,#38BDF8)', cls: 'service-card service-card-blue' },
  { gradient: 'linear-gradient(90deg,#0F766E,#2DD4BF)', cls: 'service-card service-card-teal' },
  { gradient: 'linear-gradient(90deg,#F97316,#FB923C)', cls: 'service-card service-card-ora' },
  { gradient: 'linear-gradient(90deg,#EF9F27,#FACC15)', cls: 'service-card service-card-gold' },
  { gradient: 'linear-gradient(90deg,#5B21B6,#8B2FD6)', cls: 'service-card service-card-pur' },
]

// Testimonials stay in the customer's own words (English) on every language page.
const TESTIMONIALS = [
  {
    quote:
      'The maggam work on my wedding blouse was better than any shop in town. You can feel the care in every stitch.',
    name: 'Placeholder',
    what: 'Bridal blouse',
  },
  {
    quote:
      "Got my son's name stitched on all his school shirts — neat, quick and it hasn't faded one bit after months of washing.",
    name: 'Placeholder',
    what: 'School uniforms',
  },
  {
    quote:
      "They embroidered our cricket team's logo on 15 jerseys. Every single one came out identical. Great value.",
    name: 'Placeholder',
    what: 'Team order',
  },
]

export default function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang]
  const p = prefix(lang)
  const WA_HREF = waHref(lang)
  return (
    <div style={{ fontFamily: 'var(--font-jost), system-ui, sans-serif', color: 'var(--ink)', background: 'var(--bg)' }}>
      <Header lang={lang} />

      {/* ══ HERO ══ */}
      <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        {/* Background image */}
        <div
          className="hero-bg"
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* Gradient overlay — cream on left for readability, fades to transparent on right */}
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        {/* Content */}
        <div style={{ position: 'relative', maxWidth: 1160, margin: '0 auto', padding: '88px 28px 88px' }}>
          <div style={{ maxWidth: 580 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid var(--border-2)',
                borderRadius: 999,
                padding: '7px 16px',
                fontSize: 13,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: 'var(--eyebrow)',
                background: 'var(--surface)',
              }}
            >
              <LotusIcon size={24} />
              {c.hero.badge}
            </div>
            <div style={{ marginTop: 14 }}>
              <MadeInIndia label={c.madeInIndia} />
            </div>

            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 58,
                lineHeight: 1.06,
                fontWeight: 600,
                margin: '26px 0 20px',
              }}
            >
              {c.hero.h1a}
              <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>{c.hero.h1em}</em>
              {c.hero.h1b}
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 34px', maxWidth: '50ch' }}>
              {c.hero.body}
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href={`${p}/contact`} className="btn-primary">
                {c.hero.quote}
              </Link>
              <a href="#services" className="btn-outline">
                {c.hero.see}
              </a>
            </div>

            <div style={{ display: 'flex', gap: 32, marginTop: 40, fontSize: 14, color: 'var(--eyebrow)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF9F27', display: 'inline-block' }} />
                {c.hero.points[0]}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EC4899', display: 'inline-block' }} />
                {c.hero.points[1]}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B2FD6', display: 'inline-block' }} />
                {c.hero.points[2]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section
        id="services"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 28px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--eyebrow)', marginBottom: 12 }}>
              {c.services.eyebrow}
            </div>
            <h2
              className="services-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: '0 0 14px' }}
            >
              {c.services.title}
            </h2>
            <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              {c.services.intro}
            </p>
          </div>

          <div className="services-grid">
            {c.services.items.map((item, i) => (
              <div key={item.title} className={SERVICE_STYLES[i].cls}>
                <div
                  style={{ width: 42, height: 4, borderRadius: 2, background: SERVICE_STYLES[i].gradient, marginBottom: 18 }}
                />
                <h3
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 24, fontWeight: 700, margin: '0 0 10px' }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR WORK ══ */}
      <section id="work" style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 28px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 36,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--eyebrow)', marginBottom: 12 }}>
              {c.work.eyebrow}
            </div>
            <h2
              className="work-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              {c.work.title}
            </h2>
          </div>
          <div style={{ fontSize: 14, color: '#9C8F76', maxWidth: 260, textAlign: 'right' }}>
            {c.work.blurb}
          </div>
        </div>

        <WorkCarousel lang={lang} />
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how" style={{ background: 'var(--dark-bg)', color: '#F6ECDA' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '76px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#F0B84B', marginBottom: 12 }}>
              {c.how.eyebrow}
            </div>
            <h2
              className="how-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              {c.how.title}
            </h2>
          </div>

          <div className="how-grid">
            {c.how.steps.map((step, i) => (
              <div
                key={i}
                style={{ border: '1px solid rgba(246,236,218,0.18)', borderRadius: 18, padding: 32 }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 44,
                    fontWeight: 700,
                    color: '#F0B84B',
                    lineHeight: 1,
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 24,
                    fontWeight: 700,
                    margin: '16px 0 10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(246,236,218,0.75)', margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials" style={{ maxWidth: 1160, margin: '0 auto', padding: '76px 28px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--eyebrow)', marginBottom: 12 }}>
            {c.testimonials.eyebrow}
          </div>
          <h2
            className="testimonials-h2"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
          >
            {c.testimonials.title}
          </h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 30,
                margin: 0,
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ color: '#EF9F27', fontSize: 18, letterSpacing: 3 }}>★★★★★</div>
              <blockquote
                lang="en"
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 19,
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption lang="en" style={{ fontSize: 14, color: 'var(--eyebrow)', fontWeight: 500 }}>
                {t.name} · {t.what}
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#B0A487', marginTop: 22 }}>
          {c.testimonials.note}
        </p>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '76px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--eyebrow)', marginBottom: 12 }}>
              {c.faq.eyebrow}
            </div>
            <h2
              className="faq-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              {c.faq.title}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {c.faq.items.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p style={{ margin: '14px 0 4px', fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 28px', textAlign: 'center' }}>
        <LotusIcon size={80} style={{ marginBottom: 20 }} />
        <h2
          className="cta-h2"
          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 44, fontWeight: 600, margin: '0 0 16px' }}
        >
          {c.cta.title}
        </h2>
        <p style={{ color: 'var(--ink-2)', fontSize: 17, margin: '0 0 32px' }}>
          {c.cta.body}
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`${p}/contact`} className="btn-primary" style={{ padding: '15px 34px' }}>
            {c.cta.quote}
          </Link>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '15px 34px' }}>
            {c.cta.whatsapp}
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
