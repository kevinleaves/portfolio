import React, { useState, RefObject } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { TfiAlignRight } from 'react-icons/tfi'
import { WiDaySunny, WiMoonAltFirstQuarter } from 'react-icons/wi'
import { useMediaQuery } from 'react-responsive'
import MobileNavbar from './MobileNavbar'

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
  refs,
  isDarkMode,
  toggleDarkMode,
}: Props): JSX.Element {
  const [menuClicked, setMenuClicked] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  })

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
    setMenuClicked(false)
  }

  return (
    <>
      <header
        className='sticky top-0 z-10 flex justify-between py-2 text-2xl backdrop-blur-md backdrop-opacity-95 backdrop-filter'
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
            <div className='flex items-end gap-2'>
              <div className='flex gap-2'>
                {Object.entries(links).map(([key, link]) => {
                  return (
                    <Link
                      key={key}
                      href={link}
                      className='hover:text-indigo-500'
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
              <div className='h-10 w-10 rounded-full border-2 border-solid border-black hover:bg-purple-500'>
                <WiMoonAltFirstQuarter
                  className='h-full w-full'
                  onClick={() => toggleDarkMode(!isDarkMode)}
                ></WiMoonAltFirstQuarter>
              </div>
            </div>
          </nav>
        ) : null}

        {/* mobile icon displays when isMobile AND menu is not showing */}
        {isMobile ? (
          <div className='pt-2 pr-2'>
            <TfiAlignRight
              onClick={() => setMenuClicked(!menuClicked)}
            ></TfiAlignRight>
          </div>
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
          ></MobileNavbar>
        ) : null}
      </AnimatePresence>
    </>
  )
}
