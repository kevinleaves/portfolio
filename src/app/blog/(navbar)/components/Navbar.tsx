interface Props {
  children: JSX.Element
}

export default function Navbar({ children }: Props) {
  return (
    <nav className='sticky top-0 z-10 mb-4 flex h-16 items-center gap-2 bg-[#27374D]'>
      {children}
    </nav>
  )
}
