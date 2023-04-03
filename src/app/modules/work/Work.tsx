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
      <h2 className='mb-3 text-3xl'>projects</h2>
      <ul className='flex flex-col flex-wrap gap-5 md:flex-row md:justify-center'>
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}
