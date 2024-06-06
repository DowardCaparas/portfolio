import { skills } from '@/constants';
import Image from 'next/image';

const Skills = () => {
  return (
    <>
      <h2 className='text-xl w-full border-b border-gray-500'>Skills</h2>

      {skills.map((item, index) => (
        <div key={index} className='flex flex-col justify-center items-center mt-14'>
          <div className='mb-5'>
            <h3>{item.title}</h3>
          </div>

          <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4'>
            {item.lists.map((item, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-center p-2 gap-2 bg-primary_gray rounded'
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  height={50}
                  width={50}
                  className='object-contain rounded'
                />
                <p className='text-sm text-primary_black'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
