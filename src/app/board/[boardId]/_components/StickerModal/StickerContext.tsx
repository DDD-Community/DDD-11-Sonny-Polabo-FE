'use client'

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
  selectedSticker: string
  setSelectedSticker: Dispatch<SetStateAction<string>>
}

const StickerContext = createContext<StickerContextProps | undefined>(undefined)

export const StickerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedMenu, setSelectedMenu] = useState<StickerMenu>(0)
  const [selectedSticker, setSelectedSticker] = useState<string>('')
  const value = useMemo(
    () => ({
      selectedMenu,
      setSelectedMenu,
      selectedSticker,
      setSelectedSticker,
    }),
    [selectedMenu, selectedSticker],
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
