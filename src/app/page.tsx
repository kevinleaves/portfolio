'use client'

import { useState, useEffect, useReducer } from 'react'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Project from './components/Project'
import About from './components/About'
// import Project from '@components/Project'
// const inter = Inter({ subsets: ['latin'] })
import { projects } from './projects/projectsData.js'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <ul>
        {/* {projects?.map((project) => (
          <Project project={project} />
        ))} */}
        <li>HOME PAGE</li>
      </ul>
      <About />
    </div>
  )
}
