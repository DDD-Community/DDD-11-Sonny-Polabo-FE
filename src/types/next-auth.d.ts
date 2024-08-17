import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'
import { UserProfile } from '.'

declare module 'next-auth/jwt' {
  interface JWT {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
    profile: UserProfile
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
    profile: UserProfile
  }
  interface User {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
    profile: UserProfile
  }
}
