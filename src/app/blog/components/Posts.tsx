import type { SanityDocument } from '@sanity/client'
import PostBody from './PostBody'
import PostDate from './PostDate'
import { Post } from 'types/interfaces'
import Link from 'next/link'
export default function Posts({ posts = [] }: { posts: Post[] }) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    // console.log(post)
    // console.log(post.author)
    // console.log(post.authorName)
    // console.log(post._createdAt)
    // console.log(post._updatedAt)
  }

  return (
    <main>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}>
              <Link
                className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter hover:underline md:text-left md:text-7xl md:leading-none lg:text-8xl'
                href={`/blog/posts/${post?.slug}`}
              >
                {post.title}
              </Link>
              <div>{post?.author?.name}</div>
              <PostDate dateString={post?.publishedAt} />
              <PostBody content={post.body} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
