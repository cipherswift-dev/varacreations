# Handoff: Vara Creations Website (Home + Contact)

## Overview
A two-page marketing website for **Vara Creations**, a family-run home embroidery studio in Visakhapatnam, India. Services: saree blouse embroidery (speciality), school uniform embroidery, team/group orders, personalised gifts, and embroidery classes. The site's goal is to get visitors to request a quote — primarily via WhatsApp, since pricing depends on design/category/material.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. `Home.dc.html` and `Contact.dc.html` use a custom component runtime (`<x-dc>`, `<sc-for>`, `<x-import>` tags); ignore the runtime mechanics and read them as the source of truth for markup structure, inline styles, and copy. The task is to **recreate these designs in the target codebase's environment** (React/Next.js, Astro, plain HTML/CSS, etc.) using its established patterns — or, if no codebase exists yet, choose an appropriate simple stack (a static site is ideal; there is no backend requirement).

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly. All copy in the HTML files is final copy.

## Design Tokens
Colors:
- Page background: `#FBF8F2` (warm cream)
- Card/section white: `#FFFFFF`, card tint: `#FBF8F2`
- Borders: `#EAE3D3` (light), `#E0D8C6` (inputs)
- Primary text / dark sections background: `#412402` (deep brown)
- Secondary text: `#6B5335`; muted: `#9C8F76`, `#B0A487`
- Accent (CTAs, links hover): `#BE185D` magenta; hover-darkened `#9D1450`
- Gold accents: `#854F0B` (labels on light), `#F0B84B` (labels on dark), `#EF9F27`
- Text on dark: `#F6ECDA` (cream), body on dark: `rgba(246,236,218,0.75–0.85)`
- WhatsApp green: `#25D366`
- Logo petal gradients (bottom→top): gold `#EF9F27→#FACC15`, orange `#F97316→#FB923C`, magenta `#BE185D→#EC4899`, purple `#5B21B6→#8B2FD6`

Typography:
- Headings: **Cormorant Garamond** (Google Fonts), weight 600–700. H1 50–58px (line-height ~1.06), H2 42px, card titles 24px, italic accent spans in magenta.
- Body/UI: **Jost** (Google Fonts), 300–600. Body 14.5–18px, line-height 1.7. Section eyebrows: 13px, letter-spacing 3px, uppercase, gold.

Shape & spacing:
- Pill buttons: border-radius 999px, padding ~15px 32px, 16px text.
- Cards: radius 16–20px, 1px border, padding 28–36px. Soft hover shadows tinted with the card's accent color (e.g. `0 10px 26px rgba(190,24,93,0.08)`).
- Content max-width: 1160px; section padding ~72–80px vertical, 28px horizontal.

## Screens / Views

