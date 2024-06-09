import Image from 'next/image'
import CustomButton from './CustomButton'
import { HeroBg } from '@/public/images'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full container__padding flex max-lg:flex-wrap 
    gap-10 justify-between items-start'>
     
      <div className='flex flex-col justify-start items-start gap-4 md:w-2/3 mt-8'>

          <p className='dark:text-blue-800'>Hello I&apos;m</p>
          <h3 className='text-xl text-light_purple'>Dounhuward B. Caparas</h3>
          <h1 className='lg:text-6xl text-4xl font-semibold'>Frontend Web Developer</h1>
          <p>I&apos;m dedicated to crafting innovative solutions through coding and design.
          Let&apos;s create something extraordinary together!
          </p>

          <Link href='#services' className='mt-5'>
            <CustomButton 
              title='Services'
              containerStyles='bg-primary_yellow hover:bg-secondary_yellow 
              active:bg-primary_yellow' 
              textStyles='text-primary_black text-sm'  
            />
          </Link>
    
      </div>

      <div className='w-full  flex justify-end items-end'>
          <Image 
            src={HeroBg}
            alt='Doward Caparas'
            height={502}
            width={610}
            quality={100}
            className='object-contain sm:max-lg:w-3/4'
          />
      </div>

    </div>
  )
}

export default Hero