import { Session } from 'next-auth'
import { ThemaKeyType } from '@/types'

export const getPolaroidNickname = (
  nickname: string,
  session: Session | null,
) => nickname || session?.profile?.nickName || '익명'

const isPolaroidWithFrame = (themaKey: ThemaKeyType) => {
  const polaroidWithFrame: ThemaKeyType[] = [
    'F-9',
    'F-10',
    'F-11',
    'F-12',
    'F-13',
    'F-14',
    'F-15',
    'F-16',
    'F-17',
    'F-20',
    'F-21',
    'F-22',
  ]

  return polaroidWithFrame.includes(themaKey)
}

export const getPolaroidStyle = (themaKey: ThemaKeyType) => {
  return isPolaroidWithFrame(themaKey)
    ? {
        backgroundImage: `url('/images/polaroidFrames/${themaKey}.svg')`,
        backgroundSize: 'cover',
      }
    : {}
}
