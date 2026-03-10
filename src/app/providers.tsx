'use client'

import { GotchaProvider } from 'gotcha-feedback'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GotchaProvider
      apiKey={process.env.NEXT_PUBLIC_GOTCHA_API_KEY!}
      baseUrl="https://gotcha.cx/api/v1"
    >
      {children}
    </GotchaProvider>
  )
}
