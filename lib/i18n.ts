// All site copy, English + Telugu. Components receive a `lang` and read `copy[lang]`.
// Telugu was written by Claude and has NOT been reviewed by a native speaker yet.
// Customer testimonials are intentionally NOT here — they stay in the customer's own words (English).

export type Lang = 'en' | 'te'

export const PHONE_DISPLAY = '+91 99669 06773'

/** URL prefix for a language: '' for English, '/te' for Telugu. */
export const prefix = (lang: Lang) => (lang === 'te' ? '/te' : '')

export const waHref = (lang: Lang) =>
  'https://wa.me/919966906773?text=' + encodeURIComponent(copy[lang].waDefault)

type Card = { alt: string; title: string; body: string; tag: string }
type Item = { title: string; body: string }
type Faq = { q: string; a: string }

export type Copy = {
  htmlLang: string
  metaTitle: string
  metaDescription: string
  contactMetaTitle: string
  waDefault: string
  madeInIndia: string
  nav: { services: string; how: string; faq: string; contact: string; whatsapp: string; open: string; close: string; mobileLabel: string; langLabel: string }
  hero: { badge: string; h1a: string; h1em: string; h1b: string; body: string; quote: string; see: string; points: [string, string, string] }
  services: { eyebrow: string; title: string; intro: string; items: Item[] }
  work: { eyebrow: string; title: string; blurb: string; prev: string; next: string; cards: Card[] }
  how: { eyebrow: string; title: string; steps: Item[] }
  testimonials: { eyebrow: string; title: string; note: string }
  faq: { eyebrow: string; title: string; items: Faq[] }
  cta: { title: string; body: string; quote: string; whatsapp: string }
  footer: { blurb: string; reach: string; contactPage: string; copyright: string; back: string }
  contact: {
    eyebrow: string; h1: string; intro: string
    waTitle: string; waSub: string; callTitle: string; callSub: string
    formTitle: string; formIntro: string
    name: string; namePh: string; phone: string; phonePh: string
    service: string; options: string[]; details: string; detailsPh: string; send: string
    msgGreeting: string; msgName: string; msgPhone: string; msgService: string; msgDetails: string
  }
}

