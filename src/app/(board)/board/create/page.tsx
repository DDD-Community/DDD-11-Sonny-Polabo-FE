import Image from 'next/image'
import PolaboLogo from 'public/images/polabo_logo.png'
import BoardAvailabilityCheckModal from './_components/BoardAvailabilityCheckModal'
import BoardNameForm from './_components/BoardNameForm'
import BoardNameRecommendations from './_components/BoardNameRecommendations'

const CreateBoardPage = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-between px-5">
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
