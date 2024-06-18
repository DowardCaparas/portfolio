"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "@/constants";

//for mobile icons
import { iconsArray } from "./Icons";

const MobileLinks = () => {
  const pathname = usePathname();

  return (
    <div className="w-full mt-3 flex justify-between items-center px-2">
      {navlinks.map((link, index) => {
        const IconComponent = iconsArray.find(
          (icon) => icon.name === link.icon
        )?.svg;
        return (
          <div
            key={index}
            className={`active:bg-secondary_gray dark:active:bg-light_gray w-12 flex flex-col 
              justify-center items-center p-1 hover:bg-zinc-300 dark:hover:bg-moreDarked_gray
            ${
              pathname === link.url ? "border-b-2 border-secondary_purple" : ""
            }`}
          >
            <Link
              href={link.url}
              className={`mobile_link_stroke 
                ${
                  pathname === link.url ? "mobile_link_background" : "fill-none"
                }
              `}
            >
              {IconComponent && IconComponent}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileLinks;
