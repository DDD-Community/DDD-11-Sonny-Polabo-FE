import AuthSession from '@/components/AuthSession'
import CheckNewUser from '@/components/CheckNewUser'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'

const PretendVariable = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  weight: '45 920',
  variable: '--font-pretendard-variable',
})

const Jooree = localFont({
  src: '../../public/fonts/Jooree.ttf',
  variable: '--font-jooree',
})

const Hesom = localFont({
  src: '../../public/fonts/Hesom.ttf',
  variable: '--font-hesom',
})

export const metadata: Metadata = {
  title: 'POLABO | 함께 꾸미는 폴라로이드 보드, 폴라보',
  description:
    '우리의 일상도 특별하게! 소중한 추억들을 공유하며 폴라로이드로 보드를 꾸며봐요.',
  metadataBase: new URL('https://polabo.site'),
  openGraph: {
    images: [
      {
        url: '/images/opengraph-image.png',
        alt: 'Polabo',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/images/opengraph-image.png',
        alt: 'Polabo',
      },
    ],
  },
}

declare global {
  interface Window {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Kakao: any
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${PretendVariable.variable} ${Jooree.variable} ${Hesom.variable}`}
      >
        <AuthSession>
          <CheckNewUser />
          <main className="mx-auto max-w-md bg-gray-0 font-pretendard">
            {children}
          </main>
        </AuthSession>
        <div className="fixed left-0 top-0 -z-10 h-dvh w-screen bg-gray-200" />
        <div className="font-pretendard" id="modal-root" />
      </body>
    </html>
  )
}
