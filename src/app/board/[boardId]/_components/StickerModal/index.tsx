'use client'

import Image from 'next/image'
import { StickerMenu } from '@/types'
import Header from './Header'
import Menu from './Menu'
import { StickerProvider } from './StickerContext'

interface StickerIconProps {
  num: StickerMenu
}

const StickerIcon = ({ num }: StickerIconProps) => {
  return (
    <Image
      src={`/stickers/${num}.svg`}
      width={34}
      height={34}
      alt="sticker menu"
    />
  )
}

const CreateSticker = () => {
  const stickers: StickerMenu[] = [0, 1, 2, 3]
  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col bg-gray-1000/70 py-10 backdrop-blur-md">
      <Header />
      <StickerProvider>
        <Menu>
          {stickers.map((sticker) => (
            <Menu.Item
              icon={<StickerIcon num={sticker} />}
              menuNum={sticker}
              key={sticker}
            />
          ))}
        </Menu>
      </StickerProvider>
    </div>
  )
}

export default CreateSticker
