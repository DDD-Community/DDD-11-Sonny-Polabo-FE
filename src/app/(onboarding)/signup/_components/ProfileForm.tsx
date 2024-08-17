'use client'

import Indicator from './Indicator'
import NicknameForm from './NicknameForm'
import { useStep } from './StepContext'

const ProfileForm = () => {
  const { step } = useStep()
  return (
    <div className="flex w-full flex-1 flex-col px-10">
      <Indicator />
      {step === 1 && <NicknameForm />}
    </div>
  )
}

export default ProfileForm
