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

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`
