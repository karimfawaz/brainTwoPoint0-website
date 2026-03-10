'use client'

import { Reveal, RevealStagger, RevealItem } from './reveal'

const stats = [
  { value: '250K+', label: 'Follower Growth' },
  { value: '700%', label: 'Engagement Increase' },
  { value: '9', label: 'Platforms Managed' },
]

export default function Content() {
  return (
    <section id="content" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">
            Content Management
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight mb-2">
            CONTENT<span className="font-thin">2.0</span>
          </h2>
          <p className="text-b2-teal text-lg mb-8">Innovating Influence, Inspiring Growth.</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-b2-muted leading-relaxed max-w-2xl mb-16">
            We transform your platform into a thriving business. Leveraging analytical insights, we
            treat content as a business - optimising operations to drive growth and help you reach
            your target audience.
          </p>
        </Reveal>

        {/* Stats */}
        <RevealStagger className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="text-center py-5 md:py-8 border border-white/5 rounded-lg bg-b2-dark/30">
                <p className="text-xl md:text-4xl font-bold text-b2-teal mb-1 md:mb-2">
                  {stat.value}
                </p>
                <p className="text-b2-muted text-[10px] md:text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
