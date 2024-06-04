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
    setOpen(prev => (
      !prev
    ))
  }

  const topVariant = {
    opened: {
      rotate: 45,
    },
    closed: {
      rotate: 0,
    },
  };

  const midVariant = {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const botVariant = {
    opened: {
      rotate: -45,
    },
    closed: {
      rotate: 0,
    },
  };

    /*End of opening navigation panel */


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
        className={`flex justify-between items-center w-full fixed padding 
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
              <Link href={link.url} className='hover:text-slate-400 uppercase text-sm max-lg:text-[12px]'>
                {link.title}
              </Link>
            </div>
          ))}

          <CustomButton
            title='Download CV'
            containerStyles='bg-slate-100 rounded-full px-3 py-1 hover:bg-slate-200 
                active:bg-slate-100 max-md:hidden'
            textStyles='text-slate-900 text-[12px]'
          />

        </div>

        

        <div className='hidden max-md:flex'>
          <button
            className='flex flex-col gap-y-1' onClick={handleOpenNav}
          >
            <motion.div
              variants={topVariant}
              animate={open ? 'opened' : 'closed'}
              className={`w-6 h-1 bg-white rounded-md origin-left`}
            ></motion.div>

            <motion.div
              variants={midVariant}
              animate={open ? 'opened' : 'closed'}
              className={`w-6 h-1 bg-white rounded-md`}
            ></motion.div>

            <motion.div
              variants={botVariant}
              animate={open ? 'opened' : 'closed'}
              className={`'w-6 h-1 bg-white rounded-md origin-left`}
            ></motion.div>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          variants={containerVariants}
          animate={containerControls}
          initial='close'
          className='w-2/3 h-full bg-slate-100 padding mt-16 fixed right-0 items-start md:hidden'>  

              <div className='mt-4 flex flex-col gap-4 '>
              {navlinks.map((link, index) => (
                      <div key={index} className='flex justify-start item gap-2'>

                        <Image 
                          src={link.icon} 
                          alt={link.title}
                          height={20}
                          width={20}
                          className='object-contain'
                        />

                        <Link 
                          href={link.url} 
                          onClick={handleOpenNav}
                          className='text-black'>
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
