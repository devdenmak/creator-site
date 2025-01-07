import { Chakra_Petch } from 'next/font/google'
import localFont from 'next/font/local'

export const ChakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const ProximaNova = localFont({
  variable: '--font-proxima-nova',
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
  ],
})
