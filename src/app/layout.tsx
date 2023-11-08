import type { Metadata } from 'next'
import { PT_Sans_Caption } from 'next/font/google'
import './globals.css'
import Navbar from './common/navbar'

const PTsans = PT_Sans_Caption({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brain 2.0',
  description: 'Brain 2.0 - Driven by Values, Powered by Intellect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </head>
      <body className={PTsans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
