import { Tagline } from '@/app/_shared/ui/Tagline'
import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { BENEFITS } from '../config'
import { Icon } from '@/app/_shared/ui/Icon'
import { ContactForm } from '@/app/_widgets/contact-form'

const Subscribe = () => {
  return (
    <section className="pt-28 pb-5 max-lg:pt-16 max-md:pt-8">
      <div className="container">
        <Tagline className="mb-[30px]" variant="main">
          The future is bright
        </Tagline>

        <div className="grid grid-cols-2 gap-x-5 gap-y-20 max-xl:grid-cols-1 max-md:gap-y-12">
          <div>
            <Title className="max-w-[516px] mb-4">
              Nimbus is in early stages subscribe for future updates
            </Title>

            <Text variant="secondary" className="max-w-[429px] mb-8">
              CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer
              management,{' '}
              <span className="text-foreground-seventh">
                giving you more time to focus on growing your business.
              </span>
            </Text>

            <ContactForm className="max-w-[420px]" />
          </div>

          <div>
            <div className="grid gap-5 grid-cols-2 max-md:grid-cols-1 max-lg:gap-4 max-lg:mb-4 items-start text-black max-md:gap-3">
              {BENEFITS.map(({ title, description, icon }) => (
                <section
                  className="first:mt-24 last:-mt-24 max-xl:first:mt-0 max-xl:last:mt-0 group bg-background-eight p-8 rounded-2xl max-lg:min-h-0 hover:bg-background-secondary transition-colors cursor-default max-md:p-6"
                  key={title}
                >
                  <div className="max-md:flex">
                    <div className="flex flex-nowrap text-foreground-eight items-center mb-4 group-hover:text-inherit transition-colors max-md:flex-none max-md:mr-3">
                      <Icon className="flex-none" name={icon} />
                    </div>

                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-inherit transition-colors max-md:-mt-0.5">
                      {title}
                    </h3>
                  </div>

                  <p className=" text-foreground-primary text-sm font-semibold group-hover:text-inherit transition-colors">
                    {description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
