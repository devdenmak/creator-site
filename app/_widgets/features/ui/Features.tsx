'use client'

import { Tagline } from '@/app/_shared/ui/Tagline'
import { Text } from '@/app/_shared/ui/Text'
import { Title } from '@/app/_shared/ui/Title'
import { FEATURES_ADDITIONAL, FEATURES_MAIN } from '../config'
import Image from 'next/image'
import { Icon } from '@/app/_shared/ui/Icon'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/app/_shared/lib/tailwindUtils'

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section
      id="features"
      className="bg-background-seventh pt-24 max-lg:pt-16 max-md:pt-14 text-black pb-40 max-2xl:pb-32 max-md:pb-14"
    >
      <div className="container">
        <Tagline className="mb-7 max-lg:mb-4">Explore key features</Tagline>

        <div className="flex gap-30 justify-between mb-20 max-lg:mb-12 max-lg:block">
          <Title className="max-w-[510px] max-lg:max-w-none max-lg:mb-4">
            A platform dedicated for streamlined operations
          </Title>

          <Text className="max-w-[564px] text-right max-2xl:max-w-[427px] max-lg:max-w-none max-lg:text-left">
            CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer
            management,{' '}
            <span className="text-foreground-eigteenth">
              giving you more time to focus on growing your business.
            </span>
          </Text>
        </div>

        <section
          ref={ref}
          className="-m-2.5 pb-28 max-2xl:pb-20 max-lg:-m-5 max-lg:pb-16 max-md:-m-3 max-md:pb-12"
        >
          {FEATURES_MAIN.map((group, index) => (
            <div className="flex flex-wrap even:flex-row-reverse max-lg:block" key={index}>
              {group.map(({ title, description, image }) => (
                <section
                  className="group even:basis-1/3 odd:basis-2/3 relative p-2.5 max-lg:p-5 max-md:p-3"
                  key={title}
                >
                  <div className="relative h-full w-full group-odd:aspect-[865/459] group-even:aspect-[423/459] overflow-hidden rounded-2xl max-lg:rounded-none max-lg:!aspect-auto">
                    <Image
                      className="absolute top-0 left-0 right-0 bottom-0 object-cover h-full w-full group-hover:scale-[1.05] duration-500 max-lg:h-[300px] max-lg:static max-lg:rounded-2xl max-lg:!scale-[1] max-lg:mb-4"
                      src={image}
                      alt={title}
                    />

                    <div
                      className={cn(
                        'absolute bottom-0 m-8 space-y-2 group-even:max-w-[316px] group-odd:max-w-[390px] max-2xl:m-7 max-lg:static max-lg:m-0 max-lg:space-y-1 max-lg:!max-w-none opacity-0 max-lg:opacity-100 max-lg:animate-none',
                        {
                          'animate-fade-up animate-duration-500': inView,
                        },
                      )}
                    >
                      <h3
                        className={cn(
                          'text-1.5xl font-bold text-white max-lg:text-black max-lg:text-xl',
                        )}
                      >
                        {title}
                      </h3>
                      <p className="text-foreground-nineteenth text-base font-semibold leading-5">
                        {description}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          ))}
        </section>

        <ul className="border-t border-foreground-fourth pt-16 grid grid-cols-4 gap-x-5 gap-y-20 max-2xl:gap-y-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:pt-12 max-md:gap-y-12">
          {FEATURES_ADDITIONAL.map(({ icon, title, description }, index) => (
            <li className="space-y-3" key={index}>
              <div className="flex">
                <Icon className="text-sm flex-none mr-3" name={icon} />
                <h4 className="text-black font-bold text-sm">{title}</h4>
              </div>

              <p
                className="text-foreground-seventeenth text-sm font-bold"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
