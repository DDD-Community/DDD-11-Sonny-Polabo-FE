import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://polabo.site`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://polabo.site/board/create`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
