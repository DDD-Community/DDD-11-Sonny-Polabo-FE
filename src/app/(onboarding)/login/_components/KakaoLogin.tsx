'use client'

import Button from '@/components/Button'
import { GTM_EVENT } from '@/lib/constants'
import { sendGTMEvent } from '@next/third-parties/google'
import { signIn } from 'next-auth/react'
import KakaoIcon from 'public/icons/kakao.svg'

const KakaoLogin = () => {
  return (
    <Button
      size="lg"
      className="mb-4 flex cursor-pointer items-center justify-center gap-[9px] bg-kakao font-semiBold text-gray-950 shadow-button active:bg-[#FEE500] active:bg-gradient-to-t active:from-[rgba(0,0,0,0.10)] active:to-[rgba(0,0,0,0.10)]"
      onClick={async () => {
        sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_LOGIN })
        await signIn('kakao', { callbackUrl: '/signup' })
      }}
    >
      <KakaoIcon />
      카카오로 시작하기
    </Button>
  )
}

export default KakaoLogin
