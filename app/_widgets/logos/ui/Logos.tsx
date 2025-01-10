'use client'

import Image from 'next/image'

import LogoApollo from '../images/apollo.svg'
import LogoNewgen from '../images/newgen.svg'
import LogoNogooo from '../images/nogooo.svg'

import LogoDisput from '../images/disput.svg'
import LogoKaizen from '../images/kaizen.svg'
import LogoAmg from '../images/amg.svg'
import { cn } from '@/app/_shared/lib/tailwindUtils'
import { useInView } from 'react-intersection-observer'

const Logos = ({
  priority = true,
  className,
  animation = false,
}: {
  priority?: boolean
  className?: string
  animation?: boolean
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap gap-6 gap-y-9 items-center max-lg:grid max-lg:grid-cols-6 max-md:grid-cols-3',
        className,
      )}
    >
      <Image
        className={cn('animate-delay-75 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoApollo}
        priority={priority}
        alt="Logo Apollo"
      />
      <Image
        className={cn('animate-delay-100 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoNewgen}
        priority={priority}
        alt="Logo Newgen"
      />
      <Image
        className={cn('animate-delay-150 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoNogooo}
        priority={priority}
        alt="Logo Nogooo"
      />
      <Image
        className={cn('animate-delay-200 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoDisput}
        priority={priority}
        alt="Logo Disput"
      />
      <Image
        className={cn('animate-delay-300 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoKaizen}
        priority={priority}
        alt="Logo LogoKaizen"
      />
      <Image
        className={cn('animate-delay-500 animate-duration-500 opacity-0', {
          'animate-fade-left': inView && animation,
          'opacity-1': !animation,
        })}
        src={LogoAmg}
        priority={priority}
        alt="Logo Amg"
      />
    </div>
  )
}

export default Logos
