import CoverImage from './CoverImage'
import { Post } from 'types/interfaces'
import Link from 'next/link'
import PostDate from './PostDate'
import AuthorAvatar from './AuthorAvatar'

export default function PostPreview({
  title,
  slug,
  author,
  mainImage,
  publishedAt,
}: Omit<Post, '_id' | 'body' | '_type' | 'authorName' | 'postCategory'>) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage
          slug={slug}
          title={title}
          image={mainImage}
          priority={false}
        />
      </div>
      <h3 className='mb-3 text-xl leading-snug'>
        <Link href={`/blog/posts/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <PostDate dateString={publishedAt} />
      <AuthorAvatar name={author.name} image={author.image} />
    </div>
  )
}
