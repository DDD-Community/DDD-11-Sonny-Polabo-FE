'use client'

import Image from 'next/image'
import SizeIcon from 'public/icons/size.svg'
import CloseIcon from 'public/icons/close.svg'
import { useSticker } from '../StickerModal/StickerContext'

const StickerCanvas = () => {
  const { selectedSticker, setSelectedSticker } = useSticker()

  if (!selectedSticker) return null

  return (
    <div className="absolute right-0 top-0 h-full w-full">
      <div className="relative h-[90px] w-[90px] border border-gray-950">
        <div
          className="absolute -right-3 -top-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-1000"
          onClick={() => setSelectedSticker('')}
        >
          <CloseIcon className="text-gray-0" />
        </div>
        <Image
          src={`/stickers/${parseInt(selectedSticker.split('-')[0], 10)}/${selectedSticker}`}
          alt="Sticker"
          width={90}
          height={90}
        />
        <div className="absolute -bottom-3 -right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-1000">
          <SizeIcon />
        </div>
      </div>
    </div>
  )
}

export default StickerCanvas
