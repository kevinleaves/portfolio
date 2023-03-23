import React, { RefObject } from 'react'

type Props = {
  aboutRef: RefObject<HTMLDivElement>
}

export default function About({ aboutRef }: Props) {
  const about =
    'ABOUT Hi there, my name is Kevin Le. I am a full stack developer.'

  return (
    <div
      ref={aboutRef}
      className='h-screen border-b-2 border-solid border-red-400'
      id='about'
    >
      {about}
    </div>
  )
}
