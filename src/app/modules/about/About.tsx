import React, { RefObject } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Resume from '@public/docs'

type Props = {
  aboutRef: RefObject<HTMLElement>
}

export default function About({ aboutRef }: Props) {
  return (
    <section
      ref={aboutRef}
      className='flex flex-col-reverse place-items-center justify-center gap-10 px-2 pb-10 md:flex-row'
      id='about'
    >
      <p className='w-9/12 md:w-3/6 lg:w-1/6'>
        Hey there,
        <br></br>
        <br></br>
        My name is Kevin, and I am a well versed professional with a background
        in Payroll, HRIS Software, and software engineering. I graduated from
        the University of California, Irvine with a Bachelor&apos;s degree in
        Economics in 2017 and worked as a Payroll Analyst in the software
        industry until 2022.
        <br></br>
        <br></br>
        From the moment I started my professional career, I knew that I wanted
        to explore the world of programming. I got my start by writing VBA and
        Python scripts to automate tasks in my previous jobs.
        <br></br>
        <br></br>
        These days, I task myself with the role of using my skills to build
        software that not only solves problems, but satiates my thirst for
        knowledge. I love learning new tech, strengthening my current foundation
        of knowledge, and getting good at whatever I set my mind to.
        <br></br>
        <br></br>
        I'm currently looking for a new Software engineering role, so if
        you&apos;d like to see the projects I&apos;ve worked on please find my
        github{' '}
        <a
          href='https://github.com/kevinleaves'
          className=' text-purple-500 hover:text-purple-900'
          target='_blank'
        >
          here{' '}
        </a>
        (or scrolling down a little bit more works too 😁), and if you&apos;d
        like to contact me about an opportunity, you can find my resume{' '}
        <Link
          href={Resume}
          download={Resume}
          className=' text-purple-500 hover:text-purple-900'
          target='_blank'
        >
          here.
        </Link>
      </p>
      <div className='h-80 w-80 max-w-[95%]'>
        <Image
          src='/images/misc/kevin4.jpeg'
          height={500}
          width={500}
          className='max-h-sm h-full w-full max-w-sm rounded-full object-cover'
          alt='kevin_portrait'
        />
      </div>
    </section>
  )
}
