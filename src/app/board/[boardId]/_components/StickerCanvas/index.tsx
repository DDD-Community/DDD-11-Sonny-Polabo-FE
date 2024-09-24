'use client'

import { useSticker } from '../StickerModal/StickerContext'
import Preview from './Preview'

const StickerCanvas = () => {
  const { selectedSticker } = useSticker()

  if (!selectedSticker) return null
  return (
    <div className="absolute left-0 top-40 h-full w-full">
      <Preview />
    </div>
  )
}

export default StickerCanvas
