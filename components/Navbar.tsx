'use client';

import { navlinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import ViewCV from './ViewCV';

const Navbar = () => {
  /*Open navigation panel */
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen((prev) => !prev);
  };

  /*End of opening navigation panel */

  /*Tap anywhere to close the nav container */
  useEffect(() => {
    const handleOutsideClickOrTouch = () => {
      if (open) {
        // If navigation is open and the interaction is outside of navigation, close it
        setOpen((prev) => !prev);
      }
    };

    document.body.addEventListener('click', handleOutsideClickOrTouch);

    return () => {
      document.body.removeEventListener('click', handleOutsideClickOrTouch);
    };
  }, [open]);


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

  /*Animate navigation panel */
  const containerVariants = {
    close: {
      width: '5rem',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      width: '16rem',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  const containerControls = useAnimationControls();

  useEffect(() => {
    if (open) {
      containerControls.start('open');
    } else {
      containerControls.start('close');
    }
  }, [open, containerControls]);

  /*End of Animating navigation panel */


  return (
    <header>
      <nav
        className={`flex justify-between fixed items-center w-full  padding z-10
        ${scrolled
            ? 'bg-slate-900 bg-opacity-50 backdrop-blur-lg border-b border-violet-500 transition ease-in-out duration-300'
            : ''
          }
        `}
      >

        {/*Logo */}
        <div className='flex max-md:flex-row-reverse justify-center items-center gap-6'>
          <Link href='#home' className='font-bold' aria-label='Home' >
            Dwr.<span className='text-primary_yellow'>Dev</span>
          </Link>

          {/*Hamburger icon */}
          <div className='hidden max-md:flex'>
            <button
              className='flex flex-col gap-y-1 bg-primary_gray p-2 rounded
             hover:bg-gray-300 active:bg-primary_gray'
              onClick={handleOpenNav}>

              <div className='w-6 h-1 rounded-md bg-primary_black'></div>
              <div className='w-6 h-1 rounded-md bg-primary_black'></div>
              <div className='w-6 h-1 rounded-md bg-primary_black'></div>

            </button>
          </div>

          {/*Links */}
          <div className='flex justify-center items-center gap-8 max-md:hidden'>
            {navlinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.url}
                  className='hover:text-slate-400 uppercase text-sm max-lg:text-[12px]'
                  aria-label='Link'
                >
                  <span className={`
                      ${scrolled
                      ? 'text-white transition ease-in-out duration-300'
                      : ''
                    }  
                  `}>
                    {link.title}
                  </span>

                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center items-center gap-6'>


          {/*Nav View CV Button */}
          <ViewCV />
        </div>


      </nav>

      {/* Nav container panel */}
      {open && (
        <div className='fixed inset-0 z-20'>
          {/* Overlay */}
          <div 
            className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm max-md:flex hidden' 
            onClick={handleOpenNav}>
          </div>

          <motion.div
            variants={containerVariants}
            animate={containerControls}
            initial='close'
            className='w-2/3 h-full bg-white padding fixed left-0 md:hidden z-30 border-r border-gray-300'
          >
            <div className='mt-12 flex flex-col'>
              {navlinks.map((link, index) => (
                <div key={index} className='hover:bg-gray-200 p-3 rounded'>
                  <Link
                    href={link.url}
                    onClick={handleOpenNav}
                    className='text-black flex justify-start items-center gap-2 text-sm'
                    aria-label='Link'
                  >
                    <Image
                      src={link.icon}
                      alt={link.title}
                      height={25}
                      width={25}
                      className='object-contain'
                    />
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
