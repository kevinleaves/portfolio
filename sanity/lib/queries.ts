import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  body,
  slug,
  author->,
  "authorName": author->{
    name,
    image,
  }
`

export const postsQuery = groq`*[_type == "post"] {${postFields}}`
