import { COMPANY_NAME, LOGO_LINK, NAVIGATION } from '@/app/_shared/config'
import Link from 'next/link'
import Logo from '../images/logo.svg'
import Image from 'next/image'
import { Button } from '@/app/_shared/ui/Button'

const Header = () => {
  return (
    <header className="absolute left-0 top-0 right-0 h-[100px] flex gap-x-12 items-center justify-between px-10">
      <Link href={LOGO_LINK} className="-mx-2 inline-flex p-2 flex-none">
        <Image src={Logo} className="Logo" alt={`Logo ${COMPANY_NAME}`}></Image>
      </Link>

      <nav className="max-lg:hidden">
        <ol className="flex flex-wrap items-center gap-x-7 gap-y-1">
          {NAVIGATION.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="-m-2 p-2 tracking-[0.96px] transition-colors text-xs font-headings font-semibold text-inherit  uppercase inline-block"
                href={href}
              >
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <Button variant="fourth">Explore agencies</Button>
    </header>
  )
}

export default Header
