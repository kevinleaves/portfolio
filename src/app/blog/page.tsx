import Posts from './components/Posts'
import { clientFetch } from '@sanity/lib/client'
import {
  postsQuery,
  postSlugsQuery,
  postBySlugQuery,
  postAndMoreStoriesQuery,
} from '@sanity/lib/queries'

export default async function BlogPage() {
  const posts = await clientFetch(postsQuery)
  const slugs = await clientFetch(postSlugsQuery)
  const slug = 'first-post'
  const { post, morePosts } = await clientFetch(postAndMoreStoriesQuery, {
    slug,
  })

  return (
    <main>
      <h1>blog page</h1>
      <div>{JSON.stringify(post)}</div>
      <div>{JSON.stringify(morePosts)}</div>
      <Posts posts={posts} />
    </main>
  )
}
