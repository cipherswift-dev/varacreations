import ComingSoon from '@/components/ComingSoon'
import ContactPage from '@/components/ContactPage'
import { SITE_LIVE } from '@/lib/site'

export default function Page() {
  return SITE_LIVE ? <ContactPage /> : <ComingSoon />
}
