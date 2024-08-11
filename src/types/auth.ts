export interface SignInPayload {
  email: string
  nickName: string
  birthDt: string // '2024-08-11'
  gender: 'F' | 'M' | 'NONE'
}

export interface User {
  newUser: boolean
  nickName: string
  accessToken: string
}
