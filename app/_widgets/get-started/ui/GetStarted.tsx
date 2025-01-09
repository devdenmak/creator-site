import { Title } from '@/app/_shared/ui/Title'
import { Text } from '@/app/_shared/ui/Text'
import { Button } from '@/app/_shared/ui/Button'
import { cn } from '@/app/_shared/lib/tailwindUtils'
import { getStartedVariants } from './GetStarted.variants'

type IGetStarted = {
  className?: string

  variant?: 'default' | 'secondary'
  backgroundImage: string
  children?: React.ReactNode
}

const GetStarted = ({ backgroundImage, variant, className }: IGetStarted) => {
  return (
    <section style={{ backgroundImage }} className={cn(getStartedVariants({ variant, className }))}>
      <Title tag="h3" className="max-w-[440px] mb-1">
        Push your agency to the next level
      </Title>

      <Text className="mb-7">
        CreatorNimbus is designed to eliminate the guesswork and inefficiencies!
      </Text>

      <Button className="max-md:w-full">Get started now</Button>
    </section>
  )
}

export default GetStarted
