import { PeronalInfoCardProps } from '@/types';
import React from 'react';

interface InfoCard {
  info: PeronalInfoCardProps[];
}

const PeronalInfoCard = ({ info }: InfoCard) => {
  return (
      <div className='grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-4 w-full md:w-2/4'>
        {info.map((item, index) => (
          <div
            key={index}
            className='dark:bg-transparent bg-primary_gray rounded w-full p-3 shadow-sm dark:shadow-light_gray'
          >
            <h3>{item.title}</h3>
            <p className='text-[14px] md:text-sm'>{item.label}</p>
          </div>
        ))}
      </div>
  );
};

export default PeronalInfoCard;
