import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const PretendVariable = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  weight: '45 920',
  variable: '--font-pretendard-variable',
})

const Jooree = localFont({
  src: '../../public/fonts/Jooree.ttf',
  variable: '--font-jooree',
})

export const metadata: Metadata = {
  title: 'POLABO',
  description: '우리만의 추억보드',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${PretendVariable.variable} ${Jooree.variable}`}>
        <main className="max-w-md mx-auto p-4 min-h-screen font-pretendard flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
