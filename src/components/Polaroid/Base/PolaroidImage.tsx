'use client'

import { FILTERS } from '@/lib'
import { getImageWidthHeight } from '@/lib/utils/image'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PolaroidImageProps {
  imageUrl: string
}

const PolaroidImage = ({ imageUrl }: PolaroidImageProps) => {
  const [aspectRatio, setAspectRatio] = useState('')

  useEffect(() => {
    getImageWidthHeight(imageUrl).then(([width, height]) => {
      if (width > height) {
        setAspectRatio('aspect-horizontal')
      } else if (height > width) {
        setAspectRatio('aspect-vertical')
      } else {
        setAspectRatio('aspect-square')
      }
    })
  }, [imageUrl])

  if (!aspectRatio) {
    return null
  }

  return (
    <div className="relative h-auto w-auto">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 z-50"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.02) 15%, rgba(0, 0, 0, 0.15) 100%)`,
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.10) inset',
        }}
      />
      <Image
        src={imageUrl}
        alt="폴라로이드 이미지"
        width={500}
        height={500}
        quality={100}
        priority
        className={`${aspectRatio} object-cover`}
        style={{
          filter: FILTERS.POLAROID,
        }}
      />
    </div>
  )
}

export default PolaroidImage
