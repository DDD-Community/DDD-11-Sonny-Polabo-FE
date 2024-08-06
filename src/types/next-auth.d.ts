import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {}
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      username?: string
      id?: string
    } & DefaultSession['user']
    accessToken: string
  }
}
