import { Account, User } from 'next-auth'

export interface GetAccessTokenPayload {
  account: Account
  user: User
}

export interface Token {
  accessToken: string
  refreshToken: string
}
