'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import GoToLoginModal from './GoToLoginModal'

const CreateBoardBtn = () => {
  const router = useRouter()
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const { data: session, status } = useSession()

  const handleClick = () => {
    if (status === 'authenticated' && session.user) {
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
