import { motion } from 'framer-motion'

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
  Stack,
  Badge,
} from '@chakra-ui/react'

type Props = {
  project: {
    id: number
    name: string
    role: string
    description: string
    stack: Array<string>
    link: string
    image: string
  }
}

export default function Project({ project }: Props) {
  const { name, role, description, stack, link, image } = project
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Card className='max-w-sm' size='sm'>
        <CardHeader>
          <p>{name}</p>
        </CardHeader>
        <Divider borderColor={'#A5C9CA'} />
        <CardBody>
          <Image
            boxSize={'25rem'}
            src={`/images/projects/${image}`}
            alt={name}
            borderRadius='lg'
          />
          <a href={link} target='blank'>
            github
          </a>
          <Stack my='5'>
            <p className='text-sm'>{role}</p>
            <p>{description}</p>
          </Stack>
        </CardBody>
        <Divider borderColor={'#A5C9CA'} />
        <CardFooter>
          <ul className='flex flex-wrap gap-3'>
            {stack.map((technology, index) => (
              <Badge key={index}>{technology}</Badge>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
