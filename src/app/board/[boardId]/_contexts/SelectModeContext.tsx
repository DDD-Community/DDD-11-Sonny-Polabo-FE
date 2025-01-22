'use client'

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const isSelectMode = searchParams.get('isSelectMode') === 'true'
  const setIsSelectMode = (mode: boolean) => {
    router.push(`${pathname}?isSelectMode=${mode}`)
  }

  const selectedIds = searchParams.getAll('selectedId').map((id) => Number(id))

  const addSelectedId = (id: number) => {
    if (selectedIds.length === 9) {
      return
    }

    const params = new URLSearchParams(searchParams.toString())
    params.append('selectedId', id.toString())
    router.push(`${pathname}?${params}`)
  }

  const removeSelectedId = (id: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('selectedId', id.toString())
    router.push(`${pathname}?${params}`)
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
