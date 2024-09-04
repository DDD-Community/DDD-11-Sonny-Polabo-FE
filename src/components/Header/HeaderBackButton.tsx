'use client'

import { useRouter } from 'next/navigation'
import BackIcon from 'public/icons/arrow_back_ios.svg'

const HeaderBackButton = () => {
  const router = useRouter()

  return <BackIcon onClick={() => router.back()} />
}

export default HeaderBackButton
