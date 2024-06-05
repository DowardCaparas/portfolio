import Image from 'next/image'
import PeronalInfoCard from './PeronalInfoCard'
import { personalInfo, skills } from '@/constants'
import Skills from './Skills'

const About = () => {
  return (
    <div id='about' className='w-full container__padding'>

      <div className='flex flex-col justify-center items-center gap-2 mb-10'>
          <h2 className='text-2xl font-medium'>About me</h2>
          <div className='border-r h-5 border-primary_blue'></div>
      </div>

        <div className='flex max-md:flex-col justify-between items-start gap-6'>
          
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl w-full border-b border-gray-500'>Education</h2>

                <div>
                  <h3>Senior High School</h3>
                    <p>Informtaion anc Communications Technology Major in Programming</p>
                    <p>Granby Colleges of Science and Technology Inc. (Ibayo Silangan, Naic, Cavite)</p>
                    <p>(2017 - 2019)</p>
                </div>
                
                <div>
                  <h3>College</h3>
                    <p>Bachelor of Science in Information Technology</p>
                    <p>Cavite State University (Bucana, Naic, Cavite)</p>
                    <p>(2019 - 2024)</p>
              </div>

            </div>
              <PeronalInfoCard info={personalInfo}/>
           </div>

           <div className='my-10'>
              <Skills /> 
           </div>
           
    </div>
  )
}

export default About