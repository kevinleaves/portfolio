import Link from 'next/link'
/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'
import Code from './Code'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
    code: ({ value }) => {
      return <Code node={...value} />
    },
  },
  marks: {
    link: ({ value, children }) => {
      return (
        <Link href={value?.href} target={'_blank'}>
          {children}
        </Link>
      )
    },
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
