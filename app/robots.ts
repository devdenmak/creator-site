import { FRONTEND_URL } from '@/app/_shared/config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // disallow: ['*.pdf', '/*?', '/storybook', '/sprite'],
      disallow: '/',
    },
    sitemap: `${FRONTEND_URL}/sitemap.xml`,
    host: `${FRONTEND_URL}`,
  }
}
