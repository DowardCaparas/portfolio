import { AboutData, Title } from "@/components";

const About = () => {
  return (
    <section className="flex flex-col gap-y-14">
      <Title label="Who am I __" />
      <AboutData />
    </section>
  );
};

export default About;
