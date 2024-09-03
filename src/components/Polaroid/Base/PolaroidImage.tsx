import { FILTERS } from '@/lib'
import { useEffect, useState } from 'react'
import { getImageWidthHeight } from '@/lib/utils/image'

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
    <div
      className={aspectRatio}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.02) 15%, rgba(0, 0, 0, 0.15) 100%), url(${imageUrl}) lightgray 50% / cover no-repeat`,
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.10) inset',
        filter: FILTERS.POLAROID,
      }}
    />
  )
}

export default PolaroidImage
