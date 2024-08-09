'use client'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SketchIcon from 'public/icons/sketchIcons-1.svg'

const MAX_NICKNAME_LENGTH = 10

const NicknameForm = () => {
  const [nickname, setNickname] = useState('')
  const [hasError, setHasError] = useState(false)
  const isEmpty = nickname.length === 0
  const { data: session, update } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      setNickname(session.user!.name!)
    }
  }, [session])

  useEffect(() => {
    if (nickname.length > MAX_NICKNAME_LENGTH) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [nickname])

  const onInput = (value: string) => {
    setNickname(value)
  }

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
        <TextInput
          errorMessage={`${MAX_NICKNAME_LENGTH}자 미만으로 입력해주세요`}
          description={`${nickname.length}/${MAX_NICKNAME_LENGTH}자`}
          value={nickname}
          hasError={hasError}
          setValue={onInput}
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
