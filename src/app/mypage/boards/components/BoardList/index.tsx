'use client'

import { PaginationProvider } from '@/components/Pagination'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { deleteMyBoard, getMyBoards } from '@/lib/api/myBoard'
import { MyBoard, Pagination } from '@/types'
import BoardItem from './BoardItem'
import BoardPagination from './BoardPagination'

const BoardList = () => {
  const router = useRouter()
  const [pagination, setPagination] = useState<Pagination>({
    totalPage: 0,
    totalCount: 0,
    currentPage: 1,
    size: 10,
  })
  const [boards, setBoards] = useState<MyBoard[]>([])

  const fetchBoards = async (page = 1, size = 10) => {
    return getMyBoards(page, size).then((data) => {
      setBoards(data.boards)
      setPagination(data.pagination)
    })
  }

  useEffect(() => {
    fetchBoards()
  }, [])

  const paginate = async (page: number) => {
    return fetchBoards(page, pagination.size)
  }

  const goToBoard = (boardId: string) => {
    router.push(`/board/${boardId}`)
  }

  const deleteBoard = async (boardId: string) => {
    await deleteMyBoard(boardId)
    await fetchBoards(1, pagination.size)
    router.refresh()
  }

  return (
    <div className="pb-5">
      <ul className="mt-3 overflow-y-hidden pb-12">
        {boards.map((board) => (
          <BoardItem
            key={board.id}
            title={board.title}
            id={board.id}
            date={board.createdAt}
            onClickBoard={() => goToBoard(board.id)}
            onDeleteBoard={() => deleteBoard(board.id)}
          />
        ))}
      </ul>
      <PaginationProvider pagination={pagination} onPaginate={paginate}>
        <BoardPagination />
      </PaginationProvider>
    </div>
  )
}

export default BoardList
