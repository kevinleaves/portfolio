import React, { RefObject } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  refs: {
    about: RefObject<null>
    work: RefObject<null>
    skills: RefObject<null>
    contact: RefObject<null>
  }
}

type Links = {
  [key: string]: string
}

const links: Links = {
  about: '/#about',
  skills: '/#skills',
  contact: '/#contact',
  work: '/#work',
}

type Social = {
  [key: string]: {
    logo: string
    link: string
  }
}

const socials: Social = {
  linkedin: {
    logo: '/images/logos/github-mark.png',
    link: 'https://www.linkedin.com/in/kevinleaves/',
  },
  github: {
    logo: '/images/logos/linkedin-black.png',
    link: 'https://github.com/kevinleaves',
  },
}

export default function Navbar({ refs }: Props) {
  return (
    <header className='sticky top-0 z-50 flex justify-between text-2xl'>
      <Link href={'/'}>
        <Image
          src='/images/logos/monkey.png'
          width={40}
          height={40}
          alt='header-icon'
        />
      </Link>
      <nav className='flex items-end gap-2'>
        {Object.entries(links).map(([key, link]) => {
          return (
            <Link
              key={key}
              href={link}
              onClick={() => handleScroll(refs[key].current)}
            >
              {key}
            </Link>
          )
        })}
        {Object.entries(socials).map(([key, { logo, link }]) => {
          return (
            <a href={link} key={key} target='blank'>
              <Image src={logo} height={40} width={40} alt='social_logo' />
            </a>
          )
        })}
      </nav>
    </header>
  )
}

const handleScroll = (ref: RefObject<null>) => {
  ref?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}
