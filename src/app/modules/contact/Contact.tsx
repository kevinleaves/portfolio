import React, { RefObject } from 'react'

type Props = {}

export default function Contact({}: Props) {
  const contact = 'Contact me @'

  return (
    <section id='contact'>
      {contact}
      <div className='h-screen'>BLAH</div>
    </section>
  )
}
