import Image from 'next/image'
import PolaboLogo from 'public/images/polabo_logo.png'
import { postBoard } from '@/lib'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import BoardNameRecommendations from '@/app/board/create/_components/BoardNameRecommendations'
import BackButton from '@/app/board/create/_components/BackButton'
import BoardAvailabilityCheckModal from './_components/BoardAvailabilityCheckModal'
import BoardNameForm from './_components/BoardNameForm'

const CreateBoardPage = () => {
  const createBoard = async (title: string) => {
    'use server'

    const boardId = await postBoard({
      title,
      userId: null,
    })

    revalidateTag('myBoard')
    redirect(`/board/${boardId}`)
  }
  return (
    <div className="relative flex h-dvh flex-col items-center justify-between px-5">
      <BackButton />
      <Image
        src={PolaboLogo}
        alt="logo"
        className="object-contain px-20 pt-6"
      />
      <BoardAvailabilityCheckModal />
      <BoardNameForm createBoard={createBoard}>
        <BoardNameRecommendations />
      </BoardNameForm>
    </div>
  )
}

export default CreateBoardPage
