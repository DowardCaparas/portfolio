import { ProjectCard, Title } from "@/components";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section className="flex flex-col gap-y-14">
      <Title label="My Works __" />
      <ProjectCard projects={projects} />
    </section>
  );
};

export default Projects;
