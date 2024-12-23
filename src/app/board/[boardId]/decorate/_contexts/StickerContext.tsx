'use client'

import { StickerMenu } from '@/types'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSession } from 'next-auth/react'

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
  const { status } = useSession()
  const [selectedMenu, setSelectedMenu] = useState<StickerMenu>(1)
  const [selectedStickers, setSelectedStickers] = useState<Sticker[]>([])

  useEffect(() => {
    if (status !== 'authenticated' && selectedMenu === 0) {
      setSelectedMenu(1)
    }
  }, [status])

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
