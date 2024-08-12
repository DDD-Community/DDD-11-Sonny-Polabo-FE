'use client'

import Button from '@/components/Button'
import NicknameInput from '@/components/TextInput/NicknameInput'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SketchIcon from 'public/icons/sketchIcons-1.svg'
import { useState } from 'react'

const NicknameForm = () => {
  const [nickname, setNickname] = useState('')
  const [hasError, setHasError] = useState(false)
  const isEmpty = nickname.length === 0
  const { update } = useSession()
  const router = useRouter()

  const createNickname = async () => {
    update({
      name: nickname,
    })
    router.push('/signup/complete')
  }

  return (
    <>
      <div>
        <div className="mb-20 mt-[60px] text-2xl font-thin leading-10">
          닉네임을 정해주세요!
        </div>
        <NicknameInput
          value={nickname}
          setValue={setNickname}
          setHasError={setHasError}
          icon={<SketchIcon />}
        />
      </div>
      <Button
        size="lg"
        className="mb-10"
        disabled={hasError || isEmpty}
        onClick={createNickname}
      >
        완료
      </Button>
    </>
  )
}

export default NicknameForm
