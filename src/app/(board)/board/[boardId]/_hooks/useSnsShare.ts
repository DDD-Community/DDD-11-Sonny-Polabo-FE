'use client'

import { useEffect } from 'react'
import { isDevMode } from '@/lib/utils/env'

const useSnsShare = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
    script.async = true
    script.integrity =
      'sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4'
    script.crossOrigin = 'anonymous'

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const shareToKakao = () => {
    const { Kakao, location } = window
    if (Kakao === undefined) {
      return
    }

    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'POLABO | 함께 꾸미는 폴라로이드 보드, 폴라보',
        description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
        imageUrl: '/images/opengraph-image.png',
        link: {
          mobileWebUrl: isDevMode
            ? 'https://dev.polabo.site'
            : 'https://polabo.site',
          webUrl: isDevMode ? 'https://dev.polabo.site' : 'https://polabo.site',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: location.href,
            webUrl: location.href,
          },
        },
      ],
    })
  }

  const shareToInsta = () => {}

  const shareToFacebook = () => {}

  const shareToX = () => {}

  return { shareToKakao, shareToInsta, shareToFacebook, shareToX }
}

export default useSnsShare
