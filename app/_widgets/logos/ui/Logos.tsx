import Image from 'next/image'

import LogoApollo from '../images/apollo.svg'
import LogoNewgen from '../images/newgen.svg'
import LogoNogooo from '../images/nogooo.svg'
import LogoDisput from '../images/disput.svg'
import LogoKaizen from '../images/kaizen.svg'
import LogoAmg from '../images/amg.svg'
import { cn } from '@/app/_shared/lib/tailwindUtils'

const Logos = ({ priority = true, className }: { priority?: boolean; className?: string }) => {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-6 gap-y-9 items-center max-lg:grid max-lg:grid-cols-6 max-md:grid-cols-3',
        className,
      )}
    >
      <Image src={LogoApollo} priority={priority} alt="Logo Apollo" />
      <Image src={LogoNewgen} priority={priority} alt="Logo Newgen" />
      <Image src={LogoNogooo} priority={priority} alt="Logo Nogooo" />
      <Image src={LogoDisput} priority={priority} alt="Logo Disput" />
      <Image src={LogoKaizen} priority={priority} alt="Logo LogoKaizen" />
      <Image src={LogoAmg} priority={priority} alt="Logo Amg" />
    </div>
  )
}

export default Logos
