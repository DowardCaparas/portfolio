
import { AboutData, Title } from "@/components";
import PageWrapper from "../PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="w-full ">
        <Title label="About Me" />
        <div className="container__padding flex justify-between items-center gap-6">
          <div>
            <AboutData />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
