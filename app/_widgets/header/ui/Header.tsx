import { COMPANY_NAME, GETTING_STARTED_LINK, LOGO_LINK, NAVIGATION } from '@/app/_shared/config'
import Link from 'next/link'
import Logo from '../images/logo.svg'
import Image from 'next/image'
import { Button } from '@/app/_shared/ui/Button'

const Header = () => {
  return (
    <header className="absolute left-0 top-0 right-0">
      <div className="container h-24 flex gap-x-8 items-center justify-between md:max-w-full md:px-9">
        <Link href={LOGO_LINK} className="-mx-2 inline-flex p-2 flex-none max-sm:w-40">
          <Image priority src={Logo} className="Logo" alt={`Logo ${COMPANY_NAME}`} />
        </Link>

        <nav className="max-lg:hidden">
          <ol className="flex flex-wrap items-center">
            {NAVIGATION.map(({ name, href, external }) => (
              <li key={name}>
                <Link
                  target={external ? '_blank' : '_self'}
                  className="tracking-[0.96px] transition-colors text-xs font-headings font-semibold text-white uppercase inline-block p-4 relative group active:text-inherit"
                  href={href}
                >
                  <span>{name}</span>
                  <span className="absolute group-active:text-inherit bottom-0 left-1/2 transform opacity-0 group-hover:opacity-100 -translate-x-1/2 w-[19px] h-[3px] bg-white rounded-sm scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <Button
          href={GETTING_STARTED_LINK}
          target="_blank"
          className="max-lg:hidden"
          variant="primary"
        >
          Explore agencies
        </Button>

        <Button className="hidden max-lg:inline-flex" variant="primary">
          Menu
        </Button>
      </div>
    </header>
  )
}

export default Header
