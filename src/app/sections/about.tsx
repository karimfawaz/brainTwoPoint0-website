'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Reveal, RevealStagger, RevealItem } from './reveal'
import Image from 'next/image'

const values = [
  {
    title: 'The Red Car Theory',
    description:
      'Opportunities go unnoticed unless you foster an environment where finding them is rewarded. We preserve a constant stream of solutions in a problem-solving ecosystem where ideas are shared, debated, and delivered.',
  },
  {
    title: 'Speed & Competition',
    description:
      'As soon as we find a gap in the market, we assume a competitor has the same idea. We move with urgency - quick market entry whilst ensuring our standards are met.',
  },
  {
    title: 'No Selling',
    description:
      'We believe selling is the biggest blocker to growth. Instead of convincing, we promote open discussions to truly understand how BRAIN 2.0 fits into your organisation. We provide, not sell.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
        </Reveal>

        {/* Heading + body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-b2-light leading-tight">
                From software firm
                <br />
                to solutions <span className="text-b2-teal">innovator</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="mt-auto pt-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <Image
                    src="/team/KarimFawaz.png"
                    alt="Karim Fawaz"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-b2-light font-semibold text-sm">Karim Fawaz</p>
                  <p className="text-b2-teal text-xs">Founder & CEO</p>
                  <a
                    href="https://www.linkedin.com/in/karim-fawaz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-b2-muted hover:text-b2-teal transition-colors text-xs tracking-wider uppercase mt-1 inline-block"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex items-center">
            <div className="space-y-6 text-b2-muted leading-relaxed">
              <p>
                Established in 2017 as a pioneering software development firm, BRAIN 2.0 has evolved
                into a multifaceted solutions innovator. We engineer a spectrum of revolutionary
                solutions - from enterprise AI infrastructure to developer tools and sports
                technology.
              </p>
              <p>
                We are dedicated to elevating any field we touch to the next level - true to our
                promise of &ldquo;2.0-ing&rdquo; every venture.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values grid */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <RevealItem key={value.title}>
              <Card className="bg-b2-dark/50 border-white/5 hover:border-b2-teal/20 transition-colors duration-500 h-full">
                <CardContent className="p-8">
                  <h3 className="text-b2-light text-lg font-semibold mb-4">{value.title}</h3>
                  <p className="text-b2-muted text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
