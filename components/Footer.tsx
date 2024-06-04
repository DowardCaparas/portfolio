import { navlinks, socials } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='contact' className='container__padding py-16'>
      <div className='flex max-md:flex-col justify-between items-start gap-y-10'>
        <div className='flex flex-col justify-start items-start gap-6 md:w-1/3'>
          <h2 className='font-bold text-xl'>Dwr.<span className='text-primary_yellow'>Dev</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea
            magni explicabo officiis iste laudantium facere ullam quibusdam, quo
            autem eius, nostrum
          </p>
        </div>

        <div className='flex flex-col justify-start items-start gap-2'>
          {navlinks.map((link, index) => (
            <div key={index}>
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>

        <div className='flex flex-col justify-start items-start gap-2'>
          <h3>Connect with me</h3>
          <div className='flex gap-2'>
            {socials.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.icon}
                  alt='socal media icon'
                  height={20}
                  width={20}
                  className='object-contain bg-white rounded-md w-full p-1 cursor-pointer hover:bg-slate-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full border-t border-gray-500 mt-20 grid'>
         <p className='place-self-center mt-10'>&copy; 2024 Dounhuward Caparas All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
