import Link from 'next/link'
import Image from 'next/image'
import Resume from './Resume'

interface Props {}

export default function Navbar({}: Props): JSX.Element {
  return (
    <>
      <header
        className='sticky top-0 z-10 flex justify-between bg-lightPrimary px-2 py-2 text-2xl'
        id='navbar'
      >
        <Link href={'/'}>
          <Image
            src='/images/logos/monkey.png'
            width={40}
            height={40}
            alt='header-icon'
          />
        </Link>
        <nav className='flex'>
          <div className='flex items-end gap-2'>
            <div className='flex gap-2'>
              <Link href={'/interests'} className=' hover:text-purple-500'>
                interests
              </Link>
              <Link href={'/blog'} className=' hover:text-purple-500'>
                blog
              </Link>
              <Resume />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
