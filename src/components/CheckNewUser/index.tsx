'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const CheckNewUser = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      // 비회원
      if (localStorage.getItem('needTutorial') === null) {
        localStorage.setItem('needTutorial', 'true')
      }
    } else if (session?.newUser) {
      // 신규 회원
      localStorage.setItem('needTutorial', 'true')
    } else {
      // 기존 회원
      localStorage.setItem('needTutorial', 'false')
    }
  }, [session])

  return null
}

export default CheckNewUser
