import {
  getClient,
  getAllPostsSlugs,
  getPostAndMoreStories,
} from '@sanity/lib/client'
import { Post } from 'types/interfaces'
import PostBody from '../../components/PostBody'
import PostPreview from '../../components/PostPreview'
import CoverImage from '../../components/CoverImage'
// statically generate routes at build time. aka grab a list of all possible slugs and builds the routes for me.

// /blog/posts/[slug]
// should return {slug: string}[]
export async function generateStaticParams() {
  const slugs: string[] = await getAllPostsSlugs()
  const res = slugs.map((slug) => ({
    slug,
  }))
  return res
}

export default async function Page({ params }: { params: { slug: string } }) {
  const client = getClient()
  const { slug } = params

  const { post, morePosts } = await getPostAndMoreStories(client, slug)
  return (
    <div>
      <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
        {post.title}
      </h1>
      <div className='mb-8 flex justify-center md:mb-16'>
        <div className='w-11/12 md:w-3/4'>
          <CoverImage
            title={post.title}
            slug={post.slug}
            image={post.mainImage}
          />
        </div>
      </div>
      <PostBody content={post.body} />
      <section>
        <hr className='border-accent-2 mb-24 mt-28' />
        <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
          More Stories
        </h2>
        <div className='mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32'>
          {morePosts.map((post: Post) => (
            <PostPreview
              key={post._id}
              title={post.title}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              author={post.author}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
