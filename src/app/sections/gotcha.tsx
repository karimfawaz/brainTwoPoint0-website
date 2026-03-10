'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { ExternalLink } from 'lucide-react'
import { Gotcha as GotchaWidget, GotchaScore } from 'gotcha-feedback'

export default function Gotcha() {
  const [downloads, setDownloads] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.npmjs.org/downloads/point/2000-01-01:2099-01-01/gotcha-feedback')
      .then((res) => res.json())
      .then((data) => {
        const count = data.downloads
        if (count >= 1000) {
          setDownloads(`${(count / 1000).toFixed(1)}K+`)
        } else {
          setDownloads(`${count}`)
        }
      })
      .catch(() => setDownloads('2K+'))
  }, [])

  return (
    <section id="gotcha" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Product</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight mb-2">
                Gotcha
              </h2>
              <p className="text-b2-teal text-lg mb-8">Turn insights into action.</p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-b2-muted leading-relaxed mb-8">
                A developer-first contextual feedback platform. Gotcha embeds directly into your UI
                with a lightweight React SDK - users provide feedback, vote, answer polls, and
                report bugs without ever leaving your app.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="https://gotcha.cx" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-b2-teal/30 text-b2-teal hover:bg-b2-teal hover:text-b2-black tracking-wider uppercase text-xs gap-2"
                >
                  Visit gotcha.cx
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.3}>
              <div className="border border-white/5 rounded-lg p-8 bg-b2-black/50">
                <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase mb-4 text-center font-[family-name:var(--font-b2-regular)]">
                  npm: gotcha-feedback
                </p>
                <div className="text-center py-2">
                  <p className="text-2xl md:text-3xl font-bold text-b2-teal">
                    {downloads ?? '...'}
                  </p>
                  <p className="text-b2-muted text-xs tracking-wider uppercase mt-1">Downloads</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative border border-white/5 rounded-lg p-8 bg-b2-black/50">
                <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase mb-4 text-center font-[family-name:var(--font-b2-regular)]">
                  Try it - powered by Gotcha
                </p>
                <div className="flex items-center justify-center py-2">
                  <GotchaScore
                    elementId="website-gotcha-section"
                    variant="compact"
                    theme="dark"
                    size="lg"
                    refreshInterval={5000}
                  />
                </div>
                <GotchaWidget
                  elementId="website-gotcha-section"
                  mode="nps"
                  theme="dark"
                  size="md"
                  position="bottom-right"
                  showOnHover={false}
                  npsQuestion="How important is feedback in your development cycle?"
                  npsFollowUp
                  npsFollowUpPlaceholder="Tell us more..."
                  npsLowLabel="Not important"
                  npsHighLabel="Essential"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
