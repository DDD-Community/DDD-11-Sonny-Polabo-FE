'use client'

import BackIcon from 'public/icons/arrow_back_ios.svg'
import { useRouter } from 'next/navigation'

const HeaderBackButton = () => {
  const router = useRouter()

  return <BackIcon onClick={() => router.back()} />
}

export default HeaderBackButton
