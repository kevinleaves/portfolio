import PostsList from './components/PostsList'
import { clientFetch } from '@sanity/lib/client'
import { postsQuery } from '@sanity/lib/blogQueries'
export default async function BlogPage() {
  const allPosts = await clientFetch(
    postsQuery,
    {},
    { next: { tags: ['blog'], revalidate: 30 } }
  )
  //https://github.com/sanity-io/sanity-template-nextjs-app-router-personal-website/blob/main/app/api/revalidate/route.ts
  return (
    <main className='mx-4 flex flex-col md:mx-20'>
      <header className='text-center text-4xl font-bold leading-tight tracking-tighter md:mb-4 md:text-left md:text-5xl md:leading-none lg:text-6xl'>
        <h1>musings about life, tech, & more</h1>
        <h2>- kevin le</h2>
      </header>
      <hr className='my-4 border-2 md:my-8' />
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
