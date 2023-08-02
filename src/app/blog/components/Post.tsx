import PostBody from './PostBody'
import PostDate from './PostDate'
import AuthorAvatar from './AuthorAvatar'
import { Post } from 'types/interfaces'
import Link from 'next/link'

interface Props {
  post: Post
}

export default function Post({post}: Props) {
  return (
    <li>
      <Link
        className='mb-12 text-center text-4xl font-bold leading-tight tracking-tighter hover:underline md:text-left md:text-5xl md:leading-none lg:text-6xl'
        href={`/blog/posts/${post?.slug}`}
      >
        {post.title}
      </Link>
      <AuthorAvatar name={post.authorName} image={post.author.image}/>
      <PostDate dateString={post?.publishedAt} />
      <PostBody content={post.body} />
    </li>
  )
}
