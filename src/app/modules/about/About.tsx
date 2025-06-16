import Image from 'next/image'
import { Footer } from '@modules/footer'

type Props = {}

export default function About({}: Props) {
  return (
    <section
      className='flex place-items-center justify-center gap-4 pb-10'
      id='about'
    >
      <div className='h-40 w-40 overflow-hidden rounded-md'>
        <div className='h-full w-full'>
          <Image
            src='/images/misc/kevin4.jpeg'
            height={160}
            width={160}
            className='h-full w-full scale-200 object-cover'
            alt='kevin_portrait'
            priority
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-5xl! font-semibold! text-neutral-900 md:text-3xl'>
          hey, i'm kevin!
        </h1>
        <p className='text-lg leading-loose text-neutral-900'>
          I'm a full stack developer from Garden Grove, California.
        </p>
        <Footer />
      </div>
    </section>
  )
}
