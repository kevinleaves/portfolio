'use client'

import { Navbar } from '@modules/navbar'
import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Contact } from '@modules/contact'
import { Skills } from '@modules/skills'
import { useRef } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
export default function App() {
  const refs = {
    navbar: useRef(null),
    home: useRef(null),
    about: useRef(null),
    work: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  }

  return (
    <ChakraProvider resetCSS={true}>
      <div className='flex h-full flex-col gap-5'>
        <Navbar refs={refs} />
        <Home homeRef={refs.home} />
        <About aboutRef={refs.about} />
        <Work workRef={refs.work} />
        {/* <Skills skillsRef={refs.skills} /> */}
        {/* <Contact contactRef={refs.contact} /> */}
      </div>
    </ChakraProvider>
  )
}
