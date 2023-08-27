import Navbar from './(navbar)/components/Navbar'
import { links } from './(navbar)/links/links'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='mx-20'>
      <Navbar links={links} />
      {children}
    </section>
  )
}
