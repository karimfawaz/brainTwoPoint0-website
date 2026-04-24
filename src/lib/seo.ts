export const SITE_URL = 'https://braintwopoint0.com'
export const SITE_NAME = 'BRAIN 2.0'
export const SITE_TAGLINE = 'Driven by Values, Powered by Intellect'
export const SITE_DESCRIPTION =
  'BRAIN 2.0 is a multifaceted solutions innovator engineering enterprise AI infrastructure, developer tools, sports technology, and strategic partnerships since 2017.'

export type ProductSlug = 'gotcha' | 'playback' | 'enterprise' | 'copilot'

export const PRODUCTS: Record<
  ProductSlug,
  {
    name: string
    tagline: string
    description: string
    url: string
    external?: string
  }
> = {
  gotcha: {
    name: 'Gotcha',
    tagline: 'Turn insights into action.',
    description:
      'A developer-first contextual feedback platform. Gotcha attaches feedback to specific UI elements with an ~11KB React SDK. Five modes (feedback, vote, poll, NPS, bug reports), a triage pipeline, and a public roadmap.',
    url: `${SITE_URL}/gotcha`,
    external: 'https://gotcha.cx',
  },
  playback: {
    name: 'PLAYBACK',
    tagline: 'You PLAY, we BACK.',
    description:
      'A solutions aggregator for the sports ecosystem — serving players, clubs, venues, academies, and scouts. PLAYBACK reduces financial and operational burdens through partnerships, proprietary software, and AI-powered tools.',
    url: `${SITE_URL}/playback`,
    external: 'https://www.playbacksports.ai',
  },
  enterprise: {
    name: 'Enterprise AI',
    tagline: 'Solving complex problems with industry leaders.',
    description:
      'BRAIN 2.0 partners with the world’s leading technology companies on high-stakes AI infrastructure, enterprise-scale code evaluation, and quality assurance. Clients include Google, Uber AI Solutions, and AWS.',
    url: `${SITE_URL}/enterprise`,
  },
  copilot: {
    name: 'CoPilot',
    tagline: 'Your strategic partner, from day one.',
    description:
      'CoPilot transcends traditional freelancing by fostering deeper, integrated partnerships. BRAIN 2.0 becomes a conceptual partner in your project — engaging from inception to completion with insights, innovation, and strategic alignment.',
    url: `${SITE_URL}/copilot`,
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'BrainTwoPoint0',
  url: SITE_URL,
  logo: `${SITE_URL}/B2.0-textlogo.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  foundingDate: '2017',
  email: 'info@braintwopoint0.com',
  sameAs: [
    'https://www.linkedin.com/company/98897834',
    'https://www.instagram.com/braintwopoint0/',
  ],
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#karim-fawaz`,
    name: 'Karim Fawaz',
    jobTitle: 'Founder & CEO',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: ['https://www.linkedin.com/in/karim-fawaz/'],
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Large Language Models',
    'Developer Tools',
    'Product Feedback',
    'Sports Technology',
    'Enterprise Software',
    'AI Infrastructure',
    'Code Evaluation',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#gotcha`,
        name: 'Gotcha',
        description: PRODUCTS.gotcha.description,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        url: PRODUCTS.gotcha.external,
        offers: [
          {
            '@type': 'Offer',
            name: 'FREE',
            price: '0',
            priceCurrency: 'USD',
            description: '500 responses per month, 1 project, all five feedback modes.',
          },
          {
            '@type': 'Offer',
            name: 'PRO',
            price: '29',
            priceCurrency: 'USD',
            description: 'Unlimited responses, bug tracking, advanced segmentation, AI insights.',
          },
        ],
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/#playback`,
        name: 'PLAYBACK',
        description: PRODUCTS.playback.description,
        url: PRODUCTS.playback.external,
        serviceType: 'Sports Technology Platform',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/#enterprise`,
        name: 'Enterprise AI',
        description: PRODUCTS.enterprise.description,
        serviceType: 'AI Infrastructure & Code Evaluation',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/#copilot`,
        name: 'CoPilot',
        description: PRODUCTS.copilot.description,
        serviceType: 'Strategic Product Partnership',
      },
    },
  ],
} as const

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
} as const

export function gotchaSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Gotcha',
    alternateName: 'gotcha-feedback',
    description: PRODUCTS.gotcha.description,
    url: PRODUCTS.gotcha.external,
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'Feedback SDK',
    operatingSystem: 'Web',
    softwareVersion: '1.2.1',
    author: { '@id': `${SITE_URL}/#organization` },
    offers: [
      {
        '@type': 'Offer',
        name: 'FREE',
        price: '0',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'PRO',
        price: '29',
        priceCurrency: 'USD',
      },
    ],
  } as const
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  } as const
}
