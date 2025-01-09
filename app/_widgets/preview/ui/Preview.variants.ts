import { cva, VariantProps } from 'class-variance-authority'

export const variants = {
  default: 'pb-[40%] bg-right bg-background-fourth max-2xl:pb-[53%] max-2xl:bg-bottom',
  secondary: 'bg-background-first bg-bottom pb-[37%] max-2xl:pb-[42%] max-lg:pb-[46%]',
}

export const previewVariants = cva(
  'pt-32 bg-no-repeat bg-contain max-lg:pt-16 max-md:pt-10 relative overflow-hidden',
  {
    variants: {
      variant: variants,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type previewVariants = VariantProps<typeof previewVariants>
