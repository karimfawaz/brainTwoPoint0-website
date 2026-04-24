'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { ExternalLink } from 'lucide-react'
import { Gotcha as GotchaWidget, GotchaScore } from 'gotcha-feedback'

const MODES = ['Feedback', 'Vote', 'Poll', 'NPS', 'Bug reports']

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
              <p className="text-b2-muted leading-relaxed mb-6">
                A developer-first contextual feedback platform. The ~11KB React SDK attaches
                feedback to specific UI elements — not pages — so product teams get element-level
                signal across every release.
              </p>
              <p className="text-b2-muted leading-relaxed mb-8">
                Submissions move through a triage and roadmap pipeline in the dashboard, and
                shipped items auto-publish to a public roadmap with anonymous upvoting.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-8">
                {MODES.map((mode) => (
                  <span
                    key={mode}
                    className="text-b2-teal/80 text-[10px] tracking-[0.25em] uppercase border border-b2-teal/20 rounded-full px-3 py-1.5"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <a href="https://gotcha.cx" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-b2-teal/30 text-b2-teal hover:bg-b2-teal hover:text-b2-black tracking-wider uppercase text-xs gap-2"
                  >
                    Visit gotcha.cx
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
                <a
                  href="https://gotcha.cx/roadmap/gotcha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-white/10 text-b2-muted hover:bg-white/5 hover:text-b2-light tracking-wider uppercase text-xs gap-2"
                  >
                    See the roadmap
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.3}>
              <div className="border border-white/5 rounded-lg p-8 bg-b2-black/50">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-b2-regular)]">
                    npm: gotcha-feedback
                  </p>
                  <p className="text-b2-muted/40 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-b2-regular)]">
                    v1.2.1
                  </p>
                </div>
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
                  Try it — powered by Gotcha
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
