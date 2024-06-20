'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { sun, moon } from '@/public';

const ThemeToggle = () => {

  //adding darkmode
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || 
        (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  //end of adding darkmode 


  return (
    <button onClick={handleClick}>
      <div
        className='flex rounded-full w-12 bg-zinc-500 p-2 relative ring-2 ring-light_gray 
        dark:ring-primary_gray dark:bg-secondary_purple transition duration-150 ease-in-out justify-center 
        items-center'
      >
        <motion.div 
       
        animate={theme === 'dark' ? {x:14} : {x:-14}}
        transition={{ type: 'tween'}}
        className='bg-white rounded-full p-3 z-10 absolute'>
        </motion.div>

        <div className='absolute flex justify-between items-center'>
          <Image 
              src={moon}
              alt='moon'
              height={15}
              width={15}
              className='object-contain dark:opacity-100 opacity-0 -translate-x-2'
          />
          <Image 
              src={sun}
              alt='moon'
              height={15}
              width={15}
              className='object-contain dark:opacity-0 translate-x-2'
          />
        </div>
        
      </div>
    </button>
  );
};

export default ThemeToggle;
