import BackButton from '@/app/board/create/_components/BackButton'
import BoardNameRecommendations from '@/app/board/create/_components/BoardNameRecommendations'
import Image from 'next/image'
import PolaboLogo from 'public/images/polabo-logo.png'
import BoardAvailabilityCheckModal from './_components/BoardAvailabilityCheckModal'
import BoardNameForm from './_components/BoardNameForm'

const CreateBoardPage = () => {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-between px-5">
      <BackButton />
      <Image
        src={PolaboLogo}
        alt="logo"
        className="object-contain px-20 pt-6"
      />
      <BoardAvailabilityCheckModal />
      <BoardNameForm>
        <BoardNameRecommendations />
      </BoardNameForm>
    </div>
  )
}

export default CreateBoardPage
