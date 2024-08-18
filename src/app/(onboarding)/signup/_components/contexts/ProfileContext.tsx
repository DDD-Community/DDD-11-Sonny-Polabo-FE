'use client'

import { UserProfile } from '@/types'
import { useSession } from 'next-auth/react'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface ProfileContextProps {
  newName: UserProfile['nickName']
  newBirthDt: UserProfile['birthDt']
  newGender: UserProfile['gender']
  setNewName: Dispatch<SetStateAction<UserProfile['nickName']>>
  setBirthDt: Dispatch<SetStateAction<UserProfile['birthDt']>>
  setGender: Dispatch<SetStateAction<UserProfile['gender']>>
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined)

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data: session } = useSession()
  const [newName, setNewName] = useState<UserProfile['nickName']>(
    session?.profile.nickName ?? '',
  )
  const [newBirthDt, setBirthDt] = useState<UserProfile['birthDt']>(undefined)
  const [newGender, setGender] = useState<UserProfile['gender']>('NONE')

  useEffect(() => {
    console.log(newName, newBirthDt, newGender)
  }, [newName, newBirthDt, newGender])

  const value = useMemo(
    () => ({
      newName,
      newBirthDt,
      newGender,
      setNewName,
      setBirthDt,
      setGender,
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
