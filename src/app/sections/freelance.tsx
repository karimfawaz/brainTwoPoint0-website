'use client'

import { Reveal } from './reveal'
import Image from 'next/image'

export default function Freelance() {
  return (
    <section id="freelance" className="relative py-32 px-6 bg-b2-dark/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b2-teal/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Partnerships</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight mb-2">
                CoPilot
              </h2>
              <p className="text-b2-teal text-lg mb-8">Your strategic partner, from day one.</p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-b2-muted leading-relaxed">
                We transcend traditional freelancing by fostering deeper, integrated partnerships.
                We become a conceptual partner in your project - engaging from inception to
                completion, contributing insights, innovation, and strategic alignment with your
                goals.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="border border-white/5 rounded-lg p-10 bg-b2-black/50">
              <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase mb-10 text-center font-[family-name:var(--font-b2-regular)]">
                Partners
              </p>
              <div className="flex items-center justify-center gap-12 sm:gap-16">
                <Image
                  src="/logos/jpl.png"
                  alt="JPL"
                  width={120}
                  height={40}
                  className="h-20 sm:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="w-px h-14 bg-white/[0.08]" />
                <Image
                  src="/partners/KAP-logo-white.svg"
                  alt="Kantar Advisory Partners"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
