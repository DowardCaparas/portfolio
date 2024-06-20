import Link from "next/link";
import { socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary_gray dark:bg-moreDarked_gray border_top text-theme-dark ">
      <div className="flex max-md:flex-col justify-between items-start gap-6 container__padding max-md:justify-center max-md:items-center">
        <div className="flex flex-col max-md:text-center gap-4 md:w-1/2 mt-10">
          <Link href="/" className="font-bold text-xl" aria-label="Home">
            Dwr.<span className="text-secondary_purple">Dev</span>
          </Link>

          <p>
            Empowering creativity and innovation, one line of code at a time.
            Let&apos;s build the future together.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 mt-10 
        max-md:justify-center max-md:items-center">
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
      <div
        className="w-full mt-16 flex max-md:flex-col max-md:justify-center max-md:items-center
        justify-start items-start gap-2 py-5 container__padding"
      >
        <p>Copyright &copy; 2024 Dounhuward Caparas</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
