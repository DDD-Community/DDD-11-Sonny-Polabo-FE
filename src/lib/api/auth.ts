import { GetAccessTokenPayload, Token } from '@/types'
import { post } from './base'

export const getToken = async ({
  account,
  user,
}: GetAccessTokenPayload): Promise<Token> => {
  const res = await post('/', {
    body: JSON.stringify({
      account,
      user,
    }),
  })

  return res.data
}
