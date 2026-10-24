import type { Metadata } from 'next'
import { SITE_LIVE } from '@/lib/site'
import { copy, type Lang } from '@/lib/i18n'

export const SITE_URL = 'https://varacreations.in'

/** Page metadata with canonical + hreflang alternates. `path` is the English path ('' or '/contact'). */
export function pageMetadata(lang: Lang, path: '' | '/contact'): Metadata {
  const c = copy[lang]
  const self = (lang === 'te' ? '/te' : '') + path
  return {
    metadataBase: new URL(SITE_URL),
    title: path === '/contact' ? c.contactMetaTitle : c.metaTitle,
    description: c.metaDescription,
    icons: { icon: '/logo-icon.svg' },
    alternates: {
      canonical: self || '/',
      languages: { en: path || '/', te: '/te' + path, 'x-default': path || '/' },
    },
    // Keep search engines away until launch (NEXT_PUBLIC_SITE_LIVE=true).
    robots: SITE_LIVE ? undefined : { index: false, follow: false },
  }
}
