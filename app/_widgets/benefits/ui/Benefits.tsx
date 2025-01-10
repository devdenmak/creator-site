import { Tagline } from '@/app/_shared/ui/Tagline'
import { Title } from '@/app/_shared/ui/Title'
import { GetStarted, GetStartedFirstBg } from '../../get-started'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'
import { BENEFITS } from '../config'
import { Icon } from '@/app/_shared/ui/Icon'

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="bg-background-secondary text-black pt-24 pb-48 max-lg:pt-16 max-lg:pb-20 max-md:pt-14 max-md:pb-0"
    >
      <div className="container max-md:w-full max-md:px-0 max-md:max-w-full">
        <Tagline className="mb-7 max-md:px-8">Core advantages</Tagline>
        <Title className="max-w-[527px] mb-20 max-lg:mb-12 max-md:px-8">
          Main benefits of Creator nimbus ecosystem
        </Title>

        <div className="grid gap-5 grid-cols-3 mb-8 max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-4 max-md:gap-0 max-md:mb-0">
          {BENEFITS.map(({ title, description, icon }) => (
            <section
              className="group bg-background-fifth px-8 py-11 rounded-2xl min-h-[250px] max-lg:min-h-0 hover:bg-background-third transition-colors cursor-default max-md:rounded-none"
              key={title}
            >
              <div className="flex flex-nowrap text-foreground-eight items-center mb-6 group-hover:text-inherit transition-colors">
                <Icon className="flex-none mr-3.5" name={icon} />

                <svg
                  className="flex-none fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="7"
                  viewBox="0 0 47 7"
                >
                  <path d="M41.9956 7C42.2304 6.99218 42.4539 6.89551 42.6205 6.7289L45.9525 3.39684C46.3147 3.03469 46.3147 2.44753 45.9525 2.08538L44.1388 0.271612C43.9649 0.0977017 43.729 0 43.483 0H5.72711C4.76261 0 3.83762 0.383145 3.15562 1.06515L0.271612 3.94915C-0.0905369 4.3113 -0.0905377 4.89846 0.271611 5.26061L1.51785 6.44799C1.88976 6.80234 2.38376 7 2.89746 7H41.9956Z" />
                </svg>
              </div>

              <h3 className="text-white text-1.5xl font-bold mb-3 group-hover:text-inherit transition-colors">
                {title}
              </h3>
              <p className="text-foreground-nineth text-base font-semibold group-hover:text-inherit transition-colors">
                {description}
              </p>
            </section>
          ))}
        </div>
      </div>

      <GetStarted backgroundImage={getBackgroundImage(GetStartedFirstBg, 1328, 251)} />
    </section>
  )
}

export default Benefits
