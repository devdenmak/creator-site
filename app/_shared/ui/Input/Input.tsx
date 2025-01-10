import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Corner } from '@/app/_shared/ui/Corner'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className={cn('relative text-white mx-5 max-w-[calc(100%-40px)]', className)}>
        <Corner className="left-0 -ml-5" />
        <input
          type={type}
          className="max-md:text-center flex h-9 w-full font-headings font-semibold tracking-[0.96px] text-black uppercase bg-white px-2.5 py-1 text-xs transition-colors placeholder:text-black placeholder:transition-opacity placeholder:opacity-100 focus-visible:placeholder:opacity-0 focus-visible:outline-none"
          ref={ref}
          {...props}
        />
        <Corner type="strict" className="right-0 -mr-6 scale-x-[-1] scale-y-[-1] max-md:hidden" />
        <Corner className="right-0 -mr-5 scale-x-[-1] scale-y-[-1] hidden max-md:block" />
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
