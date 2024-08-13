/* eslint-disable no-param-reassign */

import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { changeNickname, login, refreshAT } from './lib/api/auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
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
          const { newUser, nickName, accessToken, refreshToken, expiredDate } =
            await login({
              email: user.email!,
              nickName: user.name!,
              birthDt: '2024-08-11', // TODO: 기획 대기
              gender: 'F', // TODO: 기획 대기
            })

          user.name = nickName
          user.newUser = newUser
          user.accessToken = accessToken
          user.refreshToken = refreshToken
          user.expiredDate = expiredDate
        } catch (e) {
          console.log('error', e)
          return false
        }
      }

      return true
    },
    async jwt({ token, user, account, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        const { name } = session

        await changeNickname(name, token.accessToken) // server update
        token.name = name // client update
      }

      if (user && account) {
        // first time login
        return {
          ...token,
          newUser: user.newUser,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiredDate: user.expiredDate,
          user,
        }
      }

      if (Date.now() < new Date(token.expiredDate).getTime()) {
        // not expired
        return token
      }
      // update token
      return refreshAT(token)
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.expiredDate = token.expiredDate
        session.newUser = token.newUser
      }
      return session
    },
  },
})
