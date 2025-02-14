export const FRONTEND_URL = process.env.NEXT_PUBLIC_COOLIFY_URL || 'http://localhost:3000'

export const DEFAULT_TITLE = 'Creator Byte'
export const DEFAULT_DESCRIPTION = 'Creator Byte'
export const SITE_NAME = FRONTEND_URL
export const COMPANY_NAME = 'Creator Byte'
export const AUTHOR = 'Ragebite'
export const THEME_COLOR = '#120932'

export const RAGEBITE_LINK = 'https://www.ragebite.com'
export const GETTING_STARTED_LINK = 'https://www.ragebite.com'
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
    href: 'https://www.ragebite.com',
    external: true,
  },
] as const

export const SOCIALS = [
  {
    name: 'Linkedin',
    href: 'https://www.ragebite.com',
  },
  {
    name: 'X (Twitter)',
    href: 'https://www.ragebite.com',
  },
  {
    name: 'Discord',
    href: 'https://www.ragebite.com',
  },
] as const

export const CONVERSATIONS = [
  {
    name: 'Privacy Policy',
    href: '/',
  },
  {
    name: 'Terms of Service',
    href: '/',
  },
] as const
