import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/board/create`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
