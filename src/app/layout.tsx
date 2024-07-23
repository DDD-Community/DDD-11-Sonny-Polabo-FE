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
  title: 'POLABO',
  description: '우리만의 추억보드',
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
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${PretendVariable.variable} ${Jooree.variable} ${Hesom.variable}`}
      >
        <main className="mx-auto max-w-md font-pretendard">{children}</main>
        <div className="font-pretendard" id="modal-root" />
      </body>
    </html>
  )
}
