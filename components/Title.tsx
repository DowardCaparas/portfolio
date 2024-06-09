import React from 'react'

interface TitleProps {
    label: string;
}

const Title = ({label}: TitleProps) => {
  return (
        <div className='flex flex-col justify-center items-center gap-2 mb-10'>
          <h2 className='text-2xl md:text-4xl font-bold'>{label}</h2>
          <div className='border-r h-5 border-primary_blue'></div>
        </div>
  )
}

export default Title