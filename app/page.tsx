import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LotusIcon from '@/components/LotusIcon'

const WA_HREF =
  'https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20a%20quote%20for%20embroidery.'

const SERVICES = [
  {
    gradient: 'linear-gradient(90deg,#BE185D,#EC4899)',
    title: 'Saree blouse embroidery',
    body: 'Our speciality. Aari and maggam-style work, zari, beads, mirror and threadwork — matched to your saree, for weddings, festivals and everyday elegance.',
    cls: 'service-card service-card-mag',
  },
  {
    gradient: 'linear-gradient(90deg,#1D4ED8,#38BDF8)',
    title: 'School uniforms & shirts',
    body: 'Names, class labels and school logos stitched neatly on shirts — durable embroidery that survives daily wear and every wash.',
    cls: 'service-card service-card-blue',
  },
  {
    gradient: 'linear-gradient(90deg,#0F766E,#2DD4BF)',
    title: 'Team & group orders',
    body: 'Sports teams, event crews, office staff — one logo across many garments, with consistent placement and colour on every piece.',
    cls: 'service-card service-card-teal',
  },
  {
    gradient: 'linear-gradient(90deg,#F97316,#FB923C)',
    title: 'Personalised gifts',
    body: 'Monograms and names on kerchiefs, towels, baby wraps and keepsakes — small stitches that make a gift feel truly personal.',
    cls: 'service-card service-card-ora',
  },
  {
    gradient: 'linear-gradient(90deg,#EF9F27,#FACC15)',
    title: 'All ages, all styles',
    body: "From a child's frock to a grandmother's shawl — playful motifs, florals, traditional patterns or clean minimal lines, sized for anyone.",
    cls: 'service-card service-card-gold',
  },
  {
    gradient: 'linear-gradient(90deg,#5B21B6,#8B2FD6)',
    title: 'Classes & workshops',
    body: 'Learn the craft with us — beginner-friendly sessions at our home studio for anyone who wants to pick up needle and thread.',
    cls: 'service-card service-card-pur',
  },
]

const HOW = [
  {
    n: '1',
    title: 'Share your design',
    body: "Send a photo, sketch or just an idea on WhatsApp — along with the garment and fabric. We'll suggest designs and give you a clear quote.",
  },
  {
    n: '2',
    title: 'We stitch it',
    body: "Your piece is embroidered at our home studio with care — we share progress photos so you always know how it's coming along.",
  },
  {
    n: '3',
    title: 'Pickup or delivery',
    body: "Collect from Kurmannapalem, Visakhapatnam — or we'll courier it anywhere in India, safely packed.",
  },
]

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

