'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const CheckNewUser = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (localStorage.getItem('needTutorial') === null) {
      if (!session || session?.newUser) {
        // 비회원이거나 신규 회원
        localStorage.setItem('needTutorial', 'true')
      } else {
        // 기존 회원
        localStorage.setItem('needTutorial', 'false')
      }
    }
  }, [session])

  return null
}

export default CheckNewUser
