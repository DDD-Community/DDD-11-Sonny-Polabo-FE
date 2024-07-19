import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import BoardNameForm from './components/BoardNameForm'
import BoardNameRecommendations from './components/BoardNameRecommendations'
import BoardAvailabilityCheckModal from './components/BoardAvailabilityCheckModal'

const CreateBoardPage = () => {
  return (
    <div className="flex flex-col h-dvh items-center justify-between">
      <Image
        src={PolaboLogo}
        alt="logo"
        className="px-20 pt-6 object-contain"
      />
      <BoardAvailabilityCheckModal />
      <BoardNameForm>
        <BoardNameRecommendations />
      </BoardNameForm>
    </div>
  )
}

export default CreateBoardPage
