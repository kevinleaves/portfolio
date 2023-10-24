import { clientFetch } from '@sanity/lib/client'
import { getProjectsQuery } from '@sanity/lib/queries'
import ProjectsList from './ProjectsList'
type Props = {}


export default async function Work({}: Props) {

  const projects = await clientFetch(getProjectsQuery, {}, { next: { revalidate: 30 } })


  return (
    <section
      id='work'
      className='flex flex-col items-center justify-center md:max-w-[100%]'
    >
      <h2 className='text-3xl font-medium'>What I've been working on</h2>
      <p className='py-8 leading-loose'>
        I like to always have a project in the works, and am usually looking out
        for ways to learn something new by building applications that interest
        me. Take a gander at some of the projects I've been working on.
      </p>
      <ProjectsList projects={projects} />
    </section>
  )
}
