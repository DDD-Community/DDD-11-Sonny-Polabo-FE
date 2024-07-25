import GoogleAnalytics from '@/components/GoogleAnalytics'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

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
        url: '/images/opengraph-image.jpg',
        alt: 'Polabo',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/images/opengraph-image.jpg',
        alt: 'Polabo',
      },
    ],
  },
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
      </head>
      <body
        className={`${PretendVariable.variable} ${Jooree.variable} ${Hesom.variable}`}
      >
        <main className="mx-auto max-w-md bg-gray-0 font-pretendard">
          {children}
        </main>
        <div className="fixed left-0 top-0 -z-10 h-dvh w-screen bg-gray-200" />
        <div className="font-pretendard" id="modal-root" />
      </body>
    </html>
  )
}
