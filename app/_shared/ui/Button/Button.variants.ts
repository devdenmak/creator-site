import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'max-w-[calc(100%-40px)] px-3 py-1 h-9',
}

export const variants = {
  default: 'text-background-secondary hover:text-background-third active:text-background-secondary',
  secondary: 'group text-background-sixth hover:text-background-third active:text-background-sixth',
  third:
    'group text-background-secondary hover:text-background-sixth active:text-background-secondary',
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center relative min-w-0 cursor-pointer mx-5 transition focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30 bg-current',
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
