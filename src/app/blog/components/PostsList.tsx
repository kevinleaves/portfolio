import PostBody from './PostBody'
import PostDate from './PostDate'
import AuthorAvatar from './AuthorAvatar'
import Link from 'next/link'
import Post from './Post'

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
        {posts.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </ul>
    </main>
  )
}
