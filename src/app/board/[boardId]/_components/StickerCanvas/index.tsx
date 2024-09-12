'use client'

import { useEffect } from 'react'
import { useSticker } from '../StickerModal/StickerContext'

const StickerCanvas = () => {
  const { selectedSticker } = useSticker()

  useEffect(() => {
    console.log('===', selectedSticker)
  }, [selectedSticker])

  return <div />
}

export default StickerCanvas
