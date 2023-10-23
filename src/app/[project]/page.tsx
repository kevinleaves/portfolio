import { PortableText } from '@portabletext/react'
import { getProject } from '@sanity/lib/client'
interface Props {
  params: { project: string }
}

export default async function ProjectPage({ params }: Props) {
  const { project: slug } = params
  const project = await getProject(slug)
  return (
    <>
      <div>{project.title}</div>
      <p>{project.url}</p>
      {/* can't style portabletext directly. have to wrap the component and style that */}
      <p className=''>
        <PortableText value={project.content.why} />
      </p>
      <PortableText value={project.content.challenges} />
      <PortableText value={project.content.description} />
      <PortableText value={project.content.spotlight} />
      <PortableText value={project.content.reflection} />
    </>
  )
}
