import ComingSoon from '@/components/ComingSoon'
import HomePage from '@/components/HomePage'
import { SITE_LIVE } from '@/lib/site'

export default function Page() {
  return SITE_LIVE ? <HomePage /> : <ComingSoon />
}
