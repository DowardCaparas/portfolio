'use client';

import React, { useState, ChangeEvent, useId } from 'react';
import CustomButton from './CustomButton';

const TextComponent = () => {

  const id = useId()

  const [formData, setFormData] = useState({email: '', message: ''});


  //*For Onchange property 
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };


  //*For Submitting the form

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 sm:w-1/2 w-full max-md:mt-10 text-sm'>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-email'}>Your Email</label>
                <input
                  id={id + '-email'}
                  type='email'
                  className='text-primary_black py-2 px-3 rounded'
                  onChange={handleChange}
                  name='email-text'
                  value={formData.email}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-message'}>Message</label>
                <textarea
                  name='message'
                  id={id + '-message'}
                  value={formData.message}
                  onChange={handleChange}
                  className='resize-none text-primary_black py-2 px-3 rounded text-sm h-32'
                />
              </div>

              <CustomButton
                  title='Submit'
                  containerStyles='bg-secondary_purple p-2 rounded hover:bg-primary_purple 
                  active:bg-secondary_purple'
              />
    </form>
  );
};

export default TextComponent;


