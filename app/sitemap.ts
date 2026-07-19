import type { MetadataRoute } from 'next'

const siteUrl = 'https://suatdurkaya.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/stack`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/learning`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
