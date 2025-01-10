'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from 'react'

import { buttonVariants } from './Button.variants'
import { ButtonCorner } from './ButtonCorner'
import Link from 'next/link'
import { cn } from '@/app/_shared/lib/tailwindUtils'

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>
type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement>

export interface IButtonProps extends buttonVariants {
  href?: string
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  className?: string
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  (
    { href, className, children, variant, size, loading, disabled, type = 'button', ...props },
    ref,
  ) => {
    const innerEl = (
      <>
        <ButtonCorner className="left-0 -ml-5" />
        <span className="font-headings truncate uppercase text-xs font-bold text-black tracking-[0.96px] transition-colors">
          {children}
        </span>
        <ButtonCorner className="right-0 -mr-5 scale-x-[-1] scale-y-[-1]" />
      </>
    )

    if (href) {
      return (
        <Link
          className={cn(buttonVariants({ variant, size, className }))}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          {...(props as AnchorElementProps)}
        >
          {innerEl}
        </Link>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        disabled={loading || disabled}
        {...(props as ButtonElementProps)}
      >
        {innerEl}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
