import { cva, VariantProps } from 'class-variance-authority'

export const sizes = {
  default: 'text-3.5xl max-md:text-2.5xl max-md:tracking-[0.84px] tracking-[0.96px]',
  l: 'text-[42px] tracking-[1.26px] leading-[1.04]',
}

export const colors = {
  default: 'text-inherit',
}

export const titleVariants = cva('font-headings font-bold uppercase', {
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
