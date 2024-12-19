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
  selectedStickers: string[]
  addSticker: (sticker: string) => void
  deleteSticker: (sticker: string) => void
}

const StickerContext = createContext<StickerContextProps>({
  selectedMenu: 0,
  setSelectedMenu: () => {},
  selectedStickers: [],
  addSticker: () => {},
  deleteSticker: () => {},
})

export const StickerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedMenu, setSelectedMenu] = useState<StickerMenu>(0)
  const [selectedStickers, setSelectedStickers] = useState<string[]>([])

  const addSticker = (sticker: string) => {
    setSelectedStickers((prev) =>
      prev.includes(sticker) ? prev : [...prev, sticker],
    )
  }

  const deleteSticker = (sticker: string) => {
    setSelectedStickers((prev) => prev.filter((item) => item !== sticker))
  }

  const value = useMemo(
    () => ({
      selectedMenu,
      setSelectedMenu,
      selectedStickers,
      addSticker,
      deleteSticker,
    }),
    [selectedMenu, selectedStickers],
  )

  return (
    <StickerContext.Provider value={value}>{children}</StickerContext.Provider>
  )
}

export const useSticker = () => {
  return useContext(StickerContext)
}
