import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Reveal } from '../sections/reveal'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { PRODUCTS, SITE_URL, breadcrumbSchema } from '@/lib/seo'

const title = 'PLAYBACK — Sports ecosystem solutions aggregator'
const description =
  'PLAYBACK is a multi-award-winning solutions aggregator for the sports ecosystem. We serve players, clubs, venues, academies, and scouts with partnerships, proprietary software, and AI-powered tools.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/playback' },
  openGraph: { title, description, url: `${SITE_URL}/playback`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

const audiences = [
  {
    name: 'Players',
    body: 'Tools that remove friction from the day-to-day — finding pitches, tracking development, building visibility.',
  },
  {
    name: 'Clubs',
    body: 'Operational software that consolidates admin, membership, communications, and coaching into a single stack.',
  },
  {
    name: 'Venues',
    body: 'Booking, scheduling, and yield-management tooling via partnerships and aggregation across the market.',
  },
  {
    name: 'Academies',
    body: 'Athlete development programmes, curriculum management, and performance tracking.',
  },
  {
    name: 'Scouts',
    body: 'Data, video, and scouting infrastructure to help identify and evaluate talent at scale.',
  },
]

const awards = [
  { name: 'Global Business Excellence Awards', logo: '/logos/gbea.svg' },
  { name: 'UK StartUp Awards', logo: '/logos/startup-awards.png' },
  { name: 'PSG Lab', logo: '/logos/psg-lab.png' },
]

export default function PlaybackPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'PLAYBACK', url: PRODUCTS.playback.url },
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
            <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">
              Sports Technology
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-b2-light leading-tight mb-3">
              PLAYBACK
            </h1>
            <p className="text-b2-teal text-lg md:text-xl mb-10">{PRODUCTS.playback.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-b2-muted leading-relaxed text-lg max-w-3xl mb-6">
              PLAYBACK is a solutions aggregator for the sports ecosystem. We reduce financial and
              operational burdens across players, clubs, venues, academies, and scouts through
              partnerships, proprietary software, and AI-powered tools.
            </p>
            <p className="text-b2-muted leading-relaxed max-w-3xl mb-10">
              Unlike single-feature point solutions, PLAYBACK aggregates the infrastructure
              grassroots and semi-professional sports organisations need — saving them from
              stitching together half a dozen separate vendors.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-24">
              <a href="https://www.playbacksports.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-b2-teal/30 text-b2-teal hover:bg-b2-teal hover:text-b2-black tracking-wider uppercase text-xs gap-2"
                >
                  Visit playbacksports.ai
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Who PLAYBACK serves
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            {audiences.map((audience, i) => (
              <Reveal key={audience.name} delay={0.1 + i * 0.05}>
                <div className="h-full border border-white/5 rounded-lg p-6 bg-b2-black/50 hover:border-b2-teal/20 transition-colors duration-500">
                  <h3 className="text-b2-light text-lg font-semibold mb-3">{audience.name}</h3>
                  <p className="text-b2-muted text-sm leading-relaxed">{audience.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Multi-award-winning
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-white/5 rounded-lg p-8 bg-b2-black/50">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {awards.map((award) => (
                  <div key={award.name} className="w-28 h-28 flex items-center justify-center">
                    <Image
                      src={award.logo}
                      alt={award.name}
                      width={80}
                      height={80}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-500 w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-b2-muted/40 text-xs tracking-[0.2em] uppercase mt-6 text-center">
                + 7 more industry awards
              </p>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
