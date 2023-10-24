'use client'

import { motion } from 'framer-motion'
import { LinkIcon } from '@chakra-ui/icons'
import type { Project } from 'types/Project'

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
  project: Project
}
// const baseURL = 'https://kevinle.xyz'
const baseURL = 'http://localhost:3000'

export default function ProjectPreview({ project }: Props) {
  const {
    title,
    slug,
    image,
    mainImage,
    // content: { description },
  } = project
  return (
    <motion.div
      className='z-0 h-full'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Card className='h-full max-w-4xl' size='sm'>
        <CardBody>
          <Image
            objectFit='cover'
            boxSize={'30rem'}
            src={`${mainImage.url}`}
            alt={`${mainImage.alt}`}
            borderRadius='lg'
          />
          <Heading size='md' variant='underline' className='pt-4'>
            {title}
          </Heading>
          <ul className='flex justify-center gap-5'>
            <a
              href={`${baseURL}/${slug.current}`}
              target='blank'
              className='flex justify-center pt-6'
            >
              <Image
                src='/images/logos/github-mark.png'
                boxSize={'2rem'}
                alt='social_logo'
              />
            </a>
            {/* {link2 ? (
              <a
                href={link2}
                target='blank'
                className='flex justify-center pt-6'
              >
                <Box boxSize={'2rem'} onClick={link2}>
                  <LinkIcon className='h-full w-full' />
                </Box>
              </a>
            ) : null} */}
          </ul>
          <Stack my='5'>
            {/* <p className='text-sm'>{role}</p> */}
            <p className='leading-loose'>{'not dynamic'}</p>
          </Stack>
        </CardBody>
        {/* <CardFooter>
          <ul className='flex flex-wrap gap-2'>
            {stack.map((technology, index) => (
              <Badge py='1' px='2' key={index}>
                {technology}
              </Badge>
            ))}
          </ul>
        </CardFooter> */}
      </Card>
    </motion.div>
  )
}
