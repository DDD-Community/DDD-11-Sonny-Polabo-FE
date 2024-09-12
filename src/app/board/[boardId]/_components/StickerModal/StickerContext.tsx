import { StickerMenu } from '@/types'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

interface StickerContextProps {
  selectedMenu: StickerMenu
  setSelectedMenu: Dispatch<SetStateAction<StickerMenu>>
}

const StickerContext = createContext<StickerContextProps | undefined>(undefined)

export const StickerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedMenu, setSelectedMenu] = useState<StickerMenu>(0)
  const value = useMemo(
    () => ({
      selectedMenu,
      setSelectedMenu,
    }),
    [selectedMenu],
  )

  return (
    <StickerContext.Provider value={value}>{children}</StickerContext.Provider>
  )
}

export const useSticker = () => {
  const context = useContext(StickerContext)
  if (context === undefined) {
    throw new Error('Error at useSticker')
  }
  return context
}
