'use client'

import { useState, useEffect, ElementRef } from 'react'
import { Navbar } from '@modules/navbar'
import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Hobbies } from '@modules/hobbies'
import { Footer } from '@modules/footer'
import { useRef } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import useDarkMode from 'src/app/_hooks/useDarkMode'
import { useMediaQuery } from 'react-responsive'

type Links = {
  [key: string]: string
}

const links: Links = {
  about: '/#about',
  work: '/#work',
  hobbies: '/#hobbies',
}

export default function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  })

  const [isScrolling, setIsScrolling] = useState(false)

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  useEffect(() => {
    let timeoutId
    const handleScroll = () => {
      clearTimeout(timeoutId)
      setIsScrolling(true)
      timeoutId = setTimeout(() => {
        setIsScrolling(false)
      }, 500) // Change this value to adjust the delay before showing the element again
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup function removes event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const refs = {
    home: useRef<ElementRef<typeof Home>>(null),
    about: useRef(null),
    work: useRef(null),
    hobbies: useRef(null),
  }

  const sectionRefs = Object.values(refs)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: isMobile ? 0 : 0.75,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const refArray = sectionRefs.map((ref) => ref.current)
          const index = refArray.indexOf(entry.target)
          setCurrentSectionIndex(index)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionRefs.forEach((ref) => {
      observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [sectionRefs, isMobile])

  const scrollToSection = (index: number) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  // dots signifying which component user is currently viewing. hides while user is scrolling

  const dots = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolling ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-3/4 left-2 rounded md:top-1/2`}
    >
      {Object.keys(refs).map((key, index) => (
        <div
          key={index}
          className={
            index === currentSectionIndex
              ? 'h-5 w-5 rounded-full bg-indigo-500'
              : 'h-5 w-5 rounded-full bg-darkPrimary dark:bg-lightPrimary'
          }
          onClick={() => scrollToSection(index)}
        ></div>
      ))}
    </motion.div>
  )

  return (
    <ChakraProvider resetCSS={true}>
      <div className='flex h-full flex-col gap-5'>
        <Navbar
          links={links}
          isMobile={isMobile}
          refs={refs}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
      />
        {dots}
        <Home homeRef={refs.home} />
        <About aboutRef={refs.about} />
        <Work workRef={refs.work} />
        <Hobbies hobbyRef={refs.hobbies} />
        <Footer />
      </div>
    </ChakraProvider>
  )
}
