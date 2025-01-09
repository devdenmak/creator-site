import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': [
          '1.375rem',
          {
            lineHeight: '1.625rem',
          },
        ],
        '2.5xl': [
          '1.75rem',
          {
            lineHeight: '2rem',
          },
        ],
        '3.5xl': [
          '2rem',
          {
            lineHeight: '2.25rem',
          },
        ],
      },
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
        'background-fourth': 'var(--background-fourth)',
        'background-fifth': 'var(--background-fifth)',
        'background-sixth': 'var(--background-sixth)',
        'background-seventh': 'var(--background-seventh)',
        'background-eight': 'var(--background-eight)',
        'background-ninenth': 'var(--background-ninenth)',

        'foreground-primary': 'var(--foreground-primary)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-third': 'var(--foreground-third)',
        'foreground-fourth': 'var(--foreground-fourth)',
        'foreground-fifth': 'var(--foreground-fifth)',
        'foreground-sixth': 'var(--foreground-sixth)',
        'foreground-seventh': 'var(--foreground-seventh)',
        'foreground-eight': 'var(--foreground-eight)',
        'foreground-nineth': 'var(--foreground-nineth)',
        'foreground-tenth': 'var(--foreground-tenth)',
        'foreground-eleventh': 'var(--foreground-eleventh)',
        'foreground-twelfth': 'var(--foreground-twelfth)',
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
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void
    }) {
      addUtilities({
        '.scale-flip': {
          transform: 'scale(-1, -1)',
        },
      })
    },
  ],
} satisfies Config
