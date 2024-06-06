import Link from 'next/link';
import Image from 'next/image';
import TextComponent from './TextComponent';
import { envelope } from '@/public';

const Contact = () => {
  return (
    <div id='contact' className='w-full container__padding'>
      <div className='flex flex-col justify-center items-center gap-2 mb-10'>
        <h2 className='text-2xl font-medium'>Contact me</h2>
        <div className='border-r h-5 border-primary_blue'></div>
        <p>
        We&apos;d love to hear from you! Whether you have a question, feedback, 
        or just want to say hello, feel free to reach me out.
        </p>
      </div>

      {/*container */}
      <div className='flex max-md:flex-col justify-between items-start gap-6'>
        {/*Left Side Column 1 */}
        <div className='flex flex-col justify-start items-start gap-6'>
          <div className='flex flex-col justify-start items-start gap-1'>

            <h3 className='mb-2'>Have a Question?</h3>

            <p>I am here to help you</p>
              <Link 
                href='mailto:caparasdounhuward@gmail.com' 
                className='flex gap-2 items-center'
                aria-label='Email'
              >
                
                <Image
                  src={envelope}
                  alt='envelope'
                  height={25}
                  width={25}
                  className='object-contain bg-white rounded'
                />
                <p className='text-primary_purple'>Send me an email</p>
              </Link>
          </div>

          <div className='flex flex-col justify-start items-start'>
            <h3 className='mb-2'>Current Location</h3>
            <p>Naic, Cavite</p>
          </div>
        </div>

        {/*Right Side Column 2 */}
        <TextComponent />

      </div>
    </div>
  );
};

export default Contact;
