'use client'

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { Board } from '@/types'

interface BoardContextProps {
  board: Board
  boardId: string
}

const BoardContext = createContext<BoardContextProps>({
  board: {
    items: [],
    title: '',
    options: {
      THEMA: 'B-0',
    },
    mine: false,
  },
  boardId: '',
})

interface BoardContextProviderProps {
  board: Board
  boardId: string
  children: ReactNode
}

export const BoardContextProvider = ({
  board,
  boardId,
  children,
}: BoardContextProviderProps) => {
  const value = useMemo(
    () => ({
      board,
      boardId,
    }),
    [board, boardId],
  )

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
}

export const useBoardContext = () => {
  return useContext(BoardContext)
}
