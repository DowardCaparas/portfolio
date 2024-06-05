import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants'

const Projects = () => {
  return (
    <div id='projects' className='w-full container__padding'>
        <div className='flex flex-col justify-center items-center gap-2 mb-10'>
          <h2 className='text-2xl font-medium'>Projects</h2>
          <div className='border-r h-5 border-primary_blue'></div>
      </div>

      <ProjectCard projects={projects}/>

    </div>
  )
}

export default Projects