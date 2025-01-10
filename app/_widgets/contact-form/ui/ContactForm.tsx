'use client'

import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Button } from '@/app/_shared/ui/Button'
import { Checkbox } from '@/app/_shared/ui/Checkbox'
import { Input } from '@/app/_shared/ui/Input'
import { useState } from 'react'
import Link from 'next/link'

const ContactForm = ({
  className,
  withConditions = false,
}: {
  className?: string
  withConditions?: boolean
}) => {
  const [inputState, setInputState] = useState('')
  const [checkboxState, setCheckboxState] = useState(false)

  const buttonText = 'Get started now'
  return (
    <form className={cn(className)} onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full max-md:block">
        <Input
          className="flex-1 mr-3 max-md:mb-2"
          placeholder="your@email.com"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />

        <Button className="flex-none max-md:hidden" cornerLeftType="strict" type="submit">
          {buttonText}
        </Button>

        <Button className="flex-none w-full hidden max-md:inline-flex" type="submit">
          {buttonText}
        </Button>
      </div>

      {withConditions && (
        <div className="flex space-x-2 mt-10">
          <Checkbox
            checked={checkboxState}
            onCheckedChange={(val) => setCheckboxState(val === true)}
            id="terms"
          />

          <label
            htmlFor="terms"
            className="text-sm text-background-twelfth font-bold select-none cursor-pointer"
          >
            I agree to the{' '}
            <Link
              className="text-foreground-twentieth text-sm font-bold underline underline-offset-4 hover:text-foreground-sixth transition-colors active:text-foreground-twentieth"
              target="_blank"
              href="/"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              className="text-foreground-twentieth text-sm font-bold underline underline-offset-4 hover:text-foreground-sixth transition-colors active:text-foreground-twentieth"
              target="_blank"
              href="/"
            >
              Data Processing Policies
            </Link>
          </label>
        </div>
      )}
    </form>
  )
}

export default ContactForm
