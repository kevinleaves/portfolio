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
  "author": author->{name, image},
  mainImage,
  "mainImageAsset": mainImage.asset->,
  "mainImageUrl": mainImage.asset->.url,
  "authorName": author->.name,
  "postCategory": categories->.title,
`

export const postsQuery = groq`*[_type == "post" && categories->.title != "Personal"] | order(_updatedAt desc) {${postFields}}`

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
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug && categories->.title != "Personal"] | order(date desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`
