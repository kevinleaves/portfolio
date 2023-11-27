import {groq} from 'next-sanity'

export const getProjectsQuery = groq`*[_type == 'project']{..., "mainImage": {"url": mainImage.asset->url, "alt": mainImage.alt}}`

export const getProjectsSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`

export const getProjectBySlugQuery = groq`*[_type == 'project' && slug.current == $slug][0]{...,
  'images': images[]{
    'url': asset->url,
    'alt': alt
  }
}`

export const resumeQuery = groq`*[_type == "resume"][0]{"url": resume.asset->url}`
