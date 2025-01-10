'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from 'react'

import { buttonVariants } from './Button.variants'
import { Corner, ICornerTypes } from '../Corner'
import Link from 'next/link'
import { cn } from '@/app/_shared/lib/tailwindUtils'

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>
type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement>

export interface IButtonProps extends buttonVariants {
  href?: string
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'button'
  className?: string
  children?: ReactNode
  target?: '_blank' | '_self'
  cornerLeftType?: ICornerTypes
  cornerRightType?: ICornerTypes
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  (
    {
      href,
      target = '_self',
      className,
      children,
      variant,
      size,
      loading,
      disabled,
      type = 'button',
      cornerLeftType = 'rounded',
      cornerRightType = 'rounded',
      ...props
    },
    ref,
  ) => {
    const innerEl = (
      <>
        <Corner
          type={cornerLeftType}
          className={cn('left-0 ', {
            '-ml-6': cornerLeftType === 'strict',
            '-ml-5': cornerLeftType === 'rounded',
          })}
        />
        <span className="font-headings truncate uppercase text-xs font-bold text-black tracking-[0.96px] transition-colors">
          {children}
        </span>
        <Corner
          type={cornerRightType}
          className={cn('right-0 scale-x-[-1] scale-y-[-1]', {
            '-mr-6': cornerRightType === 'strict',
            '-mr-5': cornerRightType === 'rounded',
          })}
        />
      </>
    )

    if (href) {
      return (
        <Link
          target={target}
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
