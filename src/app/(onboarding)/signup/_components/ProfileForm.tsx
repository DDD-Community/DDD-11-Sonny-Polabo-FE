'use client'

import { updateProfile } from '@/lib'
import { UserProfile } from '@/types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Indicator from './Indicator'
import { ProfileProvider } from './contexts/ProfileContext'
import { useStep } from './contexts/StepContext'
import BirthDtForm from './steps/BirthDtForm'
import GenderForm from './steps/GenderForm'
import NicknameForm from './steps/NicknameForm'

const ProfileForm = () => {
  const { step } = useStep()
  const { data: session, update } = useSession()
  const router = useRouter()

  const handleSubmit = async (newProfile: UserProfile) => {
    if (session?.profile !== newProfile) {
      const serverRes = await updateProfile(newProfile)
      if (serverRes.code === 'SUCCESS') {
        update({ profile: newProfile })
        router.push('/signup/complete')
      }
    }
  }

  return (
    <div className="flex w-full flex-1 flex-col px-10">
      <Indicator />
      <ProfileProvider>
        {step === 1 && <NicknameForm />}
        {step === 2 && <BirthDtForm />}
        {step === 3 && <GenderForm handleSubmit={handleSubmit} />}
      </ProfileProvider>
    </div>
  )
}

export default ProfileForm
