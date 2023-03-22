import { Project, projects } from '@modules/work'
export default function Work() {
  const work = 'Work shown here'
  return (
    <div id='work'>
      {work}
      <ul>
        {projects?.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </div>
  )
}
