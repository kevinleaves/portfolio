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
  _type: 'document'
  _id: string
  _createdAt?: string
  _updatedAt?: string
  title: string
  slug: string
  author: Author | AuthorReference
  mainImage?: Image
  categories?: CategoryReference[]
  publishedAt?: string
  body: BlockContent
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

export interface GetListResponse {
  name: string
  id: string
  contact_count: number
  contact_sample: Contact[]
  _metadata: {
    self: string
  }
}

export interface Contact {
  address_line_1: string
  address_line_2: string
  alternate_emails: null
  city: string
  country: string
  email: string
  first_name: string
  id: string
  last_name: string
  list_ids: string[]
  postal_code: string
  state_province_region: string
  phone_number: string
  whatsapp: string
  line: string
  facebook: string
  unique_name: string
  _metadata: {
    self: string
  }
  custom_fields: any // You can replace 'any' with a more specific type if you know the structure of custom_fields.
  created_at: string
  updated_at: string
}