const FAQS = [
  {
    q: 'How much does embroidery cost?',
    a: "It depends on the design, garment category and material — a simple name costs far less than full maggam work. Send us a photo of your garment and the design you like on WhatsApp, and we'll give you a clear quote within a day. No obligation.",
  },
  {
    q: 'How long does an order take?',
    a: "Simple name or logo work is usually ready in 2–3 days. Detailed blouse embroidery takes about 1–2 weeks depending on the design. Group orders depend on quantity — tell us your deadline and we'll confirm before starting.",
  },
  {
    q: 'Is there a minimum order?',
    a: 'No. We happily take single pieces — one blouse, one shirt, one gift. For team and group orders, larger quantities simply get a better per-piece rate.',
  },
  {
    q: 'What fabrics can you embroider?',
    a: "Cotton, silk, pattu, georgette, linen, school-uniform poly-cotton and most blends. If you're unsure, send a photo or bring the garment over — we'll check the weave and suggest the right stitch and backing.",
  },
  {
    q: 'Do you provide the garment too?',
    a: 'Usually you bring your own garment or fabric and we do the embroidery. For group orders we can help source matching shirts or jerseys — ask us for options.',
  },
  {
    q: 'Can I pick a design from the internet?',
    a: "Yes! Share any reference picture — we'll tell you honestly what will translate well into thread, and adapt it to your garment, colours and budget.",
  },
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-jost), system-ui, sans-serif', color: '#412402', background: '#FBF8F2' }}>
      <Header />

      {/* ══ HERO ══ */}
      <section id="top" style={{ position: 'relative', overflow: 'hidden', background: '#FBF8F2' }}>
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
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
                border: '1px solid #E4D9C2',
                borderRadius: 999,
                padding: '7px 16px',
                fontSize: 13,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: '#854F0B',
                background: '#fff',
              }}
            >
              <LotusIcon size={24} />
              Home embroidery studio · Visakhapatnam
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
              Every stitch,{' '}
              <em style={{ fontStyle: 'italic', color: '#BE185D' }}>made with love</em> from our
              home to yours.
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#6B5335', margin: '0 0 34px', maxWidth: '50ch' }}>
              Custom embroidery for saree blouses, school uniforms, team wear and personalised
              gifts — for all age groups and every level of detail, from a simple name to full
              maggam work. A family-run studio, one order at a time.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Get a free quote
              </Link>
              <a href="#services" className="btn-outline">
                See what we stitch
              </a>
            </div>

            <div style={{ display: 'flex', gap: 32, marginTop: 40, fontSize: 14, color: '#854F0B', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF9F27', display: 'inline-block' }} />
                No minimum order
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EC4899', display: 'inline-block' }} />
                Hand &amp; machine work
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B2FD6', display: 'inline-block' }} />
                Pickup or courier
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section
        id="services"
        style={{ background: '#fff', borderTop: '1px solid #EAE3D3', borderBottom: '1px solid #EAE3D3' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 28px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#854F0B', marginBottom: 12 }}>
              What we stitch
            </div>
            <h2
              className="services-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: '0 0 14px' }}
            >
              One studio, every kind of embroidery
            </h2>
            <p style={{ color: '#6B5335', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              Simple or intricate, one piece or fifty — tell us what you have in mind and we&apos;ll
              suggest the right threadwork, placement and finish.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className={s.cls}>
                <div
                  style={{ width: 42, height: 4, borderRadius: 2, background: s.gradient, marginBottom: 18 }}
                />
                <h3
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 24, fontWeight: 700, margin: '0 0 10px' }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#6B5335', margin: 0 }}>{s.body}</p>
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
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#854F0B', marginBottom: 12 }}>
              Our work
            </div>
            <h2
              className="work-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              Recent pieces from the studio
            </h2>
          </div>
          <div style={{ fontSize: 14, color: '#9C8F76', maxWidth: 260, textAlign: 'right' }}>
            A glimpse of what we stitch — blouses, uniforms, gifts and team wear.
          </div>
        </div>

        <div className="work-grid">
          {[
            { src: '/work-blouse.png',  alt: 'Saree blouse maggam embroidery',        label: 'Blouse — maggam work',   pos: 'center top' },
            { src: '/work-school.png',  alt: 'School uniform embroidery logo on shirt', label: 'School logo on shirt',   pos: 'center 18%' },
            { src: '/work-gifts.jpeg',  alt: 'Personalised embroidered handkerchiefs',  label: 'Personalised gifts',      pos: 'center center' },
            { src: '/work-team.png',    alt: 'Team group embroidered uniforms',          label: 'Team & group orders',    pos: 'center top' },
          ].map(({ src, alt, label, pos }) => (
            <div
              key={label}
              style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', height: 280 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: pos,
                  display: 'block',
                  filter: 'brightness(1.04) saturate(0.88) contrast(1.02)',
                }}
              />
              {/* Bottom label overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '36px 14px 12px',
                  background: 'linear-gradient(to top, rgba(65,36,2,0.68) 0%, transparent 100%)',
                }}
              >
                <span style={{ color: '#F6ECDA', fontSize: 13, fontWeight: 500, letterSpacing: 0.3 }}>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how" style={{ background: '#412402', color: '#F6ECDA' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '76px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#F0B84B', marginBottom: 12 }}>
              How it works
            </div>
            <h2
              className="how-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              Three simple steps
            </h2>
          </div>

          <div className="how-grid">
            {HOW.map((step) => (
              <div
                key={step.n}
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
                  {step.n}
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
          <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#854F0B', marginBottom: 12 }}>
            Kind words
          </div>
          <h2
            className="testimonials-h2"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
          >
            From our first customers
          </h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              style={{
                border: '1px solid #EAE3D3',
                borderRadius: 18,
                padding: 30,
                margin: 0,
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ color: '#EF9F27', fontSize: 18, letterSpacing: 3 }}>★★★★★</div>
              <blockquote
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
              <figcaption style={{ fontSize: 14, color: '#854F0B', fontWeight: 500 }}>
                {t.name} · {t.what}
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#B0A487', marginTop: 22 }}>
          Sample reviews — we&apos;ll replace these with real customer words as they come in.
        </p>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: '#fff', borderTop: '1px solid #EAE3D3' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '76px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#854F0B', marginBottom: 12 }}>
              Questions
            </div>
            <h2
              className="faq-h2"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 42, fontWeight: 600, margin: 0 }}
            >
              Frequently asked
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p style={{ margin: '14px 0 4px', fontSize: 15, lineHeight: 1.7, color: '#6B5335' }}>{f.a}</p>
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
          Have a garment waiting for beautiful stitches?
        </h2>
        <p style={{ color: '#6B5335', fontSize: 17, margin: '0 0 32px' }}>
          Pricing depends on the design, category and material — send us a photo and we&apos;ll quote
          within a day.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px' }}>
            Request a quote
          </Link>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '15px 34px' }}>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
