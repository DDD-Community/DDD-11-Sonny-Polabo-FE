import { Session } from 'next-auth'

export const getPolaroidNickname = (
  nickname: string,
  session: Session | null,
) => {
  if (nickname !== '') {
    return nickname
  }

  if (session?.profile?.nickName) {
    return nickname
  }

  return '익명'
}
