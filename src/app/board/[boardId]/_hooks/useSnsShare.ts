'use client'

import { isDevMode } from '@/lib/utils/env'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { isAndroid, isIOS } from 'react-device-detect'

const useSnsShare = () => {
  const { data: session, status } = useSession()
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

  const shareToKakao = async (boardName: string) => {
    const { Kakao, location } = window
    if (Kakao === undefined) {
      return
    }

    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
    }

    const OPTIONS = {
      title:
        status === 'authenticated'
          ? `${session.profile.nickName}님이 회원님을 “${boardName}” 보드에 초대했어요!`
          : `“${boardName}” 보드를 꾸며보세요!`,
      localImage: '/images/opengraph-kakao.png',
      sender: status === 'authenticated' ? session.profile.nickName : '',
    }

    try {
      // 이미지 파일을 Blob으로 처리하여 File 객체 생성
      const response = await fetch(OPTIONS.localImage)
      const blob = await response.blob()
      const file = new File([blob], 'opengraph-kakao.png', {
        type: 'image/png',
      })

      // upload image (로컬 사진은 사용할 수 없으므로 서버에 업로드 후 사용)
      const uploadRes = await Kakao.Share.uploadImage({
        file: [file],
      })

      const imageUrl = uploadRes.infos.original.url

      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: OPTIONS.title,
          description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
          imageUrl,
          imageWidth: 800,
          imageHeight: 400,
          link: {
            mobileWebUrl: isDevMode
              ? 'https://dev.polabo.site'
              : 'https://polabo.site',
            webUrl: isDevMode
              ? 'https://dev.polabo.site'
              : 'https://polabo.site',
          },
        },
        buttons: [
          {
            title: '보드 꾸미러 가기',
            link: {
              mobileWebUrl: location.href,
              webUrl: location.href,
            },
          },
        ],
      })
    } catch (e) {
      console.log('image upload failed', e)
    }
  }

  const shareToInsta = () => {
    const currentURL = window.location.href
    navigator.clipboard.writeText(currentURL)

    let url
    if (isIOS) {
      url = 'https://www.instagram.com/create/story'
    } else if (isAndroid) {
      url =
        'intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end'
    } else {
      url = 'https://www.instagram.com/'
    }

    window.open(url)
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer.php?u=${window.location.href}`)
  }

  const shareToX = () => {
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`)
  }

  return { shareToKakao, shareToInsta, shareToFacebook, shareToX }
}

export default useSnsShare
