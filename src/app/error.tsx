'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import ErrorIcon from 'public/icons/error.svg'

const ErrorPage = () => {
  const router = useRouter()
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <ErrorIcon />
      <h1 className="mb-3 text-xl font-semiBold">오류가 발생했어요.</h1>
      <p className="text-xs">사용에 불편을 드려 죄송합니다.</p>
      <p className="pb-8 text-xs">
        (이 화면을 덜 보시도록 폴라보팀은 매일 노력하고있어요..!)
      </p>
      <Button onClick={() => router.replace('/')}>홈으로 돌아가기</Button>
    </div>
  )
}

export default ErrorPage
