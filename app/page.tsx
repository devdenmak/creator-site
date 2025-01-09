import { DEFAULT_TITLE } from '@/app/_shared/config'
import { Preview, BgPreviewFirst, BgPreviewSecond } from '@/app/_widgets/preview'
import { Metadata } from 'next'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'
import { getImageProps } from 'next/image'
import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { Benefits } from '@/app/_widgets/benefits'
import { Features } from '@/app/_widgets/features'
import { Pricing } from '@/app/_widgets/pricing'
import { Clients } from '@/app/_widgets/clients'
import { Review } from '@/app/_widgets/review'
import { GetStarted, GetStartedSecondBg, GetStartedThirdBg } from '@/app/_widgets/get-started'
import { Faq } from '@/app/_widgets/faq'
import { Onboarding } from '@/app/_widgets/onboarding'
import { Subscribe } from '@/app/_widgets/subscribe'

export const metadata: Metadata = {
  title: `Home Page | ${DEFAULT_TITLE}`,
  description: 'Transform the Way Your Influencer Management Agency Operates',
}

export default function Home() {
  const {
    props: { srcSet: previewFirstBgSrc },
  } = getImageProps({ alt: '', width: 1728, height: 1093, src: BgPreviewFirst, quality: 100 })

  const {
    props: { srcSet: previewSeconsBgSrc },
  } = getImageProps({ alt: '', width: 1728, height: 942, src: BgPreviewSecond, quality: 100 })

  const {
    props: { srcSet: getStartedFirstBgSrc },
  } = getImageProps({ alt: '', width: 1328, height: 251, src: GetStartedSecondBg })

  const {
    props: { srcSet: getStartedSecondBgSrc },
  } = getImageProps({ alt: '', width: 1328, height: 251, src: GetStartedThirdBg })

  return (
    <>
      <Preview backgroundImage={getBackgroundImage(previewFirstBgSrc)}>
        <Title className="max-w-[520px]">Public, sharable agency link with verified data</Title>

        <Text className="max-w-[430px]" variant="main">
          CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer
          management,{' '}
          <span className="text-foreground-primary">
            giving you more time to focus on growing your business.
          </span>
        </Text>
      </Preview>

      <Benefits />
      <Features />
      <Pricing />

      <Preview variant="secondary" backgroundImage={getBackgroundImage(previewSeconsBgSrc)}>
        <Title className="max-w-[520px]">A platform dedicated for streamlined operations</Title>

        <Text className="max-w-[530px]" variant="secondary">
          CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer
          management,{' '}
          <span className="text-foreground-seventh">
            giving you more time to focus on growing your business.
          </span>
        </Text>
      </Preview>

      <Clients />
      <Review />

      <GetStarted
        className="my-24"
        variant="secondary"
        backgroundImage={getBackgroundImage(getStartedFirstBgSrc)}
      />

      <Faq />
      <Onboarding />
      <Subscribe />

      <GetStarted
        className="my-24"
        variant="third"
        backgroundImage={getBackgroundImage(getStartedSecondBgSrc)}
      />
    </>
  )
}
