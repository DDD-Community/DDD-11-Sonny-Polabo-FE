'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const CheckNewUser = () => {
  const { data: session } = useSession()

  useEffect(() => {
    localStorage.setItem('needBoardTutorial', 'true')
    localStorage.setItem('needDecorateTutorial', 'true')
    // if (localStorage.getItem('needBoardTutorial') === null) {
    //   if (!session || session?.newUser) {
    //     // 비회원이거나 신규 회원
    //     localStorage.setItem('needBoardTutorial', 'true')
    //     localStorage.setItem('needDecorateTutorial', 'true')
    //   } else {
    //     // 기존 회원
    //     localStorage.setItem('needBoardTutorial', 'false')
    //     localStorage.setItem('needDecorateTutorial', 'false')
    //   }
    // }
  }, [session])

  return null
}

export default CheckNewUser
