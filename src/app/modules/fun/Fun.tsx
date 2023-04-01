import React from 'react'
import SoundCloud from './Soundcloud'

export default function Fun() {
  return (
    <section
      className='flex flex-col items-center justify-center gap-4 py-10 px-10'
      id='fun'
    >
      <h2 className='mb-3 text-center text-3xl hover:text-lightSecondary'>
        something fun
      </h2>
      <p>
        I DJ from time to time, and I have a couple of EDM mixes on Soundcloud!
      </p>
      <SoundCloud></SoundCloud>
    </section>
  )
}
