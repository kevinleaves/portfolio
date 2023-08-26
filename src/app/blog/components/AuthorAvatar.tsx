import { urlForImage } from '@sanity/lib/image'
import Image from 'next/image'
import { Author } from 'types/interfaces'

export default function AuthorAvatar({ name, image }: Author) {
  return (
    <div className='my-4 flex items-center'>
      <div className='relative mr-4 h-12 w-12'>
        <Image
          className='rounded-full'
          width={96}
          height={96}
          alt={`Avatar Image for author.image.asset._ref`}
          src={urlForImage(image?.asset._ref)
            .height(96)
            .width(96)
            .fit('crop')
            .url()}
        />
      </div>
      <div className='text-sm font-bold'>{name}</div>
    </div>
  )
}
