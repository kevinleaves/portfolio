import React, { RefObject } from 'react'
import SoundCloud from './Soundcloud'

type Props = {
  hobbyRef: RefObject<HTMLElement>
}

export default function Hobbies({ hobbyRef }: Props) {
  return (
    <section
      className='flex flex-col items-center justify-center gap-4 py-10 px-10'
      id='hobbies'
      ref={hobbyRef}
    >
      <h2 className='mb-3 text-center text-3xl '>hobbies</h2>
      <p>
        I DJ from time to time, and I have a couple of EDM mixes on Soundcloud!
      </p>
      <SoundCloud></SoundCloud>
    </section>
  )
}
