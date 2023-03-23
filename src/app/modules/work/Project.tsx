import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
} from '@chakra-ui/react'

type Props = {
  project: {
    id: number
    name: string
    role: string
    description: string
    stack: Array<string>
    link: string
    picture: string
  }
}

export default function Project({ project }: Props) {
  const { name, role, description, stack, link, image } = project
  return (
    <>
      <Card className='max-w-sm'>
        <CardHeader>
          <p>{name}</p>
        </CardHeader>
        <CardBody>
          {/* <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          /> */}
          <Image
            src={`/images/projects/${project.image}`}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack my='5'>
            <p className='text-sm'>{role}</p>
            <p>{description}</p>
            <p>{link}</p>
          </Stack>
        </CardBody>
        <CardFooter>
          <p>{stack}</p>
        </CardFooter>
      </Card>
    </>
  )
}
