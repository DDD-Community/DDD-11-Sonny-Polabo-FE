'use client'

import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

interface SelectContextProps {
  isSelectMode: boolean
  selectedIds: number[]
  setIsSelectMode: (isSelectMode: boolean) => void
  toggleSelectedId: (id: number) => void
  resetSelectedIds: () => void
  MAX_SELECT_COUNT: number
}

const SelectContext = createContext<SelectContextProps>({
  isSelectMode: false,
  selectedIds: [],
  setIsSelectMode: () => {},
  toggleSelectedId: () => {},
  resetSelectedIds: () => {},
  MAX_SELECT_COUNT: 0,
})

export const SelectContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isSelectMode, setIsSelectMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const addSelectedId = (id: number) => {
    if (selectedIds.length === 9) {
      return
    }
    setSelectedIds((prev) => [...prev, id])
  }

  const removeSelectedId = (id: number) => {
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id))
  }

  const toggleSelectedId = (id: number) => {
    if (selectedIds.includes(id)) {
      removeSelectedId(id)
    } else {
      addSelectedId(id)
    }
  }

  const resetSelectedIds = () => {
    setSelectedIds([])
  }

  const value = useMemo(
    () => ({
      isSelectMode,
      setIsSelectMode,
      selectedIds,
      toggleSelectedId,
      MAX_SELECT_COUNT: 9,
      resetSelectedIds,
    }),
    [isSelectMode, selectedIds],
  )

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  )
}

export const useSelect = () => {
  return useContext(SelectContext)
}
