import CoverImage from "./CoverImage"
import { Post } from "types/interfaces"
import Link from "next/link"
import PostDate from "./PostDate"
import AuthorImage from "./AvatarImage"

export default function PostPreview ({title, slug, author, mainImage, publishedAt}: Omit<Post, '_id' | 'body' | '_type' | 'authorName'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={mainImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/blog/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <PostDate dateString={publishedAt} />
      </div>
      {/* {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>} */}
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
      {/* <span>{JSON.stringify(author)}</span> */}
      <AuthorImage name={author.name} image={author.image}/>
    </div>
  )
}