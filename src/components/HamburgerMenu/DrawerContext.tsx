'use client'

import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface DrawerContextProps {
  isVisible: boolean
  setClose: () => void
  setOpen: () => void
}

const DrawerContext = createContext<DrawerContextProps>({
  isVisible: false,
  setClose: () => {},
  setOpen: () => {},
})

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  const setClose = () => setIsVisible(false)

  const setOpen = () => setIsVisible(true)

  const value = useMemo(
    () => ({
      isVisible,
      setClose,
      setOpen,
    }),
    [isVisible],
  )

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (context === undefined) {
    throw new Error('Error at useDrawer')
  }
  return context
}
