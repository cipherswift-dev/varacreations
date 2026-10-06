import type { MetadataRoute } from 'next'
import { SITE_LIVE } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return SITE_LIVE
    ? { rules: { userAgent: '*', allow: '/' } }
    : { rules: { userAgent: '*', disallow: '/' } }
}
