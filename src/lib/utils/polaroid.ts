import { Session } from 'next-auth'

export const getPolaroidNickname = (
  nickname: string,
  session: Session | null,
) => nickname || session?.profile?.nickName || '익명'
