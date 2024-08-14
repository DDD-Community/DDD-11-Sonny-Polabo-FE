import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
  }
  interface User {
    newUser: boolean
    accessToken: string
    refreshToken: string
    expiredDate: string
  }
}
