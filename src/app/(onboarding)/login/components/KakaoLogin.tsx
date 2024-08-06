'use client'

import Button from '@/components/Button'
import { signIn } from 'next-auth/react'
import KakaoIcon from 'public/icons/kakao.svg'

const KakaoLogin = () => {
  return (
    <Button
      size="lg"
      className="mb-4 flex cursor-pointer items-center justify-center gap-[9px] bg-[#FEE500] font-semiBold text-gray-950 shadow-button active:bg-[#fee500b7]"
      onClick={() => {
        signIn('kakao', {
          redirect: true,
          callbackUrl: '/board/create',
        })
      }}
    >
      <KakaoIcon />
      카카오로 시작하기
    </Button>
  )
}

export default KakaoLogin
