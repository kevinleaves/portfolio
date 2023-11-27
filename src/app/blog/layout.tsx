import Navbar from './(navbar)/components/Navbar'
import { blogLinks } from './(navbar)/links/links'
import Links from './(navbar)/components/Links'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* <Navbar>
        <Links links={blogLinks} />
      </Navbar> */}
      {children}
    </section>
  )
}
