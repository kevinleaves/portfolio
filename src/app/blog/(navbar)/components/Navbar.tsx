'use client'

import Link from 'next/link'
import { Tooltip } from '@chakra-ui/react'

interface Props {
  links: {
    [key: string]: {
      link: string
      label: string
      icon?: JSX.Element
    }
  }
}

export default function Navbar({ links }: Props) {
  return (
    <nav className='sticky top-0 z-10 mb-4 flex h-16 items-center gap-2 bg-[#27374D]'>
      <div className='mx-20 flex w-full gap-2'>
        {Object.entries(links).map(([key, { link, label, icon }]) => (
          <Tooltip key={key} label={label}>
            <Link key={key} href={link} className='font-extralight text-white'>
              {icon}
            </Link>
          </Tooltip>
        ))}
      </div>
    </nav>
  )
}
