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
      <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
        my musings about life, tech, & more
      </h1>
      <Posts posts={posts} />
      <div className='flex h-screen w-full flex-col'>
        <iframe
          className='h-full w-full'
          src='https://cdn.forms-content-1.sg-form.com/ba9eebc9-2cb0-11ee-b588-9eb060adcbeb'
        />
      </div>
    </main>
  )
}
