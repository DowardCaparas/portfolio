import { ProjectCard, Title } from "@/components";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <>
      <Title label="Projects" />

      <section>
        <ProjectCard projects={projects} />
      </section>
    </>
  );
};

export default Projects;
