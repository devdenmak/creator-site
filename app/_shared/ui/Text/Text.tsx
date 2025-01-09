import { HTMLAttributes } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { textVariants } from './Text.variants'

export type ITextTags = 'p'

interface ITextProps extends HTMLAttributes<HTMLElement>, textVariants {
  tag?: ITextTags
}

const Title = ({ className, tag = 'p', size, variant, children }: ITextProps) => {
  const Comp = tag

  return <Comp className={cn(textVariants({ size, variant, className }))}>{children}</Comp>
}

export default Title
