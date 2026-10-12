'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// size = zoom of the photo inside the card (cover = whole photo), pos = focal point
const CARDS = [
  { src: '/work-blouse.png', size: '135%', pos: '30% 45%', alt: 'Green saree blouse with red and gold maggam embroidery', title: 'Maggam blouse work', body: 'Rich aari and maggam embroidery with zari, beads and stones — matched to your saree.', tag: 'Our speciality', accent: '#BE185D' },
  { src: '/work-beads.png', size: 'cover', pos: '50% 72%', alt: 'Coral silk blouse sleeve with hand-set gold bead and stone motifs', title: 'Maggam work with beads', body: 'Hand-set beads, stones and zari layered into maggam designs for a rich, dimensional finish.', tag: 'Beads & stones', accent: '#A16207' },
  { src: '/work-blouse.png', size: 'cover', pos: '50% 15%', alt: 'Bridal blouse paired with gold jewellery and a red silk saree', title: 'Bridal & festive blouses', body: 'Full-detail designs for weddings and festivals, planned with you from sketch to fitting.', tag: 'Silk · Pattu · Georgette', accent: '#9D1450' },
  { src: '/work-school.png', size: 'cover', pos: '50% 55%', alt: 'School crest embroidered on a white uniform shirt', title: 'School logos & names', body: 'Crests, class labels and names stitched neatly on shirts, built to survive daily wear.', tag: 'Names & crests', accent: '#1D4ED8' },
  { src: '/work-team.png', size: 'cover', pos: '50% 30%', alt: 'Team wearing matching navy polos and hoodies with an embroidered crest', title: 'Team & group orders', body: 'One logo across many polos, tees and hoodies — same placement and colour on every piece.', tag: 'Any quantity', accent: '#0F766E' },
  { src: '/work-team.png', size: '320%', pos: '26% 45%', alt: 'Close-up of a gold and white crest embroidered on a navy polo', title: 'Crisp logo embroidery', body: 'Company and club marks stitched sharp and clean, ready for staff uniforms and events.', tag: 'Office & event wear', accent: '#0369A1' },
  { src: '/work-gifts.jpeg', size: '230%', pos: '43% 32%', alt: 'Pink flowers hand-embroidered on a yellow napkin', title: 'Personalised gifts', body: 'Monograms, names and delicate florals on kerchiefs and keepsakes that feel truly personal.', tag: 'Gift ready', accent: '#F97316' },
  { src: '/work-gifts.jpeg', size: '170%', pos: '53% 72%', alt: 'Hand-embroidered sprig on a mustard linen napkin', title: 'Table linen & napkins', body: 'Hand-stitched botanical motifs on napkins, runners and home linen.', tag: 'Hand embroidery', accent: '#B45309' },
  { src: '/work-gifts.jpeg', size: '320%', pos: '89% 41%', alt: 'Pink blossom embroidered on a green cloth', title: 'Floral hand embroidery', body: 'Soft satin-stitch blossoms and leaves — made slowly, one stitch at a time.', tag: 'Made to order', accent: '#15803D' },
]

const INTERVAL_MS = 3500

export default function WorkCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  const step = useCallback((dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const delta = (card?.offsetWidth ?? 300) + 20
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    const atStart = el.scrollLeft <= 4
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: dir * delta, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => step(1), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, step])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div ref={trackRef} className="work-track">
        {CARDS.map((c) => (
          <article key={c.title} data-card className="work-card" style={{ ['--accent' as string]: c.accent }}>
            <div
              role="img"
              aria-label={c.alt}
              className="work-card-img"
              style={{ backgroundImage: `url(${c.src})`, backgroundSize: c.size, backgroundPosition: c.pos }}
            >
              <span className="work-card-tag">{c.tag}</span>
            </div>
            <div className="work-card-content">
              <h3 className="work-card-title">{c.title}</h3>
              <p className="work-card-body">{c.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 18 }}>
        <button type="button" className="work-arrow" aria-label="Previous" onClick={() => step(-1)}>←</button>
        <button type="button" className="work-arrow" aria-label="Next" onClick={() => step(1)}>→</button>
      </div>
    </div>
  )
}
