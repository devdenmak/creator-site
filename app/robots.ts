import { DISALLOW_ROBOTS, FRONTEND_URL } from '@/app/_shared/config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: DISALLOW_ROBOTS ? '/' : '/*?',
    },
    sitemap: `${FRONTEND_URL}/sitemap.xml`,
    host: `${FRONTEND_URL}`,
  }
}
