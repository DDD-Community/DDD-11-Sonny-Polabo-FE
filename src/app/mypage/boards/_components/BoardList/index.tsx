'use client'

import { PaginationProvider } from '@/components/Pagination'
import { deleteMyBoard, getMyBoards } from '@/lib/api/myBoard'
import { MyBoard, Pagination } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BoardItem from './BoardItem'
import BoardPagination from './BoardPagination'
import FilterTabBar from './FilterTabBar'

const BoardList = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isParticipant = searchParams.get('participant') === 'true'
  const [pagination, setPagination] = useState<Pagination>({
    totalPage: 0,
    totalCount: 0,
    currentPage: 1,
    size: 10,
  })
  const [boards, setBoards] = useState<MyBoard[]>([])

  const fetchBoards = async (page = 1, size = 10) => {
    const filter = isParticipant ? 'PARTICIPANT' : 'OWNER'

    return getMyBoards(page, size, filter).then((data) => {
      setBoards(data.boards)
      setPagination(data.pagination)
    })
  }

  useEffect(() => {
    fetchBoards()
  }, [searchParams])

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
      <FilterTabBar />
      <p className="mx-7 border-b border-b-gray-600 pb-3 pt-5 text-xs text-gray-600">
        총 {pagination.totalCount}개
      </p>
      <ul className="mt-3 overflow-y-hidden pb-20">
        {boards.map((board) => (
          <BoardItem
            key={board.id}
            title={board.title}
            id={board.id}
            date={board.createdAt}
            onClickBoard={() => goToBoard(board.id)}
            onDeleteBoard={() => deleteBoard(board.id)}
            onRefresh={() => fetchBoards()}
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
