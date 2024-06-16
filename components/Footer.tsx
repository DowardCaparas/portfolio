import { socials } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='container__padding mb-10 text-theme-dark'>
      <div className='flex max-md:flex-col justify-between items-start gap-y-10'>
        <div className='flex flex-col justify-start items-start gap-6 md:w-1/3'>
          <Link href='/' className='font-bold text-xl ' aria-label='Home'>
            Dwr.<span className='text-secondary_purple'>Dev</span>
          </Link>

          <p>
            Empowering creativity and innovation, one line of code at a time.
            Let&apos;s build the future together.
          </p>
        </div>

        <div className='flex flex-col justify-start items-start gap-2'>
          <h3>Connect with me</h3>
          <div className='flex gap-2'>
            {socials.map((item, index) => (
              <div key={index}>
                <Link href={item.url}>
                  <Image
                    src={item.icon}
                    alt='socal media icon'
                    height={20}
                    width={20}
                    className='object-contain bg-primary_gray rounded-md w-full p-1 cursor-pointer hover:bg-slate-300'
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full border_top mt-20 flex flex-col justify-center items-center text-justify-center'>
        <p className='mt-5'>Copyright &copy; 2024 Dounhuward Caparas</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
