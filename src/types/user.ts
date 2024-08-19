export type WithdrawUserPayload = {
  type: string
  reason: string
}

export interface SignInPayload {
  email: string
  nickName: string
}

export interface User {
  newUser: boolean
  nickName: string
  birthDt: `${string}-${string}-${string}` | undefined // '2024-08-11'
  gender: 'F' | 'M' | 'NONE'
  accessToken: string
  expiredDate: string
  refreshToken: string
}

export type UserProfile = Pick<User, 'nickName' | 'birthDt' | 'gender'>
