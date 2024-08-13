import { SignInPayload, User } from '@/types'
import { JWT } from 'next-auth/jwt'
import { post, put } from './base'

export const login = async (body: SignInPayload): Promise<User> => {
  const res = await post('/api/v1/oauth/sign-in', {
    body: JSON.stringify(body),
  })

  console.log('From the login', res.data)

  return res.data
}

export const refreshAT = async (token: JWT) => {
  const res = await put('/api/v1/oauth/re-issue', {
    headers: {
      Authorization: `Bearer ${token.refreshToken}`,
    },
  })

  console.log('From the refreshAT', res.data)

  return {
    ...token,
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
    expiredDate: res.data.expiredDate,
  }
}
