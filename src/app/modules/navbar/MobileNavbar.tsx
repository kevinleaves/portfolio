import React, { useState, RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { TfiClose } from 'react-icons/tfi'

type Props = {
  refs: {
    navbar: RefObject<HTMLDivElement>
    home: RefObject<HTMLDivElement>
    about: RefObject<HTMLDivElement>
    work: RefObject<HTMLDivElement>
    hobbies: RefObject<HTMLDivElement>
    // skills: RefObject<HTMLDivElement>
    // contact: RefObject<HTMLDivElement>
  }
  setMenuClicked: (value: boolean) => void
  menuClicked: boolean
  isMobile: boolean
}

type Links = {
  [key: string]: string
}

const links: Links = {
  about: '/#about',
  work: '/#work',
  hobbies: '/#hobbies',
  // skills: '/#skills',
  // contact: '/#contact',
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

export default function MobileNavbar({
  refs,
  setMenuClicked,
  menuClicked,
  isMobile,
}: Props) {
  const handleScroll = (ref: RefObject<null>) => {
    if (ref.id === 'home' || isMobile) {
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
    setMenuClicked(false)
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: '100%' }}
      key='mobile-menu'
      className='fixed bottom-0 top-0 right-0 z-10 flex w-[40%] flex-col items-center gap-2 bg-lightSecondary text-darkPrimary'
    >
      <div className='flex h-20 items-center justify-center'>
        <TfiClose onClick={() => setMenuClicked(!menuClicked)}></TfiClose>
      </div>
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
    </motion.div>
  )
}
