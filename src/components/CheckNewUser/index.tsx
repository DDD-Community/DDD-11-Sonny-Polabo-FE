'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const CheckNewUser = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      if (localStorage.getItem('needTutorial') === null) {
        localStorage.setItem('needTutorial', 'true')
      }
    } else if (session?.newUser) {
      localStorage.setItem('needTutorial', 'true')
    } else {
      localStorage.setItem('needTutorial', 'false')
    }
  }, [])

  return null
}

export default CheckNewUser
