'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { copy, type Lang } from '@/lib/i18n'

// Visual settings per card, in the same order as copy[lang].work.cards.
// size = zoom of the photo inside the card (cover = whole photo), pos = focal point.
const CARDS = [
  { src: '/work-blouse.png', size: '135%', pos: '30% 45%', accent: '#BE185D' },
  { src: '/work-beads.png', size: 'cover', pos: '50% 72%', accent: '#A16207' },
  { src: '/work-blouse.png', size: 'cover', pos: '50% 15%', accent: '#9D1450' },
  { src: '/work-school.png', size: 'cover', pos: '50% 55%', accent: '#1D4ED8' },
  { src: '/work-team.png', size: 'cover', pos: '50% 30%', accent: '#0F766E' },
  { src: '/work-team.png', size: '320%', pos: '26% 45%', accent: '#0369A1' },
  { src: '/work-gifts.jpeg', size: '230%', pos: '43% 32%', accent: '#F97316' },
  { src: '/work-gifts.jpeg', size: '170%', pos: '53% 72%', accent: '#B45309' },
  { src: '/work-gifts.jpeg', size: '320%', pos: '89% 41%', accent: '#15803D' },
]

const INTERVAL_MS = 3500

export default function WorkCarousel({ lang }: { lang: Lang }) {
  const w = copy[lang].work
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
        {CARDS.map((c, i) => (
          <article key={i} data-card className="work-card" style={{ ['--accent' as string]: c.accent }}>
            <div
              role="img"
              aria-label={w.cards[i].alt}
              className="work-card-img"
              style={{ backgroundImage: `url(${c.src})`, backgroundSize: c.size, backgroundPosition: c.pos }}
            >
              <span className="work-card-tag">{w.cards[i].tag}</span>
            </div>
            <div className="work-card-content">
              <h3 className="work-card-title">{w.cards[i].title}</h3>
              <p className="work-card-body">{w.cards[i].body}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 18 }}>
        <button type="button" className="work-arrow" aria-label={w.prev} onClick={() => step(-1)}>←</button>
        <button type="button" className="work-arrow" aria-label={w.next} onClick={() => step(1)}>→</button>
      </div>
    </div>
  )
}
