"use client";

import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileLinks from "./MobileLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="w-full top-0 container__padding bg-secondary_gray dark:bg-moreDarked_gray 
      z-10 fixed border_bottom pt-5 md:py-5
     "
    >
      <div className={`${pathname === "/" ? "max-md:flex" : "max-md:hidden"}`}>
        <div className="w-full flex justify-between items-center">
          {/*Logo */}
          <div className="flex max-md:flex-row-reverse justify-center items-center gap-6">
            <h3 className="font-bold text-xl mr-3 text-theme-dark">
              Dwr.<span className=" text-secondary_purple">Dev</span>
            </h3>

            {/*Links */}
            <div className="flex justify-center items-center gap-2 max-md:hidden">
              {navlinks.map((link, index) => (
                <div
                  key={index}
                  className={`${
                    pathname === link.url
                      ? ""
                      : "hover:bg-gray-300 hover:dark:bg-secondary_black w-full rounded"
                  }`}
                >
                  <Link href={link.url} aria-label="Link">
                    <div
                      className={`py-1 px-3 dark:text-white text-sm
                          ${
                            pathname === link.url
                              ? "border-b-2 border-light_gray text-md"
                              : ""
                          }`}
                    >
                      {link.title}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <ThemeToggle />
        </div>
      </div>

      <div className="hidden max-md:flex">
        <MobileLinks />
      </div>
    </nav>
  );
};

export default Navbar;
