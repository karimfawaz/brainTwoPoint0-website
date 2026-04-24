import type { MetadataRoute } from 'next'
import { SITE_URL, PRODUCTS } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const productEntries = Object.values(PRODUCTS).map((product) => ({
    url: product.url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...productEntries,
  ]
}
