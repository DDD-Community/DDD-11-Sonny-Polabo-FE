import { deleteApi, get } from '@/lib/api/base'
import { MyBoardList } from '@/types'

export const getMyBoards = async (
  page = 1,
  size = 10,
): Promise<MyBoardList> => {
  const res = await get(`/api/v1/my/boards?page=${page}&size=${size}`, {
    next: {
      tags: ['myBoard', `myBoard:${page},${size}`],
    },
  })

  return {
    pagination: {
      totalCount: res.data.totalCount,
      totalPage: res.data.totalPage,
      currentPage: res.data.currentPage,
      size: res.data.size,
    },
    boards: res.data.data,
  }
}

export const deleteMyBoard = (id: string) => {
  return deleteApi(`/api/v1/my/boards/${id}`)
}
