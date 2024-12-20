import { SnsKeyType, SnsType } from '@/types'

export const SNS: Record<SnsKeyType, SnsType> = {
  KAKAO: {
    name: '카카오톡',
    bg: 'bg-kakao',
    gtm: 'kakao',
  },
  INSTAGRAM: {
    name: '인스타그램',
    bg: "bg-[url('/icons/sns/sns-ig-bg.png')]",
    gtm: 'instagram',
  },
  X: {
    name: 'X',
    bg: 'bg-gray-1000',
    gtm: 'x',
  },
  FACEBOOK: {
    name: '페이스북',
    bg: 'bg-facebook',
    gtm: 'facebook',
  },
}
