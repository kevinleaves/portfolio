import React, { useState, RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { TfiAlignRight } from 'react-icons/tfi'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'

type Props = {
  refs: {
    navbar: RefObject<null>
    home: RefObject<null>
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
    logo: '/images/logos/linkedin-black.png',
    link: 'https://www.linkedin.com/in/kevinleaves/',
  },
  github: {
    logo: '/images/logos/github-mark.png',
    link: 'https://github.com/kevinleaves',
  },
}

export default function Navbar({ refs }: Props): JSX.Element {
  const [menuClicked, setMenuClicked] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  })

  const handleScroll = (ref: RefObject<null>, navbarRef: RefObject<null>) => {
    if (ref.id === 'home') {
      ref?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    } else {
      ref?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <header
        className='sticky top-0 z-10 flex justify-between border-b-2 border-solid border-gray-200 py-2 text-2xl backdrop-blur-md  backdrop-opacity-95 backdrop-filter'
        ref={refs.navbar}
        id='navbar'
      >
        <Link href={'/'}>
          <Image
            src='/images/logos/monkey.png'
            width={40}
            height={40}
            alt='header-icon'
            onClick={() => handleScroll(refs.home.current)}
          />
        </Link>
        {!isMobile ? (
          <nav className='flex items-end gap-2'>
            {Object.entries(links).map(([key, link]) => {
              return (
                <Link
                  key={key}
                  href={link}
                  className='hover:text-indigo-500'
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
            <iframe
              allowTransparency='true'
              frameborder='no'
              src='https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fkevinxle&color=black_white&size=40'
              style={{ width: '40px', height: '40px' }}
            ></iframe>
          </nav>
        ) : null}
        {isMobile && !menuClicked ? (
          <TfiAlignRight
            onClick={() => setMenuClicked(!menuClicked)}
          ></TfiAlignRight>
        ) : null}
      </header>
      <AnimatePresence>
        {isMobile && menuClicked ? (
          <MobileNavbar
            refs={refs}
            menuClicked={menuClicked}
            setMenuClicked={setMenuClicked}
            isMobile={isMobile}
          ></MobileNavbar>
        ) : null}
      </AnimatePresence>
    </>
  )
}
