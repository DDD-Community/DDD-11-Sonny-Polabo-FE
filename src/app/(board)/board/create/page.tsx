import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import BoardNameForm from './components/BoardNameForm'
import BoardNameRecommendations from './components/BoardNameRecommendations'
import BoardAvailabilityCheckModal from './components/BoardAvailabilityCheckModal'

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
