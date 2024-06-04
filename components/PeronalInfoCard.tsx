import { PeronalInfoCardProps } from '@/types';
import React from 'react';
import Image from 'next/image';

interface InfoCard {
  info: PeronalInfoCardProps[];
}

const PeronalInfoCard = ({ info }: InfoCard) => {
  return (
      <div className='grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-4 w-full md:w-2/4'>
        {info.map((item, index) => (
          <div
            key={index}
            className='bg-slate-300 rounded w-full text-primary_black p-3'
          >
            <h3>{item.title}</h3>
            <p className='text-[12px] md:ext-sm'>{item.label}</p>
          </div>
        ))}
      </div>
  );
};

export default PeronalInfoCard;
