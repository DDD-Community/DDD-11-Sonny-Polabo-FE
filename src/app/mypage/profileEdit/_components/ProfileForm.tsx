'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import NicknameInput from '@/components/TextInput/NicknameInput'
import BirthDateInput from '@/components/BirthDateInput'
import { UserProfile } from '@/types'
import { updateProfile } from '@/lib'
import Title from './Title'
import SubmitBtn from './SubmitBtn'
import GenderInput from './GenderInput'

const ProfileForm = ({ children }: { children: ReactNode }) => {
  const { data: session, update } = useSession()
  const [newName, setNewName] = useState<UserProfile['nickName']>(
    session?.profile.nickName ?? '',
  )
  const [newBirthDt, setNewBirthDt] = useState<UserProfile['birthDt']>(
    session?.profile.birthDt,
  )
  const [newGender, setNewGender] = useState<UserProfile['gender']>(
    session?.profile.gender ?? 'NONE',
  )
  const formRef = useRef<HTMLFormElement>(null)
  const [nameError, setNameError] = useState(false)
  const [birthError, setBirthError] = useState(false)
  const [unChanged, setUnChanged] = useState(true)

  useEffect(() => {
    if (
      session?.profile.nickName === newName &&
      session?.profile.birthDt === newBirthDt &&
      session?.profile.gender === newGender
    ) {
      setUnChanged(true)
    } else {
      setUnChanged(false)
    }
  }, [newName, newBirthDt, newGender, session])

  return (
    <form
      action={async () => {
        const newProfile = {
          nickName: newName,
          birthDt: newBirthDt,
          gender: newGender,
        }
        if (session?.profile !== newProfile) {
          const serverRes = await updateProfile(newProfile)

          if (serverRes.code === 'SUCCESS') {
            update({ profile: newProfile })
          }
        }
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
            setHasError={setNameError}
            name="nickname"
          />
        </div>
        <div className="mb-[26px]">
          <Title>생년월일</Title>
          <BirthDateInput
            setBirthDt={setNewBirthDt}
            setHasError={setBirthError}
            className="border-b border-gray-950"
          />
        </div>
        <Title>성별</Title>
        <GenderInput gender={newGender} setGender={setNewGender} />
        {children}
      </div>
      <SubmitBtn
        formRef={formRef}
        btnDisabled={
          unChanged || newName.length === 0 || birthError || nameError
        }
      />
    </form>
  )
}

export default ProfileForm
