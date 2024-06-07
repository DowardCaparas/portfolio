'use client';

import React, { useState, ChangeEvent, useId } from 'react';
import CustomButton from './CustomButton';
import { sendEmail } from '../actions/sendEmail';
import Image from 'next/image'
import { plane } from '@/public';

const TextComponent = () => {
  
  const id = useId();

  const [formData, setFormData] = useState({senderEmail: '', message: ''})


  //*For Onchange property 
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }

  return (
    <form 
        action={async formData => { await sendEmail(formData)}}
        className='flex flex-col gap-6 md:w-1/2 w-full max-md:mt-10 text-sm'>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-email'}>Your Email</label>
                <input
                  id={id + '-email'}
                  type='email'
                  className='text-primary_black py-2 px-3 rounded border-2 border-gray-300'
                  onChange={handleChange}
                  name='senderEmail'
                  value={formData.senderEmail}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-message'}>Message</label>
                <textarea
                  name='message'
                  id={id + '-message'}
                  value={formData.message}
                  onChange={handleChange}
                  className='resize-none text-primary_black py-2 px-3 rounded text-sm 
                  h-32 border-2 border-gray-300'
                />
              </div>

              <CustomButton 
                title='Send'
                containerStyles='bg-secondary_purple hover:bg-primary_purple
                active:bg-primary_yellow w-1/5' 
                textStyles='text-primary_gray text-sm'  
              />
             
    </form>
  );
};

export default TextComponent;


