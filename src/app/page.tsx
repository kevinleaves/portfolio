'use client'

import { Navbar } from '@modules/navbar'
import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Hobbies } from '@modules/hobbies'
import { Footer } from '@modules/footer'
import { motion } from 'framer-motion'
import useDarkMode from 'src/app/_hooks/useDarkMode'

export default function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className='flex h-full flex-col gap-16'>
        <Home />
        <About />
        <Work />
        <Hobbies />
        <Footer />
      </main>
    </>
  )
}
