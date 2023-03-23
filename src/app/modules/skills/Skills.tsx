import React, { RefObject } from 'react'

type Props = {
  skillsRef: RefObject<HTMLDivElement>
}

export default function Skills({ skillsRef }: Props) {
  const skills = 'skills'

  return (
    <div
      ref={skillsRef}
      className='h-screen border-b-2 border-solid border-red-400'
      id='skills'
    >
      {skills}
    </div>
  )
}
