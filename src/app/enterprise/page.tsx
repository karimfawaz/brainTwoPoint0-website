import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '../sections/reveal'
import { ArrowLeft } from 'lucide-react'
import { PRODUCTS, SITE_URL, breadcrumbSchema } from '@/lib/seo'

const title = 'Enterprise AI — Infrastructure for industry leaders'
const description =
  'BRAIN 2.0 partners with Google, Uber AI Solutions, and AWS on high-stakes AI infrastructure, enterprise-scale code evaluation, and quality assurance. Precision, speed, and deep technical expertise.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/enterprise' },
  openGraph: { title, description, url: `${SITE_URL}/enterprise`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

const practices = [
  {
    name: 'AI infrastructure',
    body: 'Designing and operating the systems that sit beneath large-scale AI workloads — inference routing, cost observability, reliability, and platform integration.',
  },
  {
    name: 'Code evaluation at scale',
    body: 'Enterprise-grade review and evaluation programmes, often coordinating distributed specialist networks to rate, label, or grade code at volume.',
  },
  {
    name: 'Quality assurance',
    body: 'Structured QA for AI outputs, developer tooling, and model behaviours. Rubrics, calibration, arbitration, and audit trails.',
  },
]

const clients = [
  { name: 'Google', logo: '/logos/google.svg', h: 'h-10 sm:h-14' },
  { name: 'Uber AI Solutions', logo: '/logos/uber-ai.png', h: 'h-8 sm:h-12' },
  { name: 'AWS', logo: '/logos/aws.png', h: 'h-8 sm:h-12' },
]

export default function EnterprisePage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Enterprise AI', url: PRODUCTS.enterprise.url },
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
            <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4">Enterprise</p>
            <h1 className="text-4xl md:text-6xl font-bold text-b2-light leading-tight mb-10">
              Solving complex problems
              <br />
              with <span className="text-b2-teal">industry leaders</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-b2-muted leading-relaxed text-lg max-w-3xl mb-6">
              BRAIN 2.0 partners with the world&rsquo;s leading technology companies on high-stakes
              AI infrastructure, enterprise-scale code evaluation, and quality assurance — the kind
              of problems that demand precision, speed, and deep technical expertise.
            </p>
            <p className="text-b2-muted leading-relaxed max-w-3xl mb-16">
              Current clients include Google, Uber AI Solutions, and AWS. Engagements range from
              embedded specialist teams to full-programme delivery.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Where we focus
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
            {practices.map((practice, i) => (
              <Reveal key={practice.name} delay={0.1 + i * 0.05}>
                <div className="h-full border border-white/5 rounded-lg p-6 bg-b2-black/50 hover:border-b2-teal/20 transition-colors duration-500">
                  <h3 className="text-b2-light text-lg font-semibold mb-3">{practice.name}</h3>
                  <p className="text-b2-muted text-sm leading-relaxed">{practice.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-b2-light leading-tight mb-8">
              Clients we work with
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-white/5 rounded-lg p-8 sm:p-12 bg-b2-black/50">
              <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
                {clients.map((client, i) => (
                  <div key={client.name} className="flex items-center gap-8 sm:gap-14">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={50}
                      className={`${client.h} w-auto`}
                    />
                    {i < clients.length - 1 && <div className="w-px h-10 sm:h-14 bg-white/[0.08]" />}
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
