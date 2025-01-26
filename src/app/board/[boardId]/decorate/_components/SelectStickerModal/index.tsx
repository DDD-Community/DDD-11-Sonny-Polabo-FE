'use client'

import { GUEST_STICKER_MENU, STICKER_MENU } from '@/lib/constants/stickerConfig'
import { StickerMenu } from '@/types'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Contents from './Contents'
import Header from './Header'
import Menu from './Menu'

interface StickerIconProps {
  num: StickerMenu
}

const StickerIcon = ({ num }: StickerIconProps) => {
  return (
    <Image
      src={`/icons/stickers/${num}.svg`}
      width={34}
      height={34}
      alt="sticker menu"
    />
  )
}

const SelectSticker = () => {
  const { status } = useSession()
  const stickerMenus =
    status === 'authenticated' ? STICKER_MENU : GUEST_STICKER_MENU

  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col bg-gray-1000/70 py-10 backdrop-blur-md">
      <Header />
      <Menu>
        {stickerMenus.map((sticker) => (
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

export default SelectSticker
