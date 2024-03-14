import type { Metadata } from 'next'
import { PT_Sans_Caption } from 'next/font/google'
import './globals.css'
import Navbar from './common/navbar'
import Footer from './common/footer'
import localFont from 'next/font/local'

export const PTsans = PT_Sans_Caption({ weight: ["400", "700"], subsets: ['latin'] })
export const BrainTwoPoint0Regular = localFont({ src: '../../public/fonts/AvertaStd-Regular.ttf' })
export const BrainTwoPoint0Black = localFont({ src: '../../public/fonts/AvertaStd-Black.ttf' })
export const BrainTwoPoint0Semibold = localFont({ src: '../../public/fonts/AvertaStd-Semibold.ttf' })
export const BrainTwoPoint0Thin = localFont({ src: '../../public/fonts/AvertaStd-Thin.ttf' })
export const PLAYBACKFont = localFont({ src: '../../public/fonts/playbackfont.ttf' })

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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={BrainTwoPoint0Regular.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
