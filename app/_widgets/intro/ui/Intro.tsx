import IntroBg from '../images/bg-intro.jpg'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'
import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { ContactForm } from '@/app/_widgets/contact-form'
import { Logos } from '@/app/_widgets/logos'

const Intro = () => {
  return (
    <section
      style={{ backgroundImage: getBackgroundImage(IntroBg, 1728, 890, 95) }}
      className="bg-cover bg-center bg-no-repeat bg-background-tenth text-white overflow-hidden"
    >
      <div className="animate-fade animate-delay-300 container min-h-dvh flex flex-col items-center justify-center text-center py-36 max-lg:text-left max-lg:items-start max-md:pb-20">
        <div className="max-w-5xl">
          <Title size="l" tag="h1" className="mb-4">
            Transform the Way Your Influencer Management Agency Operates
          </Title>

          <Text className="max-w-xl mx-auto mb-11 max-lg:mx-0 max-md:mb-8">
            CreatorNimbus empowers influencer agencies with cutting-edge technology, streamlining
            operations and enabling secure, seamless collaboration with brands.
          </Text>

          <div className="max-w-lg mx-auto max-lg:mx-0 max-md:max-w-full">
            <ContactForm />
          </div>
        </div>

        <div className="border-t w-full max-w-full border-t-white border-opacity-25 mt-16 pt-16 justify-center flex max-md:mt-12 max-md:pt-12 max-md:justify-start">
          <Logos />
        </div>

        <p className="font-headings uppercase italic text-xs tracking-widest font-medium mt-16 flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="11"
            viewBox="0 0 10 8"
            className="fill-background-third flex-none"
          >
            <path d="M1.5 0H9.5L8 8H0L1.5 0Z" />
          </svg>

          <span className="-mt-0.5">Trusted by Industry-Leading Influencer Marketing Agencies</span>
        </p>
      </div>
    </section>
  )
}

export default Intro
