import { motion } from 'framer-motion'

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
      <Card className='max-w-sm'>
        <CardHeader>
          <p>{name}</p>
        </CardHeader>
        <CardBody>
          <Image
            boxSize={'25rem'}
            src={`/images/projects/${image}`}
            alt={name}
            borderRadius='lg'
          />
          <a href={link} target='_blank'>
            github
          </a>
          <Stack my='5'>
            <p className='text-sm'>{role}</p>
            <p>{description}</p>
          </Stack>
        </CardBody>
        <CardFooter>
          <p
            className='flex flex-wrap
          '
          >
            {stack}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
