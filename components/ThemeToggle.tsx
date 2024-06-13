"use client"

import { useTheme } from 'next-themes'
import { sun, moon } from '@/public'
import Image from 'next/image'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const dark = 'dark'

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <div className={`flex border rounded-full p-2 bg-gray-400 transition duration-300 ease-in-out 
      ${theme === dark ? '' : 'flex-row-reverse'} 
      justify-center items-center gap-2`}>
          <Image
              src={theme === dark ? sun : moon}
              alt='icon for dark and light mode'
              height={20}
              width={20}
          />
          <div className='rounded-full p-2 bg-primary_gray'></div>
      </div>
    </button>
  )
}

export default ThemeToggle
