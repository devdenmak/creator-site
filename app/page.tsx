import { DEFAULT_TITLE } from '@/app/_shared/config'
import { Preview, BgPreviewFirst, BgPreviewSecond } from '@/app/_widgets/preview'
import { Metadata } from 'next'
import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { Benefits } from '@/app/_widgets/benefits'
import { Features } from '@/app/_widgets/features'
import { Pricing } from '@/app/_widgets/pricing'
import { Clients } from '@/app/_widgets/clients'
import { Review } from '@/app/_widgets/review'
import { Faq } from '@/app/_widgets/faq'
import { Onboarding } from '@/app/_widgets/onboarding'
import { Subscribe } from '@/app/_widgets/subscribe'
import { Intro } from '@/app/_widgets/intro'
import { GetStarted, GetStartedSecondBg, GetStartedThirdBg } from '@/app/_widgets/get-started'
import { getBackgroundImage } from '@/app/_shared/lib/getBackgroundImage'

export const metadata: Metadata = {
  title: `Home Page | ${DEFAULT_TITLE}`,
  description: 'Transform the Way Your Influencer Management Agency Operates',
}

export default function Home() {
  return (
    <>
      <Intro />
      <Preview backgroundImage={getBackgroundImage(BgPreviewFirst, 1728, 1093, 100)}>
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

      <Preview
        variant="secondary"
        backgroundImage={getBackgroundImage(BgPreviewSecond, 1728, 942, 100)}
      >
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
        backgroundImage={getBackgroundImage(GetStartedSecondBg, 1328, 251)}
      />

      <Faq />
      <Onboarding />
      <Subscribe />

      <GetStarted
        className="my-24"
        variant="third"
        backgroundImage={getBackgroundImage(GetStartedThirdBg, 1328, 251)}
      />
    </>
  )
}
