export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL ?? ''

export const DEFAULT_TITLE = 'Creator Byte'
export const DEFAULT_DESCRIPTION = 'Creator Byte'
export const SITE_NAME = FRONTEND_URL
export const COMPANY_NAME = 'Creator Byte'
export const AUTHOR = 'Ragebite'
export const THEME_COLOR = '#120932'

export const RAGEBITE_LINK = 'https://www.ragebite.com'
export const LOGO_LINK = '/'

// Maximum of 5 points. If you need to add more, make sure the layout remains intact.

export const NAVIGATION = [
  {
    name: 'Features',
    href: '/',
  },
  {
    name: 'Benefits',
    href: '/',
  },
  {
    name: 'Customers',
    href: '/',
  },
  {
    name: 'Pricing',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/',
  },
] as const

export const SOCIALS = [
  {
    name: 'Linkedin',
    href: '/',
  },
  {
    name: 'X (Twitter)',
    href: '/',
  },
  {
    name: 'Discord',
    href: '/',
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
