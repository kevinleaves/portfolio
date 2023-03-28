import React, { RefObject } from 'react'

type Props = {
  aboutRef: RefObject<HTMLElement>
}

export default function About({ aboutRef }: Props) {
  return (
    <section ref={aboutRef} className='' id='about'>
      <h2>ABOUT ME</h2>
      <p>
        My journey into the world of software engineering has been both
        challenging and rewarding. <br></br>
        Growing up, I didn't think I had the necessary skills to be a good
        engineer, so I pivoted out of my Computer Engineering major and into
        Economics.
      </p>
      <p>
        Programming was always on the back of my mind though. In my prior career
        in Payroll Software, I would find any way I could to use programming to
        help boost team efficiency. I developed small automations using Python
        and VBA for the previous teams I've been on, but I knew I wanted to take
        things further than that. Through meaningful effort and a lot of
        curiosity, I developed a deep interest in software development and now
        love nothing more than working collaboratively with a team to tackle
        complex problems.
      </p>
      <p>
        This path of learning software engineering is one of the most rewarding
        paths I've been on thus far. I am constantly learning and expanding my
        skills, and am always on the lookout for ways to use programming to
        craft innovative solutions for problems big or small.
      </p>
      <p>
        If you're looking for a driven full-stack engineer to join your team, or
        simply want to chat about tech, basketball, or anything at all, I would
        love to connect with you. Please feel free to reach out.`
      </p>
    </section>
  )
}
