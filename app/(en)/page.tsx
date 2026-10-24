import ComingSoon from '@/components/ComingSoon'
import HomePage from '@/components/HomePage'
import { SITE_LIVE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('en', '')

export default function Page() {
  return SITE_LIVE ? <HomePage lang="en" /> : <ComingSoon />
}
