import React, { createContext, useContext, useMemo, ReactNode } from 'react'
import { Pagination } from '@/types'

interface PaginationContextType {
  currentPage: number
  pages: number[]
  totalPage: number
  paginate: (page: number) => void
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined,
)

interface PaginationProviderProps {
  pagination: Pagination
  maxVisiblePages?: number
  children: ReactNode
  onPaginate: (page: number) => void
}

export function PaginationProvider({
  onPaginate,
  maxVisiblePages = 5,
  children,
  pagination,
}: PaginationProviderProps) {
  const { totalPage, currentPage } = pagination
  const pages = useMemo<number[]>(() => {
    if (totalPage <= maxVisiblePages) {
      return Array.from({ length: totalPage }, (_, i) => i + 1)
    }

    let startPage
    let endPage

    if (currentPage <= Math.ceil(totalPage / 2)) {
      startPage = 1
      endPage = maxVisiblePages
    } else if (currentPage + Math.floor(totalPage / 2) >= totalPage) {
      startPage = totalPage - maxVisiblePages + 1
      endPage = totalPage
    } else {
      startPage = currentPage - Math.floor(totalPage / 2)
      endPage = currentPage + Math.floor(totalPage / 2)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    )
  }, [currentPage, totalPage, maxVisiblePages])

  const value = useMemo(
    () => ({
      currentPage,
      pages,
      totalPage,
      paginate: onPaginate,
    }),
    [currentPage, pages, totalPage],
  )

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}

export function usePaginationContext(): PaginationContextType | undefined {
  return useContext(PaginationContext)
}
