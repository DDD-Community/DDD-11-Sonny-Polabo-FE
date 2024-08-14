import Image from 'next/image'
import ThreePolaroids from 'public/icons/threePolaroids.png'
import CheckIcon from 'public/icons/sketch_check.svg'
import { GoToCreateBoard, GoToMain } from './components/Buttons'

const SignUpCompletePage = () => {
  return (
    <div className="mx-5 flex h-dvh flex-col items-center">
      <CheckIcon className="mt-8" />
      <h1 className="mb-4 mt-[5px] whitespace-pre-line text-center text-2xl font-thin leading-10">
        {'회원가입이\n 완료되었습니다!'}
      </h1>
      <p className="mb-[25px] text-sm">
        보드를 만들어 친구들에게 공유해보세요!
      </p>
      <div className="flex flex-1 items-center">
        <Image
          src={ThreePolaroids}
          priority
          alt="polaroids icon"
          className="px-14"
        />
      </div>
      <GoToMain />
      <GoToCreateBoard />
    </div>
  )
}

export default SignUpCompletePage
