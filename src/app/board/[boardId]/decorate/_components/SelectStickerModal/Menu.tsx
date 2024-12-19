'use client'

import { StickerMenu } from '@/types'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { useSticker } from '../../_contexts/StickerContext'

const Menu = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-4 overflow-x-scroll pl-[23px] scrollbar-hide">
    {children}
  </div>
)

const Item = ({ icon, menuNum }: { icon: ReactNode; menuNum: StickerMenu }) => {
  const { selectedMenu, setSelectedMenu } = useSticker()

  return (
    <div
      className={twMerge(
        'flex h-[42px] w-11 cursor-pointer items-center justify-center rounded-lg',
        selectedMenu === menuNum ? 'bg-[#d9d9d9] bg-opacity-30' : '',
      )}
      onClick={() => setSelectedMenu(menuNum)}
    >
      {icon}
    </div>
  )
}

Menu.Item = Item
export default Menu
