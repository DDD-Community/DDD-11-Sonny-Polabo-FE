import { SignInPayload, User } from '@/types'
import { post } from './base'

export const login = async (body: SignInPayload): Promise<User> => {
  const res = await post('/api/v1/oauth/sign-in', {
    body: JSON.stringify(body),
  })

  return res.data
}
