import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <section
      className='flex flex-col-reverse place-items-center justify-center gap-16 pb-10'
      id='about'
    >
      <p className='items-center leading-loose md:w-1/2'>
        Hi there! I'm Kevin. I'm an energetic programmer who loves to build
        applications and solve problems using code. I discovered the power of
        coding when I was in 5th grade. I had noticed some of my friends on
        Myspace had custom image backgrounds in their profiles, and I was
        curious as to how they did it. I soon after learned to modify HTML to
        change my profile background just like they did—my first experience of
        using code to solve a real-life issue.
        <br></br>
        <br></br>
        Fast forward to my freshman year of college, I had successfully enrolled
        in my first-ever programming class, Intro to Python. I was quickly
        overwhelmed, and barely scraped by that class with a passing grade,
        which left me uncertain about a career in programming.
        <br></br>
        <br></br>
        However, my path took a turn when I found myself in the world of
        Payroll, manually editing Excel spreadsheets daily. It occurred to me
        that I could use programming to automate these processes! After fiddling
        around in Visual Basic, I pieced together an Excel sheet template with
        an automation that would save my team time every day. I would go on to
        do this in my next role too, but that time using the very same language
        that caused me problems 6 years prior, Python. In the making of these
        internal tools, I gained confidence in my programming abilities, and
        realized that I could write code to solve real-world problems.
        18-year-old me would have never seen that coming.
        <br></br>
        <br></br>
        As my curiosity and love for programming grew, I decided to make it my
        career. I love the creativity that comes with programming, and I love
        that the field is ever-changing and requires me to keep up-to-date with
        advancements in programming languages, technologies, and frameworks. In
        2023, I graduated from Hack Reactor's intensive Software Engineering
        Immersive Program, equipping myself with the skills and knowledge
        required to excel in the field. Currently, I'm actively seeking a
        full-time role as a Software Engineer or a Technical Support Engineer.
        My primary objective is to leverage my programming knowledge to tackle
        real-world problems and contribute to a team or company's success in
        achieving their objectives.
      </p>
      <div className='h-80 w-80 max-w-[95%]'>
        <Image
          src='/images/misc/kevin4.jpeg'
          height={500}
          width={500}
          className='max-h-sm h-full w-full max-w-sm object-cover'
          alt='kevin_portrait'
        />
      </div>
    </section>
  )
}
