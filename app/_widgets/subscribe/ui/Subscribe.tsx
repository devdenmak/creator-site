import { Tagline } from '@/app/_shared/ui/Tagline'
import { Title } from '@/app/_shared/ui/Title'
import { BENEFITS } from '../config'
import { Icon } from '@/app/_shared/ui/Icon'

const Subscribe = () => {
  return (
    <section className="pt-[120px] pb-[20px]">
      <div className="container">
        <Tagline className="mb-[30px]" variant="main">
          The future is bright
        </Tagline>

        <div className="grid grid-cols-2 gap-[20px] max-xl:grid-cols-1">
          <div>
            <Title className="max-w-[516px] mb-4">
              Nimbus is in early stages subscribe for future updates
            </Title>

            <p className="text-foreground-sixth text-sm font-bold max-w-[429px]">
              CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer
              management,{' '}
              <span className="text-[#8C9CAE]">
                giving you more time to focus on growing your business.
              </span>
            </p>
          </div>

          <div>
            <div className="grid gap-5 grid-cols-2 max-lg:grid-cols-1 max-lg:gap-4 max-lg:mb-4 max-md:gap-0 max-md:mb-0 items-start text-black">
              {BENEFITS.map(({ title, description, icon }) => (
                <section
                  className="first:mt-24 last:-mt-24 max-xl:first:mt-0 max-xl:last:mt-0 group bg-[#2A1C5F] p-8 rounded-2xl max-lg:min-h-0 hover:bg-background-secondary transition-colors cursor-default max-md:rounded-none"
                  key={title}
                >
                  <div className="flex flex-nowrap text-foreground-eight items-center mb-4 group-hover:text-inherit transition-colors">
                    <Icon className="flex-none" name={icon} />
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-inherit transition-colors">
                    {title}
                  </h3>
                  <p className=" text-[#D3D8DF] text-sm font-semibold group-hover:text-inherit transition-colors">
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
