import { Session } from 'next-auth'
import { ThemaKeyType } from '@/types'

export const getPolaroidNickname = (
  nickname: string,
  session: Session | null,
) => nickname || session?.profile?.nickName || '익명'

const isPolaroidWithFrame = (themaKey: ThemaKeyType) => {
  const polaroidWithFrame: ThemaKeyType[] = ['F-9', 'F-10', 'F-11']

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
