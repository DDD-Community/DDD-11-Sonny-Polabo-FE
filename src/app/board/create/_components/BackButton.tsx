'use client'

import React from 'react'
import ArrowBackIcon from 'public/icons/arrow_back_ios.svg'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  return (
    <ArrowBackIcon
      className="absolute left-3 top-5"
      onClick={() => router.back()}
    />
  )
}

export default BackButton
