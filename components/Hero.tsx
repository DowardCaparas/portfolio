import Image from "next/image";
import CustomButton from "./CustomButton";
import { HeroBg } from "@/public/images";
import Link from "next/link";
import EmailMe from "./EmailMe";
import { fileIcon, serviceIcon } from "@/public";

const Hero = () => {
  return (
    <section className="mt-28 max-md:mt-40">
      <div
        className="flex max-lg:flex-wrap gap-y-12 justify-between items-center 
        max-lg:flex-col-reverse max-lg:text-center max-lg:justify-center max-lg:items-center"
      >
        <div
          className="flex flex-col justify-start items-start gap-2 lg:w-2/4 
        text-theme-dark max-lg:justify-center max-lg:items-center"
        >
          <h4>Hello, I&apos;m Dounhuward B. Caparas</h4>
          <p className="-mt-2">Frontend Developer</p>
          <h1 className="md:text-4xl lg:text-6xl text-2xl font-semibold mb-2 mt-4">
            Converting imagination into Digital Reality
          </h1>
          <p className="text-sm">
            I&apos;m a 24 year old dedicated for crafting innovative solutions
            through coding and design. Let&apos;s create something extraordinary
            together!
          </p>

          <div className="flex justify-start items-center gap-4 mt-5">
            <Link href="">
              <CustomButton
                title="Services"
                containerStyles="bg-secondary_gray dark:bg-light_gray active:bg-secondary_gray
                hover:shadow-lg dark:hover:shadow-light_gray"
                icon={serviceIcon}
              />
            </Link>

            <Link href="/CAPARAS_DOUNHUWARD_RESUME.pdf" passHref>
              <CustomButton
                title="View CV"
                containerStyles="dark:hover:bg-secondary_black hover:bg-primary_gray"
                icon={fileIcon}
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center max-sm:mt-8 relative">
          <div
            className="absolute bg-white rounded-3xl md:w-96 md:h-96 w-2/3 sm:max-md:h-80 h-60 
          transform rotate-45 bg-gradient-to-r from-secondary_gray to-secondary_purple 
          shadow-md shadow-light_gray object-contain
          "
          ></div>
          <Image
            src={HeroBg}
            alt="Doward Caparas"
            height={502}
            width={610}
            className="object-contain max-lg:w-3/4 w_auto_image z-10"
          />
        </div>
      </div>

      <div>
        <EmailMe />
      </div>
    </section>
  );
};

export default Hero;
