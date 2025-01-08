import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1728px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '35px',
          sm: '35px',
          md: '50px',
          lg: '50px',
          xl: '180px',
          '2xl': '200px',
        },
      },
      maxWidth: {},
      fontFamily: {
        headings: 'var(--font-chakra-petch, Chakra Petch, Segoe UI, Roboto, Arial, sans-serif)',
        main: 'var(--font-proxima-nova, Proxima Nova, Segoe UI, Roboto, Arial, sans-serif)',
      },
      colors: {
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-third': 'var(--background-third)',

        'foreground-primary': 'var(--foreground-primary)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-third': 'var(--foreground-third)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
