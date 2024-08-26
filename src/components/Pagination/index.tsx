import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { Pagination } from '@/types'

interface PaginationContextType {
  currentPage: number
  pages: number[]
  totalPage: number
  canSkipToLeft: boolean
  canSkipToRight: boolean
  paginate: (page: number) => void
  skipToLeft: () => void
  skipToRight: () => void
}

const PaginationContext = createContext<PaginationContextType>({
  currentPage: 0,
  pages: [],
  totalPage: 0,
  canSkipToLeft: false,
  canSkipToRight: false,
  paginate: () => {},
  skipToLeft: () => {},
  skipToRight: () => {},
})

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
  const [pages, setPages] = useState<number[]>([])
  const [canSkipToLeft, setCanSkipToLeft] = useState(false)
  const [canSkipToRight, setCanSkipToRight] = useState(false)
  useEffect(() => {
    const startPage =
      Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPage)
    const lastStartPage =
      Math.floor((totalPage - 1) / maxVisiblePages) * maxVisiblePages + 1

    setPages(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i),
    )
    setCanSkipToLeft(currentPage > maxVisiblePages)
    setCanSkipToRight(currentPage < lastStartPage)
  }, [currentPage, totalPage, maxVisiblePages])

  const skipToLeft = () => {
    onPaginate(
      Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages,
    )
  }

  const skipToRight = () => {
    onPaginate(
      Math.floor((currentPage - 1) / maxVisiblePages + 1) * maxVisiblePages + 1,
    )
  }

  const value = useMemo(
    () => ({
      currentPage,
      pages,
      totalPage,
      paginate: onPaginate,
      canSkipToLeft,
      canSkipToRight,
      skipToLeft,
      skipToRight,
    }),
    [currentPage, pages, totalPage],
  )

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}

export function usePaginationContext(): PaginationContextType {
  return useContext(PaginationContext)
}
