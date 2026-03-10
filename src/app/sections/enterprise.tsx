'use client'

import { Reveal } from './reveal'
import Image from 'next/image'

export default function Enterprise() {
  return (
    <section id="enterprise" className="relative py-32 px-6 bg-b2-dark/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b2-teal/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Enterprise</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight mb-8">
                Solving complex problems
                <br />
                with <span className="text-b2-teal">industry leaders</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-b2-muted leading-relaxed">
                We partner with the world&rsquo;s leading technology companies on high-stakes AI
                infrastructure, enterprise-scale code evaluation, and quality assurance - tackling
                the kind of problems that demand precision, speed, and deep technical expertise.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="border border-white/5 rounded-lg p-6 sm:p-10 bg-b2-black/50">
              <p className="text-b2-muted/60 text-xs tracking-[0.3em] uppercase mb-6 sm:mb-10 text-center font-[family-name:var(--font-b2-regular)]">
                Clients we work with
              </p>
              <div className="flex items-center justify-center gap-5 sm:gap-14">
                <Image
                  src="/logos/google.svg"
                  alt="Google"
                  width={120}
                  height={40}
                  className="h-9 sm:h-14 w-auto"
                />
                <div className="w-px h-8 sm:h-14 bg-white/[0.08]" />
                <Image
                  src="/logos/uber-ai.png"
                  alt="Uber AI Solutions"
                  width={200}
                  height={50}
                  className="h-8 sm:h-12 w-auto"
                />
                <div className="w-px h-8 sm:h-14 bg-white/[0.08]" />
                <Image
                  src="/logos/aws.png"
                  alt="AWS"
                  width={120}
                  height={40}
                  className="h-8 sm:h-12 w-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
