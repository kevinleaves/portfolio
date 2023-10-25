import { clientFetch } from '@sanity/lib/client'
import { resumeQuery } from '@sanity/lib/queries'
import Link from 'next/link'

interface Props {

}

export default async function Resume ({  }: Props) {
  const {url: resume} = await clientFetch(resumeQuery, {}, {
    next: {revalidate: 30}
  })

  return (
    <Link
      href={resume}
      className='hover:text-purple-500'
      target='_blank'
    >
    resume
    </Link>
  );
}