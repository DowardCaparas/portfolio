'use client';

import { navlinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const Navbar = () => {
  /*Open navigation panel */
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen((prev) => !prev);
  };

  /*End of opening navigation panel */

  /*Tap anywhere to close the nav container */
  useEffect(() => {
    const handleOutsideClick = () => {
      if (open) {
        // If navigation is open and click is outside of navigation, close it
        setOpen((prev) => !prev);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
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
    <>
      <nav
        className={`flex max-md:flex-row-reverse justify-between items-center w-full fixed padding z-10
        ${
          scrolled
            ? 'bg-slate-900 bg-opacity-50 backdrop-blur-lg border-b border-violet-500 transition ease-in-out duration-300'
            : ''
        }
        `}
      >
        <Link href='#home' className='font-bold'>
          Dwr.<span className='text-primary_yellow'>Dev</span>
        </Link>

        <div className='flex justify-center items-center gap-8 max-md:hidden'>
          {navlinks.map((link, index) => (
            <div key={index}>
              <Link
                href={link.url}
                className='hover:text-slate-400 uppercase text-sm max-lg:text-[12px]'
              >
                {link.title}
              </Link>
            </div>
          ))}
            <Link href='/CAPARAS_DOUNHUWARD_RESUME.pdf'>
              <CustomButton
                title='Download CV'
                containerStyles='bg-slate-100 rounded-full px-3 py-1 hover:bg-slate-200 
                      active:bg-slate-100 max-md:hidden'
                textStyles='text-slate-900 text-[12px]'
              />
            </Link>
        </div>

        <div className='hidden max-md:flex'>
          <button className='flex flex-col gap-y-1' onClick={handleOpenNav}>
            <div className='w-6 h-1 bg-white rounded-md'></div>
            <div className='w-6 h-1 bg-white rounded-md'></div>
            <div className='w-6 h-1 bg-white rounded-md'></div>
          </button>
        </div>
      </nav>

      {/*Nav container panel*/}
      {open && (
        <motion.div
          variants={containerVariants}
          animate={containerControls}
          initial='close'
          className='w-2/3 h-full bg-slate-100 padding fixed left-0 items-start md:hidden z-10'
        >
          <div className='mt-12 flex flex-col'>
            {navlinks.map((link, index) => (
              <div key={index} className='hover:bg-gray-200 p-3 rounded'>
                <Link
                  href={link.url}
                  onClick={handleOpenNav}
                  className='text-black flex justify-start items-center gap-2 text-sm'
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
      )}
    </>
  );
};

export default Navbar;
