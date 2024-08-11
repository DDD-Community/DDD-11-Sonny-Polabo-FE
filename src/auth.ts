/* eslint-disable no-param-reassign */

import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { login } from './lib/api'
import { changeNickname } from './lib/api/user'

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
          const { newUser, nickName, accessToken } = await login({
            email: user.email!,
            nickName: user.name!,
            birthDt: '2024-08-11', // TODO: 기획 대기
            gender: 'F', // TODO: 기획 대기
          })

          user.name = nickName
          user.newUser = newUser
          user.accessToken = accessToken
        } catch (e) {
          console.log('error', e)
          return false
        }
      }

      return true
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        const { name } = session

        token.name = name // client update
        await changeNickname(name) // server update
      }

      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          newUser: user.newUser,
        }
      }

      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        newUser: token.newUser,
      }
    },
  },
})