const en: Copy = {
  htmlLang: 'en',
  metaTitle: 'Vara Creations — Home Embroidery Studio, Visakhapatnam',
  metaDescription:
    'Custom embroidery for saree blouses, school uniforms, team wear and personalised gifts. Family-run studio in Visakhapatnam, Andhra Pradesh.',
  contactMetaTitle: 'Contact — Vara Creations',
  waDefault: "Hi Vara Creations! I'd like a quote for embroidery.",
  madeInIndia: 'Made in India',
  nav: {
    services: 'Services', how: 'How it works', faq: 'FAQ', contact: 'Contact', whatsapp: 'WhatsApp',
    open: 'Open menu', close: 'Close menu', mobileLabel: 'Mobile navigation', langLabel: 'Language',
  },
  hero: {
    badge: 'Home embroidery studio · Visakhapatnam',
    h1a: 'Every stitch, ',
    h1em: 'made with love',
    h1b: ' from our home to yours.',
    body: 'Custom embroidery for saree blouses, school uniforms, team wear and personalised gifts — for all age groups and every level of detail, from a simple name to full maggam work. A family-run studio, one order at a time.',
    quote: 'Get a free quote',
    see: 'See what we stitch',
    points: ['No minimum order', 'Hand & machine work', 'Pickup or courier'],
  },
  services: {
    eyebrow: 'What we stitch',
    title: 'One studio, every kind of embroidery',
    intro: "Simple or intricate, one piece or fifty — tell us what you have in mind and we'll suggest the right threadwork, placement and finish.",
    items: [
      { title: 'Saree blouse embroidery', body: 'Our speciality. Aari and maggam-style work, zari, beads, mirror and threadwork — matched to your saree, for weddings, festivals and everyday elegance.' },
      { title: 'School uniforms & shirts', body: 'Names, class labels and school logos stitched neatly on shirts — durable embroidery that survives daily wear and every wash.' },
      { title: 'Team & group orders', body: 'Sports teams, event crews, office staff — one logo across many garments, with consistent placement and colour on every piece.' },
      { title: 'Personalised gifts', body: 'Monograms and names on kerchiefs, towels, baby wraps and keepsakes — small stitches that make a gift feel truly personal.' },
      { title: 'All ages, all styles', body: "From a child's frock to a grandmother's shawl — playful motifs, florals, traditional patterns or clean minimal lines, sized for anyone." },
      { title: 'Classes & workshops', body: 'Learn the craft with us — beginner-friendly sessions at our home studio for anyone who wants to pick up needle and thread.' },
    ],
  },
  work: {
    eyebrow: 'What we do',
    title: 'What we stitch, start to finish',
    blurb: 'From a single blouse to a hundred uniforms — here is what we deliver.',
    prev: 'Previous',
    next: 'Next',
    cards: [
      { alt: 'Green saree blouse with red and gold maggam embroidery', title: 'Maggam blouse work', body: 'Rich aari and maggam embroidery with zari, beads and stones — matched to your saree.', tag: 'Our speciality' },
      { alt: 'Coral silk blouse sleeve with hand-set gold bead and stone motifs', title: 'Maggam work with beads', body: 'Hand-set beads, stones and zari layered into maggam designs for a rich, dimensional finish.', tag: 'Beads & stones' },
      { alt: 'Bridal blouse paired with gold jewellery and a red silk saree', title: 'Bridal & festive blouses', body: 'Full-detail designs for weddings and festivals, planned with you from sketch to fitting.', tag: 'Silk · Pattu · Georgette' },
      { alt: 'School crest embroidered on a white uniform shirt', title: 'School logos & names', body: 'Crests, class labels and names stitched neatly on shirts, built to survive daily wear.', tag: 'Names & crests' },
      { alt: 'Team wearing matching navy polos and hoodies with an embroidered crest', title: 'Team & group orders', body: 'One logo across many polos, tees and hoodies — same placement and colour on every piece.', tag: 'Any quantity' },
      { alt: 'Close-up of a gold and white crest embroidered on a navy polo', title: 'Crisp logo embroidery', body: 'Company and club marks stitched sharp and clean, ready for staff uniforms and events.', tag: 'Office & event wear' },
      { alt: 'Pink flowers hand-embroidered on a yellow napkin', title: 'Personalised gifts', body: 'Monograms, names and delicate florals on kerchiefs and keepsakes that feel truly personal.', tag: 'Gift ready' },
      { alt: 'Hand-embroidered sprig on a mustard linen napkin', title: 'Table linen & napkins', body: 'Hand-stitched botanical motifs on napkins, runners and home linen.', tag: 'Hand embroidery' },
      { alt: 'Pink blossom embroidered on a green cloth', title: 'Floral hand embroidery', body: 'Soft satin-stitch blossoms and leaves — made slowly, one stitch at a time.', tag: 'Made to order' },
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three simple steps',
    steps: [
      { title: 'Share your design', body: "Send a photo, sketch or just an idea on WhatsApp — along with the garment and fabric. We'll suggest designs and give you a clear quote." },
      { title: 'We stitch it', body: "Your piece is embroidered at our home studio with care — we share progress photos so you always know how it's coming along." },
      { title: 'Pickup or delivery', body: "Pickup by appointment — or we'll courier it anywhere in India, safely packed." },
    ],
  },
  testimonials: {
    eyebrow: 'Kind words',
    title: 'From our first customers',
    note: "Sample reviews — we'll replace these with real customer words as they come in.",
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Frequently asked',
    items: [
      { q: 'How much does embroidery cost?', a: "It depends on the design, garment category and material — a simple name costs far less than full maggam work. Send us a photo of your garment and the design you like on WhatsApp, and we'll give you a clear quote within a day. No obligation." },
      { q: 'How long does an order take?', a: "Simple name or logo work is usually ready in 2–3 days. Detailed blouse embroidery takes about 1–2 weeks depending on the design. Group orders depend on quantity — tell us your deadline and we'll confirm before starting." },
      { q: 'Is there a minimum order?', a: 'No. We happily take single pieces — one blouse, one shirt, one gift. For team and group orders, larger quantities simply get a better per-piece rate.' },
      { q: 'What fabrics can you embroider?', a: "Cotton, silk, pattu, georgette, linen, school-uniform poly-cotton and most blends. If you're unsure, send a photo or bring the garment over — we'll check the weave and suggest the right stitch and backing." },
      { q: 'Do you provide the garment too?', a: 'Usually you bring your own garment or fabric and we do the embroidery. For group orders we can help source matching shirts or jerseys — ask us for options.' },
      { q: 'Can I pick a design from the internet?', a: "Yes! Share any reference picture — we'll tell you honestly what will translate well into thread, and adapt it to your garment, colours and budget." },
    ],
  },
  cta: {
    title: 'Have a garment waiting for beautiful stitches?',
    body: "Pricing depends on the design, category and material — send us a photo and we'll quote within a day.",
    quote: 'Request a quote',
    whatsapp: 'Chat on WhatsApp',
  },
  footer: {
    blurb: 'A family-run home embroidery studio in Visakhapatnam — stitching blouses, uniforms, team wear and gifts with love.',
    reach: 'Reach us',
    contactPage: 'Contact page',
    copyright: '© 2026 Vara Creations · Stitched with love in Visakhapatnam',
    back: '← Back to home',
  },
  contact: {
    eyebrow: 'Contact us',
    h1: "Tell us about your piece — we'll quote within a day.",
    intro: 'Pricing depends on the design, category and material, so the fastest way is to send a photo of your garment and reference design. WhatsApp works best for us.',
    waTitle: 'WhatsApp — fastest reply',
    waSub: `${PHONE_DISPLAY} · send a photo of your garment`,
    callTitle: 'Call us',
    callSub: `${PHONE_DISPLAY} · 9 am – 8 pm, all days`,
    formTitle: 'Request a quote',
    formIntro: 'Fill this in and it opens WhatsApp with your message ready to send — attach photos there.',
    name: 'Your name',
    namePh: 'e.g. Lakshmi',
    phone: 'Phone (optional)',
    phonePh: 'For a call back',
    service: 'What do you need?',
    options: ['Saree blouse embroidery', 'School uniform / shirt embroidery', 'Team or group order', 'Personalised gift', 'Embroidery classes', 'Something else'],
    details: 'Tell us about it',
    detailsPh: 'Garment, fabric, the design you have in mind, quantity, and when you need it…',
    send: 'Send on WhatsApp',
    msgGreeting: "Hi Vara Creations! I'd like a quote.",
    msgName: 'Name', msgPhone: 'Phone', msgService: 'Service', msgDetails: 'Details',
  },
}

const te: Copy = {
  htmlLang: 'te',
  metaTitle: 'Vara Creations — ఇంటి ఎంబ్రాయిడరీ స్టూడియో, విశాఖపట్నం',
  metaDescription:
    'చీర బ్లౌజ్‌లు, స్కూల్ యూనిఫామ్‌లు, టీమ్ వేర్ మరియు ప్రత్యేక బహుమతుల కోసం కస్టమ్ ఎంబ్రాయిడరీ. ఆంధ్రప్రదేశ్‌లోని విశాఖపట్నంలో కుటుంబం నడిపే స్టూడియో.',
  contactMetaTitle: 'సంప్రదించండి — Vara Creations',
  waDefault: 'నమస్కారం Vara Creations! నాకు ఎంబ్రాయిడరీ కోసం కోట్ కావాలి.',
  madeInIndia: 'భారతదేశంలో తయారైంది',
  nav: {
    services: 'సేవలు', how: 'ఎలా పని చేస్తుంది', faq: 'ప్రశ్నలు', contact: 'సంప్రదించండి', whatsapp: 'వాట్సాప్',
    open: 'మెనూ తెరవండి', close: 'మెనూ మూసివేయండి', mobileLabel: 'మొబైల్ నావిగేషన్', langLabel: 'భాష',
  },
  hero: {
    badge: 'ఇంటి ఎంబ్రాయిడరీ స్టూడియో · విశాఖపట్నం',
    h1a: 'ప్రతి కుట్టు, ',
    h1em: 'ప్రేమతో చేసినది',
    h1b: ' — మా ఇంటి నుండి మీ ఇంటికి.',
    body: 'చీర బ్లౌజ్‌లు, స్కూల్ యూనిఫామ్‌లు, టీమ్ వేర్ మరియు ప్రత్యేక బహుమతుల కోసం కస్టమ్ ఎంబ్రాయిడరీ — అన్ని వయసుల వారికి, సాధారణ పేరు నుండి పూర్తి మగ్గం వర్క్ వరకు ప్రతి స్థాయిలో. కుటుంబం నడిపే స్టూడియో, ప్రతి ఆర్డర్‌నూ శ్రద్ధగా.',
    quote: 'ఉచిత కోట్ పొందండి',
    see: 'మేము కుట్టేవి చూడండి',
    points: ['కనీస ఆర్డర్ లేదు', 'చేతి & మెషిన్ వర్క్', 'పికప్ లేదా కొరియర్'],
  },
  services: {
    eyebrow: 'మేము కుట్టేవి',
    title: 'ఒకే స్టూడియో, అన్ని రకాల ఎంబ్రాయిడరీ',
    intro: 'సాధారణమైనా, సంక్లిష్టమైనా, ఒక్క పీస్ అయినా యాభై అయినా — మీ ఆలోచన చెప్పండి, సరైన దారపు పని, ప్లేస్‌మెంట్ మరియు ఫినిష్ మేము సూచిస్తాము.',
    items: [
      { title: 'చీర బ్లౌజ్ ఎంబ్రాయిడరీ', body: 'మా ప్రత్యేకత. ఆరి మరియు మగ్గం తరహా వర్క్, జరీ, పూసలు, అద్దాలు మరియు దారపు పని — మీ చీరకు సరిపోయేలా, పెళ్లిళ్లు, పండుగలు మరియు రోజువారీ అందం కోసం.' },
      { title: 'స్కూల్ యూనిఫామ్‌లు & షర్టులు', body: 'షర్టులపై పేర్లు, క్లాస్ లేబుల్స్ మరియు స్కూల్ లోగోలు నీట్‌గా కుట్టబడతాయి — రోజువారీ వాడకాన్ని, ప్రతి ఉతుకునూ తట్టుకునే మన్నికైన ఎంబ్రాయిడరీ.' },
      { title: 'టీమ్ & గ్రూప్ ఆర్డర్లు', body: 'స్పోర్ట్స్ టీమ్‌లు, ఈవెంట్ సిబ్బంది, ఆఫీస్ స్టాఫ్ — చాలా దుస్తులపై ఒకే లోగో, ప్రతి పీస్‌పై ఒకేలా ప్లేస్‌మెంట్ మరియు రంగుతో.' },
      { title: 'ప్రత్యేక బహుమతులు', body: 'రుమాళ్లు, టవల్స్, బేబీ ర్యాప్స్ మరియు జ్ఞాపికలపై మోనోగ్రామ్‌లు మరియు పేర్లు — చిన్న కుట్లతో బహుమతికి నిజమైన వ్యక్తిగత స్పర్శ.' },
      { title: 'అన్ని వయసులు, అన్ని స్టైల్స్', body: 'చిన్నారి గౌనుల నుండి అమ్మమ్మ శాలువా వరకు — సరదా మోటిఫ్‌లు, పూల డిజైన్లు, సంప్రదాయ నమూనాలు లేదా సింపుల్ గీతలు, ఎవరికైనా సరిపోయే సైజులో.' },
      { title: 'క్లాసులు & వర్క్‌షాప్‌లు', body: 'మాతో ఈ కళ నేర్చుకోండి — సూది దారం పట్టుకోవాలనుకునే ఎవరికైనా మా ఇంటి స్టూడియోలో ప్రారంభకులకు అనువైన సెషన్లు.' },
    ],
  },
  work: {
    eyebrow: 'మేము చేసేవి',
    title: 'మేము కుట్టేవన్నీ, మొదటి నుండి చివరి వరకు',
    blurb: 'ఒక్క బ్లౌజ్ నుండి వందల యూనిఫామ్‌ల వరకు — మేము అందించేది ఇదే.',
    prev: 'ముందుది',
    next: 'తరువాతది',
    cards: [
      { alt: 'ఎరుపు మరియు బంగారు మగ్గం ఎంబ్రాయిడరీతో ఆకుపచ్చ చీర బ్లౌజ్', title: 'మగ్గం బ్లౌజ్ వర్క్', body: 'జరీ, పూసలు మరియు రాళ్లతో గొప్ప ఆరి మరియు మగ్గం ఎంబ్రాయిడరీ — మీ చీరకు సరిపోయేలా.', tag: 'మా ప్రత్యేకత' },
      { alt: 'చేతితో కూర్చిన బంగారు పూసలు మరియు రాళ్ల మోటిఫ్‌లతో పగడపు రంగు పట్టు బ్లౌజ్ చేయి', title: 'పూసలతో మగ్గం వర్క్', body: 'చేతితో కూర్చిన పూసలు, రాళ్లు మరియు జరీ మగ్గం డిజైన్లలో పొరలుగా — గొప్ప, ఎత్తైన ఫినిష్ కోసం.', tag: 'పూసలు & రాళ్లు' },
      { alt: 'బంగారు నగలు మరియు ఎరుపు పట్టు చీరతో పెళ్లి బ్లౌజ్', title: 'పెళ్లి & పండుగ బ్లౌజ్‌లు', body: 'పెళ్లిళ్లు మరియు పండుగల కోసం పూర్తి వివరాల డిజైన్లు, స్కెచ్ నుండి ఫిట్టింగ్ వరకు మీతో కలిసి ప్లాన్ చేస్తాము.', tag: 'పట్టు · జార్జెట్' },
      { alt: 'తెల్లని యూనిఫామ్ షర్టుపై కుట్టిన స్కూల్ చిహ్నం', title: 'స్కూల్ లోగోలు & పేర్లు', body: 'చిహ్నాలు, క్లాస్ లేబుల్స్ మరియు పేర్లు షర్టులపై నీట్‌గా కుట్టబడతాయి, రోజువారీ వాడకాన్ని తట్టుకునేలా.', tag: 'పేర్లు & చిహ్నాలు' },
      { alt: 'ఎంబ్రాయిడరీ చిహ్నంతో ఒకేలాంటి నేవీ పోలోలు మరియు హుడీలు ధరించిన టీమ్', title: 'టీమ్ & గ్రూప్ ఆర్డర్లు', body: 'చాలా పోలోలు, టీషర్టులు మరియు హుడీలపై ఒకే లోగో — ప్రతి పీస్‌పై ఒకేలా ప్లేస్‌మెంట్ మరియు రంగు.', tag: 'ఎంత సంఖ్యైనా' },
      { alt: 'నేవీ పోలోపై కుట్టిన బంగారు, తెలుపు చిహ్నం క్లోజప్', title: 'స్పష్టమైన లోగో ఎంబ్రాయిడరీ', body: 'కంపెనీ మరియు క్లబ్ గుర్తులు పదునుగా, శుభ్రంగా కుట్టబడతాయి — స్టాఫ్ యూనిఫామ్‌లు మరియు ఈవెంట్‌లకు సిద్ధం.', tag: 'ఆఫీస్ & ఈవెంట్ వేర్' },
      { alt: 'పసుపు రంగు నాప్‌కిన్‌పై చేతితో కుట్టిన గులాబీ పూలు', title: 'ప్రత్యేక బహుమతులు', body: 'రుమాళ్లు మరియు జ్ఞాపికలపై మోనోగ్రామ్‌లు, పేర్లు మరియు సున్నితమైన పూలు — నిజంగా వ్యక్తిగతంగా అనిపించేలా.', tag: 'బహుమతికి సిద్ధం' },
      { alt: 'ఆవ పసుపు రంగు లినెన్ నాప్‌కిన్‌పై చేతితో కుట్టిన కొమ్మ', title: 'టేబుల్ లినెన్ & నాప్‌కిన్లు', body: 'నాప్‌కిన్లు, రన్నర్లు మరియు ఇంటి లినెన్‌పై చేతితో కుట్టిన వృక్ష మోటిఫ్‌లు.', tag: 'చేతి ఎంబ్రాయిడరీ' },
      { alt: 'ఆకుపచ్చ వస్త్రంపై కుట్టిన గులాబీ పువ్వు', title: 'పూల చేతి ఎంబ్రాయిడరీ', body: 'మృదువైన శాటిన్ స్టిచ్ పూలు మరియు ఆకులు — నెమ్మదిగా, ఒక్కో కుట్టుతో తయారు.', tag: 'ఆర్డర్ ప్రకారం తయారీ' },
    ],
  },
  how: {
    eyebrow: 'ఎలా పని చేస్తుంది',
    title: 'మూడు సులభమైన దశలు',
    steps: [
      { title: 'మీ డిజైన్ పంపండి', body: 'వాట్సాప్‌లో ఫోటో, స్కెచ్ లేదా ఒక ఆలోచన పంపండి — దుస్తులు మరియు బట్టతో పాటు. మేము డిజైన్లు సూచించి, స్పష్టమైన కోట్ ఇస్తాము.' },
      { title: 'మేము కుడతాము', body: 'మీ పీస్ మా ఇంటి స్టూడియోలో శ్రద్ధగా ఎంబ్రాయిడరీ చేయబడుతుంది — ఎంతవరకు వచ్చిందో మీకు తెలిసేలా ప్రోగ్రెస్ ఫోటోలు పంపుతాము.' },
      { title: 'పికప్ లేదా డెలివరీ', body: 'అపాయింట్‌మెంట్‌తో పికప్ — లేదా భారతదేశంలో ఎక్కడికైనా భద్రంగా ప్యాక్ చేసి కొరియర్ చేస్తాము.' },
    ],
  },
  testimonials: {
    eyebrow: 'మంచి మాటలు',
    title: 'మా మొదటి కస్టమర్ల నుండి',
    note: 'ఇవి నమూనా రివ్యూలు — నిజమైన కస్టమర్ల మాటలు వచ్చినప్పుడు వీటిని మారుస్తాము. రివ్యూలు కస్టమర్ రాసిన భాషలోనే చూపబడతాయి.',
  },
  faq: {
    eyebrow: 'ప్రశ్నలు',
    title: 'తరచుగా అడిగే ప్రశ్నలు',
    items: [
      { q: 'ఎంబ్రాయిడరీకి ఎంత ఖర్చవుతుంది?', a: 'ఇది డిజైన్, దుస్తుల రకం మరియు బట్టపై ఆధారపడి ఉంటుంది — సాధారణ పేరుకు పూర్తి మగ్గం వర్క్ కంటే చాలా తక్కువ అవుతుంది. మీ దుస్తుల ఫోటో మరియు మీకు నచ్చిన డిజైన్‌ను వాట్సాప్‌లో పంపండి, ఒక రోజులో స్పష్టమైన కోట్ ఇస్తాము. ఎలాంటి బాధ్యతా లేదు.' },
      { q: 'ఒక ఆర్డర్‌కి ఎంత సమయం పడుతుంది?', a: 'సాధారణ పేరు లేదా లోగో వర్క్ సాధారణంగా 2–3 రోజుల్లో సిద్ధమవుతుంది. వివరమైన బ్లౌజ్ ఎంబ్రాయిడరీకి డిజైన్‌ను బట్టి సుమారు 1–2 వారాలు పడుతుంది. గ్రూప్ ఆర్డర్లు సంఖ్యపై ఆధారపడతాయి — మీ గడువు చెప్పండి, మొదలుపెట్టే ముందు నిర్ధారిస్తాము.' },
      { q: 'కనీస ఆర్డర్ ఉందా?', a: 'లేదు. ఒక బ్లౌజ్, ఒక షర్టు, ఒక బహుమతి — ఒక్క పీస్ అయినా సంతోషంగా తీసుకుంటాము. టీమ్ మరియు గ్రూప్ ఆర్డర్లలో ఎక్కువ సంఖ్యకు ఒక్కో పీస్‌కు మంచి రేటు వస్తుంది.' },
      { q: 'ఏ బట్టలపై ఎంబ్రాయిడరీ చేయగలరు?', a: 'కాటన్, సిల్క్, పట్టు, జార్జెట్, లినెన్, స్కూల్ యూనిఫామ్ పాలీ-కాటన్ మరియు చాలా మిశ్రమ బట్టలు. సందేహంగా ఉంటే ఫోటో పంపండి లేదా దుస్తులు తీసుకురండి — బట్ట అల్లికను చూసి సరైన కుట్టు మరియు బ్యాకింగ్ సూచిస్తాము.' },
      { q: 'దుస్తులను కూడా మీరే ఇస్తారా?', a: 'సాధారణంగా మీరు మీ దుస్తులు లేదా బట్ట తీసుకొస్తారు, మేము ఎంబ్రాయిడరీ చేస్తాము. గ్రూప్ ఆర్డర్లకు సరిపోయే షర్టులు లేదా జెర్సీలు సమకూర్చడంలో సహాయం చేయగలము — ఎంపికల కోసం అడగండి.' },
      { q: 'ఇంటర్నెట్ నుండి డిజైన్ ఎంచుకోవచ్చా?', a: 'తప్పకుండా! ఏ రిఫరెన్స్ ఫోటో అయినా పంపండి — దారంతో ఏది బాగా వస్తుందో నిజాయితీగా చెప్పి, మీ దుస్తులు, రంగులు మరియు బడ్జెట్‌కు తగ్గట్టుగా మార్చి ఇస్తాము.' },
    ],
  },
  cta: {
    title: 'అందమైన కుట్లకోసం మీ దుస్తులు ఎదురుచూస్తున్నాయా?',
    body: 'ధర డిజైన్, రకం మరియు బట్టపై ఆధారపడుతుంది — ఫోటో పంపండి, ఒక రోజులో కోట్ ఇస్తాము.',
    quote: 'కోట్ అడగండి',
    whatsapp: 'వాట్సాప్‌లో చాట్ చేయండి',
  },
  footer: {
    blurb: 'విశాఖపట్నంలో కుటుంబం నడిపే ఇంటి ఎంబ్రాయిడరీ స్టూడియో — బ్లౌజ్‌లు, యూనిఫామ్‌లు, టీమ్ వేర్ మరియు బహుమతులను ప్రేమతో కుడతాము.',
    reach: 'మమ్మల్ని సంప్రదించండి',
    contactPage: 'కాంటాక్ట్ పేజీ',
    copyright: '© 2026 Vara Creations · విశాఖపట్నంలో ప్రేమతో కుట్టినది',
    back: '← హోమ్‌కి తిరిగి',
  },
  contact: {
    eyebrow: 'మమ్మల్ని సంప్రదించండి',
    h1: 'మీ పీస్ గురించి చెప్పండి — ఒక రోజులో కోట్ ఇస్తాము.',
    intro: 'ధర డిజైన్, రకం మరియు బట్టపై ఆధారపడుతుంది, కాబట్టి మీ దుస్తుల ఫోటో మరియు రిఫరెన్స్ డిజైన్ పంపడం వేగవంతమైన మార్గం. మాకు వాట్సాప్ ఉత్తమం.',
    waTitle: 'వాట్సాప్ — వేగవంతమైన జవాబు',
    waSub: `${PHONE_DISPLAY} · మీ దుస్తుల ఫోటో పంపండి`,
    callTitle: 'మాకు కాల్ చేయండి',
    callSub: `${PHONE_DISPLAY} · ఉదయం 9 – రాత్రి 8, అన్ని రోజులు`,
    formTitle: 'కోట్ అడగండి',
    formIntro: 'ఇది నింపితే మీ సందేశంతో వాట్సాప్ తెరుచుకుంటుంది — ఫోటోలను అక్కడ జతచేయండి.',
    name: 'మీ పేరు',
    namePh: 'ఉదా. లక్ష్మి',
    phone: 'ఫోన్ (ఐచ్ఛికం)',
    phonePh: 'తిరిగి కాల్ చేయడానికి',
    service: 'మీకు ఏమి కావాలి?',
    options: ['చీర బ్లౌజ్ ఎంబ్రాయిడరీ', 'స్కూల్ యూనిఫామ్ / షర్ట్ ఎంబ్రాయిడరీ', 'టీమ్ లేదా గ్రూప్ ఆర్డర్', 'ప్రత్యేక బహుమతి', 'ఎంబ్రాయిడరీ క్లాసులు', 'ఇంకేదైనా'],
    details: 'దీని గురించి చెప్పండి',
    detailsPh: 'దుస్తులు, బట్ట, మీ మనసులోని డిజైన్, సంఖ్య మరియు ఎప్పటికి కావాలి…',
    send: 'వాట్సాప్‌లో పంపండి',
    msgGreeting: 'నమస్కారం Vara Creations! నాకు కోట్ కావాలి.',
    msgName: 'పేరు', msgPhone: 'ఫోన్', msgService: 'సేవ', msgDetails: 'వివరాలు',
  },
}

export const copy: Record<Lang, Copy> = { en, te }
