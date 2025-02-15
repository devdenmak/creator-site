import Image from 'next/image'
import ImageLogoS from '../images/logo-s.svg'
import { FooterLogo } from '@/app/_widgets/footer/ui/FooterLogo'
import {
  COMPANY_NAME,
  CONVERSATIONS,
  LOGO_LINK,
  NAVIGATION,
  RAGEBITE_LINK,
  SOCIALS,
} from '@/app/_shared/config'
import Link from 'next/link'
import { Text } from '@/app/_shared/ui/Text'

const currentYear = new Date().getFullYear().toString()

const Footer = () => {
  return (
    <footer className="bg-background-third text-foreground-secondary pt-14 pb-20 max-lg:pb-18 max-md:pt-10 max-md:pb-10">
      <div className="container">
        <div className="text-background-thirteenth pb-7 -ml-11 -mr-11 max-2xl:mx-0 max-lg:pb-14 max-md:text-inherit max-md:pb-8">
          <FooterLogo />
        </div>

        <div className="flex flex-wrap gap-10 items-center justify-between border-b border-foreground-secondary mb-10 pb-6 pt-6 max-md:hidden">
          <Link href={LOGO_LINK} className="-mx-2 inline-flex p-2 flex-none">
            <Image src={ImageLogoS} alt={`Logo ${COMPANY_NAME}`} />
          </Link>

          <nav>
            <ol className="flex flex-wrap items-center gap-x-7 gap-y-1">
              {NAVIGATION.map(({ name, href, external }) => (
                <li key={name}>
                  <Link
                    target={external ? '_blank' : '_self'}
                    className="-m-2 p-2 tracking-[0.96px] transition-colors text-xs font-headings font-semibold text-inherit hover:text-black active:text-inherit uppercase inline-block"
                    href={href}
                  >
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <Text className="max-w-[535px] mb-7">
          CreatorSite is designed to eliminate the guesswork and inefficiencies of influencer
          management, giving you more time to focus on growing your business.
        </Text>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {SOCIALS.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="-m-2 p-2 text-base font-bold text-inherit transition-colors hover:text-black active:text-inherit inline-block"
                href={href}
                target="_blank"
              >
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-end gap-x-8 gap-y-7 justify-between border-t border-foreground-secondary pt-4 mt-32 max-lg:items-start max-md:mt-12">
          <p className="text-sm font-semibold max-lg:max-w-[300px]">
            © <time dateTime={currentYear}>{currentYear}</time> - CreatorSite™ All rights
            reserved. Platform developed by{' '}
            <a
              target="_blank"
              href={RAGEBITE_LINK}
              className="transition-colors hover:text-black active:text-inherit font-extrabold p-1 -m-1 uppercase inline-block"
            >
              Maxsimov.pro
            </a>
          </p>

          <ul className="flex flex-nowrap items-center gap-8">
            {CONVERSATIONS.map(({ name, href }) => (
              <li key={name}>
                <Link
                  className="-m-2 p-2 text-sm font-semibold transition-colors text-inherit hover:text-black active:text-inherit inline-block"
                  href={href}
                  target="_blank"
                >
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
