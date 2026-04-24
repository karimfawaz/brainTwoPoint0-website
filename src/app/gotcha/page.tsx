import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Reveal } from '../sections/reveal'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { PRODUCTS, SITE_URL, gotchaSoftwareSchema, breadcrumbSchema } from '@/lib/seo'

const title = 'Gotcha — Contextual feedback SDK for React'
const description =
  'Gotcha is a developer-first contextual feedback platform. A ~11KB React SDK (npm: gotcha-feedback) attaches five modes of feedback — rating, vote, poll, NPS, and bug reports — to specific UI elements. FREE plan includes 500 responses/month.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/gotcha' },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/gotcha`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
}

const modes = [
  {
    name: 'Feedback',
    body: 'Five-star rating with an optional textarea. Star and text are independently toggleable, so teams can collect structured signal with or without qualitative context.',
  },
  {
    name: 'Vote',
    body: 'Thumbs up or down with custom labels. Perfect for shipping decisions ("Should we build this?") and quick directional reads.',
  },
  {
    name: 'Poll',
    body: 'Two to six options, single- or multi-select. Replaces the "vague survey link in Slack" pattern with an inline component tied to the exact UI that prompted the question.',
  },
  {
    name: 'NPS',
    body: '0-10 promoter scale with an optional follow-up textarea. Comes with standard low/high labels out of the box, or define your own.',
  },
  {
    name: 'Bug reports',
    body: 'Toggle on feedback mode. Users flag their submission as a bug, optionally attach a screenshot, and the dashboard surfaces bugs separately from feature feedback.',
  },
]

const pricing = [
  {
    name: 'FREE',
    price: '$0',
    cadence: 'forever',
    features: [
      '500 responses / month',
      'One project',
      'All five modes',
      'Public roadmap with upvoting',
    ],
  },
  {
    name: 'PRO',
    price: '$29',
    cadence: 'per month',
    features: [
      'Unlimited responses',
      'Bug-tracking lifecycle',
      'Advanced segmentation',
      'AI insights',
    ],
    highlight: true,
  },
]

export default function GotchaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Gotcha', url: PRODUCTS.gotcha.url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gotchaSoftwareSchema()) }}
      />
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
            <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Product</p>
            <h1 className="text-4xl md:text-6xl font-bold text-b2-light leading-tight mb-3">
              Gotcha
            </h1>
            <p className="text-b2-teal text-lg md:text-xl mb-10">{PRODUCTS.gotcha.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-b2-muted leading-relaxed text-lg max-w-3xl mb-6">
              A developer-first contextual feedback platform. The React SDK —{' '}
              <code className="text-b2-teal">gotcha-feedback</code> on npm, ~11KB gzipped with zero
              runtime dependencies — attaches feedback to specific UI elements, so product teams
              get element-level signal across every release instead of page-level noise.
            </p>
            <p className="text-b2-muted leading-relaxed max-w-3xl mb-10">
              Every submission moves through a triage pipeline in the dashboard, and shipped items
              auto-publish to a public roadmap with anonymous upvoting. Companies dogfood their own
              roadmap at <span className="text-b2-teal">gotcha.cx/roadmap/&lt;slug&gt;</span>.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-16">
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
              <a
                href="https://www.npmjs.com/package/gotcha-feedback"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white/10 text-b2-muted hover:bg-white/5 hover:text-b2-light tracking-wider uppercase text-xs gap-2"
                >
                  npm package
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            </div>
          </Reveal>

          {/* Modes */}
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Five feedback modes, one component.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            {modes.map((mode, i) => (
              <Reveal key={mode.name} delay={0.1 + i * 0.05}>
                <div className="h-full border border-white/5 rounded-lg p-6 bg-b2-black/50 hover:border-b2-teal/20 transition-colors duration-500">
                  <h3 className="text-b2-light text-lg font-semibold mb-3">{mode.name}</h3>
                  <p className="text-b2-muted text-sm leading-relaxed">{mode.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Pricing */}
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Pricing
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            {pricing.map((plan, i) => (
              <Reveal key={plan.name} delay={0.1 + i * 0.1}>
                <div
                  className={`h-full border rounded-lg p-8 bg-b2-black/50 ${
                    plan.highlight ? 'border-b2-teal/40' : 'border-white/5'
                  }`}
                >
                  <p className="text-b2-teal/80 text-[10px] tracking-[0.3em] uppercase mb-4">
                    {plan.name}
                  </p>
                  <p className="text-b2-light text-4xl font-bold mb-1">{plan.price}</p>
                  <p className="text-b2-muted text-sm mb-6">{plan.cadence}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-b2-muted text-sm flex items-start gap-2 before:content-['·'] before:text-b2-teal before:text-lg before:leading-none"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Lifecycle */}
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              From signal to shipped
            </h2>
            <div className="border border-white/5 rounded-lg p-8 bg-b2-black/50">
              <p className="text-b2-muted leading-relaxed mb-4">
                Every Gotcha response moves through two pipelines — one for triage, one for the
                public roadmap.
              </p>
              <p className="text-b2-teal text-sm tracking-wider uppercase mb-2">Triage</p>
              <p className="text-b2-muted text-sm mb-6">
                NEW → REVIEWED → ADDRESSED → ARCHIVED
              </p>
              <p className="text-b2-teal text-sm tracking-wider uppercase mb-2">
                Roadmap-visible
              </p>
              <p className="text-b2-muted text-sm">
                UNDER_REVIEW → PLANNED → IN_PROGRESS → SHIPPED → DECLINED. When an item transitions
                to SHIPPED, the original submitter (if an email was captured) gets an automatic
                notify-back — closing the loop that most feedback tools leave open.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
