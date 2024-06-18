"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "@/constants";

//for mobile icons
import { iconsArray } from "./Icons";

const MobileLinks = () => {
  const pathname = usePathname();

  return (
    <div className="w-full mt-1 flex justify-between items-center">
      {navlinks.map((link, index) => {
        const IconComponent = iconsArray.find((icon) => icon.name === link.icon)?.svg;

        return (

          <Link
            key={index}
            href={link.url}
            className={`mobile_link_stroke w-full
                ${
                  pathname === link.url ? "mobile_link_background" : "fill-none"
                }
              `}
          >
            <div
              className={` active:bg-secondary_gray dark:active:bg-zinc-600 flex flex-col 
              justify-center items-center p-1 hover:bg-zinc-300 dark:hover:bg-light_gray
            ${
              pathname === link.url ? "border-b-2 border-secondary_purple" : ""
            }`}
            >
              {/*Icons */}
              {IconComponent && IconComponent}
            </div>
          </Link>

        );
      })}
    </div>
  );
};

export default MobileLinks;
