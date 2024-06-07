'use client'

import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/public/images'
import CustomButton from './CustomButton'
import { fileIcon } from '@/public'
import { useState } from 'react'

const ViewCV = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='border-2 border-secondary_purple rounded-full flex gap-4 p-1'>

      {open && (
        <Link
          href='/CAPARAS_DOUNHUWARD_RESUME.pdf'
          className='bg-primary_gray active:bg-primary_gray hover:bg-gray-300 
          rounded-full transition duration-300 ease-out flex justify-center items-center px-3 gap-1'
          aria-label='Download'
        >

          <Image
            src={fileIcon}
            alt='envelope'
            height={20}
            width={20}
            className='object-contain'
          />

          <span className='text-sm text-primary_black'>View CV</span>

        </Link>
      )}

      <Image
        src={profile}
        alt='profile'
        height={40}
        width={40}
        onClick={() => setOpen(prev => !prev)}
        className='object-contain rounded-full cursor-pointer hover:border border-white'
      />

    </div>
  )
}

export default ViewCV