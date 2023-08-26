import PostsList from './components/PostsList'
import { clientFetch } from '@sanity/lib/client'
import { postsQuery } from '@sanity/lib/queries'
export default async function BlogPage() {
  const allPosts = await clientFetch(postsQuery)
  return (
    <main className='flex flex-col'>
      <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
        musings about life, tech, & more
        <h2>- kevin le</h2>
      </h1>
      <hr className='my-16 border-2' />
      <PostsList posts={allPosts} />
      <div className='flex h-screen w-full flex-col'>
        <iframe
          className='h-full w-full'
          src='https://cdn.forms-content-1.sg-form.com/ba9eebc9-2cb0-11ee-b588-9eb060adcbeb'
        />
      </div>
    </main>
  )
}
