import { skills } from '@/constants';

const Skills = () => {
  return (
    <>
      <h2 className='text-xl w-full border-b border-gray-500 font-bold'>Skills</h2>

      {skills.map((item, index) => (
        <div key={index} className='flex flex-col justify-start items-start mt-14'>

            <h3 className='mb-4'>{item.title}</h3>

          <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4'>
            {item.lists.map((item, index) => (
              <div
                key={index}
                className=' flex flex-col justify-center items-center px-6 py-2 gap-2 
                border border-gray-500 rounded'
              >
    
                <p className='text-sm text-theme-dark'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
