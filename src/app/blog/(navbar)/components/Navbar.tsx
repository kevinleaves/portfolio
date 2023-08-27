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
    <nav className='sticky top-0 z-10 my-4 flex h-16 items-center gap-2 bg-slate-500'>
      {Object.entries(links).map(([key, { link, label }]) => (
        <Link key={key} href={link} className='font-extralight text-white'>
          {label}
        </Link>
      ))}
    </nav>
  )
}
