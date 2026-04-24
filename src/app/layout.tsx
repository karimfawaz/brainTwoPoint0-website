import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from './sections/navbar'
import Footer from './sections/footer'
import Providers from './providers'
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  organizationSchema,
  websiteSchema,
} from '@/lib/seo'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Karim Fawaz', url: 'https://www.linkedin.com/in/karim-fawaz/' }],
  creator: 'Karim Fawaz',
  publisher: SITE_NAME,
  category: 'technology',
  keywords: [
    'BRAIN 2.0',
    'BrainTwoPoint0',
    'enterprise AI',
    'AI infrastructure',
    'code evaluation',
    'developer tools',
    'product feedback',
    'Gotcha',
    'gotcha-feedback',
    'contextual feedback SDK',
    'PLAYBACK',
    'sports technology',
    'Karim Fawaz',
    'CoPilot',
  ],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: '@braintwopoint0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#101010',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${BrainTwoPoint0Regular.variable} ${BrainTwoPoint0Black.variable} ${BrainTwoPoint0Semibold.variable} ${BrainTwoPoint0Thin.variable} ${PLAYBACKFont.variable} ${BrainTwoPoint0Regular.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
