'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '../../lib/tailwindUtils'
import { buttonVariants } from './Button.variants'
import { ButtonCorner } from './ButtonCorner'
import Link from 'next/link'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, buttonVariants {
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { className, children, variant, size, disabled, loading, type = 'button', href, ...props },
    ref,
  ) => {
    const common = {
      className: cn(buttonVariants({ variant, size, className })),
    }

    const innerEl = (
      <>
        <ButtonCorner className="h-full absolute top-0 bottom-0 left-0 -ml-5 fill-current" />
        <span
          className={cn(
            'font-headings truncate uppercase text-xs font-bold text-black tracking-[0.96px] transition-colors',
            {
              'group-[.text-background-sixth]:text-white group-hover:!text-black group-active:!text-white':
                variant === 'secondary',
              'group-hover:!text-white group-active:!text-black': variant === 'third',
            },
          )}
        >
          {children}
        </span>
        <ButtonCorner className="h-full absolute top-0 bottom-0 right-0 -mr-5 scale-flip fill-current" />
      </>
    )

    if (href) {
      return (
        <Link {...common} href={href}>
          {innerEl}
        </Link>
      )
    }

    return (
      <button {...common} type={type} disabled={loading || disabled} ref={ref} {...props}>
        {innerEl}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
