import { Project, projects } from '@modules/work'
export default function Work() {
  const work = 'Work shown here'
  return (
    <div id='work' className='border-b-2 border-solid border-red-400'>
      {work}
      <ul>
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}
