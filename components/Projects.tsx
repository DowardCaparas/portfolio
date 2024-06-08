import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants'
import Title from './Title'

const Projects = () => {
  return (
    <div id='projects' className='w-full container__padding'>

      <Title label='Projects'/>

      <ProjectCard projects={projects}/>

    </div>
  )
}

export default Projects