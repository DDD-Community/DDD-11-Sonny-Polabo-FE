'use client'

import Button from '@/components/Button'
import NicknameInput from '@/components/TextInput/NicknameInput'
import SketchIcon from 'public/icons/sketchIcons-1.svg'
import { useState } from 'react'
import { UserProfile } from '@/types'
import { useProfile } from '../contexts/ProfileContext'
import { useStep } from '../contexts/StepContext'

const NicknameForm = ({
  handleSubmit,
}: {
  handleSubmit: (profile: UserProfile) => Promise<boolean>
}) => {
  const { newName, setNewName, newBirthDt, newGender } = useProfile()
  const [hasError, setHasError] = useState(false)
  const isEmpty = newName.length === 0

  const { nextStep } = useStep()

  const createNickname = async () => {
    await handleSubmit({
      nickName: newName,
      birthDt: newBirthDt,
      gender: newGender,
    })
    nextStep()
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-20 text-2xl font-thin leading-10">
        닉네임을 정해주세요!
      </div>
      <div className="flex justify-center">
        <NicknameInput
          value={newName}
          setValue={setNewName}
          setHasError={setHasError}
          icon={<SketchIcon />}
        />
      </div>
      <Button
        size="lg"
        className="mb-10 mt-auto w-full"
        disabled={hasError || isEmpty}
        onClick={createNickname}
      >
        다음
      </Button>
    </div>
  )
}

export default NicknameForm
