import { groq } from 'next-sanity'

/**
groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`

groq`*[_type == "post"]`
 */
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`
