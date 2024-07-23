'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const CreateBoardBtn = () => {
  const router = useRouter()

  return (
    <Button
      size="lg"
      className="mb-3 shadow-[0px_0px_20px_0px_rgba(255,255,255,0.6)]"
      onClick={() => {
        router.push('/board/create')
      }}
    >
      시작하기
    </Button>
  )
}

export default CreateBoardBtn
