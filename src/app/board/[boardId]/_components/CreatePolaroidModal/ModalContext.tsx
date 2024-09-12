'use client'

import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface ModalContextProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const PolaroidModalProvider = ({
  children,
}: {
  children: ReactNode
}) => {
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

export const usePolaroidModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('Error at usePolaroidModal')
  }
  return context
}
