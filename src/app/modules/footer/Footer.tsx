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
    <section id='footer' className='mt-16 border-t-2 border-solid pt-8'>
      <div className='flex justify-center gap-5'>
        {Object.entries(socials).map(([key, { logo, link }]) => {
          return (
            <a href={link} key={key} target='blank'>
              <Image
                src={logo}
                height={40}
                width={40}
                alt='social_logo'
                className='rounded-3xl transition-all hover:scale-125'
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}
