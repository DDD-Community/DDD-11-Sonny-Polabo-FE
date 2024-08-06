import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    isNewUser: boolean
    accessToken: string
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    isNewUser: boolean
    accessToken: string
  }
  interface User {
    customData: {
      isNewUser: boolean
      accessToken: string
      refreshToken: string
    }
  }
}
