import { Project } from '@modules/work'

interface Props {
  projects: {
    id: number
    name: string
    role: string
    description: string
    stack: string[]
    link: string
    link2?: string
    image: string
  }[]
}

export default function ProjectsList({ projects }: Props) {
  return (
    <ul className='md: flex h-full w-full flex-col flex-wrap place-items-center gap-4 md:grid md:grid-cols-2 md:gap-y-16'>
      {projects
        ?.sort((a, b) => {
          return b.id - a.id
        })
        .map((project) => (
          <Project key={project.id} project={project} />
        ))}
    </ul>
  )
}
