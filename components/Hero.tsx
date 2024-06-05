import Image from 'next/image'
import CustomButton from './CustomButton'
import { HeroBg } from '@/public/images'

const Hero = () => {
  return (
    <div className='w-full container__padding flex max-md:flex-wrap 
    gap-6 justify-between items-center'>
     
      <div className='flex flex-col justify-start items-start gap-4 md:w-1/2'>

          <p className='text-primary_yellow'>Hello I&apos;m</p>
          <h3 className='text-xl text-light_purple'>Dounhuward B. Caparas</h3>
          <h1 className='md:text-6xl text-4xl font-semibold'>Frontend Web Developer</h1>
          <p>I&apos;m dedicated to crafting innovative solutions through coding and design.
          Let&apos;s create something extraordinary together!
          </p>

          <div className='mt-10'>
            <CustomButton 
              title='Hire Me'
              containerStyles='bg-primary_yellow px-5 py-2 rounded-md hover:bg-secondary_yellow' 
              textStyles='text-black'  
            />
          </div>
    
      </div>

      <div className='w-full md:w-1/2 flex justify-end items-end hero-image-container'>
          <Image 
            src={HeroBg}
            alt='Doward Caparas'
            height={502}
            width={610}
            quality={100}
            className='object-contain'
          />
      </div>

    </div>
  )
}

export default Hero