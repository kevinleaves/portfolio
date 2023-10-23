import { PortableTextBlock } from '@sanity/types'

export type Project = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  image: string
  publishedAt: Date
  url: string
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
