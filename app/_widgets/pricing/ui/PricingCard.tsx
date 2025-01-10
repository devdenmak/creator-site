'use client'

import type { IPrice } from '@/app/_widgets/pricing/types'

import { Switch } from '@/app/_shared/ui/Switch'
import { useState } from 'react'
import { Button } from '@/app/_shared/ui/Button'
import { formatPercentage, formatPrice } from '@/app/_shared/lib/formatPrice'
import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Icon } from '@/app/_shared/ui/Icon'
import { GETTING_STARTED_LINK } from '@/app/_shared/config'

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
  const [switchState, setSwitchState] = useState(1)

  const priceMoreOne = prices.length > 1

  const sum = priceMoreOne
    ? `${formatPrice(prices[switchState].sum)} / per month`
    : formatPrice(prices[0].sum)

  const discount = formatPercentage(
    priceMoreOne ? prices[switchState].discount : prices[0].discount,
  )

  return (
    <article
      className={cn(
        'pricing-card min-h-[640px] text-black rounded-2xl p-[30px] font-main flex flex-col min-w-0 max-lg:min-h-0 max-lg:p-[20px]',
        `pricing-card--theme-${theme}`,
        {
          'bg-background-secondary': theme === 'main',
          'bg-background-third': theme === 'secondary',
        },
      )}
    >
      <h2 className="pricing-card__title text-[22px] font-bold leading-[1.2] mt-0 mb-[12px]">
        {title}
      </h2>

      <div className="pricing-card__offer flex flex-wrap gap-x-[10px] gap-y-[4px] mb-[30px]">
        <div className="pricing-card__price empty:hidden text-[16px] font-bold leading-[1.2]">
          {sum}
        </div>
        <div className="pricing-card__discount font-headings color-[#0B1117] text-[16px] font-bold leading-[1.2]">
          {discount}
        </div>
      </div>

      <div className="pricing-card__control-box flex items-center flex-wrap gap-x-[10px] gap-y-[8px] border-b-[1px] border-b-[#1b2633] pb-[20px]">
        {priceMoreOne && (
          <div className="pricing-card__switch text-[0] leading-[0] flex-[0_0_auto]">
            <Switch
              checked={!!switchState}
              onCheckedChange={(val) => setSwitchState(val ? 1 : 0)}
              variant={theme}
            />
          </div>
        )}

        <p className="pricing-card__description mt-[3px] mb-0 text-[16px] font-semibold leading-[1.27]">
          {description}
        </p>
      </div>

      <ul className="pricing-card__features-list py-[40px]">
        {features.map((feature) => (
          <li
            className="pricing-card__features-item flex items-center  relative text-[14px] font-semibold leading-[1.27] mb-[20px] last:mb-0"
            key={feature}
          >
            <Icon
              className="text-[11px] flex-none mr-[10px] text-[#37414F]"
              name="outlined/check"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-card__control mt-auto">
        <Button
          href={GETTING_STARTED_LINK}
          target="_blank"
          variant={theme === 'main' ? 'secondary' : 'third'}
          className="w-full"
        >
          Start now
        </Button>
      </div>
    </article>
  )
}
