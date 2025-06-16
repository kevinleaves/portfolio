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
        <Image
          src='/images/misc/kevin4.jpeg'
          height={160}
          width={160}
          className='origin-[47%_35%] scale-400 object-cover md:origin-center md:scale-200'
          alt='kevin_portrait'
          priority
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl! font-semibold! text-neutral-900 md:text-5xl!'>
          hey, i'm kevin!
        </h1>
        <p className='text-base! leading-loose text-neutral-900 md:text-lg!'>
          I'm a full stack developer from Garden Grove, California.
        </p>
        <Footer />
      </div>
    </section>
  )
}
