import { ProjectPreview } from '@modules/work'
import type { Project } from 'types/Project'


interface Props {
  projects: Array<Project>
}

export default function ProjectsList({ projects }: Props) {
  return (
    <ul className='md: flex h-full w-full flex-col flex-wrap place-items-center gap-4 md:grid md:grid-cols-2 md:gap-y-16'>
      {projects
        .map((project) => (
          <ProjectPreview key={project._id} project={project} />
        ))}
    </ul>
  )
}
