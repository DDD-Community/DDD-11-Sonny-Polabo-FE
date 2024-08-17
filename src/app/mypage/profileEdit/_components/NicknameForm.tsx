'use client'

import Button from '@/components/Button'
import { useSession } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import NicknameInput from '@/components/TextInput/NicknameInput'
import { changeNickname } from '@/lib'
import Title from './Title'

const NicknameForm = ({ children }: { children: ReactNode }) => {
  const { data: session, update } = useSession()
  const [newName, setNewName] = useState<string>(
    session?.profile.nickName || '',
  )
  const [hasError, setHasError] = useState(false)

  const updateNickname = async () => {
    update({
      name: newName,
    })
    await changeNickname(newName)
  }

  return (
    <div className="mt-9 flex flex-1 flex-col px-10">
      <div className="mx-auto w-[256px] flex-1">
        <Title>닉네임</Title>
        <NicknameInput
          value={newName}
          setValue={setNewName}
          setHasError={setHasError}
        />
        {children}
      </div>
      <Button
        size="lg"
        onClick={updateNickname}
        className="mb-10 mt-auto w-full"
        disabled={
          session?.profile.nickName === newName ||
          newName.length === 0 ||
          hasError
        }
      >
        저장
      </Button>
    </div>
  )
}

export default NicknameForm
