import React, { useEffect, RefObject } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Resume from '@public/docs'

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
  // skills: '/#skills',
  // contact: '/#contact',
}

export default function MobileNavbar({
  refs,
  setMenuClicked,
  menuClicked,
  isMobile,
  isDarkMode,
  toggleDarkMode,
}: Props) {
  const handleScroll = (ref: RefObject<null>, link: string) => {
    if (ref?.current?.id === 'home' || isMobile) {
      ref?.current?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    } else {
      ref?.current?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
    }
    setTimeout(() => {
      window.location.href = link
    }, 500) // navigate to link after 0.5 seconds

    setMenuClicked(false)
  }

  useEffect(() => {
    let timeoutId
    const handleScroll = () => {
      clearTimeout(timeoutId)
      setMenuClicked(false)
      timeoutId = setTimeout(() => {
        setMenuClicked(true)
      }, 500) // Change this value to adjust the delay before showing the element again
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup function removes event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: '100%' }}
      key='mobile-menu'
      className='fixed top-[56px] right-0 z-10 flex h-[40%] w-[40%] flex-col items-center justify-center gap-2 rounded-3xl bg-lightSecondary text-darkPrimary'
    >
      <nav className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <IconButton
            aria-label='darkmode toggle'
            icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
            onClick={() => toggleDarkMode(!isDarkMode)}
            size='lg'
            variant='ghost'
            fontSize='25px'
          />
          {Object.entries(links).map(([key, link]) => {
            return (
              <Link
                key={key}
                href={link}
                className='font-extralight hover:text-indigo-500'
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll(refs[key], link)
                }}
              >
                {key}
              </Link>
            )
          })}
          <Link
            href={Resume}
            download={Resume}
            className=' font-bold hover:text-purple-500'
            target='_blank'
          >
            resume
          </Link>
        </div>
      </nav>
    </motion.div>
  )
}
