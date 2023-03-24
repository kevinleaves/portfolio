import React, { RefObject } from 'react'

type Props = {
  workRef: RefObject<HTMLDivElement>
}

import { Project, projects } from '@modules/work'
export default function Work({ workRef }: Props) {
  const work = 'Work shown here'
  return (
    <div
      ref={workRef}
      id='work'
      className='justify-center-center h-screen border-b-2 border-solid border-red-400 md:max-w-[90%]'
    >
      {work}
      <ul className='flex flex-col md:flex-row'>
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}
