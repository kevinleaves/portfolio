'use client'

import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Contact } from '@modules/contact'
import { Skills } from '@modules/skills'
import { ChakraProvider } from '@chakra-ui/react'
export default function App() {
  return (
    <ChakraProvider resetCSS={true}>
      <div className='flex flex-col gap-5 '>
        <Home />
        <Work />
        <About />
        <Skills />
        <Contact />
      </div>
    </ChakraProvider>
  )
}
