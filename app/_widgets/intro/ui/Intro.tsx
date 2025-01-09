import Image, { getImageProps } from 'next/image'
import IntroBg from '../images/bg-intro.jpg'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'
import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import FirstLogosSet from '@/app/_widgets/clients/images/first-set.svg'
import SecondLogosSet from '@/app/_widgets/clients/images/second-set.svg'
import TrustedLogo from '../images/trusted.svg'

const Intro = () => {
  const {
    props: { srcSet: introBgSrc },
  } = getImageProps({ alt: '', width: 1728, height: 890, src: IntroBg, quality: 100 })

  return (
    <section
      style={{ backgroundImage: getBackgroundImage(introBgSrc) }}
      className="bg-cover bg-center bg-no-repeat bg-[#7C16FF] text-white"
    >
      <div className="container min-h-dvh flex flex-col items-center justify-center text-center py-32">
        <div className="max-w-[900px]">
          <Title size="l" tag="h1" className="mb-4">
            Transform the Way Your Influencer Management Agency Operates
          </Title>

          <Text>
            CreatorNimbus empowers influencer agencies with cutting-edge technology, streamlining
            operations and enabling secure, seamless collaboration with brands.
          </Text>
        </div>

        <div className="border-t w-full max-w-full border-t-[#ffffff2b] mt-16 pt-16">
          <div className="min-w-0 flex flex-wrap justify-center items-center gap-x-[40px] gap-y-[25px]">
            <Image src={FirstLogosSet} alt="apollo, newgen, nogooo" />
            <Image src={SecondLogosSet} alt="discrupt, kaizen, amg" />
          </div>
        </div>

        <Image
          className="mt-16"
          src={TrustedLogo}
          alt="Trusted by Industry-Leading Influencer Marketing Agencies"
        />
      </div>
    </section>
  )
}

export default Intro
