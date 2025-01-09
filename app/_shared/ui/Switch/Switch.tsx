'use client'

import { Root, Thumb } from '@radix-ui/react-switch'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import { cn } from '@/app/_shared/lib/tailwindUtils'

type ISwitchProps = ComponentPropsWithoutRef<typeof Root> & {
  variant?: 'main' | 'secondary'
}

const Switch = forwardRef<ComponentRef<typeof Root>, ISwitchProps>(
  ({ variant = 'main', ...props }, ref) => (
    <Root
      className={cn(
        'switch border-2 border-transparent rounded-full items-center cursor-pointer w-[40px] h-[22px] inline-flex bg-black',
        `switch--variant-${variant}`,
      )}
      {...props}
      ref={ref}
    >
      <Thumb
        aria-label="Switch"
        className={cn(
          'switch__thumb transition-all rounded-full w-[17px] h-[17px] block pointer-events-none data-[state=checked]:translate-x-[19px] data-[state=unchecked]:translate-x-[1px]',
          {
            'bg-background-secondary': variant === 'main',
            'bg-background-third': variant === 'secondary',
          },
        )}
      />
    </Root>
  ),
)

Switch.displayName = Root.displayName

export { Switch }
