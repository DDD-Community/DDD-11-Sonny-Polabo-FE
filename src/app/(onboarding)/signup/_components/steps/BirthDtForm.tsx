import BirthDateInput from '@/components/BirthDateInput'
import Button from '@/components/Button'
import BirthInvalidModal from '@/components/Modal/BirthInvalidModal'
import { validateBirthDt } from '@/lib/utils/validation'
import { useState } from 'react'
import { UserProfile } from '@/types'
import { useProfile } from '../contexts/ProfileContext'
import { useStep } from '../contexts/StepContext'

const BirthDtForm = ({
  handleSubmit,
}: {
  handleSubmit: (profile: UserProfile) => Promise<boolean>
}) => {
  const { newName, newBirthDt, setBirthDt, newGender } = useProfile()
  const { nextStep } = useStep()
  const [hasError, setHasError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const onSubmit = async () => {
    if (newBirthDt) {
      if (validateBirthDt(newBirthDt) === false) {
        setModalOpen(true)
        return
      }
    }
    await handleSubmit({
      nickName: newName,
      birthDt: newBirthDt,
      gender: newGender,
    })
    nextStep()
  }

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="mb-2 whitespace-pre-line text-2xl font-thin leading-10">
          <span className="font-regular">{newName}</span>
          {'님의 \n 생일을 입력해주세요!'}
        </div>
        <p className="text-sm text-gray-400">
          추가 정보를 입력하시면 나에게 딱 맞는 보드 주제를 추천해드려요 :)
        </p>

        <div className="mx-auto mt-14">
          <BirthDateInput
            setBirthDt={setBirthDt}
            setHasError={setHasError}
            className="w-[300px] text-xl"
          />
        </div>
        <Button
          size="lg"
          className="mb-5 mt-auto w-full"
          disabled={hasError || !newBirthDt}
          onClick={onSubmit}
        >
          다음
        </Button>
        <button
          type="button"
          onClick={() => nextStep()}
          className="mb-6 text-center text-md font-semiBold text-gray-400"
        >
          다음에 할게요
        </button>
      </div>
      <BirthInvalidModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default BirthDtForm
