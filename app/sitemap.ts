import { FRONTEND_URL } from '@/app/_shared/config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: FRONTEND_URL,
      lastModified: new Date(),
    },
  ]
}
