import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { Button } from '@/app/_shared/ui/Button'
import { cn } from '@/app/_shared/lib/tailwindUtils'
import { getStartedVariants } from './GetStarted.variants'
import { GETTING_STARTED_LINK } from '@/app/_shared/config'

type IGetStarted = {
  className?: string

  variant?: 'default' | 'secondary' | 'third'
  backgroundImage: string
  children?: React.ReactNode
}

const GetStarted = ({ backgroundImage, variant = 'default', className }: IGetStarted) => {
  const buttonVariants = {
    default: 'default',
    secondary: 'fourth',
    third: 'primary',
  } as const

  return (
    <div className="container max-md:w-full max-md:px-0 max-md:max-w-full">
      <section
        style={{ backgroundImage }}
        className={cn(getStartedVariants({ variant, className }))}
      >
        <Title tag="h3" className="max-w-[440px] mb-1">
          Push your agency to the next level
        </Title>

        <Text className="mb-7">
          CreatorSite is designed to eliminate the guesswork and inefficiencies!
        </Text>

        <Button
          href={GETTING_STARTED_LINK}
          target="_blank"
          variant={buttonVariants[variant]}
          className="max-md:w-full"
        >
          Get started now
        </Button>
      </section>
    </div>
  )
}

export default GetStarted
