import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { PricingCard } from '.'
import BgLogo from '../images/logo.svg'
import BgSphere from '../images/sphere.svg'

import { cardFreeData, cardPremiumData } from '../config'
import { Icon } from '@/app/_shared/ui/Icon'

const Pricing = () => {
  return (
    <section id="pricing" className="bg-background-eleventh">
      <div
        style={{
          background: `url(${BgLogo.src}) center / cover no-repeat, url(${BgSphere.src}) center -200px / 967px 967px no-repeat`,
        }}
        className="pricing max-md:!bg-none"
      >
        <div className="container">
          <div className="pricing__inner py-28 max-lg:pb-12 max-md:pt-14">
            <div className="pricing__header max-w-[530px] flex flex-col gap-y-2 ml-auto mr-auto text-center mb-16 max-lg:mx-0 max-lg:text-left max-md:mb-12">
              <Title>Pricing</Title>
              <Text className="text-foreground-thirteenth">
                Use <em>CreatorNimbus</em> for free with your whole team. Upgrade to enable
                unlimited data gathering, enhanced public agency profile, and additional features.
              </Text>
            </div>

            <div className="pricing__body grid grid-cols-2 gap-5 max-w-[880px] mx-auto max-lg:grid-cols-1 max-lg:gap-7">
              <PricingCard {...cardFreeData} />
              <PricingCard {...cardPremiumData} theme="secondary" />
            </div>

            <div className="pricing__footer mt-20 flex flex-nowrap justify-center max-lg:mt-12  max-lg:justify-start max-md:mt-9">
              <p className="pricing__help-text mt-0 relative text-foreground-fourteenth text-sm font-semibold leading-[1.27] mb-0 flex">
                <Icon className="flex-none mr-3" name="outlined/info"></Icon>
                <span className="mt-px">
                  Prices are displayed in USD and are subject to change in the future.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
