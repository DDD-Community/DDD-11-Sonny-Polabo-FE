import Header from '@/components/Header'
import { getMyBoards } from '@/lib/api/myBoard'
import EmptyBoardList from './_components/EmptyBoardList'
import BoardList from './_components/BoardList'

const Page = async () => {
  const { pagination } = await getMyBoards()
  const { totalCount } = pagination

  return (
    <div className="relative min-h-dvh">
      <Header
        title="내 보드 목록"
        leftButton={<Header.BackButton />}
        shadow={false}
      />
      {totalCount === 0 ? <EmptyBoardList /> : <BoardList />}
    </div>
  )
}

export default Page
