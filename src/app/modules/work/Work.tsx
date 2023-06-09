import React, { RefObject } from 'react'

type Props = {
  workRef: RefObject<HTMLElement>
}

import { Project, projects } from '@modules/work'
export default function Work({ workRef }: Props) {
  return (
    <section
      ref={workRef}
      id='work'
      className='flex flex-col items-center justify-center md:max-w-[100%]'
    >
      <h2 className='mb-7 text-3xl'>projects</h2>
      <ul className='flex w-9/12 flex-col flex-wrap gap-5 md:h-full md:w-fit md:flex-row md:justify-center '>
        {projects
          ?.sort((a, b) => {
            return b.id - a.id
          })
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </ul>
    </section>
  )
}