### 1. Home (`Home.dc.html`)
Sections top to bottom:
1. **Sticky header** — translucent cream with blur, bottom border. Horizontal logo (52px tall) left; nav links (Services, How it works, FAQ, Contact) + dark-brown pill WhatsApp button right. Links hover to magenta.
2. **Hero** — 2-col grid (1.05fr / 0.95fr, 56px gap). Left: pill badge with mini lotus + "Home embroidery studio · Visakhapatnam", 58px serif H1 ("Every stitch, *made with love* from our home to yours." — italic span magenta), body paragraph, two pill CTAs (magenta "Get a free quote" → Contact; outlined "See what we stitch" → #services), then 3 small bullet-dot trust points (No minimum order / Hand & machine work / Pickup or courier). Right: large rounded photo placeholder (full width × 460px, radius 24) with a floating card overlapping bottom-left (lotus icon + "Stitched at home / with a mother's care").
3. **Services** — white band. Centered eyebrow + H2 + intro. 3×2 grid of cards; each card has a 42×4px gradient bar (a different logo gradient per card), 24px serif title, 14.5px body. Cards: Saree blouse embroidery, School uniforms & shirts, Team & group orders, Personalised gifts, All ages all styles, Classes & workshops. Hover: accent border + tinted shadow.
4. **Our work** — heading row + note; 4-col grid of photo placeholders (280px tall, radius 18). In production, replace with a real gallery the owners can update.
5. **How it works** — full-width dark brown band, cream text. 3 cards (1px translucent borders): big gold serif numerals 1/2/3, titles "Share your design" / "We stitch it" / "Pickup or delivery".
6. **Testimonials** — 3 white cards: gold ★★★★★, italic serif quote, attribution line. Currently sample content — clearly note as placeholder until real reviews exist.
7. **FAQ** — white band, 820px max-width, `<details>`/`<summary>` accordions (6 items: pricing, turnaround, minimums, fabrics, garment sourcing, internet designs). Copy is in the HTML.
8. **CTA** — centered lotus icon (80px), H2 "Have a garment waiting for beautiful stitches?", subline, magenta pill "Request a quote" + outlined "Chat on WhatsApp".
9. **Footer** — dark brown, 3 cols: dark-variant logo + blurb / address / contact links (tel, mailto, Contact page). Bottom bar: © 2026 Vara Creations · Stitched with love in Visakhapatnam.

### 2. Contact (`Contact.dc.html`)
1. Same sticky header (Contact marked active with magenta underline; logo links Home).
2. **Intro** — eyebrow, 50px H1 "Tell us about your piece — we'll quote within a day.", body note explaining WhatsApp is fastest.
3. **2-col layout** (0.9fr / 1.1fr, 40px gap):
   - Left, stacked contact cards (white, radius 16, icon in tinted circle 46px): WhatsApp (green circle, links to wa.me), Call (9 am – 8 pm all days), Email, Home studio address ("Pickups by appointment — message us first.").
   - Right, **quote form card** (radius 20, padding 36): fields Name, Phone (optional), service `<select>` (6 options matching services), message textarea. Submit = magenta pill "Send on WhatsApp".
4. Slim dark footer: logo, ©, back-to-home link.

## Interactions & Behavior
- **WhatsApp deep links**: `https://wa.me/919966906773?text=<urlencoded message>` — default message "Hi Vara Creations! I'd like a quote for embroidery." Open in new tab.
- **Quote form**: no backend. On submit, build a message from the fields (`Name: … / Phone: … / Service: … / Details: …`), URL-encode, open `wa.me/919966906773?text=…` in a new tab. Keep this pattern — it suits a home business with no server.
- FAQ accordions: native `<details>` behavior is fine.
- Anchor links (#services, #how, #faq) smooth-scroll (`scroll-behavior: smooth`).
- Hovers: nav links → magenta; primary buttons darken to `#9D1450`; outlined buttons invert to solid brown; cards get accent border + soft tinted shadow; inputs focus-border magenta.
- Responsive: prototype is desktop-first (1160px container). For production add breakpoints: hero → single column (photo below text), services grid 3→2→1, work gallery 4→2, how-it-works 3→1, contact 2-col → stacked, nav collapses to a simple menu. Min tap target 44px.

## State Management
None beyond the form (4 field values) — read on submit only. No data fetching.

## Business Facts (use exactly)
- Phone/WhatsApp: **+91 99669 06773** (`wa.me/919966906773`)
- Email: **varacreations@gmail.com**
- Address: 102, Harshitha Homes, Sathavahanagar, Kurmannapalem, Visakhapatnam, Andhra Pradesh — 530032
- Pricing: never show prices; always "depends on design, category and material — send a photo for a quote".

## Assets
`assets/` contains the final brand logos (SVG, vector — use these, don't recreate):
- `logo-horizontal-light.svg` — header on light backgrounds
- `logo-horizontal-dark.svg` — footer / dark backgrounds
- `logo-icon.svg` — lotus mark alone: favicon, badges, decorative accents (works on any background)
- `logo-stacked-light/dark.svg`, `logo-text-light.svg` — alternates
The small inline lotus icons in the pages are the same mark inlined as SVG paths (see any `viewBox="-82 -94 164 104"` block).
Photo placeholders (`image-slot.js`) are prototype-only: in production use plain `<img>` gallery images the owners supply.

## Files
- `Home.dc.html` — home page design reference
- `Contact.dc.html` — contact page design reference
- `image-slot.js` — prototype placeholder component (reference only, don't ship)
- `assets/*.svg` — final logo files
