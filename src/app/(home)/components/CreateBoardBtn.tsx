'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const CreateBoardBtn = () => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push('/board/create')
  }, [router])

  return (
    <Button
      size="lg"
      className="mb-3 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.6)]"
      onClick={handleClick}
    >
      시작하기
    </Button>
  )
}

export default CreateBoardBtn
