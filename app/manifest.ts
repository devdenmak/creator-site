import { COMPANY_NAME, DEFAULT_DESCRIPTION, THEME_COLOR } from '@/app/_shared/config'
import icon192 from '@/app/icon-192.png'
import icon512 from '@/app/icon-512.png'
import iconMaskable from '@/app/maskable-icon.png'
import screenshotNarrow from '@/app/screenshot-narrow.png'
import screenshotWide from '@/app/screenshot-wide.png'

export default function manifest() {
  return {
    name: COMPANY_NAME,
    short_name: COMPANY_NAME,
    display: 'standalone',
    description: DEFAULT_DESCRIPTION,
    start_url: '/',
    icons: [
      {
        src: icon192.src,
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: icon512.src,
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: iconMaskable.src,
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: screenshotNarrow.src,
        type: 'image/png',
        sizes: '540x785',
        form_factor: 'narrow',
      },
      {
        src: screenshotWide.src,
        type: 'image/png',
        sizes: '1024x528',
        form_factor: 'wide',
      },
    ],
    theme_color: THEME_COLOR,
    background_color: THEME_COLOR,
    scope: '/',
  }
}
