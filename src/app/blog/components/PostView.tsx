import { Post } from 'types/interfaces'
import PostBody from './PostBody'
import PostDate from './PostDate'
import AuthorAvatar from './AuthorAvatar'
import Link from 'next/link'
import PostCategory from './PostCategory'

interface Props {
  post: Post
}

export default function PostView({ post }: Props) {
  return (
    <li>
      <Link
        className='mb-12 text-center text-4xl font-bold leading-tight tracking-tighter hover:underline md:text-left md:text-5xl md:leading-none lg:text-6xl'
        href={`/blog/posts/${post?.slug}`}
      >
        {post.title}
      </Link>
      <AuthorAvatar name={post.authorName} image={post.author.image} />
      <PostDate dateString={post?.publishedAt} />
      <PostBody content={post.body} />
      <PostCategory category={post.postCategory} />
    </li>
  )
}
