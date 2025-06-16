import { clientFetch } from '@sanity/lib/client'
import { resumeQuery } from '@sanity/lib/portfolioQueries'
import Link from 'next/link'
import { MdOutlineContactPage } from 'react-icons/md'

interface Props {}

export default async function Resume({}: Props) {
  const { url: resume } = await clientFetch(
    resumeQuery,
    {},
    {
      next: { revalidate: 30 },
    }
  )

  return (
    <div className='group relative self-center'>
      <div className='flex items-center gap-2 text-lg hover:text-purple-500!'>
        <Link href={resume} target='_blank' className='contents'>
          <MdOutlineContactPage />
          <p className='text-lg'>Resume</p>
        </Link>
      </div>
    </div>
  )
}
