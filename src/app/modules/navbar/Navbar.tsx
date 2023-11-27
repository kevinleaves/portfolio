import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Resume from './Resume'

type Props = {
  isDarkMode: boolean
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({
  isDarkMode,
  toggleDarkMode,
}: Props): JSX.Element {

  return (
    <>
      <header
        className='sticky top-0 z-10 flex justify-between py-2 px-2 text-2xl bg-lightPrimary'
        id='navbar'
      >
        <Link href={'/'}>
          <Image
            src='/images/logos/monkey.png'
            width={40}
            height={40}
            alt='header-icon'
          />
        </Link>
        <nav className='flex'>
          <div className='flex items-center gap-2'>
            <div className='flex gap-2'>
              <Link href={'/blog'} className=' hover:text-purple-500'>
                blog
              </Link>
        <Resume />
            </div>
            {/* <IconButton
              aria-label='darkmode toggle'
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={() => toggleDarkMode(!isDarkMode)}
              size='lg'
              variant='ghost'
              fontSize='25px'
            /> */}
          </div>
        </nav>
      </header>
    </>
  )
}
