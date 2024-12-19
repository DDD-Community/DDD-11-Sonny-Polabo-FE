'use client'

import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface ModalContextProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const StickerModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen],
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useStickerModal = () => {
  return useContext(ModalContext)
}
