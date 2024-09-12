'use client'

import { StickerMenu } from '@/types'
import Image from 'next/image'
import Contents from './Contents'
import Header from './Header'
import Menu from './Menu'

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
  const MENU: StickerMenu[] = [0, 1, 2, 3]

  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col bg-gray-1000/70 py-10 backdrop-blur-md">
      <Header />

      <Menu>
        {MENU.map((sticker) => (
          <Menu.Item
            icon={<StickerIcon num={sticker} />}
            menuNum={sticker}
            key={sticker}
          />
        ))}
      </Menu>
      <Contents />
    </div>
  )
}

export default CreateSticker
