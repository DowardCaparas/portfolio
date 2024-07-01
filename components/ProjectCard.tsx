"use client";

import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { arrowup } from "@/public";
import { chevrondown, chevronup } from "@/public";
import React, { useState } from "react";

interface ProjectList {
  projects: ProjectCardProps[];
}

const ProjectCard = ({ projects }: ProjectList) => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});

  const toggleOpen = (index: number) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-full grid grid-cols-1 md:max-md:grid-cols-2 grid-flow-row gap-6 timeline">
      {projects.map((item, index) => (
        
        <div
          key={index}
          className={`container max-sm:w-full ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="flex flex-col justify-start items-start gap-4 p-5 rounded dark:bg-transparent shadow-sm shadow-light_gray bg-primary_gray">
            <Link
              href={item.url}
              className="flex justify-center items-center gap-2"
              aria-label="Link"
            >
              <Image
                src={item.image}
                alt={item.name}
                height={450}
                width={500}
                className="object-contain w-full"
                quality={100}
              />
            </Link>

            <div className="w-full flex flex-col justify-start items-start gap-4 mt-3 border-t py-1 border-gray-300">
              <div className="flex justify-between items-center w-full">
                <p>{item.category}</p>
                <p>{item.date}</p>
              </div>

              <h3 className="text-xl font-medium">{item.name}</h3>
              <p className="max-lg:text-[12px]">
                {open[index]
                  ? item.description
                  : `${item.description.substring(0, 90)}...`}
              </p>

              <div className="flex justify-between items-center w-full">
                <div className="bg-white hover:bg-gray-200 active:bg-gray-300 py-2 px-3 rounded">
                  <Link
                    href={item.url}
                    className="flex justify-center items-center gap-2"
                    aria-label="Link"
                  >
                    <p className="text-primary_black text-[12px]">Live Demo</p>
                    <Image
                      src={arrowup}
                      alt="arrow"
                      height={20}
                      width={20}
                      quality={100}
                      className="object-contain"
                    />
                  </Link>
                </div>

                <Image
                  src={open[index] ? chevronup : chevrondown}
                  alt="chevron"
                  height={25}
                  width={25}
                  quality={100}
                  onClick={() => toggleOpen(index)}
                  className="object-contain bg-white hover:bg-gray-200 active:bg-gray-300 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
