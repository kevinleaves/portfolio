import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from '@sanity/lib/client'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface Props {
  asset: SanityImageSource
  alt: string
  caption?: string
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props
  const imageProp = useNextSanityImage(getSanityImageConfig(), asset)
  const { loader, src, width, height } = imageProp
  // console.log(loader, 'loader')
  // TODO: find out what the loader prop does in next/image component
  const imageProps = { src, width, height }
  if (!imageProps) return null

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt}
        sizes='(max-width: 800px) 100vw, 800px'
      />
      {caption && (
        <figcaption className='mt-2 text-center text-sm italic text-gray-500 dark:text-gray-400'>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
