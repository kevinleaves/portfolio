import type { SanityDocument } from '@sanity/client'
import PostBody from './PostBody'
import { Post } from 'types/interfaces'

export default function Posts({ posts = [] }: { posts: Post[] }) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    console.log(post)
    console.log(post.author)
    console.log(post.authorName)
  }

  return (
    <main>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}>
              {/* {JSON.stringify(post)} */}
              <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
                {post.title}
              </h1>
              <div>{post.slug?.current}</div>
              <div>{post?.author?.name}</div>
              <PostBody content={post.body} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
