export interface Image {
  _type?: 'image'
  asset?: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    _type: 'point'
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
}

export interface AuthorReference {
  _type?: 'reference'
  _ref?: string
}

export interface CategoryReference {
  _type?: 'reference'
  _ref?: string
}

export interface Post {
  _type?: 'document'
  _id?: string
  _createdAt?: string
  _updatedAt?: string
  title?: string
  slug?: {
    _type?: 'slug'
    current?: string
  }
  author?: AuthorReference | Author
  mainImage?: Image
  categories?: CategoryReference[]
  publishedAt?: string
  body?: BlockContent
}

// Assuming you have an 'Author' type and 'Category' type defined elsewhere in your schema
export interface Author {
  _type?: 'author'
  _id?: string
  _createdAt?: string
  _updatedAt?: string
  name?: string
  slug?: {
    _type?: 'slug'
    current?: string
  }
  image?: Image
  bio?: Block[]
}

export interface Category {
  _type?: 'category'
  // Add other fields specific to the 'category' type if required
  title?: string
  description?: string
}

export interface Link {
  _type?: 'link'
  href?: string
}

export interface BlockContent {
  _type?: 'array'
  of?: Array<Block | Image | Link>
}

export interface Block {
  _type?: 'block'
  style?: string
  list?: string
  children?: BlockChildren[]
  markDefs?: MarkDef[]
}

export interface BlockChildren {
  _type?: 'span'
  text?: string
  marks?: Mark[]
}

export interface Mark {
  _type?: 'strong' | 'em'
}

export interface MarkDef {
  _type?: 'link'
  href?: string
}
