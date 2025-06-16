import Link from 'next/link'
import Image from 'next/image'

interface Props {}

export default function Navbar({}: Props): JSX.Element {
  return (
    <>
      <header
        className='sticky top-0 z-10 flex w-full px-8 py-4 pb-8 text-lg backdrop-blur-sm'
        id='navbar'
      >
        <nav className='flex w-full justify-between'>
          <ul className='contents gap-2'>
            <Link href={'/'}>
              <Image
                src='/images/logos/monkey.png'
                width={40}
                height={40}
                alt='header-icon'
              />
            </Link>
            <li>
              <Link href={'/interests'} className='hover:text-purple-500'>
                interests
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
