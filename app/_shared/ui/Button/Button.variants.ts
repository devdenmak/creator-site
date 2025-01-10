import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'max-w-[calc(100%-40px)] px-3 py-1 h-9',
}

export const variants = {
  default: 'text-background-secondary hover:text-background-third active:text-background-secondary',
  primary: 'text-background-third hover:text-background-secondary active:text-background-third',
  secondary:
    'text-background-sixth hover:text-background-third active:text-background-sixth [&>span]:text-white [&>span]:hover:text-black [&>span]:active:text-white',
  third:
    'text-background-secondary hover:text-background-sixth active:text-background-secondary [&>span]:hover:text-white [&>span]:active:text-black',
  fourth:
    'text-background-third hover:text-background-sixth active:text-background-third [&>span]:hover:text-white [&>span]:active:text-black',
  fifth:
    'text-background-nineth hover:opacity-90 active:opacity-100 [&>span]:text-foreground-eight',
}

export const buttonVariants = cva(
  'button inline-flex items-center justify-center relative min-w-0 cursor-pointer mx-5 transition focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30 bg-current',
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type buttonVariants = VariantProps<typeof buttonVariants>
