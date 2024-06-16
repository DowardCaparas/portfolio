'use client';

import { navlinks } from '@/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileLinks from './MobileLinks';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();

  /*Add background when scrolled */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*End of adding background when scrolled */

  return (
    <nav className='w-full top-0 nav__padding z-10 fixed border_bottom md:py-5
     bg-primary_gray dark:bg-darked_gray'>

      <div className='w-full flex justify-between items-center'>
        {/*Logo */}
        <div className='flex max-md:flex-row-reverse justify-center items-center gap-6'>
          <Link 
            href='/' 
            className='font-bold text-xl mr-3 text-theme-dark' 
            aria-label='Home'>
            Dwr.<span className=' text-secondary_purple'>Dev</span>
          </Link>

          {/*Links */}
          <div className='flex justify-center items-center gap-2 max-md:hidden'>
            {navlinks.map((link, index) => (
              <div
                key={index}
                className={`${
                  pathname === link.url
                    ? ''
                    : 'hover:bg-gray-300 hover:dark:bg-secondary_black w-full rounded transition duration-150 ease-in-out'
                }`}
              >
                <Link
                  href={link.url}  
                  aria-label='Link'
                >

                    <div className={`py-1 px-3 dark:text-white text-sm
                          ${pathname === link.url
                              ? 'border-b-2 border-gray-300 text-md'
                              : ''
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

      <div className='hidden max-md:flex'>
          <MobileLinks />
      </div>

    </nav>
  );
};

export default Navbar;
