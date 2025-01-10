'use client'

import { StickerMenu } from '@/types'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import { useSticker } from '../../_contexts/StickerContext'

const Menu = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-4 overflow-x-scroll pl-[23px] scrollbar-hide">
    {children}
  </div>
)

const Item = ({ icon, menuNum }: { icon: ReactNode; menuNum: StickerMenu }) => {
  const { selectedMenu, setSelectedMenu } = useSticker()

  const clickHandler = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_STICKER(menuNum) })
    setSelectedMenu(menuNum)
  }

  return (
    <div
      className={twMerge(
        'flex h-[42px] w-11 cursor-pointer items-center justify-center rounded-lg',
        selectedMenu === menuNum ? 'bg-[#d9d9d9] bg-opacity-30' : '',
      )}
      onClick={clickHandler}
    >
      {icon}
    </div>
  )
}

Menu.Item = Item
export default Menu
