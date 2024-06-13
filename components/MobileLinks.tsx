"use client"

import { CaseIcon, HomeIcon, InfoIcon, PhoneIcon, ServiceIcon } from "./Icons";
import { usePathname } from "next/navigation";

const MobileLinks = () => {


  const pathname = usePathname()


  const home = '/'
  const about = '/about'
  const services = '/myservices'
  const projects = '/myprojects'
  const contact = '/contact'

  return (
    <div className="w-full mt-3 flex justify-between items-center px-2">
      <div className={`${pathname === home 
        ? 'border-b-4 border-primary_purple transition duration-150 ease-in-out' : ''} px-3 py-1`}>
        <HomeIcon />
      </div>

      <div className={`${pathname === about 
        ? 'border-b-4 border-primary_purple transition duration-150 ease-in-out' : ''} px-3 py-1`}>
        <InfoIcon />
      </div>

      <div className={`${pathname === services 
        ? 'border-b-4 border-primary_purple transition duration-150 ease-in-out' : ''} px-3 py-1`}>
        <ServiceIcon />
      </div>

      <div className={`${pathname === projects 
        ? 'border-b-4 border-primary_purple transition duration-150 ease-in-out' : ''} px-3 py-1`}>
        <CaseIcon />
      </div>

      <div className={`${pathname === contact 
        ? 'border-b-4 border-primary_purple transition duration-150 ease-in-out' : ''} px-3 py-1`}>
        <PhoneIcon />
      </div>
    </div>
  );
};

export default MobileLinks;
