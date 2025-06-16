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
  console.log(project)
  return (
    <motion.div
      className='z-0 h-full'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Card className='flex h-full flex-col p-2' size='sm' maxW={'sm'}>
        <CardBody className='flex flex-1 flex-col'>
          <Flex
            direction={'column'}
            align={'center'}
            gap={'4px'}
            className='flex-1'
          >
            <Image
              objectFit='cover'
              boxSize={'20rem'}
              src={`${mainImage.url}`}
              alt={`${mainImage.alt}`}
              borderRadius='lg'
              className='h-48 w-full object-cover'
            />
            <Heading
              size='sm'
              variant='underline'
              className='w-full py-4 text-center'
            >
              {title}
            </Heading>
            <p className='flex-1 text-xs leading-loose'>
              {project.previewDescription}
            </p>
            <div className='mt-4 w-full'>
              <ul className='flex items-center justify-center gap-4'>
                <a
                  href={`${baseURL}/${slug.current}`}
                  target='blank'
                  className='flex justify-center text-sm font-semibold after:content-["↗"] hover:underline'
                >
                  View Project
                </a>
                <a
                  href={project.githubURL}
                  target='blank'
                  className='flex justify-center rounded-xl border-2 border-black shadow-2xl transition-all hover:-translate-y-2'
                >
                  <Image
                    src='/images/logos/github-mark.png'
                    boxSize={'2rem'}
                    alt='social_logo'
                  />
                </a>
              </ul>
            </div>
          </Flex>
        </CardBody>
      </Card>
    </motion.div>
  )
}
