'use client'

import { motion } from 'framer-motion'
import type { Project } from 'types/Project'

import { Card, CardBody, Image, Heading, Flex } from '@chakra-ui/react'

type Props = {
  project: Project
}
const baseURL = 'https://kevinle.xyz'
// const baseURL = 'http://localhost:3000'

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
          <Flex direction={'column'} align={'center'}>
            <Image
              objectFit='cover'
              boxSize={'35rem'}
              src={`${mainImage.url}`}
              alt={`${mainImage.alt}`}
              borderRadius='lg'
            />
            <Heading size='md' variant='underline' className='py-4'>
              {title}
            </Heading>
            <p className='leading-loose'>{project.previewDescription}</p>
            <ul className='flex items-center justify-center gap-5'>
              <a
                href={`${baseURL}/${slug.current}`}
                target='blank'
                className='flex justify-center pt-6 text-sm font-semibold after:content-["↗"] hover:underline'
              >
                View Project
              </a>
              <a
                href={project.githubURL}
                target='blank'
                className='flex justify-center pt-6'
              >
                <Image
                  src='/images/logos/github-mark.png'
                  boxSize={'2rem'}
                  alt='social_logo'
                />
              </a>
            </ul>
          </Flex>
        </CardBody>
      </Card>
    </motion.div>
  )
}
