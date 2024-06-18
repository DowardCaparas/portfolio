import { ProjectCard, Title } from '@/components';
import { projects } from '@/constants';
import PageWrapper from '../PageWrapper';

const Projects = () => {
  return (

      <section className='w-full '>

        <Title label='Projects' />

        <div className='container__padding'>
          <ProjectCard projects={projects} />
        </div>

      </section>

  );
};

export default Projects;
