import { isDevMode } from '@/lib/utils/env'
import {
  GoogleAnalytics as GA,
  GoogleTagManager as GTM,
} from '@next/third-parties/google'

const GoogleAnalytics = () => {
  if (isDevMode) {
    return null
  }

  return (
    <>
      <GA gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <GTM gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
    </>
  )
}

export default GoogleAnalytics
