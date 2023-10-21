import { motion } from 'framer-motion'
import { LinkIcon } from '@chakra-ui/icons'
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
  Stack,
  Badge,
  Heading,
  Box,
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
    link2?: string
  }
}

export default function Project({ project }: Props) {
  const { name, role, description, stack, link, image, link2 } = project
  return (
    <motion.div
      className='z-0 h-full'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Card className='h-full max-w-sm' size='sm'>
        <CardHeader>
          <Heading size='md' variant='underline' fontStyle={'italic'}>
            {name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image
            objectFit='cover'
            boxSize={'30rem'}
            src={`/images/projects/${image}`}
            alt={name}
            borderRadius='lg'
          />
          <ul className='flex justify-center gap-5'>
            <a href={link} target='blank' className='flex justify-center pt-6'>
              <Image
                src='/images/logos/github-mark.png'
                boxSize={'2rem'}
                alt='social_logo'
              />
            </a>
            {link2 ? (
              <a
                href={link2}
                target='blank'
                className='flex justify-center pt-6'
              >
                <Box boxSize={'2rem'} onClick={link2}>
                  <LinkIcon className='h-full w-full' />
                </Box>
              </a>
            ) : null}
          </ul>
          <Stack my='5'>
            <p className='text-sm'>{role}</p>
            <p className='leading-loose'>{description}</p>
          </Stack>
        </CardBody>
        <CardFooter>
          <ul className='flex flex-wrap gap-2'>
            {stack.map((technology, index) => (
              <Badge py='1' px='2' key={index}>
                {technology}
              </Badge>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
