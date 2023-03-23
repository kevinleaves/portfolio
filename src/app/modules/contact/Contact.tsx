import React, { RefObject } from 'react'

type Props = {
  contactRef: RefObject<HTMLDivElement>
}

export default function Contact({ contactRef }: Props) {
  const contact = 'Contact me @'

  return (
    <div ref={contactRef} id='contact'>
      {contact}
      <div className='h-screen'>BLAH</div>
    </div>
  )
}
