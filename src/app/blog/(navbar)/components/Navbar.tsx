import Link from 'next/link'

interface Props {
  links: {
    [key: string]: {
      link: string
      label: string
    }
  }
}

export default function Navbar({ links }: Props) {
  return (
    <nav className='sticky top-0 z-10 mb-4 flex h-16 items-center gap-2 bg-[#27374D]'>
      <div className='mx-20 flex w-full gap-2'>
        {Object.entries(links).map(([key, { link, label }]) => (
          <Link key={key} href={link} className='font-extralight text-white'>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
