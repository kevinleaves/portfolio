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

export default function Links({ links }: Props) {
  return (
    <div className='mx-20 flex w-full gap-2'>
      {Object.entries(links).map(([key, { link, label, icon }]) => (
        <Tooltip key={key} label={label} fontSize='lg' placement='bottom'>
          <Link key={key} href={link} className='font-extralight text-white'>
            {icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  )
}
