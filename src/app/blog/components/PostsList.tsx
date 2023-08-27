import PostView from './PostView'
import { Post } from 'types/interfaces'

interface Props {
  posts: Post[]
}

export default function Posts({ posts }: Props) {
  return (
    <main>
      <ul className='flex flex-col gap-4'>
        {posts.map((post) => (
          <>
            <PostView key={post?._id} post={post} />
            <hr className='my-16 border-2'></hr>
          </>
        ))}
      </ul>
    </main>
  )
}
