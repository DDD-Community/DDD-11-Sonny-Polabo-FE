import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import BoardNameForm from './components/BoardNameForm'
import BoardNameRecommendations from './components/BoardNameRecommendations'

const CreateBoardPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={PolaboLogo} alt="logo" className="px-20 pt-6" />
      <div className="text-gray-900 text-lg font-thin leading-6 py-9">
        보드 주제를 정해주세요!
      </div>
      <BoardNameForm>
        <BoardNameRecommendations />
      </BoardNameForm>
    </div>
  )
}

export default CreateBoardPage
