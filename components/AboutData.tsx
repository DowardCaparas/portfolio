"use client";

import React, { useState } from "react";
import { aboutData } from "@/constants";
import Image from "next/image";
import { cvsuLogo } from "@/public/images";

const AboutData = () => {
  const [infoIndex, setInfoIndex] = useState(0);

  return (
    <div className="overflow-hidden flex max-md:flex-col justify-between items-start gap-16">
      <div className="md:w-1/3 flex flex-col gap-4">
        <h1 className=" md:text-2xl lg:text-4xl text-xl font-bold">
          Long practice and experience create magnificent designs
        </h1>
        <p>
          Exceptional designs come from years of practice and experience,
          showcasing refined skills and creative mastery for beautiful, enduring
          results.
        </p>
      </div>

    {/*Skills, Awards, Experience, Credentials, School */}
      <div className="flex flex-col md:w-2/3">

      <div className="mb-10">
        Education
        <div className="flex justify-start items-center gap-2 mt-3">
          <Image
            src={cvsuLogo}
            alt="cvsu logo"
            height={50}
            width={50}
            className="object-contain"
          />
          <div className="flex flex-col justify-start">
            <h3>Cavite State University</h3>
            <p className="text-[12px]">
              Bachelor of Science in Information Technology
            </p>
          </div>
        </div>
        </div>
        
        <div className="flex justify-start items-center gap-6 mb-10">
          {aboutData.map((item, index) => (
            <div
              key={index}
              onClick={() => setInfoIndex(index)}
              className={`${
                infoIndex === index
                  ? "border-b-2 border-secondary_purple text-gray-500"
                  : "hover:text-gray-400 cursor-pointer"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div>
          {aboutData[infoIndex].info.map((item, index) => (
            <div key={index} className="flex max-xl:flex-col">
              <h4 className="text-sm font-medium">{item.title}:</h4>

              <div className="flex">
                {item.lists.map((item, index) => (
                  <div key={index} className="text-[14px] mb-4">
                    {typeof item.data === "string" ? (
                      <p className="ml-2">{item.data}</p>
                    ) : (
                      <div className="ml-2 rounded dark:bg-gray-300 dark:bg-opacity-20 p-1 max-xl:mt-1">
                        <Image
                          src={item.data}
                          alt="icon"
                          height={25}
                          width={25}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default AboutData;
