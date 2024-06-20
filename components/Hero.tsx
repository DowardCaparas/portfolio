import Image from "next/image";
import CustomButton from "./CustomButton";
import { HeroBg } from "@/public/images";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const Hero = () => {

  return (

      <section
        className="flex max-lg:flex-wrap gap-x-20 gap-y-12 
        justify-between items-start md:mt-44 mt-32 max-lg:flex-col-reverse max-lg:text-center
        max-lg:justify-center max-lg:items-center"
      >
        <div
          className="flex flex-col justify-start items-start gap-2 lg:w-2/4 
        text-theme-dark max-lg:justify-center max-lg:items-center"
        >
          <h4>Hello, I&apos;m Dounhuward B. Caparas</h4>
          <p className="-mt-2">Frontend Developer</p>
          <h1 className="lg:text-4xl text-2xl font-semibold mb-2 mt-4">
            Converting imagination into Digital Reality
          </h1>
          <p className="text-sm">
            I&apos;m a 24 year old dedicated for crafting innovative solutions through coding
            and design. Let&apos;s create something extraordinary together!
          </p>

          <div className="flex justify-start items-center gap-4 mt-5">
            <Link href="/myservices">
              <CustomButton
                title="Services"
                containerStyles="bg-secondary_purple hover:bg-primary_purple
                                 active:bg-secondary_purple"
                textStyles="text-white text-md font-semibold"
              />
            </Link>

            <Link href="/CAPARAS_DOUNHUWARD_RESUME.pdf" passHref>
              <CustomButton
                title="View CV"
                containerStyles="border-2 border-secondary_gray dark:border-primary_gray 
                                 hover:bg-light_gray active:bg-transparent"
                textStyles="text-md font-semibold text-light_gray dark:text-secondary_gray"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center max-sm:mt-8">
          <Image
            src={HeroBg}
            alt="Doward Caparas"
            height={502}
            width={610}
            className="object-contain max-lg:w-3/4 w_auto_image"
          />
        </div>
      </section>

  );
};

export default Hero;
