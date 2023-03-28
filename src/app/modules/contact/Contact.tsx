import React, { RefObject } from 'react'

type Props = {
  contactRef: RefObject<HTMLElement>
}

export default function Contact({ contactRef }: Props) {
  const contact = 'Contact me @'

  return (
    <section ref={contactRef} id='contact'>
      {contact}
      <div className='h-screen'>BLAH</div>
    </section>
  )
}
