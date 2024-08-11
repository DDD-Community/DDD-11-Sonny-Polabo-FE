import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { login } from './lib/api'

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
    async signIn({ user, account, profile }) {
      if (account && user) {
        console.log('account', account)
        console.log('user', user)
        console.log('profile', profile)
        try {
          // 신규 유저인지 확인, polabo 백에서 토큰 발급
          const { newUser, nickName, accessToken } = await login({
            email: user.email!,
            nickName: user.name!,
            birthDt: '2024-08-11',
            gender: 'F',
          })
          // eslint-disable-next-line no-param-reassign
          user.name = nickName
          // eslint-disable-next-line no-param-reassign
          user.newUser = newUser
          // eslint-disable-next-line no-param-reassign
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
        // eslint-disable-next-line no-param-reassign
        token.name = name
        // TODO: 서버에 nickname 전송
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
