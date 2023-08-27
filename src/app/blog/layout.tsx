import Navbar from './(navbar)/components/Navbar'
import { links } from './(navbar)/links/links'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar links={links} />
      {children}
    </section>
  )
}
