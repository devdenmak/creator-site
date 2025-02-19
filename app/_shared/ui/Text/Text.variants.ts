import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-sm',
}

export const colors = {
  default: 'text-inherit',
  main: 'group text-foreground-fifth',
  secondary: 'group text-foreground-sixth',
}

export const textVariants = cva('font-main font-bold', {
  variants: {
    size: sizes,
    variant: colors,
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

export type textVariants = VariantProps<typeof textVariants>
