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
    </section>
  );
};

export default Resume;
