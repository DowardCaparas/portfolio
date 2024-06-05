import { ProjectCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { arrowup } from '@/public';

interface ProjectList {
  projects: ProjectCardProps[];
}

const ProjectCard = ({ projects }: ProjectList) => {
  return (
    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-4 mb-28'>
      {projects.map((item, index) => (
        <div
          key={index}
          className='bg-slate-200 flex flex-col justify-center items-center 
                 rounded-tl-md rounded-tr-md gap-6'
        >
          <Image
            src={item.image}
            alt={item.name}
            height={500}
            width={500}
            className='object-contain w-full rounded-tl-md rounded-tr-md'
          />

          {/*Details*/}

          <div className='p-3 gap-4 flex flex-col'>
            <div className='text-primary_black max-lg:text-sm'>
              <h3 className=' font-medium'>{item.name}</h3>
              <p className='text-slate-800 max-lg:text-[12px]'>{item.description}</p>
            </div>

            <div className='bg-gray-300 hover:bg-primary_gray active:bg-gray-300 p-2 rounded'>
              <Link
                href={item.url}
                className='flex justify-center items-center gap-2'
              >
                <p className='text-primary_black'>Live Demo</p>
                <Image
                  src={arrowup}
                  alt='arrow'
                  height={20}
                  width={20}
                  className='object-contain'
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
