'use client'

import { UserProfile } from '@/types'
import { useSession } from 'next-auth/react'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'

interface ProfileContextProps {
  newName: UserProfile['nickName']
  newBirthDt: UserProfile['birthDt']
  newGender: UserProfile['gender']
  setNewName: Dispatch<SetStateAction<UserProfile['nickName']>>
  setNewBirthDt: Dispatch<SetStateAction<UserProfile['birthDt']>>
  setNewGender: Dispatch<SetStateAction<UserProfile['gender']>>
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined)

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data: session } = useSession()
  const [newName, setNewName] = useState<UserProfile['nickName']>('')
  const [newBirthDt, setNewBirthDt] =
    useState<UserProfile['birthDt']>(undefined)
  const [newGender, setNewGender] = useState<UserProfile['gender']>('NONE')

  useEffect(() => {
    setNewName(session?.profile.nickName ?? '')
    setNewBirthDt(session?.profile.birthDt)
  }, [session])

  const value = useMemo(
    () => ({
      newName,
      newBirthDt,
      newGender,
      setNewName,
      setNewBirthDt,
      setNewGender,
    }),
    [newName, newBirthDt, newGender],
  )

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error('Error at useProfile')
  }
  return context
}
