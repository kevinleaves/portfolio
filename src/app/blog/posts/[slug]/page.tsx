import {
  getClient,
  getAllPostsSlugs,
  getPostAndMoreStories,
} from '@sanity/lib/client'
import PostBody from '../../components/PostBody'
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
      <div>My Post: {slug}</div>
      <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
        {post.title}
      </h1>
      <div>{JSON.stringify(post)}</div>
      <PostBody content={post.body} />
      <div>{JSON.stringify(morePosts)}</div>
    </div>
  )
}
