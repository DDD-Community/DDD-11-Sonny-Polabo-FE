/* eslint-disable no-param-reassign */

import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { login, refreshAT } from './lib/api/auth'

/* eslint-disable-next-line @typescript-eslint/naming-convention */
export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
      redirectProxyUrl: `${process.env.AUTH_REDIRECT_URI}/api/auth`,
    }),
  ],

  trustHost: true,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // TODO: 기획 논의 필요
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account && user) {
        try {
          // 신규 유저인지 확인, polabo 백에서 토큰 발급
          const {
            newUser,
            nickName,
            birthDt,
            gender,
            accessToken,
            refreshToken,
            expiredDate,
          } = await login({
            email: user.email!,
            nickName: user.name!,
          })
          // user.name = nickName
          user.newUser = newUser
          user.accessToken = accessToken
          user.refreshToken = refreshToken
          user.expiredDate = expiredDate
          user.profile = {
            nickName,
            birthDt,
            gender,
          }
        } catch (e) {
          console.log('error', e)
          return false
        }
      }

      return true
    },
    async jwt({ token, user, account, trigger, session }) {
      if (trigger === 'update' && session?.profile) {
        token.profile = session.profile
      }
      if (trigger === 'update' && session?.accessToken) {
        token.accessToken = session.accessToken
        token.refreshToken = session.refreshToken
        token.expiredDate = session.expiredDate
      }

      if (user && account) {
        // first time login
        return {
          ...token,
          newUser: user.newUser,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiredDate: user.expiredDate,
          profile: user.profile,
          user,
        }
      }

      if (Date.now() < new Date(token.expiredDate).getTime()) {
        // AT not expired
        return token
      }
      // AT expired - update token
      const newToken = await refreshAT(token.refreshToken)
      return { ...token, ...newToken }
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.expiredDate = token.expiredDate
        session.newUser = token.newUser
        session.profile = token.profile
      }
      return session
    },
  },
})
