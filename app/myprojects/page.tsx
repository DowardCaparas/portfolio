
import { ProjectCard, Title } from '@/components'
import { projects } from '@/constants'

const Projects = () => {
  return (
    <section id='projects' className='w-full container__padding'>

      <Title label='Projects'/>

      <ProjectCard projects={projects}/>

    </section>
  )
}

export default Projects