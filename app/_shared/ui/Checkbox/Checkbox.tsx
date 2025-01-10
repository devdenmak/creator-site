'use client'

import { cn } from '@/app/_shared/lib/tailwindUtils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ComponentRef, forwardRef } from 'react'

const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'group peer h-5 w-5 shrink-0 rounded-full border-2 border-background-twelfth focus-visible:outline-none hover:border-foreground-twentieth transition-colors active:border-background-twelfth',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <div className="w-1.5 h-1.5 bg-foreground-primary rounded-full mt-px ml-px"></div>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
