import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Tagline } from '@/app/_shared/ui/Tagline'
import { previewVariants } from '@/app/_widgets/preview/ui/Preview.variants'

import blurBG from '../images/blur.svg'

type IPreview = {
  className?: string

  variant?: 'default' | 'secondary'
  backgroundImage: string
  children: React.ReactNode
}

const Preview = ({ variant = 'default', backgroundImage, children, className }: IPreview) => {
  const _backgroundImage =
    variant === 'default' ? `${backgroundImage}, url("${blurBG.src}")` : backgroundImage

  return (
    <section
      style={{ backgroundImage: _backgroundImage }}
      className={cn(previewVariants({ variant, className }), 'custom-background')}
    >
      <div className="container">
        <Tagline className="mb-7" variant="main">
          Boost way your agency operate
        </Tagline>

        <div className="space-y-5">{children}</div>
      </div>
    </section>
  )
}

export default Preview
