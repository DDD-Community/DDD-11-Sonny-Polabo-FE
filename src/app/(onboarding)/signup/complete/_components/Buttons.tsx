'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const GoToCreateBoard = () => {
  const router = useRouter()
  return (
    <Button
      size="lg"
      onClick={() => router.push('/board/create')}
      className="mb-10"
    >
      보드 만들러 가기
    </Button>
  )
}

export const GoToMain = () => {
  return (
    <Link href="/" className="mb-5 text-sm leading-4 text-gray-400 underline">
      메인으로 가기
    </Link>
  )
}
