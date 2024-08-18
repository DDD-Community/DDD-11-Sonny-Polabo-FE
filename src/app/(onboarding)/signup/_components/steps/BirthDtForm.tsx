import Button from '@/components/Button'
import Link from 'next/link'
import { useProfile } from '../contexts/ProfileContext'
import { useStep } from '../contexts/StepContext'

const BirthDtForm = () => {
  const { newName } = useProfile()
  const { nextStep } = useStep()
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2 whitespace-pre-line text-2xl font-thin leading-10">
        <span className="font-regular">{newName}</span>
        {'님의 \n 생일을 입력해주세요!'}
      </div>
      <p className="text-sm text-gray-400">
        추가 정보를 입력하시면 나에게 딱 맞는 보드 주제를 추천해드려요 :)
      </p>

      <Button
        size="lg"
        className="mb-5 mt-auto w-full"
        // disabled={}
        onClick={() => nextStep()}
      >
        다음
      </Button>
      <Link
        href="/"
        className="mb-6 text-center text-md font-semiBold text-gray-400"
      >
        다음에 할게요
      </Link>
    </div>
  )
}

export default BirthDtForm
