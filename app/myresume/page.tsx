"use client";

import { Title, CustomButton } from "@/components";
import { download } from "@/public";
import Link from "next/link";

const Resume = () => {
  return (
    <section className="flex flex-col gap-y-14">
      <div className="flex justify-between items-center">
        <Title label="Curriculum Vitae __" />
        <Link href="/CAPARAS_DOUNHUWARD_RESUME.pdf" passHref>
          <CustomButton
            title="Download"
            icon={download}
            containerStyles="border hover:bg-gray-300 hover:bg-opacity-20 active:bg-gray-300"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1>PROFILE SUMMARY</h1>
        <p>
          I&apos;m a 24-year-old Fresh Graduate with a Bachelor of Science in
          Information Technology dedicated and motivated .Born on September 04,
          1999, I have a strong passion for learning and personal growth.
        </p>

        <h1>OBJECTIVE</h1>
        <p>
          To leverage my skills in frontend development, problem-solving, and
          design, alongside my passion for continuous learning, to contribute to
          innovative projects and collaborate with a dynamic team in a
          forward-thinking company.
        </p>

        <h1>WORK EXPERIENCE</h1>
        <div className="flex max-md:flex-col flex-between justify-start items-start gap-x-16 gap-y-4">
          <div className="flex flex-col gap-2">
            <p>
              Service Crew
              <br />
              Jollibee
              <br />
              April/2018 - July/2018
            </p>
            <p>
              I worked passionately with customers in a high-standard fast-food
              chain.
            </p>
            <p>
              Maintained a high tip average thanks to consistent customer
              satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Internship
              <br />
              Philippine International Manufacturing and Engineering Services
              <br />
              October/2023 - December/2023
            </p>
            <p>
              I contributed to high-performance website maintenance by updating
              the content.
            </p>
            <p>
              I participated in video editing tasks, meticulously refining
              visual content to align with project specifications.
            </p>
          </div>
        </div>

        <h1>EDUCATION</h1>
        <div className="flex max-md:flex-col flex-between justify-start items-start gap-x-40 gap-y-4">
          <p>
            College
            <br />
            Bachelor of Science in Information Technology
            <br />
            Cavite State University (Bucana, Naic, Cavite)
            <br />
            (2019 - 2024)
          </p>
          <p>
            Senior High School
            <br />
            Information and Communications Technology Major in Programming
            <br />
            Granby Colleges of Science and Technology Inc. (Ibayo Silangan,
            Naic, Cavite)
            <br />
            (With Honor) (2017 - 2019)
          </p>
        </div>

        <h1>SKILLS/AWARDS</h1>
        <div className="flex max-md:flex-col flex-between justify-start items-start gap-x-28 gap-y-4">
          <p>
            Web Development: HTML, CSS, JavaScript, TypeScript, <br />
            ReactJS,Next.js, Framer motion, Tailwind CSS
            <br />
            Version Control: Git 
            <br />
            Graphic Design: Adobe Photoshop, Canva
            <br />
            Responsive UI Design
          </p>
          <p>
          Best Capstone Project (2023)
            <br />
            Best in Computer (2014) (Theory) 
            <br />
            Best in Computer (2015) (Hands-On)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
