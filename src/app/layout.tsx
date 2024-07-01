import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <main
          className="max-w-md mx-auto p-4 min-h-screen"
          style={{
            backgroundColor: 'aliceblue',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
