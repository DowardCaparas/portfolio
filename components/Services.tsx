import Image from 'next/image'
import Title from './Title'
import { myServices } from '@/constants'

const Services = () => {
  return (
    <div id='services' className='w-full container__padding'>

         <Title label='Services'/>
         <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 md:gap-8'>

            {myServices.map(item => (
                <div 
                    key={item.title} 
                    className='bg-primary_gray rounded px-5 py-10 flex 
                    flex-col justify-center items-center gap-4 shadow-lg'>

                    <div className='bg-gray-300 p-2 rounded-full'>
                        <Image
                            src={item.icon}
                            alt={item.title}
                            height={35}
                            width={35}
                        />
                    </div>

                    <h3 className='text-lg text-primary_black font-bold'>{item.title}</h3>
                    <p className='text-justify-center'>{item.paragraph}</p>      

                </div>
            ))}

         </div>
    </div>
  )
}

export default Services