'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib/constants'
import GoToLoginModal from './GoToLoginModal'

const CreateBoardBtn = () => {
  const router = useRouter()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const { status } = useSession()

  const handleCreateButtonClick = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_NEWBOARD })
    if (status === 'authenticated') {
      router.push('/board/create')
    } else {
      setIsLoginModalOpen(true)
    }
  }

  return (
    <>
      <Button
        size="lg"
        className="mb-3 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.6)]"
        onClick={handleCreateButtonClick}
      >
        보드 만들기
      </Button>
      <GoToLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}

export default CreateBoardBtn
