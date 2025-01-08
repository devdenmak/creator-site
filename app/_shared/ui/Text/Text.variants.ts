import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-sm',
}

export const colors = {
  default: 'text-inherit',
}

export const titleVariants = cva('font-main font-bold', {
  variants: {
    size: sizes,
    variant: colors,
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

export type titleVariants = VariantProps<typeof titleVariants>
