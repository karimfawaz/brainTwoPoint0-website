import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '../sections/reveal'
import { ArrowLeft } from 'lucide-react'
import { PRODUCTS, SITE_URL, breadcrumbSchema } from '@/lib/seo'

const title = 'CoPilot — Strategic product partnership'
const description =
  'CoPilot replaces traditional freelancing with integrated, long-term partnership. BRAIN 2.0 engages from project inception to completion, contributing insights, innovation, and strategic alignment. Current partners: JPL, Kantar Advisory Partners.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/copilot' },
  openGraph: { title, description, url: `${SITE_URL}/copilot`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

const differences = [
  {
    freelance: 'Hired for a discrete deliverable',
    copilot: 'Hired as a conceptual partner across the full lifecycle of the project',
  },
  {
    freelance: 'Scope is handed down, rarely challenged',
    copilot: 'Scope is pressure-tested; we push back when the brief will produce the wrong answer',
  },
  {
    freelance: 'Accountable for a task',
    copilot: 'Accountable for the outcome',
  },
  {
    freelance: 'Walks away when the hours end',
    copilot: 'Stays engaged through launch, iteration, and whatever comes next',
  },
]

const partners = [
  { name: 'JPL', logo: '/logos/jpl.png', h: 'h-20 sm:h-24' },
  { name: 'Kantar Advisory Partners', logo: '/partners/KAP-logo-white.svg', h: 'h-8 sm:h-10' },
]

export default function CopilotPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'CoPilot', url: PRODUCTS.copilot.url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main className="pt-28 md:pt-36 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-b2-muted hover:text-b2-teal transition-colors text-xs tracking-widest uppercase mb-8"
            >
              <ArrowLeft className="w-3 h-3" />
              BRAIN 2.0
            </Link>
            <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Partnerships</p>
            <h1 className="text-4xl md:text-6xl font-bold text-b2-light leading-tight mb-3">
              CoPilot
            </h1>
            <p className="text-b2-teal text-lg md:text-xl mb-10">{PRODUCTS.copilot.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-b2-muted leading-relaxed text-lg max-w-3xl mb-6">
              CoPilot transcends traditional freelancing by fostering deeper, integrated
              partnerships. We become a conceptual partner in your project — engaging from
              inception to completion, contributing insights, innovation, and strategic alignment
              with your goals.
            </p>
            <p className="text-b2-muted leading-relaxed max-w-3xl mb-16">
              The difference is accountability. A freelancer ships the task you asked for. A
              CoPilot partner owns the outcome alongside you.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              CoPilot vs. traditional freelancing
            </h2>
          </Reveal>
          <div className="space-y-3 mb-24">
            {differences.map((d, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="border border-white/5 rounded-lg p-5 bg-b2-black/30">
                    <p className="text-b2-muted/50 text-[10px] tracking-[0.3em] uppercase mb-2">
                      Freelance
                    </p>
                    <p className="text-b2-muted/80 text-sm">{d.freelance}</p>
                  </div>
                  <div className="border border-b2-teal/20 rounded-lg p-5 bg-b2-teal/[0.03]">
                    <p className="text-b2-teal/80 text-[10px] tracking-[0.3em] uppercase mb-2">
                      CoPilot
                    </p>
                    <p className="text-b2-light text-sm">{d.copilot}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Partners
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-white/5 rounded-lg p-10 bg-b2-black/50">
              <div className="flex items-center justify-center gap-12 sm:gap-16 flex-wrap">
                {partners.map((partner, i) => (
                  <div key={partner.name} className="flex items-center gap-12 sm:gap-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className={`${partner.h} w-auto opacity-80 hover:opacity-100 transition-opacity duration-500`}
                    />
                    {i < partners.length - 1 && (
                      <div className="w-px h-14 bg-white/[0.08]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
