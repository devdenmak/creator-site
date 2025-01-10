'use client'

import type { IPrice } from '@/app/_widgets/pricing/types'

import { Switch } from '@/app/_shared/ui/Switch'
import { useState } from 'react'
import { Button } from '@/app/_shared/ui/Button'
import { formatPercentage, formatPrice } from '@/app/_shared/lib/formatPrice'
import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Icon } from '@/app/_shared/ui/Icon'
import { GETTING_STARTED_LINK } from '@/app/_shared/config'
import { useInView } from 'react-intersection-observer'

type IPricingCardProps = {
  theme?: 'main' | 'secondary'
  title?: string
  description?: string
  prices: [IPrice] | [IPrice, IPrice]
  features: string[]
}

export const PricingCard = ({
  theme = 'main',
  title = 'Free',
  description = 'Free for everyone',
  prices,
  features,
}: IPricingCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const [switchState, setSwitchState] = useState(1)

  const priceMoreOne = prices.length > 1

  const sum = priceMoreOne
    ? `${formatPrice(prices[switchState].sum)} / per month`
    : formatPrice(prices[0].sum)

  const discount = formatPercentage(
    priceMoreOne ? prices[switchState].discount : prices[0].discount,
  )

  return (
    <section
      ref={ref}
      className={cn(
        'min-h-[640px] text-black rounded-2xl p-7 font-main flex flex-col min-w-0 max-lg:min-h-0 max-lg:p-5 opacity-0 transition-all',
        {
          'bg-background-secondary': theme === 'main',
          'bg-background-third': theme === 'secondary',
          'animate-fade-up animate-duration-500': inView,
          'animate-delay-300': theme === 'secondary',
        },
      )}
    >
      <h2 className="text-1.5xl font-bold leading-[1.2] mt-0 mb-3">{title}</h2>

      <div className="flex flex-wrap gap-x-2.5 gap-y-1 mb-7">
        <div className="empty:hidden text-base font-bold leading-[1.2]">{sum}</div>
        <div className="font-headings text-foreground-fifteenth text-base font-bold leading-[1.2]">
          {discount}
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-x-[10px] gap-y-[8px] border-b border-b-foreground-sixteenth pb-5">
        {priceMoreOne && (
          <div className="text-[0] leading-[0] flex-none">
            <Switch
              checked={!!switchState}
              onCheckedChange={(val) => setSwitchState(val ? 1 : 0)}
              variant={theme}
            />
          </div>
        )}

        <p className="mt-[3px] mb-0 text-base font-semibold leading-[1.27]">{description}</p>
      </div>

      <ul className="py-10">
        {features.map((feature) => (
          <li
            className="flex items-center relative text-sm font-semibold leading-[1.27] mb-5 last:mb-0"
            key={feature}
          >
            <Icon
              className="text-xs flex-none mr-2.5 text-foreground-fourteenth"
              name="outlined/check"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          href={GETTING_STARTED_LINK}
          target="_blank"
          variant={theme === 'main' ? 'secondary' : 'third'}
          className="w-full"
        >
          Start now
        </Button>
      </div>
    </section>
  )
}
