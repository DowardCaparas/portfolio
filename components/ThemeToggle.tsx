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
    <button onClick={handleClick} className='flex justify-center items-center gap-2'>
       <Image
          src={moon}
          alt='moon'
          height={20}
          width={20}
          className='object-contain dark:opacity-90 opacity-0 -mr-7 transition '
       />
       <Image
          src={sun}
          alt='sun'
          height={20}
          width={20}
          className='object-contain dark:opacity-0 opacity-90'
       />
    </button>
  );
};

export default ThemeToggle;
