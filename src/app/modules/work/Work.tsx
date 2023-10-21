import { RefObject } from 'react'
import ProjectsList from './ProjectsList'

type Props = {
  workRef: RefObject<HTMLElement>
}

import { projects } from '@modules/work'

export default function Work({ workRef }: Props) {
  return (
    <section
      ref={workRef}
      id='work'
      className='flex flex-col items-center justify-center md:max-w-[100%]'
    >
      <h2 className='text-3xl font-medium'>What I've been working on</h2>
      <p className='py-8 '>
        I like to always have a project in the works, and am usually looking out
        for ways to learn something new by building applications that interest
        me. Take a gander at some of the projects I've been working on.
      </p>
      <ProjectsList projects={projects} />
    </section>
  )
}
