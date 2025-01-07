import type { Metadata, Viewport } from 'next'
import { ChakraPetch, ProximaNova } from '@/app/_shared/fonts'
import {
  AUTHOR,
  COMPANY_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  FRONTEND_URL,
  SITE_NAME,
} from '@/app/_shared/config'

import './_shared/css/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(`${FRONTEND_URL}`),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${DEFAULT_TITLE}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR, url: `${FRONTEND_URL}/humans.txt` }],
  generator: 'Next.js',
  creator: AUTHOR,
  appleWebApp: {
    capable: true,
    title: COMPANY_NAME,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  other: {
    google: 'notranslate',
  },
}

export const viewport: Viewport = {
  themeColor: '#120932',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ProximaNova.variable} ${ChakraPetch.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
