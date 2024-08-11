import { put } from './base'

export const changeNickname = async (nickName: string): Promise<void> => {
  await put('/api/v1/user/nickname', {
    body: JSON.stringify({ nickName }),
  })
}
