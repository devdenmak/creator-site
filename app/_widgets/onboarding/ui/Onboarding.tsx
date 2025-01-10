'use client'

import { Icon } from '@/app/_shared/ui/Icon'
import { FEATURES } from '../config'
import BgOnboarding from '../images/bg-onboarding.jpg'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'
import { Button } from '@/app/_shared/ui/Button'
import { Text } from '@/app/_shared/ui/Text'
import { GETTING_STARTED_LINK } from '@/app/_shared/config'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/app/_shared/lib/tailwindUtils'

const Onboarding = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section>
      <div ref={ref} className="container pt-20 pb-24 max-md:px-0 max-lg:pt-10 max-md:pb-20">
        <section
          className="text-foreground-twelfth rounded-2xl overflow-hidden bg-no-repeat bg-cover px-[84px] pt-[110px] pb-[100px] max-xl:p-16 max-md:py-16 max-md:px-8 max-md:rounded-none"
          style={{ backgroundImage: getBackgroundImage(BgOnboarding, 1328, 600) }}
        >
          <h3 className="font-main text-4xl font-black mb-[40px] max-w-[1100px] max-md:text-3xl">
            CreatorNimbus streamlines operations with verified data and automation, helping your
            agency save time, build trust, and attract brands to fuel growth.
          </h3>

          <Button
            target="_blank"
            href={GETTING_STARTED_LINK}
            className={cn('w-[315px] opacity-0', {
              'animate-fade': inView,
            })}
            variant="fifth"
          >
            Get started now
          </Button>

          <h4 className="font-headings text-[80px] font-bold leading-[1.1] tracking-[2.4px] uppercase mt-[65px]">
            260+
          </h4>

          <Text className="max-w-[380px]">
            Agencies already use CreatorNimbus to transform the way they work and grow within the
            industry.
          </Text>
        </section>
      </div>

      <div className="container">
        <ul className="border-b border-background-eight pb-24 grid grid-cols-4 gap-x-5 gap-y-20 max-2xl:gap-y-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:pb-12 max-md:gap-y-12 max-md:border-b-0">
          {FEATURES.map(({ icon, title, description }, index) => (
            <li className="space-y-3" key={index}>
              <div className="flex text-foreground-fourth">
                <Icon className="text-sm flex-none mr-3" name={icon} />
                <h4 className="font-bold text-sm">{title}</h4>
              </div>

              <p
                className="text-foreground-sixth text-sm font-bold"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Onboarding
