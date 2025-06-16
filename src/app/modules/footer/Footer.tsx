import React from 'react'
import Image from 'next/image'
import Resume from '@modules/navbar/Resume'

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
    <section id='footer' className='pt-8'>
      <div className='flex items-center justify-center gap-5'>
        {Object.entries(socials).map(([key, { logo, link }]) => {
          return (
            <a href={link} key={key} target='blank'>
              <Image
                src={logo}
                height={24}
                width={24}
                alt='social_logo'
                className='rounded transition-all hover:scale-125'
              />
            </a>
          )
        })}
        <Resume />
      </div>
    </section>
  )
}
