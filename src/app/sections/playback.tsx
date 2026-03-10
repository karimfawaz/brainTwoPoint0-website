'use client'

import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Playback() {
  return (
    <section id="playback" className="relative py-32 px-6 bg-b2-dark/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b2-teal/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">
            Sports Technology
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight mb-2">
                PLAYBACK
              </h2>
              <p className="text-b2-teal text-lg mb-8">You PLAY, we BACK.</p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-b2-muted leading-relaxed mb-8">
                A solutions aggregator for the sports ecosystem - serving players, clubs, venues,
                academies, and scouts. PLAYBACK reduces financial and operational burdens through
                partnerships, proprietary software, and AI-powered tools.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="https://www.playbacksports.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-b2-teal/30 text-b2-teal hover:bg-b2-teal hover:text-b2-black tracking-wider uppercase text-xs gap-2"
                >
                  Visit playbacksports.ai
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            </Reveal>
          </div>

          {/* Awards */}
          <Reveal delay={0.4}>
            <div className="border border-white/5 rounded-lg p-8 bg-b2-black/50">
              <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase mb-4 text-center font-[family-name:var(--font-b2-regular)]">
                Multi-Award Winning
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="w-28 h-28 flex items-center justify-center">
                  <Image
                    src="/logos/gbea.svg"
                    alt="Global Business Excellence Awards"
                    width={80}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-500 w-full h-full object-contain"
                  />
                </div>
                <div className="w-28 h-28 flex items-center justify-center">
                  <Image
                    src="/logos/startup-awards.png"
                    alt="UK StartUp Awards"
                    width={80}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-500 w-full h-full object-contain"
                  />
                </div>
                <div className="w-28 h-28 flex items-center justify-center">
                  <Image
                    src="/logos/psg-lab.png"
                    alt="PSG Lab"
                    width={80}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-500 w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-b2-muted/40 text-xs tracking-[0.2em] uppercase mt-3 text-center font-[family-name:var(--font-b2-regular)]">
                +7 more
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
