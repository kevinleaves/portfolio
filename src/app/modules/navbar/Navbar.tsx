import React, { RefObject } from 'react'
import Link from 'next/link'

type Props = {
  refs: {
    about: RefObject<null>
    work: RefObject<null>
    skills: RefObject<null>
    contact: RefObject<null>
  }
}

type Links = {
  [key: string]: string
}

const links: Links = {
  about: '/#about',
  skills: '/#skills',
  contact: '/#contact',
  work: '/#work',
}

export default function Navbar({ refs }: Props) {
  return (
    <nav className='sticky top-0 z-50 flex'>
      {Object.entries(links).map(([key, value]) => {
        return (
          <Link
            key={key}
            href={value}
            onClick={() => handleScroll(refs[key].current)}
          >
            {key}
          </Link>
        )
      })}
    </nav>
  )
}

const handleScroll = (ref: RefObject<null>) => {
  console.log(ref, 'ref')
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: 'smooth',
  })
}
