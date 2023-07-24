import type { SanityDocument } from '@sanity/client'

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <main>
      <ul>
        {posts.map((post) => {
          return <li key={post._id}>{post._createdAt}</li>
        })}
      </ul>
    </main>
  )
}
