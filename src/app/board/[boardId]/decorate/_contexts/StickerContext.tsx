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
import { v4 as uuidv4 } from 'uuid'

interface Sticker {
  id: string
  file: string
}

interface StickerContextProps {
  selectedMenu: StickerMenu
  setSelectedMenu: Dispatch<SetStateAction<StickerMenu>>
  selectedStickers: Sticker[]
  addSticker: (sticker: string) => void
  deleteSticker: (stickerIdx: string) => void
}

const StickerContext = createContext<StickerContextProps>({
  selectedMenu: 1,
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
  const [selectedMenu, setSelectedMenu] = useState<StickerMenu>(1)
  const [selectedStickers, setSelectedStickers] = useState<Sticker[]>([])

  const addSticker = (file: string) => {
    const newSticker = { id: uuidv4(), file }
    setSelectedStickers((prev) => [...prev, newSticker])
  }

  const deleteSticker = (stickerId: string) => {
    setSelectedStickers((prev) => prev.filter(({ id }) => id !== stickerId))
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
