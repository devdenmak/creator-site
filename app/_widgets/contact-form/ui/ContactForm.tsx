'use client'

import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Button } from '@/app/_shared/ui/Button'
import { Input } from '@/app/_shared/ui/Input'
import { useState } from 'react'

const ContactForm = ({ className }: { className?: string }) => {
  const [state, setState] = useState('')

  const buttonText = 'Get started now'

  return (
    <form className={cn(className)} onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full max-md:block">
        <Input
          className="flex-1 mr-3 max-md:mb-2"
          placeholder="your@email.com"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <Button className="flex-none max-md:hidden" cornerLeftType="strict" type="submit">
          {buttonText}
        </Button>

        <Button className="flex-none w-full hidden max-md:inline-flex" type="submit">
          {buttonText}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
