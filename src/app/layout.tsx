import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from './sections/navbar'
import Footer from './sections/footer'
import Providers from './providers'

export const BrainTwoPoint0Regular = localFont({
  src: '../../public/fonts/AvertaStd-Regular.ttf',
  variable: '--font-b2-regular',
})
export const BrainTwoPoint0Black = localFont({
  src: '../../public/fonts/AvertaStd-Black.ttf',
  variable: '--font-b2-black',
})
export const BrainTwoPoint0Semibold = localFont({
  src: '../../public/fonts/AvertaStd-Semibold.ttf',
  variable: '--font-b2-semibold',
})
export const BrainTwoPoint0Thin = localFont({
  src: '../../public/fonts/AvertaStd-Thin.ttf',
  variable: '--font-b2-thin',
})
export const PLAYBACKFont = localFont({
  src: '../../public/fonts/playbackfont.ttf',
  variable: '--font-playback',
})

export const metadata: Metadata = {
  title: 'BRAIN 2.0 — Driven by Values, Powered by Intellect',
  description:
    'BRAIN 2.0 is a multifaceted solutions innovator building enterprise AI infrastructure, developer tools, sports technology, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${BrainTwoPoint0Regular.variable} ${BrainTwoPoint0Black.variable} ${BrainTwoPoint0Semibold.variable} ${BrainTwoPoint0Thin.variable} ${PLAYBACKFont.variable} ${BrainTwoPoint0Regular.className}`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
