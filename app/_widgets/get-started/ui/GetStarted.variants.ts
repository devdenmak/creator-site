import { cva, VariantProps } from 'class-variance-authority'

export const variants = {
  default: 'text-white',
  secondary: '',
}

export const getStartedVariants = cva(
  'rounded-2xl overflow-hidden bg-no-repeat bg-cover p-12 max-md:rounded-none max-md:px-8',
  {
    variants: {
      variant: variants,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type getStartedVariants = VariantProps<typeof getStartedVariants>
