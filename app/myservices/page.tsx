import { Title } from '@/components';
import { myServices } from '@/constants';
import Image from 'next/image';
import PageWrapper from '../PageWrapper';

const Services = () => {
  return (
    <PageWrapper>
      <section className='w-full'>
        <Title label='Services' />
        
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row 
        gap-4 md:gap-8 container__padding'>

          {myServices.map((item) => (
            <div
              key={item.title}
              className='dark:bg-transparent bg-primary_gray rounded px-5 py-10 flex 
                    flex-col justify-center items-center gap-4 shadow-sm shadow-light_gray'
            >
              <div className='bg-gray-300 p-2 rounded-full'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={35}
                  width={35}
                />
              </div>

              <h3 className='text-lg font-bold'>
                {item.title}
              </h3>
              <p className='text-justify-center'>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Services;
