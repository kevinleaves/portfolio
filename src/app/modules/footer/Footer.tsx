import React from 'react'
import Image from 'next/image'

export default function Footer() {
  type Social = {
    [key: string]: {
      logo: string
      link: string
    }
  }

  const socials: Social = {
    linkedin: {
      logo: '/images/logos/linkedin-black.png',
      link: 'https://www.linkedin.com/in/kevinleaves/',
    },
    github: {
      logo: '/images/logos/github-mark.png',
      link: 'https://github.com/kevinleaves',
    },
  }

  return (
    <section id='footer'>
      <div className='flex h-32 justify-center gap-5'>
        {Object.entries(socials).map(([key, { logo, link }]) => {
          return (
            <a href={link} key={key} target='blank'>
              <Image src={logo} height={40} width={40} alt='social_logo' />
            </a>
          )
        })}
        <iframe
          src='https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fkevinxle&color=black_white&size=40'
          style={{ width: '40px', height: '40px' }}
        ></iframe>
      </div>
    </section>
  )
}
