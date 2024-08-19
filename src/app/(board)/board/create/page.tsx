import Image from 'next/image'
import PolaboLogo from 'public/images/polabo_logo.png'
import { postBoard } from '@/lib'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import BoardAvailabilityCheckModal from './components/BoardAvailabilityCheckModal'
import BoardNameForm from './components/BoardNameForm'
import BoardNameRecommendations from './components/BoardNameRecommendations'

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
    <div className="flex h-dvh flex-col items-center justify-between px-5">
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
