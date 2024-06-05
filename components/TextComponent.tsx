'use client';

import React, { useState, ChangeEvent } from 'react';

const TextComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className='flex flex-col gap-6 sm:w-1/2 w-full'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          placeholder='example@gmail.com'
          className='text-primary_black py-2 px-3 rounded'
          onChange={handleEmailChange}
          name='email-text'
          value={email}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message-text'
          id='message'
          value={message}
          onChange={handleMessageChange}
          placeholder='type your message'
          className='resize-none text-primary_black py-2 px-3 h-full rounded text-sm'
        />
      </div>
    </div>
  );
};

export default TextComponent;


