'use client'

import { ReactNode, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import NicknameInput from '@/components/TextInput/NicknameInput'
import BirthDateInput from '@/components/BirthDateInput'
import Title from './Title'
import SubmitBtn from './SubmitBtn'
import GenderInput from './GenderInput'

const ProfileForm = ({ children }: { children: ReactNode }) => {
  const { data: session, update } = useSession()
  const [newName, setNewName] = useState<string>(session?.user?.name || '')
  const [newBirthDt, setNewBirthDt] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)
  const [hasError, setHasError] = useState(false)

  return (
    <form
      action={async () => {
        update({
          name: newName,
        })
      }}
      ref={formRef}
      className="mt-9 flex flex-1 flex-col px-10"
    >
      <div className="mx-auto w-[256px] flex-1 pb-20">
        <div className="mb-[29px]">
          <Title>닉네임</Title>
          <NicknameInput
            value={newName}
            setValue={setNewName}
            setHasError={setHasError}
            name="nickname"
          />
        </div>
        <div className="mb-[26px]">
          <Title>생년월일</Title>
          <BirthDateInput birthDt={newBirthDt} setBirthDt={setNewBirthDt} />
        </div>
        <Title>성별</Title>
        <GenderInput />
        {children}
      </div>
      <SubmitBtn
        formRef={formRef}
        btnDisabled={
          session?.user?.name === newName || newName.length === 0 || hasError
        }
      />
    </form>
  )
}

export default ProfileForm
