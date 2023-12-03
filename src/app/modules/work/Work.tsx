import { clientFetch } from '@sanity/lib/client'
import { getProjectsQuery } from '@sanity/lib/portfolioQueries'
import ProjectsList from './ProjectsList'
type Props = {}

export default async function Work({}: Props) {
  const projects = await clientFetch(
    getProjectsQuery,
    {},
    { next: { revalidate: 30 } }
  )

  return (
    <section
      id='work'
      className='md:max-w-[100%] flex flex-col items-center justify-center'
    >
      <h2 className='text-2xl font-medium md:text-3xl'>
        What I've been working on
      </h2>
      <p className='py-8 leading-loose'>
        I like to always have a project in the works, and am usually looking out
        for ways to learn something new by building applications that interest
        me. Take a gander at some of the projects I've been working on.
      </p>
      <ProjectsList projects={projects} />
    </section>
  )
}
