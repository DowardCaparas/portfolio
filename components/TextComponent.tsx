'use client';

import React, { useState, ChangeEvent, useId } from 'react';
import CustomButton from './CustomButton';

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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
  
      const response = await fetch('/actions/sendEmail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              senderEmail: formData.get('senderEmail'),
              message: formData.get('message'),
          }),
      });
  
      const result = await response.json();
  
      if (result.success) {
          // Handle success (e.g., show a success message)
      } else {
          // Handle error (e.g., show an error message)
      }
  };
  

  return (
    <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 sm:w-1/2 w-full max-md:mt-10 text-sm'>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-email'}>Your Email</label>
                <input
                  id={id + '-email'}
                  type='email'
                  className='text-primary_black py-2 px-3 rounded border-2 border-gray-300'
                  onChange={handleChange}
                  name='senderEmail'
                  value={formData.senderEmail}
                  required
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
                  required
                />
              </div>

              <CustomButton 
              title='Send'
              containerStyles='bg-secondary_purple hover:bg-primary_purple 
              active:bg-secondary_purple sm:w-1/2' 
              textStyles='text-white text-md font-bold'  
            />
             
    </form>
  );
};

export default TextComponent;


