import Posts from './components/Posts'
import { clientFetch } from '@sanity/lib/client'
import { postsQuery } from '@sanity/lib/queries'

export default async function BlogPage() {
  const posts = await clientFetch(postsQuery)

  return (
    <main>
      <h1>blog page</h1>
      <Posts posts={posts} />
    </main>
  )
}
