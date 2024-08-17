'use client'

import Button from '@/components/Button'
import NicknameInput from '@/components/TextInput/NicknameInput'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
import SketchIcon from 'public/icons/sketchIcons-1.svg'
import { useState } from 'react'
import { useProfile } from '../contexts/ProfileContext'
import { useStep } from '../contexts/StepContext'

const NicknameForm = () => {
  const { setNewName } = useProfile()
  const [nickname, setNickname] = useState('')
  const [hasError, setHasError] = useState(false)
  const isEmpty = nickname.length === 0
  // const { update } = useSession()
  // const router = useRouter()
  const { nextStep } = useStep()

  const createNickname = async () => {
    // update({
    //   name: nickname,
    // })
    // await changeNickname(nickname)
    setNewName(nickname)
    nextStep()
    // router.push('/signup/complete')
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-20 text-2xl font-thin leading-10">
        닉네임을 정해주세요!
      </div>
      <div className="mx-auto">
        <NicknameInput
          value={nickname}
          setValue={setNickname}
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
