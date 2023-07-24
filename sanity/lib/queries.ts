import { groq } from 'next-sanity'

/**
groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`

groq`*[_type == "post"]`
 */

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  body,
  "slug": slug.current,
  author->,
`

export const postsQuery = groq`*[_type == "post"] {${postFields}}`

// {
//   _id,
//   title,
//   "slug": slug.current,
//   "image": image.asset->url,
//   url,
//   content
// }
