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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 sm:w-1/2 w-full max-md:mt-10 text-sm'>
              <div className='flex flex-col gap-2'>
                <label htmlFor={id + '-email'}>Your Email</label>
                <input
                  id={id + '-email'}
                  type='email'
                  className='text-primary_black py-2 px-3 rounded border-2 border-gray-300'
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
                  className='resize-none text-primary_black py-2 px-3 rounded text-sm h-32 border-2 border-gray-300'
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


