'use client';

import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion'

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
        className='flex border-2 rounded-full w-12 bg-zinc-300 p-1
         dark:bg-secondary_purple transition duration-300 ease-in-out justify-start items-start'
      >
        <motion.div 
       
        animate={theme === 'dark' ? {x:20} : {x:0}}
        transition={{ type: 'tween', stiffness: 30 }}
        className='bg-white rounded-full p-2 '>
        </motion.div>
        
      </div>
    </button>
  );
};

export default ThemeToggle;
