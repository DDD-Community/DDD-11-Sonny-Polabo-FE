import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { StickerMenu } from '@/types'
import { useSticker } from './StickerContext'

const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-4 overflow-x-scroll pl-[23px] scrollbar-hide">
      {children}
    </div>
  )
}

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
