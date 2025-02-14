import type { NextConfig } from 'next'
import svg from '@neodx/svg/webpack'

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_COOLIFY_URL: process.env.COOLIFY_URL || '',
  },
  webpack: (config, options) => {
    const { isServer } = options

    config.resolve.alias['@'] = __dirname

    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'app/_shared/icons',
          output: 'public/sprites',
          group: true,
          fileName: '{name}.{hash:8}.svg',

          metadata: {
            path: 'app/_shared/icons/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true,
            },
          },

          resetColors: {
            replaceUnknown: 'currentColor',
            replace: [
              {
                from: ['white'],
                to: '#fff',
              },
            ],
          },
        }),
      )
    }

    return config
  },
}

export default nextConfig
