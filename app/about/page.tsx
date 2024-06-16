import { personalInfo } from "@/constants";
import { PeronalInfoCard, Title, Skills } from "@/components";
import PageWrapper from "../PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="w-full ">

          <Title label="About Me" />

        <div className="flex max-md:flex-col justify-between items-start gap-6 container__padding">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl w-full border_bottom font-semibold">
              Education
            </h2>

            <div>
              <h3 className="font-medium">Senior High School</h3>
              <p>
                Information and Communications Technology Major in Programming
              </p>
              <p>
                Granby Colleges of Science and Technology Inc. (Ibayo Silangan,
                Naic, Cavite)
              </p>
              <p>(2017 - 2019)</p>
            </div>

            <div>
              <h3 className="font-medium">College</h3>
              <p>Bachelor of Science in Information Technology</p>
              <p>Cavite State University (Bucana, Naic, Cavite)</p>
              <p>(2019 - 2024)</p>
            </div>
          </div>
          
          <PeronalInfoCard info={personalInfo} />

         
        </div>
        <div className="mt-10 container__padding">
            <Skills />
          </div>
      </section>
    </PageWrapper>
  );
};

export default About;
