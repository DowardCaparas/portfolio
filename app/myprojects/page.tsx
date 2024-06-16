import { ProjectCard, Title } from '@/components';
import { projects } from '@/constants';
import PageWrapper from '../PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>
      <section className='w-full '>

        <Title label='Projects' />

        <div className='container__padding'>
          <ProjectCard projects={projects} />
        </div>

      </section>
    </PageWrapper>
  );
};

export default Projects;
