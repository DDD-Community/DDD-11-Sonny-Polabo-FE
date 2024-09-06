import { deleteApi, get, put } from '@/lib/api/base'
import { MyBoardList } from '@/types'

export const getMyBoards = async (
  page = 1,
  size = 10,
  filter: 'OWNER' | 'PARTICIPANT' = 'OWNER',
): Promise<MyBoardList> => {
  const res = await get(
    `/api/v2/my/boards?page=${page}&size=${size}&filter=${filter}`,
    {
      next: {
        tags: ['myBoard', `myBoard:${page},${size},${filter}`],
      },
    },
  )

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

export const changeMyBoardName = (id: string, title: string) => {
  return put(`/api/v1/my/boards/${id}`, {
    body: JSON.stringify({ title }),
  })
}

export const deleteMyBoard = (id: string) => {
  return deleteApi(`/api/v1/my/boards/${id}`)
}
