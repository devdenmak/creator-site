import { HTMLAttributes } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { taglineVariants } from './Tagline.variants'

export type ITaglineTags = 'p'

interface ITaglineProps extends HTMLAttributes<HTMLElement>, taglineVariants {
  tag?: ITaglineTags
}

const Tagline = ({ className, tag = 'p', variant, children }: ITaglineProps) => {
  const Comp = tag

  return (
    <Comp className={cn(taglineVariants({ variant, className }))}>
      <svg
        className="fill-current flex-none mr-2.5 mt-1.5 group-[.text-foreground-fourth]:fill-background-third"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="7"
        viewBox="0 0 27 7"
      >
        <path d="M21.9956 7C22.2304 6.99218 22.4539 6.89551 22.6205 6.7289L25.9525 3.39684C26.3147 3.03469 26.3147 2.44753 25.9525 2.08538L24.1388 0.271612C23.9649 0.0977017 23.729 0 23.483 0H5.72711C4.76261 0 3.83762 0.383145 3.15562 1.06515L0.271612 3.94915C-0.0905369 4.3113 -0.0905377 4.89846 0.271611 5.26061L1.51785 6.44799C1.88976 6.80234 2.38376 7 2.89745 7H21.9956Z" />
      </svg>

      <span>{children}</span>
    </Comp>
  )
}

export default Tagline
