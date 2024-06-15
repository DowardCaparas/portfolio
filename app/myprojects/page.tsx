import { ProjectCard, Title } from "@/components";
import { projects } from "@/constants";
import PageWrapper from "../PageWrapper";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="w-full container__padding">
        <Title label="Projects" />

        <ProjectCard projects={projects} />
      </section>
    </PageWrapper>
  );
};

export default Projects;
