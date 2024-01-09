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
    <div className='group relative self-center '>
      <Link href={resume} className='hover:text-purple-500' target='_blank'>
        <MdOutlineContactPage />
      </Link>
      <span className='pointer-events-none absolute -left-8 top-12 rounded-xl bg-black p-4 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100'>
        Take a look at my resume!
      </span>
    </div>
  )
}
