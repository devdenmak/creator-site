import { Chakra_Petch } from 'next/font/google'
import localFont from 'next/font/local'

export const ChakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  // display: 'block',
})

export const ProximaNova = localFont({
  variable: '--font-proxima-nova',
  // display: 'block',
  src: [
    {
      path: '../../_shared/fonts/ProximaNova/ProximaNova-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../_shared/fonts/ProximaNova/ProximaNova-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../_shared/fonts/ProximaNova/ProximaNova-BoldIt.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../_shared/fonts/ProximaNova/ProximaNova-Extrabld.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../_shared/fonts/ProximaNova/ProximaNova-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})
