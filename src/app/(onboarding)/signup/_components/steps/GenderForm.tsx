import Button from '@/components/Button'
import { UserProfile } from '@/types'
import { useProfile } from '../contexts/ProfileContext'

const GenderForm = ({
  handleSubmit,
}: {
  handleSubmit: (profile: UserProfile) => void
}) => {
  const { newName, newBirthDt, newGender } = useProfile()
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2 whitespace-pre-line text-2xl font-thin leading-10">
        <span className="font-regular">성별</span>
        {'을 \n 입력해주세요!'}
      </div>
      <p className="text-sm text-gray-400">
        추가 정보를 입력하시면 나에게 딱 맞는 보드 주제를 추천해드려요 :)
      </p>

      <Button
        size="lg"
        className="mb-10 mt-auto w-full"
        // disabled={}
        onClick={() =>
          handleSubmit({
            nickName: newName,
            birthDt: newBirthDt,
            gender: newGender,
          })
        }
      >
        완료
      </Button>
    </div>
  )
}

export default GenderForm
