import Link from "next/link";
import { socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div
        className="bg-white dark:bg-primary_black rounded-b-full shadow-secondary_gray
      dark:shadow-secondary_purple shadow-lg h-20 w-full transform rotate-180"
      ></div>

      <div className="container__padding bg-white dark:bg-primary_black text-theme-dark relative">
        <div
          className="flex max-md:flex-col justify-between items-start gap-6  
      max-md:justify-center max-md:items-center"
        >
          <div className="flex flex-col max-md:text-center gap-4 md:w-1/2">
            <Link href="/" className="font-bold text-xl" aria-label="Home">
              Dwr.<span className="text-secondary_purple">Dev</span>
            </Link>

            <p>
              Empowering creativity and innovation, one line of code at a time.
              Let&apos;s build the future together.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-2 
        max-md:justify-center max-md:items-center"
          >
            <h3>Connect with me</h3>
            <div className="flex gap-2 ">
              {socials.map((item, index) => (
                <div key={index}>
                  <Link href={item.url}>
                    <Image
                      src={item.icon}
                      alt="socal media icon"
                      height={20}
                      width={20}
                      className="object-contain bg-primary_gray rounded-md w-full p-1 
                      cursor-pointer hover:bg-gray-300"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border_top w-full mt-20"></div>
        <div
          className="w-full mt-10 flex max-md:flex-col max-md:justify-center max-md:items-center
        justify-start items-start gap-2 mb-20"
        >
          <p className="text-[13px] max-md:text-center">
            &copy; 2024 Dounhuward Caparas All Rights Reserved.
          </p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
