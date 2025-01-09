import { cva, VariantProps } from 'class-variance-authority'

export const colors = {
  default: 'text-inherit',
  main: 'text-foreground-fourth group',
}

export const taglineVariants = cva('text-sm font-bold tracking-[0.7px] flex', {
  variants: {
    variant: colors,
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type taglineVariants = VariantProps<typeof taglineVariants>
