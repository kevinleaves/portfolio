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
    <main className='flex flex-col'>
      <h1>blog page</h1>
      <div className='flex h-screen w-full flex-col'>
        <iframe
          className='h-full w-full'
          src='https://cdn.forms-content-1.sg-form.com/ba9eebc9-2cb0-11ee-b588-9eb060adcbeb'
        />
      </div>
      <div>{JSON.stringify(post)}</div>
      <div>{JSON.stringify(morePosts)}</div>
      <Posts posts={posts} />
    </main>
  )
}
