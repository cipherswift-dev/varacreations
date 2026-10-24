import ComingSoon from '@/components/ComingSoon'
import ContactPage from '@/components/ContactPage'
import { SITE_LIVE } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('te', '/contact')

export default function Page() {
  return SITE_LIVE ? <ContactPage lang="te" /> : <ComingSoon />
}
