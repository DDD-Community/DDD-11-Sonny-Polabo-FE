'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export const GoToCreateBoard = () => {
  const router = useRouter()
  return (
    <Button size="lg" onClick={() => router.push('/board/create')}>
      보드 만들러 가기
    </Button>
  )
}

export const GoToMain = () => {
  const router = useRouter()
  return (
    <Button size="md" onClick={() => router.push('/')}>
      메인으로 가기
    </Button>
  )
}
