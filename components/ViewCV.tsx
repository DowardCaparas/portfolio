"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/public/images";
import { fileIcon, chevronleft, chevronright } from "@/public";
import React, { useState } from "react";

const ViewCV = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={open ? chevronright : chevronleft}
        alt="chevronleft"
        height={20}
        width={20}
        onClick={() => setOpen((prev) => !prev)}
        className="object-contain -m-5 rounded-full 
        bg-gray-300 hover:bg-gray-400 active:bg-gray-300 z-10"
      />

      <div
        className="border-2 border-gray-600 hover:border-primary_purple active:bg-secondary_purple
    rounded-full flex gap-4 p-1 transition-all duration-200 ease-linear"
      >
        {open && (
          <Link
            href="/CAPARAS_DOUNHUWARD_RESUME.pdf"
            className="bg-primary_gray active:bg-primary_gray hover:bg-gray-300 
          rounded-full transition duration-300 ease-out flex justify-center items-center px-3 gap-1"
            aria-label="Download"
          >
            <Image
              src={fileIcon}
              alt="envelope"
              height={20}
              width={20}
              className="object-contain"
            />

            <span className="text-sm text-primary_black">View CV</span>
          </Link>
        )}

        <Image
          src={profile}
          alt="profile"
          height={35}
          width={35}
          onClick={() => setOpen((prev) => !prev)}
          className="object-contain rounded-full cursor-pointer"
          priority
        />
      </div>
    </>
  );
};

export default ViewCV;
