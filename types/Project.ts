import { PortableTextBlock } from '@sanity/types'

export type Project = {
  _id: string
  _createdAt: Date
  title: string
  slug: { current: string }
  image: string
  publishedAt: Date
  mainImage: {
    url: string
    alt: string
  }
  previewDescription: string
  url: string
  githubURL: string
  images: {
    url: string
    alt: string
  }[]
  content: {
    why: PortableTextBlock[]
    description: PortableTextBlock[]
    reflection: PortableTextBlock[]
    challenges: PortableTextBlock[]
    spotlight: PortableTextBlock[]
  }
}
