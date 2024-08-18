import { Pagination } from '@/types/common'

export interface MyBoard {
  id: string
  title: string
  createdAt: string
}

export interface MyBoardList extends Pagination {
  boards: MyBoard[]
}
