import { Text } from '@/app/_shared/ui/Text'
import { Logos } from '@/app/_widgets/logos'
import Image from 'next/image'
import ImageLorenzo from '../images/Lorenzo.jpg'

const Clients = () => {
  return (
    <section id="customers" className="container">
      <div className="flex items-end flex-wrap gap-x-20 gap-y-0 py-20 border-b border-b-[rgba(69,81,94,0.27)] max-lg:flex-col max-md:py-10">
        <div className="w-[calc(30%-40px)] max-lg:w-full max-lg:mb-14">
          <h2 className="mt-0 mb-[10px] text-foreground-eight font-headings text-[80px] font-bold leading-[1.1] tracking-[2.4px] uppercase">
            260+
          </h2>

          <Text className="max-lg:max-w-96" variant="secondary">
            Agencies already use CreatorNimbus to transform the way they work and grow within the
            industry.
          </Text>
        </div>

        <div className="min-w-0 w-[calc(70%-40px)] max-lg:w-full">
          <Logos animation className="mb-[25px] max-2xl:grid max-2xl:grid-cols-6" />

          <Text variant="secondary">
            CreatorNimbus is trusted by industry-leading influencer management agencies. We are
            proud to be a powerhouse driving the marketing of tomorrow, providing tools that empower
            seamless collaboration and innovation.
          </Text>
        </div>
      </div>

      <figure className="m-0 py-14 max-md:pb-7">
        <blockquote className="m-0 relative z-0 max-w-[1104px] text-foreground-sixth text-[26px] italic font-bold leading-[1.1] tracking-[0.78px] indent-[74px] mb-[40px] p-0">
          <span className="mt-[-51px] ml-[-86px] block absolute top-0 left-0 text-foreground-third font-headings text-[169px] leading-[172px] font-bold tracking-[5px]">
            “
          </span>
          <span>
            <em className="text-foreground-primary">CreatorNimbus</em> has streamlined our
            operations enormously and saved us tons of time on manual data entry. Working with
            brands has never been easier than it is now.
          </span>
        </blockquote>

        <figcaption className="flex">
          <div className="text-[0] leading-[0] inline-flex rounded-xl overflow-hidden flex-none mr-[12px]">
            <Image width={42} height={42} src={ImageLorenzo} alt="Lorenzo" />
          </div>

          <div className="flex flex-col mt-[2px]">
            <span className="text-foreground-primary text-[16px] font-bold leading-[127%]">
              Lorenzo Andre
            </span>
            <span className="uppercase text-foreground-seventh text-[14px] italic font-bold leading-[127%] mt-[2px]">
              ceo & founder <span className="text-foreground-primary">kaizen talent</span>
            </span>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default Clients
