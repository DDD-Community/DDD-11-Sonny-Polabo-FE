import { isDevMode } from '@/lib/utils/env'

// kakao
export const handleKakaoShare = () => {
  const { Kakao, location } = window
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

// instagram

// X

// facebook
