import Header from '@/components/Header'
import { postBoard } from '@/lib'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { BoardThemaKeyType } from '@/types'
import ThemaSelect from './_components/ThemaSelect'

interface PageProps {
  searchParams: {
    title: string
  }
}

const CreateBoardThemePage = ({ searchParams }: PageProps) => {
  const { title } = searchParams

  const createBoard = async (
    boardName: string,
    boardThema: BoardThemaKeyType,
  ) => {
    'use server'

    const boardId = await postBoard({
      title: boardName,
      userId: null,
      options: {
        THEMA: boardThema,
      },
    })

    revalidateTag('myBoard')

    redirect(`/board/${boardId}`)
  }

  return (
    <div className="h-dvh">
      <Header
        title="보드 테마를 선택해주세요!"
        leftButton={<Header.BackButton />}
        shadow={false}
      />
      <ThemaSelect createBoard={createBoard} boardName={title} />
    </div>
  )
}

export default CreateBoardThemePage
