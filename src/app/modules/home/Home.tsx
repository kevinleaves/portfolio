import React, { RefObject } from 'react'

type Props = {
  homeRef: RefObject<HTMLElement>
}

export default function Home({ homeRef }: Props): JSX.Element {
  return (
    <section ref={homeRef} className='p-8 md:p-24' id='home'>
      <h1 className='text-2xl font-semibold md:text-3xl'>
        Hi, my name is
        <p className='text-5xl font-extrabold text-blue-300 text-transparent'>
          Kevin Le.
        </p>
        I'm a full stack developer who loves to transform ideas into code.
      </h1>
    </section>
  )
}
