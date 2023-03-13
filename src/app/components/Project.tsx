type ProjectProps = {
  project: {
    name: string
    role: string
    description: string
    stack: Array<string>
    link: string
  }
}

export default function Project({ project }: ProjectProps) {
  const { name, role, description, stack, link } = project
  return (
    <div>
      <p>{name}</p>
      <p>{role}</p>
      <p>{description}</p>
      <p>{stack}</p>
      <p>{link}</p>
    </div>
  )
}
