import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-3.5xl max-md:text-2.5xl max-md:tracking-[0.84px]',
}

export const colors = {
  default: 'text-inherit',
}

export const titleVariants = cva('font-headings tracking-[0.96px] font-bold uppercase', {
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
