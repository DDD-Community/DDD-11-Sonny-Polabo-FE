import NextAuth from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import { getToken } from './lib/api'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // 임시로 24시간으로 설정
  },
  callbacks: {
    async signIn({ user, account }) {
      //   console.log('signin user', user)
      //   console.log('signin account', account)

      if (account && user) {
        try {
          // 신규 유저인지 확인, polabo 백에서 토큰 발급
          const { isNewUser, accessToken, refreshToken } = await getToken({
            account,
            user,
          })
          // eslint-disable-next-line no-param-reassign
          user.customData = {
            isNewUser,
            accessToken,
            refreshToken,
          }
          if (isNewUser) return '/signup'
        } catch (e) {
          console.log('error', e)
          return false
        }
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.customData.accessToken,
          isNewUser: user.customData.isNewUser,
        }
      }

      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        isNewUser: token.isNewUser,
      }
    },

    async redirect({ baseUrl, url }) {
      return url === '/signup' ? `${baseUrl}/signup` : `${baseUrl}/board/create`
    },
  },
})
