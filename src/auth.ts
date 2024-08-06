import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { cookies } from 'next/headers'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log('signin user', user)
      console.log('signin account', account)

      try {
        const { accessToken, refreshToken } = await getToken({ account, user })
        cookies.set('accessToken', accessToken)
        cookies.set('refreshToken', refreshToken)
      } catch (e) {
        console.log('error', e)
        return false
      }

      return true
    },
    // async jwt({ token, user, account, profile }) {
    //   console.log('jwt token', token)
    //   console.log('jwt user', user)
    //   console.log('jwt account', account)
    //   console.log('jwt profile', profile)
    //   return token
    // },
    // async session({ session, user, token }) {
    //   console.log('session', session, user, token)
    //   // session.accessToken = privateToken
    //   return session
    // },
    async redirect({ baseUrl }) {
      return `${baseUrl}/board/create`
    },
  },
})
