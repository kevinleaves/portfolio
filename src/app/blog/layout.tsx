import Navbar from './(navbar)/components/Navbar'
import { blogLinks } from './(navbar)/links/links'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar links={blogLinks} />
      {children}
    </section>
  )
}
