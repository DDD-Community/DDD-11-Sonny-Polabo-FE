import Header from '@/components/Header'
// import { postBoard } from '@/lib'
// import { revalidateTag } from 'next/cache'
// import { redirect } from 'next/navigation'

interface PageProps {
  searchParams: {
    title: string
  }
}

const CreateBoardThemePage = ({ searchParams }: PageProps) => {
  const { title } = searchParams

  //   const createBoard = async () => {
  //     'use server'

  //     const boardId = await postBoard({
  //       title,
  //       userId: null,
  //     })

  //     revalidateTag('myBoard')

  //     redirect(`/board/${boardId}`)
  //   }

  return (
    <div>
      <Header
        title="보드 테마를 선택해주세요!"
        leftButton={<Header.BackButton />}
      />
      <div>{title}</div>
    </div>
  )
}

export default CreateBoardThemePage
