import LotusIcon from '@/components/LotusIcon'

const WA_HREF =
  'https://wa.me/919966906773?text=Hi%20Vara%20Creations!%20I%27d%20like%20to%20know%20more%20about%20your%20embroidery.'

// Faint cross-stitch grid, like Aida cloth (tiny "x" per cell).
const AIDA =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cpath d='M10 10l6 6M16 10l-6 6' stroke='%23E9DFC9' stroke-width='1.4' stroke-linecap='round' fill='none'/%3E%3C/svg%3E\")"

const STITCH = { fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

// A stitched flower: dashed petal outlines (running stitch), soft satin fill, French knots in the middle.
function Flower({ size }: { size: number }) {
  const outer = [0, 45, 90, 135, 180, 225, 270, 315]
  const inner = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5]
  return (
    <svg viewBox="-100 -100 200 200" width={size} height={size} aria-hidden="true" focusable="false">
      {outer.map((a, i) => (
        <ellipse
          key={a}
          cx="0"
          cy="-60"
          rx="17"
          ry="36"
          transform={`rotate(${a})`}
          {...STITCH}
          stroke={i % 2 ? '#5B21B6' : '#BE185D'}
          strokeWidth="2.6"
          strokeDasharray="6 5"
          style={{ fill: i % 2 ? 'rgba(91,33,182,0.10)' : 'rgba(190,24,93,0.12)' }}
        />
      ))}
      {inner.map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy="-36"
          rx="9"
          ry="20"
          transform={`rotate(${a})`}
          {...STITCH}
          stroke="#F97316"
          strokeWidth="2.2"
          strokeDasharray="4 4"
          style={{ fill: 'rgba(249,115,22,0.14)' }}
        />
      ))}
      <circle cx="0" cy="0" r="12" fill="#EF9F27" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle key={a} cx={20 * Math.cos((a * Math.PI) / 180)} cy={20 * Math.sin((a * Math.PI) / 180)} r="3.4" fill="#BE185D" />
      ))}
    </svg>
  )
}

// A trailing vine with leaves, drawn in running stitch.
function Sprig({ width }: { width: number }) {
  const leaves: [number, number, number][] = [
    [40, 62, -35], [78, 48, 30], [118, 58, -30], [156, 42, 32], [194, 50, -28],
  ]
  return (
    <svg viewBox="0 0 230 90" width={width} aria-hidden="true" focusable="false">
      <path d="M4 78 C50 70 70 30 120 48 S190 30 226 16" {...STITCH} stroke="#0F766E" strokeWidth="2.4" strokeDasharray="7 5" />
      {leaves.map(([x, y, r]) => (
        <ellipse
          key={x}
          cx={x}
          cy={y}
          rx="6"
          ry="15"
          transform={`rotate(${r} ${x} ${y})`}
          {...STITCH}
          stroke="#0F766E"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ fill: 'rgba(45,212,191,0.18)' }}
        />
      ))}
    </svg>
  )
}

// Needle with a loose thread that loops towards the flower.
function Needle({ width }: { width: number }) {
  return (
    <svg viewBox="0 0 300 150" width={width} aria-hidden="true" focusable="false">
      <path
        d="M286 128 C230 150 200 60 150 84 S70 130 40 78"
        {...STITCH}
        stroke="#BE185D"
        strokeWidth="2.6"
        strokeDasharray="7 6"
      />
      <g transform="rotate(-38 40 78)">
        <path d="M-30 78 L40 76.4 L40 79.6 Z" fill="#8B7355" />
        <ellipse cx="46" cy="78" rx="7" ry="2.6" fill="none" stroke="#8B7355" strokeWidth="2" />
      </g>
    </svg>
  )
}

const corner = { position: 'absolute' as const, pointerEvents: 'none' as const, opacity: 0.95 }

export default function ComingSoon() {
  return (
    <main
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '64px 28px',
        gap: 20,
        backgroundImage: AIDA,
        backgroundColor: '#FBF8F2',
      }}
    >
      {/* Running-stitch border */}
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: 'absolute', inset: 14, width: 'calc(100% - 28px)', height: 'calc(100% - 28px)', pointerEvents: 'none' }}
      >
        <rect x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="20" {...STITCH} stroke="#C99AAE" strokeWidth="2.2" strokeDasharray="9 7" className="stitch-march" />
      </svg>

      {/* Corner motifs */}
      <div style={{ ...corner, top: -70, left: -70 }}>
        <Flower size={260} />
      </div>
      <div style={{ ...corner, bottom: -90, right: -90 }}>
        <Flower size={300} />
      </div>
      <div style={{ ...corner, top: 34, right: 30 }} className="motif-hide-sm">
        <Sprig width={230} />
      </div>
      <div style={{ ...corner, bottom: 30, left: 30 }} className="motif-hide-sm">
        <Needle width={300} />
      </div>

      {/* Content, on a soft cream glow so it stays readable over the motifs */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: '40px 24px',
          background: 'radial-gradient(closest-side, rgba(251,248,242,0.96) 55%, rgba(251,248,242,0) 100%)',
        }}
      >
        <LotusIcon size={96} />
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 600,
            letterSpacing: '0.04em',
            margin: 0,
          }}
        >
          Vara Creations
        </h1>
        <p style={{ fontSize: 'clamp(18px, 3vw, 22px)', margin: 0, color: '#6B5335' }}>
          Home embroidery studio · Visakhapatnam
        </p>
        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(26px, 5vw, 38px)',
            margin: '12px 0 0',
            color: '#BE185D',
          }}
        >
          Our new website is coming soon
        </p>
        <a className="btn-primary" href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ marginTop: 12 }}>
          Message us on WhatsApp
        </a>
      </div>
    </main>
  )
}
