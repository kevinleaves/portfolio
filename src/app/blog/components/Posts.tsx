import type { SanityDocument } from '@sanity/client'

export default function Posts({ posts = [] }: { posts: [] }) {
  return (
    <main>
      <ul>
        {posts.map((post) => {
          return <li key={post._id}>{JSON.stringify(post)}</li>
        })}
      </ul>
    </main>
  )
}
