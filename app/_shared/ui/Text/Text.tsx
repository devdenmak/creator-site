import { HTMLAttributes } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { titleVariants } from './Text.variants'

export type ITextTags = 'p'

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement>, titleVariants {
  tag?: ITextTags
}

const Title = ({ className, tag = 'p', size, variant, children }: ITitleProps) => {
  const Comp = tag

  return <Comp className={cn(titleVariants({ size, variant, className }))}>{children}</Comp>
}

export default Title
