'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { HeroBg } from '@/public/images';
import Link from 'next/link';
import PageWrapper from '@/app/PageWrapper';

const Hero = () => {
  return (
    <PageWrapper>
      <section className='w-full container__padding flex max-lg:flex-wrap 
      gap-10 justify-between items-start'
      >
        <div
          className='flex flex-col justify-start items-start gap-4 md:w-2/3 mt-8
        text-theme-dark
      '
        >
          <p className='text-lg font-semibold'>Hello I&apos;m</p>
          <h3 className='text-xl text-light_purple'>Dounhuward B. Caparas</h3>
          <h1 className='lg:text-6xl text-4xl font-semibold'>
            Frontend Web Developer
          </h1>
          <p>
            I&apos;m dedicated to crafting innovative solutions through coding
            and design. Let&apos;s create something extraordinary together!
          </p>

          <Link href='/myservices' className='mt-5'>
            <CustomButton
              title='Services'
              containerStyles='bg-secondary_purple hover:bg-primary_purple
              active:bg-primary_yellow'
              textStyles='text-white text-md font-bold'
            />
          </Link>
        </div>

        <div className='w-auto h-auto  flex justify-end items-end max-sm:mt-8'>
          <Image
            src={HeroBg}
            alt='Doward Caparas'
            height={502}
            width={610}
            quality={100}
            className='object-contain sm:max-lg:w-3/4'
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Hero;
