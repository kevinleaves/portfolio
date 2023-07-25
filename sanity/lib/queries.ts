import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _createdAt,
  _updatedAt,
  publishedAt,
  body,
  "slug": slug.current,
  author->,
  "authorName": author->{
    name,
    image,
  }
`

export const postsQuery = groq`*[_type == "post"] {${postFields}}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
