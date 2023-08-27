'use client'

import { ArrowBackIcon, ArrowLeftIcon } from '@chakra-ui/icons'

export const blogLinks = {
  blog: {
    link: '/blog',
    label: 'Blog Home',
    icon: <ArrowBackIcon boxSize={10} />,
  },
  portfolio: {
    link: '/',
    label: 'Portfolio Home',
    icon: <ArrowLeftIcon boxSize={10} />,
  },
}
