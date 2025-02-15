export const FRONTEND_URL = process.env.NEXT_PUBLIC_COOLIFY_URL || 'http://localhost:3000'
export const DISALLOW_ROBOTS = process.env.NEXT_PUBLIC_DISALLOW_ROBOTS === 'true'

export const DEFAULT_TITLE = 'Creator Site'
export const DEFAULT_DESCRIPTION = 'Creator Site'
export const SITE_NAME = FRONTEND_URL
export const COMPANY_NAME = 'Creator Site'
export const AUTHOR = 'Maxsimov.pro'
export const THEME_COLOR = '#120932'

export const SHARED_LINK = 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share'
export const GETTING_STARTED_LINK = 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share'
export const LOGO_LINK = '/'

// Maximum of 5 points. If you need to add more, make sure the layout remains intact.

export const NAVIGATION = [
  {
    name: 'Features',
    href: '#features',
    external: false,
  },
  {
    name: 'Benefits',
    href: '#benefits',
    external: false,
  },
  {
    name: 'Customers',
    href: '#customers',
    external: false,
  },
  {
    name: 'Pricing',
    href: '#pricing',
    external: false,
  },
  {
    name: 'Blog',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
    external: true,
  },
] as const

export const SOCIALS = [
  {
    name: 'Linkedin',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
  },
  {
    name: 'X (Twitter)',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
  },
  {
    name: 'Discord',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
  },
] as const

export const CONVERSATIONS = [
  {
    name: 'Privacy Policy',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
  },
  {
    name: 'Terms of Service',
    href: 'https://www.upwork.com/fl/~017147e0aa8f7d09bc?mp_source=share',
  },
] as const
