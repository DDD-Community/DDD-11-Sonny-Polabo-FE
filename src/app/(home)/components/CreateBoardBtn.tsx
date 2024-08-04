'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import GoToLoginModal from './GoToLoginModal'

const CreateBoardBtn = () => {
  const router = useRouter()
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const loggedIn = false // 임시

  const handleClick = () => {
    if (loggedIn) {
      router.push('/board/create')
    } else {
      setLoginModalOpen(true)
    }
  }

  return (
    <>
      <Button
        size="lg"
        className="mb-3 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.6)]"
        onClick={handleClick}
      >
        시작하기
      </Button>
      <GoToLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  )
}

export default CreateBoardBtn
