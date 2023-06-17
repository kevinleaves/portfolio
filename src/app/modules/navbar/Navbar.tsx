import React, { useState, RefObject } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

type Props = {
  refs: {
    navbar: RefObject<null>
    home: RefObject<null>
    about: RefObject<null>
    work: RefObject<null>
    hobbies: RefObject<null>
  }
  isDarkMode: boolean
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
}

type Links = {
  [key: string]: string
}

const links: Links = {
  about: '/#about',
  work: '/#work',
  hobbies: '/#hobbies',
}

export default function Navbar({
  isMobile,
  refs,
  isDarkMode,
  toggleDarkMode,
}: Props): JSX.Element {
  const [menuClicked, setMenuClicked] = useState(false)

  const handleScroll = (ref: RefObject<HTMLDivElement>, link: string) => {
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
    // setTimeout(() => {
    //   window.location.href = link
    // }, 700) // navigate to link after 0.5 seconds
  }

  return (
    <>
      <header
        className='sticky top-0 z-10 flex justify-between py-2 px-2 text-2xl backdrop-blur-md backdrop-opacity-95 backdrop-filter'
        ref={refs.navbar}
        id='navbar'
      >
        <Link href={'/'}>
          <Image
            src='/images/logos/monkey.png'
            width={40}
            height={40}
            alt='header-icon'
            onClick={(e) => {
              e.preventDefault()
              handleScroll(refs.home.current, '/')
            }}
          />
        </Link>

        {/* desktop navbar only displays when not mobile*/}
        {!isMobile ? (
          <nav className='flex'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-2'>
                {Object.entries(links).map(([key, link]) => {
                  return (
                    <Link
                      key={key}
                      href={link}
                      className='font-extralight hover:text-indigo-500'
                      onClick={(e) => {
                        e.preventDefault()
                        handleScroll(refs[key].current, link)
                      }}
                    >
                      {key}
                    </Link>
                  )
                })}
              </div>
              <IconButton
                aria-label='darkmode toggle'
                icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
                onClick={() => toggleDarkMode(!isDarkMode)}
                size='lg'
                variant='ghost'
                fontSize='25px'
              />
            </div>
          </nav>
        ) : null}

        {/* mobile icon displays when isMobile AND menu is not showing */}
        {isMobile ? (
          <IconButton
            aria-label='darkmode toggle'
            icon={<HamburgerIcon />}
            onClick={() => setMenuClicked(!menuClicked)}
            size='lg'
            fontSize='25px'
          />
        ) : null}
      </header>

      {/* mobile navbar displays when isMobile AND menu is showing */}
      <AnimatePresence>
        {isMobile && menuClicked ? (
          <MobileNavbar
            refs={refs}
            menuClicked={menuClicked}
            setMenuClicked={setMenuClicked}
            isMobile={isMobile}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          ></MobileNavbar>
        ) : null}
      </AnimatePresence>
    </>
  )
}
